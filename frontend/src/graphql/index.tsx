import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
export const WordFragmentDoc = gql`
    fragment Word on Word {
  word
  translation
  active
  studied
  point
}
    `;
export const ListFragmentDoc = gql`
    fragment List on List {
  name
  words {
    data {
      id
      attributes {
        ...Word
      }
    }
  }
}
    ${WordFragmentDoc}`;
export const SettingFragmentDoc = gql`
    fragment Setting on Setting {
  name
  theme
  level
  language
  tenses
}
    `;
export const ChangeWordsPointDocument = gql`
    mutation changeWordsPoint($input: [WordsPointListInput]) {
  changeWordsPoint(input: $input) {
    data {
      id
      attributes {
        ...Word
      }
    }
  }
}
    ${WordFragmentDoc}`;
export type ChangeWordsPointMutationFn = Apollo.MutationFunction<ChangeWordsPointMutation, ChangeWordsPointMutationVariables>;
export type ChangeWordsPointComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ChangeWordsPointMutation, ChangeWordsPointMutationVariables>, 'mutation'>;

    export const ChangeWordsPointComponent = (props: ChangeWordsPointComponentProps) => (
      <ApolloReactComponents.Mutation<ChangeWordsPointMutation, ChangeWordsPointMutationVariables> mutation={ChangeWordsPointDocument} {...props} />
    );
    
export function useChangeWordsPointMutation(baseOptions?: Apollo.MutationHookOptions<ChangeWordsPointMutation, ChangeWordsPointMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeWordsPointMutation, ChangeWordsPointMutationVariables>(ChangeWordsPointDocument, options);
      }
export type ChangeWordsPointMutationHookResult = ReturnType<typeof useChangeWordsPointMutation>;
export type ChangeWordsPointMutationResult = Apollo.MutationResult<ChangeWordsPointMutation>;
export const CreateWordDocument = gql`
    mutation createWord($data: WordInput!) {
  createWord(data: $data) {
    data {
      id
      attributes {
        ...Word
      }
    }
  }
}
    ${WordFragmentDoc}`;
export type CreateWordMutationFn = Apollo.MutationFunction<CreateWordMutation, CreateWordMutationVariables>;
export type CreateWordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateWordMutation, CreateWordMutationVariables>, 'mutation'>;

    export const CreateWordComponent = (props: CreateWordComponentProps) => (
      <ApolloReactComponents.Mutation<CreateWordMutation, CreateWordMutationVariables> mutation={CreateWordDocument} {...props} />
    );
    
export function useCreateWordMutation(baseOptions?: Apollo.MutationHookOptions<CreateWordMutation, CreateWordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWordMutation, CreateWordMutationVariables>(CreateWordDocument, options);
      }
export type CreateWordMutationHookResult = ReturnType<typeof useCreateWordMutation>;
export type CreateWordMutationResult = Apollo.MutationResult<CreateWordMutation>;
export const CreateWordsListDocument = gql`
    mutation createWordsList($input: WordsListInput!) {
  createWordsList(input: $input) {
    data {
      id
      attributes {
        ...List
      }
    }
  }
}
    ${ListFragmentDoc}`;
export type CreateWordsListMutationFn = Apollo.MutationFunction<CreateWordsListMutation, CreateWordsListMutationVariables>;
export type CreateWordsListComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateWordsListMutation, CreateWordsListMutationVariables>, 'mutation'>;

    export const CreateWordsListComponent = (props: CreateWordsListComponentProps) => (
      <ApolloReactComponents.Mutation<CreateWordsListMutation, CreateWordsListMutationVariables> mutation={CreateWordsListDocument} {...props} />
    );
    
export function useCreateWordsListMutation(baseOptions?: Apollo.MutationHookOptions<CreateWordsListMutation, CreateWordsListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWordsListMutation, CreateWordsListMutationVariables>(CreateWordsListDocument, options);
      }
