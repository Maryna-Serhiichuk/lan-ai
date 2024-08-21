import { GraphQLFieldResolver } from "graphql"

const variable: GraphQLFieldResolver<null, Graphql.ResolverContext, null> = async (root, args, ctx) => {
    const variable = await strapi.service("api::variable.variable").find({ populate: { prompt: { variable: true } } });

    return variable
}

export { variable }
