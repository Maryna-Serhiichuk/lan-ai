import { createContext, FC, PropsWithChildren, useContext, type ReactElement } from 'react'
import { IUseWord } from './../hooks/useWord';

type WordValue = IUseWord

export const WordContext = createContext<WordValue>({} as WordValue)

export interface WordProviderProps extends WordValue {
    children: ReactElement | ReactElement[]
}

export const WordProvider: FC<PropsWithChildren<IUseWord>> = ({ children , ...context }) => {
    return (
        <WordContext.Provider value={context}>
            {children}
        </WordContext.Provider>
    )
}

export const useWordContext = () => {
    return useContext<WordValue>(WordContext);
}