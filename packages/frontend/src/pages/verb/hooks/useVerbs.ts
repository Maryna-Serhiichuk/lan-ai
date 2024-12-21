import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useVerbsListQuery } from "../../../graphql";
import { FormikConfig  } from 'formik';
import { ButtonOwnProps } from "@mui/material";

export type UseVerbsArgs = {}

type VerbsValues<T> = {
    first: T
    second: T
    third: T
}

export type IUseVerbs = {
    chosenWord: VerbEntity
    checkWord: FormikConfig<VerbsValues<string>>['onSubmit']
    result: VerbsValues<boolean>
    onReturn: () => void
}

export const useVerbs = (): IUseVerbs => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { data, error } = useVerbsListQuery({ variables: { id: id ?? '' } })
    const [chosenWord, setChosenWord] = useState<VerbEntity>()
    const [result, setResult] = useState<IUseVerbs['result']>()

    const setWord = () => {
        const words = data?.verbsList?.data?.attributes?.verbs?.data ?? []
        const chooseNum = Math.floor(Math.random() * words?.length)
        setChosenWord(words[chooseNum])
    }

    useEffect(() => {
        setWord()
    }, [data])

    const checkWord: IUseVerbs['checkWord'] = (values, onSubmitProps) => {
        const first = chosenWord?.attributes?.first === values?.first
        const second = chosenWord?.attributes?.second === values?.second
        const third = chosenWord?.attributes?.third === values?.third
        setResult({ first, second, third })
        setTimeout(() => {
            onSubmitProps.resetForm()
            setResult(undefined)
            setWord()
            const firstField = document.querySelector<HTMLInputElement>(`input[name="first"]`);
            firstField?.focus();
        }, 2000)
    }

    const onReturn: IUseVerbs['onReturn'] = () => {
        navigate(-1)
    }

    return {
        chosenWord,
        checkWord,
        result,
        onReturn
    }
}