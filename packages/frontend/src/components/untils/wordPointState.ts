export type WordPointStateType = {
    label: string
    color: string
}

type StudyLevelName = 'bad' | 'middle' | 'good'

const studyLevel: { [key in StudyLevelName]: WordPointStateType } = {
    bad: { label: '', color: '#FF4466' },
    middle: { label: '', color: '#EBC658' },
    good: { label: '', color: '#71BD8D' },
}


export const wordPointState = (point: number): WordPointStateType => {
    if(point < 10) {
        return studyLevel['bad']
    } else if (point < 20) {
        return studyLevel['middle']
    } else {
        return studyLevel['good'] 
    }
}