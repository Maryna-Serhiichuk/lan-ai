import { GraphQLFieldResolver } from "graphql"
import OpenAI from 'openai'
import { promptsContext } from "./promptsContext"

const openai = new OpenAI();

const compare: GraphQLFieldResolver<null, Graphql.ResolverContext, any> = async (root, args, ctx, info) => {
    const { words } = args.input
    if(!words) return { text: 'Write your words' }
    const replaceFunc: any  = await promptsContext(null, null, ctx, info)

    const prompt = await replaceFunc()

    const compareRequest = await openai.chat.completions.create({
        model: "gpt-4-turbo",
        messages: [
            {role: "user", content: prompt?.compare?.replace('${}', words)},
        ]
    });

    const answer = compareRequest?.choices?.[0]?.message?.content

    return { text: answer }
}

export { compare }
