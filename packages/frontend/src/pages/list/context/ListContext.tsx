import { createContext, FC, PropsWithChildren, useContext, type ReactElement } from 'react'
import { IUseList, UseListArgs } from './useList';

type ListValue = IUseList

export const ListContext = createContext<ListValue>({} as IUseList)

export interface ListProviderProps extends ListValue {
    children: ReactElement | ReactElement[]
}

export const ListProvider: FC<PropsWithChildren<IUseList>> = ({ children , ...context }) => {
    return (
        <ListContext.Provider value={context}>
            {children}
        </ListContext.Provider>
    )
}

export const useListContext = () => {
    return useContext<ListValue>(ListContext);
}