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
    nexus.extendType({
      type: 'Mutation',
      definition: t => {
        t.field('getSentences', {
          type: 'SentencesResponse',
          args: {
            id: nexus.nonNull("ID")
          },
        })
      },
    }),
    nexus.extendType<"SentencesResponse">({
      type: "SentencesResponse",
      definition: t => {
        t.list.field("data", { type: "Sentence" })
      },
    }),
    nexus.extendType<"Sentence">({
      type: "Sentence",
      definition: t => {
        t.field("text", { type: "String" })
        t.field("original", { type: "String" })
      },
    }),
    nexus.extendType({
      type: "Mutation",
      definition: t => {
        t.field("checkSentences", {
          type: "SentencesResultResponse",
          args: {
            data: nexus.list("SentenceInput"),
          },
        })
      },
    }),
    nexus.extendInputType<"SentenceInput">({
      type: "SentenceInput",
      definition: t => {
        t.string("original")
        t.string("sentences")
        t.id("id")
      },
    }),
    nexus.extendType<"SentencesResultResponse">({
      type: "SentencesResultResponse",
      definition: t => {
        t.list.field("data", { type: "SentenceResponse" })
      },
    }),
    nexus.extendType<"SentenceResponse">({
      type: "SentenceResponse",
      definition: t => {
        t.id("id")
        t.string("explain")
      },
    }),
    nexus.extendType({
      type: "Mutation",
      definition: t => {
        t.field("getStory", {
          type: "StoryResponse",
          args: {
            id: nexus.nonNull("ID")
          },
        })
      },
    }),
    nexus.extendType<"StoryResponse">({
      type: "StoryResponse",
      definition: t => {
        t.field("story", { type: "String" })
      },
    }),

    nexus.extendType({
      type: "Mutation",
      definition: t => {
        t.field("createInfinitiveList", {
          type: "VerbsListEntityResponse",
          args: {
            input: nexus.nonNull("InfinitiveListInput"),
            // name: nexus.nonNull("String"),
            // words: nexus.list("WordInput")
          },
        })
      },
    }),
    nexus.extendInputType<"InfinitiveListInput">({
      type: "InfinitiveListInput",
      definition: t => {
        t.string("name")
        t.list.field("verbs", { type: "VerbInput" })
      },
    }),
    nexus.extendType({
      type: "Mutation",
      definition: t => {
        t.field("changeVerbsPoint", {
          type: "VerbEntityResponseCollection",
          args: {
            input: nexus.list("VerbsPointListInput"),
          },
        })
      },
    }),
    nexus.extendInputType<"VerbsPointListInput">({
      type: "VerbsPointListInput",
      definition: t => {
        t.id("id")
        t.field("point", { type: "Int" })
      },
    }),
  ],
  resolvers,
  resolversConfig,
})

export { readOnlyEntities, schemaExtension, writeOnlyEntities }
