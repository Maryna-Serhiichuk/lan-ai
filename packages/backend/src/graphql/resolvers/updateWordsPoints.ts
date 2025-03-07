import { GraphQLFieldResolver } from "graphql"
import { me } from "./me"
import dayjs from "dayjs"

const updateWordsPoints: GraphQLFieldResolver<null, Graphql.ResolverContext, any> = async (root, args, ctx, info) => {
    const user: any = await me(null, null, ctx, info)
    if (!user?.id) throw new TypeError("Token is already executing.");
    if (!user?.setting?.id) throw new TypeError("Settings identifier is missing");

    if(!user?.lastAttendanceDate) {
        await strapi.entityService.update("plugin::users-permissions.user", user.id, {
            data: {
                lastAttendanceDate: dayjs().format('YYYY-MM-DD')
            },
        })
    }

    const lastDate = dayjs(user?.lastAttendanceDate ?? undefined)
    const isSameDate = lastDate.isSame(dayjs(), 'day')

    if(isSameDate) return null
        
    const { toEntityResponseCollection } = strapi.service("plugin::graphql.format").returnTypes

    const words = await strapi.entityService.findMany('api::word.word', {
        filters: {
            $or: [
                {
                    list: {
                        closed: false,
                        setting: user?.setting?.id
                    },
                },
                {
                    list: {
                        closed: null,
                        setting: user?.setting?.id
                    },
                },
              ],
        }
    });

    let wordsResponse = []

    for(const word of words){
        const pointParseToInt = word?.point ? parseInt(word?.point) : 0

        if(pointParseToInt <= 0) continue

        const diffInDays = dayjs().diff(lastDate, 'day')

        const resultPoint = pointParseToInt - diffInDays

        const wordsUpdates = await strapi.entityService.update("api::word.word", word?.id, {
            data: {
                point: resultPoint
            }
        })
        wordsResponse.push(wordsUpdates)
    }

    await strapi.entityService.update("plugin::users-permissions.user", user.id, {
        data: {
            lastAttendanceDate: dayjs().format('YYYY-MM-DD')
        },
    })

    return toEntityResponseCollection(wordsResponse ?? [])
}

export { updateWordsPoints }