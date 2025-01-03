import { GraphQLFieldResolver } from "graphql"
import { me } from "./me"

const createInfinitiveList: GraphQLFieldResolver<null, Graphql.ResolverContext, any> = async (root, args, ctx, info) => {
  const user: any = await me(null, null, ctx, info)
  if (!user?.id) throw new TypeError("Token is already executing.")
  if (!user?.setting?.id) throw new TypeError("Settings identifier is missing")

  const { name, verbs } = args.input
  let createdverbs

  if(verbs?.length){
    createdverbs = await strapi.db.query("api::verb.verb").createMany({
      data: verbs
    }) as { count: number, ids: string[] }
  }

  const { toEntityResponse } = strapi.plugin("graphql").service("format").returnTypes

  const list = await strapi.entityService.create("api::verbs-list.verbs-list", {
    data: {
        name,
        ...(createdverbs ? {
            verbs: { connect: createdverbs?.ids?.map(id => ({ id })) }
        } : {}),
        setting: [{ id: user?.setting?.id }]
    },
    populate: { verbs: true }
  })

  return toEntityResponse(list)
}

export { createInfinitiveList }