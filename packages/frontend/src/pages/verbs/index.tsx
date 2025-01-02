import { VerbsProvider, useVerbsContext, VerbsContext } from "./Verbs.context";
import { useVerbs } from "./hooks/useVerbs";
import VerbsContent from './Verbs.content'

Verbs.useContext = useVerbsContext
Verbs.Context = VerbsContext;
Verbs.Provider = VerbsProvider;

Verbs.useState = useVerbs

Verbs.Content = VerbsContent;

function Verbs () {
    const context = Verbs.useState()

    return <Verbs.Provider {...context}>
        <Verbs.Content />
    </Verbs.Provider>
}

export default Verbs;