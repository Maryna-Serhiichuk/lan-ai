import { GraphQLFieldResolver } from "graphql"
import { me } from "./me"

const lists: GraphQLFieldResolver<null, Graphql.ResolverContext, null> = async (root, args, ctx, info) => {
  const user: any = await me(null, null, ctx, info)
  if (!user?.id) return []

  if(!user?.setting?.id) throw new TypeError("Settings identifier is missing")

  const { toEntityResponseCollection } = strapi.service("plugin::graphql.format").returnTypes

  const list = await strapi.entityService.findMany("api::list.list", {
    filters: {
      setting: user?.setting?.id,
    },
  })

  return toEntityResponseCollection(list ?? [])
}

export { lists }