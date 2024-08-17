import resolvers, { resolversConfig } from './../graphql/resolvers/index'

const dd: Tete.SSt = 'info'
const ddd: TeteTe.SSt = 'warn'

const readOnlyEntities = [
  'api::category.category',
  'api::post.post',
  'api::website.website',
  'plugin::email-emitter.email',
  'plugin::email-designer.email-template',
  'plugin::i18n.locale',
  'plugin::menus.menu',
  'plugin::menus.menu-item',
  'plugin::users-permissions.permission',
  'plugin::users-permissions.role',
  'plugin::upload.folder',
  'plugin::users-permissions.user',
] as Strapi.ContentTypeUIDs[]

const writeOnlyEntities = ['api::setting.setting', 'plugin::email-emitter.email'] as Strapi.ContentTypeUIDs[]

const schemaExtension: Strapi.Graphql.ExtensionCallback = ({ nexus }) => ({
  types: [
    nexus.extendType({
      type: 'Query',
      definition: t => {
        t.field('me', {
          type: 'UsersPermissionsUser',
        })
      },
    }),
    nexus.extendType({
      type: "Mutation",
      definition: t => {
        t.field("createWordsList", {
          type: "ListEntityResponse",
          args: {
            input: nexus.nonNull("WordsListInput"),
            // name: nexus.nonNull("String"),
            // words: nexus.list("WordInput")
          },
        })
      },
    }),
    nexus.extendInputType<"WordsListInput">({
      type: "WordsListInput",
      definition: t => {
        t.string("name")
        t.list.field("words", { type: "WordInput" })
      },
    }),
    nexus.extendType({
      type: "Mutation",
      definition: t => {
        t.field("changeWordsPoint", {
          type: "WordEntityResponseCollection",
          args: {
            input: nexus.list("WordsPointListInput"),
          },
        })
      },
    }),
    nexus.extendInputType<"WordsPointListInput">({
      type: "WordsPointListInput",
      definition: t => {
        t.id("id")
        t.field("point", { type: "Int" })
      },
    }),
    nexus.extendType({
      type: "Mutation",
      definition: t => {
        t.field("updateWordsPoints", {
          type: "WordEntityResponseCollection",
        })
      },
    }),
  ],
  resolvers,
  resolversConfig,
})

export { readOnlyEntities, schemaExtension, writeOnlyEntities }
