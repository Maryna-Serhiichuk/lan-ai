import { GraphQLFieldResolver } from "graphql"

const changeWordsPoint: GraphQLFieldResolver<null, Graphql.ResolverContext, any> = async (root, args, ctx, info) => {
    const words = args.input

    const { toEntityResponseCollection } = strapi.service("plugin::graphql.format").returnTypes

    let response = []

    for (const w of words) {
        const word = await strapi.entityService.findOne('api::word.word', w?.id);
        const pointParseToInt = word?.point ? parseInt(word?.point) : 0
        const resultPoint = pointParseToInt + w?.point

        const wordsUpdates = await strapi.entityService.update("api::word.word", w?.id, {
            data: {
                point: resultPoint
            }
        })

        response.push(wordsUpdates)
    }

    return toEntityResponseCollection(response ?? [])
}

export { changeWordsPoint }