export type CreateWordsListMutationHookResult = ReturnType<typeof useCreateWordsListMutation>;
export type CreateWordsListMutationResult = Apollo.MutationResult<CreateWordsListMutation>;
export const DeleteWordDocument = gql`
    mutation deleteWord($id: ID!) {
  deleteWord(id: $id) {
    data {
      id
      attributes {
        ...Word
      }
    }
  }
}
    ${WordFragmentDoc}`;
export type DeleteWordMutationFn = Apollo.MutationFunction<DeleteWordMutation, DeleteWordMutationVariables>;
export type DeleteWordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteWordMutation, DeleteWordMutationVariables>, 'mutation'>;

    export const DeleteWordComponent = (props: DeleteWordComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteWordMutation, DeleteWordMutationVariables> mutation={DeleteWordDocument} {...props} />
    );
    
export function useDeleteWordMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWordMutation, DeleteWordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteWordMutation, DeleteWordMutationVariables>(DeleteWordDocument, options);
      }
export type DeleteWordMutationHookResult = ReturnType<typeof useDeleteWordMutation>;
export type DeleteWordMutationResult = Apollo.MutationResult<DeleteWordMutation>;
export const LoginDocument = gql`
    mutation login($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt
    user {
      id
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export const RegisterDocument = gql`
    mutation register($input: UsersPermissionsRegisterInput!) {
  register(input: $input) {
    jwt
    user {
      id
      email
      username
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export type RegisterComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterMutation, RegisterMutationVariables>, 'mutation'>;

    export const RegisterComponent = (props: RegisterComponentProps) => (
      <ApolloReactComponents.Mutation<RegisterMutation, RegisterMutationVariables> mutation={RegisterDocument} {...props} />
    );
    
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export const UpdateWordDocument = gql`
    mutation updateWord($id: ID!, $data: WordInput!) {
  updateWord(id: $id, data: $data) {
    data {
      id
      attributes {
        ...Word
      }
    }
  }
}
    ${WordFragmentDoc}`;
export type UpdateWordMutationFn = Apollo.MutationFunction<UpdateWordMutation, UpdateWordMutationVariables>;
export type UpdateWordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateWordMutation, UpdateWordMutationVariables>, 'mutation'>;

    export const UpdateWordComponent = (props: UpdateWordComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateWordMutation, UpdateWordMutationVariables> mutation={UpdateWordDocument} {...props} />
    );
    
export function useUpdateWordMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWordMutation, UpdateWordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWordMutation, UpdateWordMutationVariables>(UpdateWordDocument, options);
      }
export type UpdateWordMutationHookResult = ReturnType<typeof useUpdateWordMutation>;
export type UpdateWordMutationResult = Apollo.MutationResult<UpdateWordMutation>;
export const UpdateWordsPointsDocument = gql`
    mutation updateWordsPoints {
  updateWordsPoints {
    data {
      id
      attributes {
        ...Word
      }
    }
  }
}
    ${WordFragmentDoc}`;
export type UpdateWordsPointsMutationFn = Apollo.MutationFunction<UpdateWordsPointsMutation, UpdateWordsPointsMutationVariables>;
export type UpdateWordsPointsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateWordsPointsMutation, UpdateWordsPointsMutationVariables>, 'mutation'>;

    export const UpdateWordsPointsComponent = (props: UpdateWordsPointsComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateWordsPointsMutation, UpdateWordsPointsMutationVariables> mutation={UpdateWordsPointsDocument} {...props} />
    );
    
export function useUpdateWordsPointsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWordsPointsMutation, UpdateWordsPointsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWordsPointsMutation, UpdateWordsPointsMutationVariables>(UpdateWordsPointsDocument, options);
      }
export type UpdateWordsPointsMutationHookResult = ReturnType<typeof useUpdateWordsPointsMutation>;
export type UpdateWordsPointsMutationResult = Apollo.MutationResult<UpdateWordsPointsMutation>;
export const ListDocument = gql`
    query List($id: ID!) {
  list(id: $id) {
    data {
      id
      attributes {
        ...List
      }
    }
  }
}
    ${ListFragmentDoc}`;
export type ListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ListQuery, ListQueryVariables>, 'query'> & ({ variables: ListQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ListComponent = (props: ListComponentProps) => (
      <ApolloReactComponents.Query<ListQuery, ListQueryVariables> query={ListDocument} {...props} />
    );
    
export function useListQuery(baseOptions: Apollo.QueryHookOptions<ListQuery, ListQueryVariables> & ({ variables: ListQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListQuery, ListQueryVariables>(ListDocument, options);
      }
export function useListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListQuery, ListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListQuery, ListQueryVariables>(ListDocument, options);
        }
export function useListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListQuery, ListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListQuery, ListQueryVariables>(ListDocument, options);
        }
export type ListQueryHookResult = ReturnType<typeof useListQuery>;
export type ListLazyQueryHookResult = ReturnType<typeof useListLazyQuery>;
export type ListSuspenseQueryHookResult = ReturnType<typeof useListSuspenseQuery>;
export type ListQueryResult = Apollo.QueryResult<ListQuery, ListQueryVariables>;
export const ListsDocument = gql`
    query lists {
  lists {
    data {
      id
      attributes {
        ...List
      }
    }
  }
}
    ${ListFragmentDoc}`;
export type ListsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ListsQuery, ListsQueryVariables>, 'query'>;

    export const ListsComponent = (props: ListsComponentProps) => (
      <ApolloReactComponents.Query<ListsQuery, ListsQueryVariables> query={ListsDocument} {...props} />
    );
    
export function useListsQuery(baseOptions?: Apollo.QueryHookOptions<ListsQuery, ListsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListsQuery, ListsQueryVariables>(ListsDocument, options);
      }
export function useListsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListsQuery, ListsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListsQuery, ListsQueryVariables>(ListsDocument, options);
        }
export function useListsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListsQuery, ListsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListsQuery, ListsQueryVariables>(ListsDocument, options);
        }
export type ListsQueryHookResult = ReturnType<typeof useListsQuery>;
export type ListsLazyQueryHookResult = ReturnType<typeof useListsLazyQuery>;
export type ListsSuspenseQueryHookResult = ReturnType<typeof useListsSuspenseQuery>;
export type ListsQueryResult = Apollo.QueryResult<ListsQuery, ListsQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    email
  }
}
    `;
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>;

    export const MeComponent = (props: MeComponentProps) => (
      <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
    );
    
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const SettingsDocument = gql`
    query settings {
  settings {
    data {
      id
      attributes {
        ...Setting
      }
    }
  }
}
    ${SettingFragmentDoc}`;
export type SettingsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SettingsQuery, SettingsQueryVariables>, 'query'>;

    export const SettingsComponent = (props: SettingsComponentProps) => (
      <ApolloReactComponents.Query<SettingsQuery, SettingsQueryVariables> query={SettingsDocument} {...props} />
    );
    
export function useSettingsQuery(baseOptions?: Apollo.QueryHookOptions<SettingsQuery, SettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsQuery, SettingsQueryVariables>(SettingsDocument, options);
      }
export function useSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsQuery, SettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsQuery, SettingsQueryVariables>(SettingsDocument, options);
        }
export function useSettingsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SettingsQuery, SettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SettingsQuery, SettingsQueryVariables>(SettingsDocument, options);
        }
export type SettingsQueryHookResult = ReturnType<typeof useSettingsQuery>;
export type SettingsLazyQueryHookResult = ReturnType<typeof useSettingsLazyQuery>;
export type SettingsSuspenseQueryHookResult = ReturnType<typeof useSettingsSuspenseQuery>;
export type SettingsQueryResult = Apollo.QueryResult<SettingsQuery, SettingsQueryVariables>;