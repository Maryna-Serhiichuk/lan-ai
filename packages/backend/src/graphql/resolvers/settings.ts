import { GraphQLFieldResolver } from "graphql"
import { me } from "./me"

const settings: GraphQLFieldResolver<null, Graphql.ResolverContext, null> = async (root, args, ctx, info) => {
  const user: any = await me(null, null, ctx, info)
  if (!user?.id) return null

  const { toEntityResponseCollection } = strapi.service("plugin::graphql.format").returnTypes

  const settings = await strapi.entityService.findMany("api::setting.setting", {
    filters: {
      user: ctx.state.user.id,
    },
  })

  return toEntityResponseCollection(settings ?? [])
}

export { settings }
