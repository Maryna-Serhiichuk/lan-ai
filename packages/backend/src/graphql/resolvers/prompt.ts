import { GraphQLFieldResolver } from "graphql"

const prompt: GraphQLFieldResolver<null, Graphql.ResolverContext, { id: string | number }> = async (root, args, ctx, info) => {
    const { id } = args
    const prt = await strapi.entityService.findOne("api::prompt.prompt", id, {
        populate: { variable: true }
    })
    
    return prt ?? null
}

export { prompt }
