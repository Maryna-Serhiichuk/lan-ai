type Tense = {
    id: number
    type: string

}

const tenses: Tense[] = [
    { id: 1, type: 'present simple' },
    { id: 2, type: 'present continuous' },
    { id: 3, type: 'present perfect' },
    { id: 4, type: 'past simple' },
    { id: 5, type: 'past continuous' },
    { id: 6, type: 'past perfect' },
    { id: 7, type: 'past perfect continuous' },
    { id: 8, type: 'future simple' },
    { id: 9, type: 'modal verbs' },
    { id: 10, type: 'conditionals' },
]

export default tenses
// перевірити швидкість шоб через масив дати індекси і як буде без них