import { GraphQLFieldResolver } from "graphql"
import OpenAI from 'openai'
import { promptsContext } from "./promptsContext"

const openai = new OpenAI();

const getStory: GraphQLFieldResolver<null, Graphql.ResolverContext, any> = async (root, args, ctx, info) => {
    const replaceFunc: any  = await promptsContext(null, null, ctx, info)

    const { id } = args

    const words = await strapi.entityService.findMany("api::word.word", {
        filters: {
            list: id,
            active: true
        },
    })

    const wordsString = words?.map(item => item?.word)?.join(', ')

    const prompt = await replaceFunc({
        words: wordsString
    })

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "user", content: prompt?.story},
        ]
    });

    const answer = response?.choices?.[0]?.message?.content

    return {
        story: answer
    }
}

export { getStory }
