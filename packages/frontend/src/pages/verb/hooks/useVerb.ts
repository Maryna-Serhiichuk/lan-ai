import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useVerbsListQuery } from "../../../graphql";
import { FormikConfig  } from 'formik';
import { useVerbLocalStorage } from "./useVerbLocalStorage";

export type UseVerbsArgs = {}

type VerbsValues<T> = {
    first: T
    second: T
    third: T
}

export type IUseVerb = {
    chosenWord: VerbEntity
    checkWord: FormikConfig<VerbsValues<string>>['onSubmit']
    result: VerbsValues<boolean>
    onReturn: () => void
}

export const useVerb = (): IUseVerb => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { useLocalStorage, saveChanges } = useVerbLocalStorage()
    const { data } = useVerbsListQuery({ variables: { id: id ?? '' } })
    const [chosenWord, setChosenWord] = useState<VerbEntity>()
    const [result, setResult] = useState<IUseVerb['result']>()

    const setWord = () => {
        const words = data?.verbsList?.data?.attributes?.verbs?.data ?? []
        const chooseNum = Math.floor(Math.random() * words?.length)
        setChosenWord(words[chooseNum])
    }

    useEffect(() => {
        setWord()
    }, [data])

    const point = {
        increment () { this._changePointState(1) },
        decrement () { this._changePointState(-1) },
        _changePointState(delta: number) {
            useLocalStorage({ id: chosenWord?.id, point: delta })
        },
    }

    const checkWord: IUseVerb['checkWord'] = (values, onSubmitProps) => {
        const firstField = document.querySelector<HTMLInputElement>(`input[name="first"]`);
        const secondField = document.querySelector<HTMLInputElement>(`input[name="second"]`);
        const thirdField = document.querySelector<HTMLInputElement>(`input[name="third"]`);
        firstField?.blur()
        secondField?.blur()
        thirdField?.blur()

        const first = chosenWord?.attributes?.first === values?.first
        const second = chosenWord?.attributes?.second === values?.second
        const third = chosenWord?.attributes?.third === values?.third
        setResult({ first, second, third })

        if(first && second && third) {
            point?.increment()
        } else {
            point?.decrement()
        }

        setTimeout(() => {
            onSubmitProps.resetForm()
            setResult(undefined)
            setWord()
            firstField?.focus();
        }, 2000)
    }

    const onReturn: IUseVerb['onReturn'] = () => {
        saveChanges()
        navigate(-1)
    }

    return {
        chosenWord,
        checkWord,
        result,
        onReturn
    }
}