export const queryCollection = async (uid: string, args: any, ctx: Graphql.ResolverContext) => {
    const { toEntityResponseCollection } = strapi.service("plugin::graphql.format").returnTypes
    const { transformArgs } = strapi.plugin("graphql").service("builders").utils
  
    const transformedArgs = transformArgs(args, { contentType: strapi.contentTypes[uid] })
  
    const { find } = strapi
      .plugin("graphql")
      .service("builders")
      .get("content-api")
      .buildQueriesResolvers({ contentType: strapi.contentTypes[uid] })
  
    const nodes = await find(null, transformedArgs, ctx)
  
    return toEntityResponseCollection(nodes ?? [], {
      args: transformedArgs,
      resourceUID: uid,
    })
  }
  