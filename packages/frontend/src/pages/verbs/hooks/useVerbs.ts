import { useUpdateVerbMutation, useCreateVerbMutation, useVerbsListsLazyQuery } from "./../../../graphql";
import { Dispatch, SetStateAction, useState } from "react";
import { FormikConfig } from 'formik';
import { useLocation } from "react-router-dom";

export type UseVerbsArgs = {
    id: Maybe<Scalars['ID']['output']>
}

export type IUseVerbs = {
    chosen?: Maybe<VerbEntity>
    setChosen: Dispatch<SetStateAction<Maybe<VerbEntity>>>
    // isDeleteWord: boolean
    // setDeleteWord: Dispatch<SetStateAction<boolean>>
    isEditState: boolean
    setEditState: Dispatch<SetStateAction<boolean>>
    isCreateState: boolean
    setCreateState: Dispatch<SetStateAction<boolean>>

    onUpdateVerb: FormikConfig<VerbInput>['onSubmit']
    onCreateVerb: FormikConfig<VerbInput>['onSubmit']
}

export const useVerbs = (): IUseVerbs => {
    const { hash } = useLocation(); 
    const [isCreateState, setCreateState] = useState(false)
    const [isEditState, setEditState] = useState(false)
    const [chosen, setChosen] = useState<VerbEntity>()
    const [updateVerb] = useUpdateVerbMutation()
    const [createWord] = useCreateVerbMutation()
    const [_, { refetch }] = useVerbsListsLazyQuery()

    const onUpdateVerb: IUseVerbs['onUpdateVerb'] = async (data, onSubmitProps) => {
        try {
            const result = await updateVerb({ variables: { data, id: chosen?.id } })
            setEditState(false)
        } catch (err: any) {
            const error = err as ResolverError
            onSubmitProps.setFieldError('word', error?.message ?? '')
        } 
    }

    const onCreateVerb: IUseVerbs['onCreateVerb'] = async (data, onSubmitProps) => {
        try {
            const result = await createWord({ variables: { data: { ...data, verbs_list: hash?.replace('#', '') } } })
            refetch && await refetch()
            setCreateState(false)
            
        } catch (err: any) {
            const error = err as ResolverError
            onSubmitProps.setFieldError('word', error?.message ?? '')
        } 
      }

    return {
        chosen,
        setChosen,
        isEditState,
        setEditState,
        isCreateState,
        setCreateState,
        onUpdateVerb,
        onCreateVerb,
    }
}