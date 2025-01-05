import { useUpdateVerbMutation, useCreateVerbMutation, useVerbsListsLazyQuery, useDeleteVerbMutation } from "./../../../graphql";
import { Dispatch, SetStateAction, useState } from "react";
import { FormikConfig } from 'formik';
import { useLocation } from "react-router-dom";

export type UseVerbsArgs = {
    id: Maybe<Scalars['ID']['output']>
}

export type IUseVerbs = {
    chosen?: Maybe<VerbEntity>
    setChosen: Dispatch<SetStateAction<Maybe<VerbEntity>>>
    isDeleteState: boolean
    setDeleteState: Dispatch<SetStateAction<boolean>>
    isEditState: boolean
    setEditState: Dispatch<SetStateAction<boolean>>
    isCreateState: boolean
    setCreateState: Dispatch<SetStateAction<boolean>>

    onUpdateVerb: FormikConfig<VerbInput>['onSubmit']
    onCreateVerb: FormikConfig<VerbInput>['onSubmit']
    onDeleteVerb: () => void
}

export const useVerbs = (): IUseVerbs => {
    const { hash } = useLocation();
    const [isDeleteState, setDeleteState] = useState(false)
    const [isCreateState, setCreateState] = useState(false)
    const [isEditState, setEditState] = useState(false)
    const [chosen, setChosen] = useState<VerbEntity>()
    const [updateVerb] = useUpdateVerbMutation()
    const [createVerb] = useCreateVerbMutation()
    const [deleteVerb] = useDeleteVerbMutation()
    const [_, { refetch }] = useVerbsListsLazyQuery()

    const onDeleteVerb: IUseVerbs['onDeleteVerb'] = async () => {
        try {
            const result = await deleteVerb({ variables: { id: chosen?.id } })
            setEditState(false)
        } catch (err: any) {
            const error = err as ResolverError
        } 
    }

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
            const result = await createVerb({ variables: { data: { ...data, verbs_list: hash?.replace('#', '') } } })
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
        isDeleteState,
        setDeleteState,
        onUpdateVerb,
        onCreateVerb,
        onDeleteVerb,
    }
}