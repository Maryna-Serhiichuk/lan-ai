import { useChangeVerbsPointMutation } from "../../../graphql";

export type UseVerbLocalStorageArgs = {}

export type IUseVerbLocalStorage = {
    useLocalStorage: (values: { id: string, point: number }) => void
    clearLocalStorage: () => void
    saveChanges: () => Promise<void>
}

const verbsPointLSname = "verbsPoint"

export const useVerbLocalStorage = (): IUseVerbLocalStorage => {
    const [changeVerbsPoints] = useChangeVerbsPointMutation()

    const saveChanges: IUseVerbLocalStorage['saveChanges'] = async () => {
        const verbsPointString = localStorage.getItem(verbsPointLSname)
    
        if(verbsPointString) {
            const verbsPoint = JSON.parse(verbsPointString)
    
            try {
                await changeVerbsPoints({ variables: { input: verbsPoint } })
    
                clearLocalStorage()
            } catch (err: any) {
                console.log(err?.message)
            }
        }
    }

    const useLocalStorage: IUseVerbLocalStorage['useLocalStorage'] = ({ id, point }) => {
        if(!id) return
        
        const verbsPointString = localStorage.getItem(verbsPointLSname)

        let verbsResult

        if(verbsPointString) {
            const verbsPoint = JSON.parse(verbsPointString)

            const exists = verbsPoint.some(item => item?.id === id)
            if(exists) {
                verbsResult = verbsPoint?.map(verb => verb?.id !== id ? verb : { id: verb?.id, point: verb?.point + point })
            } else {
                verbsResult = verbsPoint?.concat({ id, point })
            }
        } else {
            verbsResult = [{ id, point }]
        }

        localStorage.setItem(verbsPointLSname, JSON.stringify(verbsResult))
    }

    const clearLocalStorage: IUseVerbLocalStorage['clearLocalStorage'] = () => {
        localStorage.removeItem(verbsPointLSname)
    }

    return {
        useLocalStorage,
        clearLocalStorage,
        saveChanges,
    }
}