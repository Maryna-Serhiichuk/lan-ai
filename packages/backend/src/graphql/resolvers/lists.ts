import { GraphQLFieldResolver } from "graphql"
import { me } from "./me"
import { queryCollection } from "./../utils/queryCollection"

const lists: GraphQLFieldResolver<null, Graphql.ResolverContext, null> = async (root, args, ctx, info) => {
  const user: any = await me(null, null, ctx, info)
  if (!user?.id) return []

  if(!user?.setting?.id) throw new TypeError("Settings identifier is missing")

  const list = await queryCollection("api::list.list", {
    ...(args ?? {}),
    filters: {
      ...((args as any)?.filters ?? {}),
      setting: user?.setting?.id,
    },
    sort: ['createdAt:desc', ...(args as any)?.sort],
  }, ctx)

  return list
}

export { lists }