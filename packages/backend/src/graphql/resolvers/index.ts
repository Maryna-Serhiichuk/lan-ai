import { me } from './me'
import { settings } from './settings'
import { lists } from './lists'
import { createWordsList } from './createWordsList'
import { changeWordsPoint } from './changeWordsPoint'
import { updateWordsPoints } from './updateWordsPoints'
import { getSentences } from './getSentences'
import { checkSentences } from './checkSentences'
import { getStory } from './getStory'
import { createInfinitiveList } from './createInfinitiveList'
import { changeVerbsPoint } from './changeVerbsPoint'
import { compare } from './compare'

const Query = {
  me,
  settings,
  lists,
}

const Mutation = {
  createWordsList,
  changeWordsPoint,
  updateWordsPoints,
  getSentences,
  checkSentences,
  getStory,
  createInfinitiveList,
  changeVerbsPoint,
  compare,
}

export const resolversConfig: Strapi.Graphql.ResolverConfig = {
  'Query.me': {
    auth: false,
  },
}

export default { Query, Mutation }