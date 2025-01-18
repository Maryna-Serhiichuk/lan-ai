import { GraphQLFieldResolver } from "graphql"
import { variable } from "./variable"
import { prompt } from "./prompt"
import { me } from "./me"

type PromptsModel = {
    ask: string | undefined | null;
    check: string | undefined | null;
    story: string | undefined | null;
    compare: string | undefined | null;
}

export type PromptsContextFunction = (
    context: Record<string, any>
) => Promise<PromptsModel>;

export type PromptsContextResponse = Promise<PromptsContextFunction>

const promptsContext: GraphQLFieldResolver<null, Graphql.ResolverContext, null> = async (root, args, ctx, info): PromptsContextResponse => {
    const vars: any = await variable(null, null, ctx, info)
    const prompts: any = await prompt(null, { id: vars?.prompt?.id }, ctx, info)

    const user: any = await me(null, null, ctx, info)
    if (!user?.id) return null
    if (!user?.setting?.id) throw new TypeError("Settings identifier is missing")

    const varle = prompts?.variable

    const setting = {
        ...user?.setting,
        theme: undefined
    }

    const values = {
        // words: '${words}',
        language: setting?.language,
        level: setting?.level,
        tenses: setting?.tenses,
        theme: setting?.theme,
        // native: '${original}',
        // study: '${sentences}'
    }

    return async function(context: Record<string, any>) {

        const varsObject = varle

        const contextObject = {
            ...values,
            ...context,
        }

        function replacePlaceholders(text: string):  string {
            const keysArray = Object.keys(contextObject)
    
            let sentence = text

            for(const key of keysArray) {
                sentence = sentence?.replace(varsObject[key], contextObject[key])
            }

            return sentence
        }

        return {
            ask: replacePlaceholders(prompts?.ask),
            check: replacePlaceholders(prompts?.check),
            story: replacePlaceholders(prompts?.story),
            compare: replacePlaceholders(prompts?.compare),
        }

    }
}

export { promptsContext }
