import { GraphQLFieldResolver } from "graphql"
import { me } from "./me"
import dayjs from "dayjs"

const updateWordsPoints: GraphQLFieldResolver<null, Graphql.ResolverContext, any> = async (root, args, ctx, info) => {
    const user: any = await me(null, null, ctx, info)
    if (!user?.id) throw new TypeError("Token is already executing.");
    if (!user?.setting?.id) throw new TypeError("Settings identifier is missing");

    const lastDate = dayjs(user?.lastAttendanceDate ?? undefined)
    const isSameDate = lastDate.isSame(dayjs(), 'day')

    if(isSameDate) return null
        
    const { toEntityResponseCollection } = strapi.service("plugin::graphql.format").returnTypes

    const words = await strapi.entityService.findMany('api::word.word', {
        filters: {
            list: {
                setting: user?.setting?.id
            }
        }
    });

    for(const word of words){
        const pointParseToInt = word?.point ? parseInt(word?.point) : 0

        if(word?.point <= 0) break

        const resultPoint = pointParseToInt - 1

        const wordsUpdates = await strapi.entityService.update("api::word.word", {
            data: {
                point: resultPoint
            }
        })

        return toEntityResponseCollection(wordsUpdates ?? [])
    }

    await strapi.entityService.update("plugin::users-permissions.user", user.id, {
        data: {
            lastAttendanceDate: dayjs().format('YYYY-MM-DD')
        },
    })

    return toEntityResponseCollection([])
}

export { updateWordsPoints }