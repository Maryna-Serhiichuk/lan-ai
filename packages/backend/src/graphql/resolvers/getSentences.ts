import { GraphQLFieldResolver } from "graphql"
import OpenAI from 'openai'
import { promptsContext } from "./promptsContext"

const openai = new OpenAI();

const sentencesArray = [
    'Ти купив мені хліба?',
    'Ти не хочеш піти завтра в кінотеатр?',
    'Які останні книги ти прочитав?'
]

const splitter = '\n'

const getSentences: GraphQLFieldResolver<null, Graphql.ResolverContext, any> = async (root, args, ctx, info) => {
    const replaceFunc: any  = await promptsContext(null, null, ctx, info)

    const { id } = args

    // return {
    //     // data: sentencesArray?.reverse()?.map(item => ({
    //     data: sentencesArray?.map(item => ({
    //         text: item
    //     }))
    // }

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

    const englishSentence = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "user", content: prompt?.ask},
        ]
    });
console.log(englishSentence?.choices?.[0]?.message?.content)
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "user", content: `Переклади це речення на українську мову "${englishSentence?.choices?.[0]?.message?.content}"`},
        ]
    });

    const answer = response?.choices?.[0]?.message?.content
    const ss = answer?.split(splitter)

    return {
        data: ss?.map(item => ({
            text: item
        }))
    }
}

export { getSentences }
