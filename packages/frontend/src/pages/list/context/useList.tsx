import { useParams } from "react-router-dom"
import { useListQuery } from "./../../../graphql";
import { Dispatch, SetStateAction, useState } from "react";

export type UseListArgs = {}

export type IUseList = {
    data?: Maybe<Partial<ListEntity>>
    refetch?: () => void
    title: List['name']
    chosenWord?: Maybe<WordEntity>
    setChosenWord: Dispatch<SetStateAction<Maybe<WordEntity>>>
    isDeleteWord: boolean
    setDeleteWord: Dispatch<SetStateAction<boolean>>
    isUpdateWord: boolean
    setUpdateWord: Dispatch<SetStateAction<boolean>>
}

export const useList = (): IUseList => {
    const { id } = useParams()
    const { data, refetch } = useListQuery({ variables: { id: id ?? '' } })
    const [chosenWord, setChosenWord] = useState<IUseList['chosenWord']>()
    const [isUpdateWord, setUpdateWord] = useState(false)
    const [isDeleteWord, setDeleteWord] = useState(false)

    const dataUpdate = () => refetch()

    return {
        data: data?.list?.data,
        refetch: dataUpdate,
        title: data?.list?.data?.attributes?.name,
        chosenWord,
        setChosenWord,
        isDeleteWord,
        setDeleteWord,
        isUpdateWord,
        setUpdateWord,
    }
}