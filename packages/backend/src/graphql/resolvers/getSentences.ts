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

    const wordsArray = words?.map(item => item?.word)
    const wordsString = wordsArray?.join(', ')

    const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

    const prompt = await replaceFunc({
        words: randomWord
    })

    const englishSentence = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "user", content: prompt?.ask},
        ]
    });

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "user", content: `Translate this sentence into Ukrainian "${englishSentence?.choices?.[0]?.message?.content}"`},
        ]
    });

    const answer = response?.choices?.[0]?.message?.content
    const ss = answer?.split(splitter)

    return {
        data: ss?.map(item => ({
            text: item,
            original: englishSentence?.choices?.[0]?.message?.content
        }))
    }
}

export { getSentences }
