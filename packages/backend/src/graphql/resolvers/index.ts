import { me } from './me'
import { settings } from './settings'
import { lists } from './lists'
import { createWordsList } from './createWordsList'
import { changeWordsPoint } from './changeWordsPoint'
import { updateWordsPoints } from './updateWordsPoints'
import { sentences } from './sentences'
import { checkSentences } from './checkSentences'

const Query = {
  me,
  settings,
  lists,
  sentences,
}

const Mutation = {
  createWordsList,
  changeWordsPoint,
  updateWordsPoints,
  checkSentences,
}

export const resolversConfig: Strapi.Graphql.ResolverConfig = {
  'Query.me': {
    auth: false,
  },
}

export default { Query, Mutation }
