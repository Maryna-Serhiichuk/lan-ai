import { GraphQLFieldResolver } from "graphql"
import { me } from "./me"

const createWordsList: GraphQLFieldResolver<null, Graphql.ResolverContext, any> = async (root, args, ctx, info) => {
  const user: any = await me(null, null, ctx, info)
  if (!user?.id) throw new TypeError("Token is already executing.")
  if (!user?.setting?.id) throw new TypeError("Settings identifier is missing")

  const { name, words } = args.input
  
  let createdWords

  if(words?.length){
    createdWords = await strapi.db.query("api::word.word").createMany({
      data: words
    }) as { count: number, ids: string[] }
  }

  const { toEntityResponse } = strapi.plugin("graphql").service("format").returnTypes

  const list = await strapi.entityService.create("api::list.list", {
    data: {
        name,
        ...(createdWords ? {
            words: { connect: createdWords?.ids?.map(id => ({ id })) }
        } : {}),
        setting: [{ id: user?.setting?.id }]
    },
    populate: { words: true }
  })

  return toEntityResponse(list ?? [])
}

export { createWordsList }