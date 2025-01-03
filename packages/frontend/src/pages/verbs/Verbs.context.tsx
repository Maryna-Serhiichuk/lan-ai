import { createContext, FC, PropsWithChildren, useContext, type ReactElement } from 'react'
import { IUseVerbs, UseVerbsArgs } from './hooks/useVerbs';

type VerbsValue = IUseVerbs

export const VerbsContext = createContext<VerbsValue>({} as IUseVerbs)

export interface VerbsProviderProps extends VerbsValue {
    children: ReactElement | ReactElement[]
}

export const VerbsProvider: FC<PropsWithChildren<IUseVerbs>> = ({ children , ...context }) => {
    return (
        <VerbsContext.Provider value={context}>
            {children}
        </VerbsContext.Provider>
    )
}

export const useVerbsContext = () => {
    return useContext<VerbsValue>(VerbsContext);
}