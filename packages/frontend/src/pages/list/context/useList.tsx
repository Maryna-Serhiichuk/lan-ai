import { useParams } from "react-router-dom"
import { useListQuery, useUpdateListMutation } from "./../../../graphql";
import { Dispatch, SetStateAction, useState } from "react";
import { FormikConfig } from 'formik';

export type UseListArgs = {}

export type IUseList = {
    data?: Maybe<Partial<ListEntity>>
    loading: boolean
    refetch?: () => void
    chosenWord?: Maybe<WordEntity>
    setChosenWord: Dispatch<SetStateAction<Maybe<WordEntity>>>
    isDeleteWord: boolean
    setDeleteWord: Dispatch<SetStateAction<boolean>>
    isUpdateWord: boolean
    setUpdateWord: Dispatch<SetStateAction<boolean>>
    updateData: FormikConfig<ListInput>['onSubmit']
}

export const useList = (): IUseList => {
    const { id } = useParams()
    const { data, refetch, loading } = useListQuery({ variables: { id: id ?? '' } })
    const [chosenWord, setChosenWord] = useState<IUseList['chosenWord']>()
    const [isUpdateWord, setUpdateWord] = useState(false)
    const [isDeleteWord, setDeleteWord] = useState(false)

    const dataUpdate = () => refetch()

    const [updateList, { loading: updateLoading }] = useUpdateListMutation()

    const update: IUseList['updateData'] = async (input, onSubmitProps) => {
        const attributes = data?.list?.data?.attributes
        
        if(!id || input?.name === attributes?.name || input?.closed === attributes?.closed) return
        try {
            await updateList({ variables: { id, data: input } })
        } catch (err) {
            console.log(err)
        }
    }

    return {
        data: data?.list?.data,
        loading: loading || updateLoading,
        refetch: dataUpdate,
        chosenWord,
        setChosenWord,
        isDeleteWord,
        setDeleteWord,
        isUpdateWord,
        setUpdateWord,
        updateData: update
    }
}