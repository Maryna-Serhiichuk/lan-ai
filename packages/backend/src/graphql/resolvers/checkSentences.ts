import { GraphQLFieldResolver } from "graphql"
import OpenAI from 'openai'
import { promptsContext } from "./promptsContext"

const openai = new OpenAI();

const checkSentences: GraphQLFieldResolver<null, Graphql.ResolverContext, any> = async (root, args, ctx, info) => {
    const { data } = args
    const replaceFunc: any  = await promptsContext(null, null, ctx, info)

    let checked = []

    for(const sentence of data){
        const { original, sentences, id } = sentence

        if(!sentences?.trim()?.length) continue

        const prompt = await replaceFunc({ 
            native: original, 
            study: sentences 
        })

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: prompt?.check },
            ]
        });

        const answer = response?.choices?.[0]?.message?.content

        checked.push({ id, explain: answer})
    }

    return { data: checked }
}

export { checkSentences }
