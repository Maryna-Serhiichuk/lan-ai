interface ResolverError {
    code: Scalars['String']['output'];
    message?: Maybe<Scalars['String']['output']>;
};

type WordPointsObject = WordsPointListInput

type Replace<T, K extends keyof T, V> = Omit<T, K> & { [P in K]: V };