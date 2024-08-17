import { ListProvider, useListContext, ListContext } from "./context/ListContext";
import { useList } from "./context/useList";
import { ListContent } from './List.content'

List.useContext = useListContext
List.Context = ListContext;
List.Provider = ListProvider;

List.useState = useList

List.Content = ListContent;

function List () {
    const context = List.useState()

    return <List.Provider {...context}>
        <List.Content />
    </List.Provider>
}

export default List;