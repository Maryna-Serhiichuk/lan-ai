import { WordInput } from './components/Word.input'
import { WordModal } from './components/Word.modal'
import { WordContent } from './Word.content'
import { WordProvider, useWordContext, WordContext } from "./context/WordContext";
import { useWord } from "./hooks/useWord";

Word.useContext = useWordContext
Word.Context = WordContext;
Word.Provider = WordProvider;

Word.useState = useWord

Word.Content = WordContent
Word.Input = WordInput
Word.Modal = WordModal

function Word () {
    const context = Word.useState()

    return <Word.Provider {...context}>
        <Word.Content/>
        <Word.Modal/>
    </Word.Provider>
}

export default Word