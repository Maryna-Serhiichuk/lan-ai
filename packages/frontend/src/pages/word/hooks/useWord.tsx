import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useListQuery } from "../../../graphql";
import { FormikConfig  } from 'formik';
import { ButtonOwnProps } from "@mui/material";
import { useWordsPoint } from "pages/list/hooks/useWordsPoint";

export type UseWordArgs = {}

export type IUseWord = {
    chosenWord?: Maybe<IWord>
    checkWord: FormikConfig<{ word: string }>['onSubmit']
    errorWord?: Maybe<string>
    result?: ButtonOwnProps['color']
    wordPoints: (WordPointsObject & { word?: string })[]
    openModal: boolean
    setOpenModal: Dispatch<SetStateAction<boolean>>
    studyModal: boolean
    setStudyModal: Dispatch<SetStateAction<boolean>>
    studyWord: Maybe<string>
}

export type IWord = {
    id: Maybe<string>, 
    word: Maybe<string>,
    translation: Maybe<string>,
}

export const useWord = (): IUseWord => {
    const navigate = useNavigate()
    const { id, mode } = useParams()
    const { data } = useListQuery({ variables: { id: id ?? '' } })
    const { saveLocalStorage } = useWordsPoint()

    const [chosenWord, setChosenWord] = useState<IWord>()
    const [wordsState, setWordsState] = useState<Maybe<WordEntity[]>>([])
    const [error, setError] = useState<IUseWord['errorWord']>()
    const [result, setResult] = useState<IUseWord['result']>()
    const [indexWord, setIndexWord] = useState<number>(0)
    const [useNewWord, setIsuseNewWord] = useState(true)
    const [studyWordIndex, setStudyWordIndex] = useState(2)
    const [wordPoints, setWordPoints] = useState<WordPointsObject[]>([])

    const [openModal, setOpenModal] = useState<IUseWord['openModal']>(false)
    const [studyModal, setStudyModal] = useState<IUseWord['studyModal']>(false)

    useEffect(() => {
        setWordsState(data?.list?.data?.attributes?.words?.data?.filter(it => it?.attributes?.active) ?? [])
    }, [data])

    useEffect(() => {
        setWord()
        createPointsObject()
    }, [wordsState])

    const point = {
        increment () { this._changePointState(1) },
        decrement () { this._changePointState(-1) },
        _changePointState(delta: number) {
            if(chosenWord?.id) {
                setWordPoints(wordPoints?.map(item => item?.id !== chosenWord?.id ? item : ({
                    ...item,
                    point: (item?.point ?? 0) + delta
                })))
                saveLocalStorage(wordPoints)
            }
        },
    }

    const createPointsObject = () => {
        const object: WordPointsObject[] = wordsState?.map(word => ({ id: word?.id, point: 0 })) ?? []
        setWordPoints(object)
    }

    const checkWord: IUseWord['checkWord'] = async (data, onSubmitProps) => {
        if(data?.word === chosenWord?.word) {
            await successAnswer()
        } else {
            await setRightAnswer()
        }
        setResult('primary')
        onSubmitProps.resetForm()
    }

    const successAnswer = (): Promise<void> => {
        return new Promise<void>((resolve) => {
            point.increment()
            setResult('success')
            setTimeout(() => {
                setWord()
                resolve()
            }, 500)
        })
    }

    const setRightAnswer = (): Promise<void> => {
        return new Promise<void>((resolve) => {
            point.decrement()
            setResult('error')
            setError(chosenWord?.word)
            setTimeout(() => {
                setError(undefined)
                setWord()
                resolve()
            }, 1000)
        })
    }

    const setWord = () => {
        if(wordsState && wordsState?.length){
            const index = findWordIndex()

            if(typeof index !== 'number') return
            
            const chosen = wordsState[index]
            if(!chosen) {
                setOpenModal(true)
                return
            }
            wordFormater(chosen)
        }
    }

    useEffect(() => {
        wordsState && wordsState[studyWordIndex] && setStudyModalInfo()
    }, [studyWordIndex])

    const findWordIndex = (): number | null => {
        if(wordsState && wordsState?.length){
            if(mode === 'study') {
                if(indexWord < studyWordIndex){
                    if(useNewWord){
                        setIsuseNewWord(false)
                        return studyWordIndex
                    } else {
                        setIsuseNewWord(true)
                        setIndexWord(indexWord + 1)
                        return indexWord
                    }
                } else {
                    setIsuseNewWord(false)
                    setStudyWordIndex(studyWordIndex + 1)
                    setIndexWord(0)
                    return studyWordIndex + 1
                }
            }
    
            return Math.floor(Math.random() * wordsState?.length)
        }
        return null
    }

    const setStudyModalInfo = () => {
        setStudyModal(true)
        setTimeout(() => {
            setStudyModal(false)
        }, 2000)
    }

    const wordFormater = (value: WordEntity): void => {
        setChosenWord({ 
            id: value?.id, 
            translation: value?.attributes?.translation,
            word: value?.attributes?.word
        })
    }

    const wordsPointsForModal: IUseWord['wordPoints'] = wordPoints?.map(item => ({
        ...item,
        word: wordsState?.find(it => it?.id === item?.id)?.attributes?.word
    })) as IUseWord['wordPoints']

    const informText = () => {
        const studyItem = wordsState?.find((_, i) => i === studyWordIndex ?? undefined)
        return studyItem?.attributes?.word + ' - ' + studyItem?.attributes?.translation
    }

    return {
        chosenWord,
        checkWord,
        errorWord: error,
        result,
        wordPoints: wordsPointsForModal,
        openModal,
        setOpenModal,
        studyModal,
        setStudyModal,
        studyWord: informText()
    }
}