import { useChangeWordsPointMutation } from "./../../../graphql"

const wordsPointLSname = "wordsPoint"

export type IWordsPoint = {
    saveWordsPoint: () => void
    saveLocalStorage: (words: WordPointsObject[]) => void
}

export const useWordsPoint = () => {
    const [changeWordsPoint] = useChangeWordsPointMutation()

    const saveWordsPoint: IWordsPoint['saveWordsPoint'] = async () => {
        const wordsPointString = localStorage.getItem(wordsPointLSname)

        if(wordsPointString) {
            const wordsPoint = JSON.parse(wordsPointString)

            try {
                await changeWordsPoint({ variables: { input: wordsPoint } })

                deleteLocalStorage()
            } catch (err: any) {
                console.log(err?.message)
            }
        }
    }

    const saveLocalStorage: IWordsPoint['saveLocalStorage'] = (words) => {
        save(words)
    }

    const save = (value: WordPointsObject[]) => {
        localStorage.setItem(wordsPointLSname, JSON.stringify(value))
    }

    const deleteLocalStorage = () => {
        localStorage.removeItem(wordsPointLSname)
    }

    return {
        saveWordsPoint,
        saveLocalStorage,
    }
}