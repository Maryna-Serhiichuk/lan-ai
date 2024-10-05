type Maybe<T> = T | null | undefined;
type InputMaybe<T> = T | null | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: string; output: string; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date; output: Date; }
  /** A string used to identify an i18n locale */
  I18NLocaleCode: { input: string | 'en'; output: string | 'en'; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: Record<string, any|any[]|string|number|boolean|null|undefined>|any[]; output: Record<string, any|any[]|string|number|boolean|null|undefined>|any[]; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: { input: number; output: number; }
  /** A time string with format HH:mm:ss.SSS */
  Time: { input: string; output: string; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: unknown; output: unknown; }
};

type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

type ComponentContextDynamic = {
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  native?: Maybe<Scalars['String']['output']>;
  study?: Maybe<Scalars['String']['output']>;
  tenses?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  words?: Maybe<Scalars['String']['output']>;
};

type ComponentContextDynamicFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContextDynamicFiltersInput>>>;
  language?: InputMaybe<StringFilterInput>;
  level?: InputMaybe<StringFilterInput>;
  native?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentContextDynamicFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContextDynamicFiltersInput>>>;
  study?: InputMaybe<StringFilterInput>;
  tenses?: InputMaybe<StringFilterInput>;
  theme?: InputMaybe<StringFilterInput>;
  words?: InputMaybe<StringFilterInput>;
};

type ComponentContextDynamicInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  native?: InputMaybe<Scalars['String']['input']>;
  study?: InputMaybe<Scalars['String']['input']>;
  tenses?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
  words?: InputMaybe<Scalars['String']['input']>;
};

type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nei?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

type EnumSettingLanguage =
  | 'english';

type EnumSettingLevel =
  | 'A1'
  | 'A2'
  | 'B1'
  | 'B2'
  | 'C1'
  | 'C2';

type Error = {
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

type GenericMorph = ComponentContextDynamic | I18NLocale | List | Prompt | Setting | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Variable | Word;

type I18NLocale = {
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

type I18NLocaleEntity = {
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

type I18NLocaleEntityResponse = {
  data?: Maybe<I18NLocaleEntity>;
};

type I18NLocaleEntityResponseCollection = {
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type I18NLocaleInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

type I18NLocaleRelationResponseCollection = {
  data: Array<I18NLocaleEntity>;
};

type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

type List = {
  closed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  setting?: Maybe<SettingEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  words?: Maybe<WordRelationResponseCollection>;
};


type ListWordsArgs = {
  filters?: InputMaybe<WordFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type ListEntity = {
  attributes?: Maybe<List>;
  id?: Maybe<Scalars['ID']['output']>;
};

type ListEntityResponse = {
  data?: Maybe<ListEntity>;
};

type ListEntityResponseCollection = {
  data: Array<ListEntity>;
  meta: ResponseCollectionMeta;
};

type ListFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ListFiltersInput>>>;
  closed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ListFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ListFiltersInput>>>;
  setting?: InputMaybe<SettingFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  words?: InputMaybe<WordFiltersInput>;
};

type ListInput = {
  closed?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  setting?: InputMaybe<Scalars['ID']['input']>;
  words?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

type ListRelationResponseCollection = {
  data: Array<ListEntity>;
};

type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  contains?: InputMaybe<Scalars['Long']['input']>;
  containsi?: InputMaybe<Scalars['Long']['input']>;
  endsWith?: InputMaybe<Scalars['Long']['input']>;
  eq?: InputMaybe<Scalars['Long']['input']>;
  eqi?: InputMaybe<Scalars['Long']['input']>;
  gt?: InputMaybe<Scalars['Long']['input']>;
  gte?: InputMaybe<Scalars['Long']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  lt?: InputMaybe<Scalars['Long']['input']>;
  lte?: InputMaybe<Scalars['Long']['input']>;
  ne?: InputMaybe<Scalars['Long']['input']>;
  nei?: InputMaybe<Scalars['Long']['input']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']['input']>;
  notContainsi?: InputMaybe<Scalars['Long']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  startsWith?: InputMaybe<Scalars['Long']['input']>;
};

type Mutation = {
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  changeWordsPoint?: Maybe<WordEntityResponseCollection>;
  checkSentences?: Maybe<SentencesResultResponse>;
  createList?: Maybe<ListEntityResponse>;
  createPrompt?: Maybe<PromptEntityResponse>;
  createSetting?: Maybe<SettingEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWord?: Maybe<WordEntityResponse>;
  createWordsList?: Maybe<ListEntityResponse>;
  deleteList?: Maybe<ListEntityResponse>;
  deletePrompt?: Maybe<PromptEntityResponse>;
  deleteSetting?: Maybe<SettingEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVariable?: Maybe<VariableEntityResponse>;
  deleteWord?: Maybe<WordEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  getSentences?: Maybe<SentencesResponse>;
  getStory?: Maybe<StoryResponse>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateFileInfo: UploadFileEntityResponse;
  updateList?: Maybe<ListEntityResponse>;
  updatePrompt?: Maybe<PromptEntityResponse>;
  updateSetting?: Maybe<SettingEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVariable?: Maybe<VariableEntityResponse>;
  updateWord?: Maybe<WordEntityResponse>;
  updateWordsPoints?: Maybe<WordEntityResponseCollection>;
  upload: UploadFileEntityResponse;
};


type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


type MutationChangeWordsPointArgs = {
  input?: InputMaybe<Array<InputMaybe<WordsPointListInput>>>;
};


type MutationCheckSentencesArgs = {
  data?: InputMaybe<Array<InputMaybe<SentenceInput>>>;
};


type MutationCreateListArgs = {
  data: ListInput;
};


type MutationCreatePromptArgs = {
  data: PromptInput;
};


type MutationCreateSettingArgs = {
  data: SettingInput;
};


type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


type MutationCreateWordArgs = {
  data: WordInput;
};


type MutationCreateWordsListArgs = {
  input: WordsListInput;
};


type MutationDeleteListArgs = {
  id: Scalars['ID']['input'];
};


type MutationDeletePromptArgs = {
  id: Scalars['ID']['input'];
};


type MutationDeleteSettingArgs = {
  id: Scalars['ID']['input'];
};


type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


type MutationDeleteWordArgs = {
  id: Scalars['ID']['input'];
};


type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


type MutationGetSentencesArgs = {
  id: Scalars['ID']['input'];
};


type MutationGetStoryArgs = {
  id: Scalars['ID']['input'];
};


type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


type MutationUpdateListArgs = {
  data: ListInput;
  id: Scalars['ID']['input'];
};


type MutationUpdatePromptArgs = {
  data: PromptInput;
  id: Scalars['ID']['input'];
};


type MutationUpdateSettingArgs = {
  data: SettingInput;
  id: Scalars['ID']['input'];
};


type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


type MutationUpdateVariableArgs = {
  data: VariableInput;
};


type MutationUpdateWordArgs = {
  data: WordInput;
  id: Scalars['ID']['input'];
};


type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

type Pagination = {
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

type Prompt = {
  ask?: Maybe<Scalars['String']['output']>;
  check?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  story?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  variable?: Maybe<ComponentContextDynamic>;
};

type PromptEntity = {
  attributes?: Maybe<Prompt>;
  id?: Maybe<Scalars['ID']['output']>;
};

type PromptEntityResponse = {
  data?: Maybe<PromptEntity>;
};

type PromptEntityResponseCollection = {
  data: Array<PromptEntity>;
  meta: ResponseCollectionMeta;
};

type PromptFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PromptFiltersInput>>>;
  ask?: InputMaybe<StringFilterInput>;
  check?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PromptFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PromptFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  story?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  variable?: InputMaybe<ComponentContextDynamicFiltersInput>;
};

type PromptInput = {
  ask?: InputMaybe<Scalars['String']['input']>;
  check?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  story?: InputMaybe<Scalars['String']['input']>;
  variable?: InputMaybe<ComponentContextDynamicInput>;
};

type PromptRelationResponseCollection = {
  data: Array<PromptEntity>;
};

type PublicationState =
  | 'LIVE'
  | 'PREVIEW';

type Query = {
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  list?: Maybe<ListEntityResponse>;
  lists?: Maybe<ListEntityResponseCollection>;
  me?: Maybe<UsersPermissionsUser>;
  prompt?: Maybe<PromptEntityResponse>;
  prompts?: Maybe<PromptEntityResponseCollection>;
  setting?: Maybe<SettingEntityResponse>;
  settings?: Maybe<SettingEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  variable?: Maybe<VariableEntityResponse>;
  word?: Maybe<WordEntityResponse>;
  words?: Maybe<WordEntityResponseCollection>;
};


type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


type QueryListArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


type QueryListsArgs = {
  filters?: InputMaybe<ListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


type QueryPromptArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


type QueryPromptsArgs = {
  filters?: InputMaybe<PromptFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


type QuerySettingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


type QuerySettingsArgs = {
  filters?: InputMaybe<SettingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


type QueryWordArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


type QueryWordsArgs = {
  filters?: InputMaybe<WordFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type ResponseCollectionMeta = {
  pagination: Pagination;
};

type Sentence = {
  text?: Maybe<Scalars['String']['output']>;
};

type SentenceInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  original?: InputMaybe<Scalars['String']['input']>;
  sentences?: InputMaybe<Scalars['String']['input']>;
};

type SentenceResponse = {
  explain?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

type SentencesResponse = {
  data?: Maybe<Array<Maybe<Sentence>>>;
};

type SentencesResultResponse = {
  data?: Maybe<Array<Maybe<SentenceResponse>>>;
};

type Setting = {
  account?: Maybe<UsersPermissionsUserEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  language?: Maybe<EnumSettingLanguage>;
  level?: Maybe<EnumSettingLevel>;
  lists?: Maybe<ListRelationResponseCollection>;
  name?: Maybe<Scalars['String']['output']>;
  tenses?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};


type SettingListsArgs = {
  filters?: InputMaybe<ListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type SettingEntity = {
  attributes?: Maybe<Setting>;
  id?: Maybe<Scalars['ID']['output']>;
};

type SettingEntityResponse = {
  data?: Maybe<SettingEntity>;
};

type SettingEntityResponseCollection = {
  data: Array<SettingEntity>;
  meta: ResponseCollectionMeta;
};

type SettingFiltersInput = {
  account?: InputMaybe<UsersPermissionsUserFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<SettingFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  language?: InputMaybe<StringFilterInput>;
  level?: InputMaybe<StringFilterInput>;
  lists?: InputMaybe<ListFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SettingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SettingFiltersInput>>>;
  tenses?: InputMaybe<StringFilterInput>;
  theme?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

type SettingInput = {
  account?: InputMaybe<Scalars['ID']['input']>;
  language?: InputMaybe<EnumSettingLanguage>;
  level?: InputMaybe<EnumSettingLevel>;
  lists?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenses?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};

type SettingRelationResponseCollection = {
  data: Array<SettingEntity>;
};

type StoryResponse = {
  story?: Maybe<Scalars['String']['output']>;
};

type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  contains?: InputMaybe<Scalars['Time']['input']>;
  containsi?: InputMaybe<Scalars['Time']['input']>;
  endsWith?: InputMaybe<Scalars['Time']['input']>;
  eq?: InputMaybe<Scalars['Time']['input']>;
  eqi?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  ne?: InputMaybe<Scalars['Time']['input']>;
  nei?: InputMaybe<Scalars['Time']['input']>;
  not?: InputMaybe<TimeFilterInput>;
  notContains?: InputMaybe<Scalars['Time']['input']>;
  notContainsi?: InputMaybe<Scalars['Time']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  startsWith?: InputMaybe<Scalars['Time']['input']>;
};

type UploadFile = {
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

type UploadFileEntity = {
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

type UploadFileEntityResponse = {
  data?: Maybe<UploadFileEntity>;
};

type UploadFileEntityResponseCollection = {
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

type UploadFileRelationResponseCollection = {
  data: Array<UploadFileEntity>;
};

type UploadFolder = {
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type UploadFolderEntity = {
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

type UploadFolderEntityResponse = {
  data?: Maybe<UploadFolderEntity>;
};

type UploadFolderEntityResponseCollection = {
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

type UploadFolderRelationResponseCollection = {
  data: Array<UploadFolderEntity>;
};

type UsersPermissionsCreateRolePayload = {
  ok: Scalars['Boolean']['output'];
};

type UsersPermissionsDeleteRolePayload = {
  ok: Scalars['Boolean']['output'];
};

type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

type UsersPermissionsLoginPayload = {
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

type UsersPermissionsMe = {
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

type UsersPermissionsMeRole = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

type UsersPermissionsPasswordPayload = {
  ok: Scalars['Boolean']['output'];
};

type UsersPermissionsPermission = {
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

type UsersPermissionsPermissionEntity = {
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

type UsersPermissionsPermissionEntityResponse = {
  data?: Maybe<UsersPermissionsPermissionEntity>;
};

type UsersPermissionsPermissionEntityResponseCollection = {
  data: Array<UsersPermissionsPermissionEntity>;
  meta: ResponseCollectionMeta;
};

type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type UsersPermissionsPermissionInput = {
  action?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
};

type UsersPermissionsPermissionRelationResponseCollection = {
  data: Array<UsersPermissionsPermissionEntity>;
};

type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

type UsersPermissionsRole = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type UsersPermissionsRoleEntity = {
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

type UsersPermissionsRoleEntityResponse = {
  data?: Maybe<UsersPermissionsRoleEntity>;
};

type UsersPermissionsRoleEntityResponseCollection = {
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

type UsersPermissionsRoleRelationResponseCollection = {
  data: Array<UsersPermissionsRoleEntity>;
};

type UsersPermissionsUpdateRolePayload = {
  ok: Scalars['Boolean']['output'];
};

type UsersPermissionsUser = {
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  lastAttendanceDate?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  setting?: Maybe<SettingEntityResponse>;
  settings?: Maybe<SettingRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};


type UsersPermissionsUserSettingsArgs = {
  filters?: InputMaybe<SettingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type UsersPermissionsUserEntity = {
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

type UsersPermissionsUserEntityResponse = {
  data?: Maybe<UsersPermissionsUserEntity>;
};

type UsersPermissionsUserEntityResponseCollection = {
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lastAttendanceDate?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  setting?: InputMaybe<SettingFiltersInput>;
  settings?: InputMaybe<SettingFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  lastAttendanceDate?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  setting?: InputMaybe<Scalars['ID']['input']>;
  settings?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  username?: InputMaybe<Scalars['String']['input']>;
};

type UsersPermissionsUserRelationResponseCollection = {
  data: Array<UsersPermissionsUserEntity>;
};

type Variable = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  prompt?: Maybe<PromptEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

type VariableEntity = {
  attributes?: Maybe<Variable>;
  id?: Maybe<Scalars['ID']['output']>;
};

type VariableEntityResponse = {
  data?: Maybe<VariableEntity>;
};

type VariableEntityResponseCollection = {
  data: Array<VariableEntity>;
  meta: ResponseCollectionMeta;
};

type VariableFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<VariableFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  not?: InputMaybe<VariableFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VariableFiltersInput>>>;
  prompt?: InputMaybe<PromptFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type VariableInput = {
  prompt?: InputMaybe<Scalars['ID']['input']>;
};

type VariableRelationResponseCollection = {
  data: Array<VariableEntity>;
};

type Word = {
  active?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  list?: Maybe<ListEntityResponse>;
  point?: Maybe<Scalars['Long']['output']>;
  studied?: Maybe<Scalars['Boolean']['output']>;
  translation?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  word?: Maybe<Scalars['String']['output']>;
};

type WordEntity = {
  attributes?: Maybe<Word>;
  id?: Maybe<Scalars['ID']['output']>;
};

type WordEntityResponse = {
  data?: Maybe<WordEntity>;
};

type WordEntityResponseCollection = {
  data: Array<WordEntity>;
  meta: ResponseCollectionMeta;
};

type WordFiltersInput = {
  active?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<WordFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  list?: InputMaybe<ListFiltersInput>;
  not?: InputMaybe<WordFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WordFiltersInput>>>;
  point?: InputMaybe<LongFilterInput>;
  studied?: InputMaybe<BooleanFilterInput>;
  translation?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  word?: InputMaybe<StringFilterInput>;
};

type WordInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  list?: InputMaybe<Scalars['ID']['input']>;
  point?: InputMaybe<Scalars['Long']['input']>;
  studied?: InputMaybe<Scalars['Boolean']['input']>;
  translation?: InputMaybe<Scalars['String']['input']>;
  word?: InputMaybe<Scalars['String']['input']>;
};

type WordRelationResponseCollection = {
  data: Array<WordEntity>;
};

type WordsListInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  words?: InputMaybe<Array<InputMaybe<WordInput>>>;
};

type WordsPointListInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  point?: InputMaybe<Scalars['Int']['input']>;
};

type ListFragment = { name?: string | null | undefined, closed?: boolean | null | undefined, createdAt?: Date | null | undefined, words?: { data: Array<{ id?: string | null | undefined, attributes?: { word?: string | null | undefined, translation?: string | null | undefined, active?: boolean | null | undefined, studied?: boolean | null | undefined, point?: number | null | undefined } | null | undefined }> } | null | undefined };


type ListFragmentVariables = Exact<{ [key: string]: never; }>;

type SentenceFragment = { text?: string | null | undefined };


type SentenceFragmentVariables = Exact<{ [key: string]: never; }>;

type SettingFragment = { name?: string | null | undefined, theme?: string | null | undefined, level?: EnumSettingLevel | null | undefined, language?: EnumSettingLanguage | null | undefined, tenses?: string | null | undefined };


type SettingFragmentVariables = Exact<{ [key: string]: never; }>;

type WordFragment = { word?: string | null | undefined, translation?: string | null | undefined, active?: boolean | null | undefined, studied?: boolean | null | undefined, point?: number | null | undefined };


type WordFragmentVariables = Exact<{ [key: string]: never; }>;

type ChangeWordsPointMutationVariables = Exact<{
  input?: InputMaybe<Array<InputMaybe<WordsPointListInput>> | InputMaybe<WordsPointListInput>>;
}>;


type ChangeWordsPointMutation = { changeWordsPoint?: { data: Array<{ id?: string | null | undefined, attributes?: { word?: string | null | undefined, translation?: string | null | undefined, active?: boolean | null | undefined, studied?: boolean | null | undefined, point?: number | null | undefined } | null | undefined }> } | null | undefined };

type CheckSentencesMutationVariables = Exact<{
  data?: InputMaybe<Array<InputMaybe<SentenceInput>> | InputMaybe<SentenceInput>>;
}>;


type CheckSentencesMutation = { checkSentences?: { data?: Array<{ id?: string | null | undefined, explain?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

type CreateSettingMutationVariables = Exact<{
  data: SettingInput;
}>;


type CreateSettingMutation = { createSetting?: { data?: { id?: string | null | undefined, attributes?: { name?: string | null | undefined, theme?: string | null | undefined, level?: EnumSettingLevel | null | undefined, language?: EnumSettingLanguage | null | undefined, tenses?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

type CreateWordMutationVariables = Exact<{
  data: WordInput;
}>;


type CreateWordMutation = { createWord?: { data?: { id?: string | null | undefined, attributes?: { word?: string | null | undefined, translation?: string | null | undefined, active?: boolean | null | undefined, studied?: boolean | null | undefined, point?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined };

type CreateWordsListMutationVariables = Exact<{
  input: WordsListInput;
}>;


type CreateWordsListMutation = { createWordsList?: { data?: { id?: string | null | undefined, attributes?: { name?: string | null | undefined, closed?: boolean | null | undefined, createdAt?: Date | null | undefined, words?: { data: Array<{ id?: string | null | undefined, attributes?: { word?: string | null | undefined, translation?: string | null | undefined, active?: boolean | null | undefined, studied?: boolean | null | undefined, point?: number | null | undefined } | null | undefined }> } | null | undefined } | null | undefined } | null | undefined } | null | undefined };

type DeleteWordMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type DeleteWordMutation = { deleteWord?: { data?: { id?: string | null | undefined, attributes?: { word?: string | null | undefined, translation?: string | null | undefined, active?: boolean | null | undefined, studied?: boolean | null | undefined, point?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined };

type GetSentencesMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type GetSentencesMutation = { getSentences?: { data?: Array<{ text?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

type GetStoryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type GetStoryMutation = { getStory?: { story?: string | null | undefined } | null | undefined };

type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput;
}>;


type LoginMutation = { login: { jwt?: string | null | undefined, user: { id: string } } };

type RegisterMutationVariables = Exact<{
  input: UsersPermissionsRegisterInput;
}>;


type RegisterMutation = { register: { jwt?: string | null | undefined, user: { id: string, email?: string | null | undefined, username: string } } };

type UpdateListMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: ListInput;
}>;


type UpdateListMutation = { updateList?: { data?: { id?: string | null | undefined, attributes?: { name?: string | null | undefined, closed?: boolean | null | undefined, createdAt?: Date | null | undefined, words?: { data: Array<{ id?: string | null | undefined, attributes?: { word?: string | null | undefined, translation?: string | null | undefined, active?: boolean | null | undefined, studied?: boolean | null | undefined, point?: number | null | undefined } | null | undefined }> } | null | undefined } | null | undefined } | null | undefined } | null | undefined };

type UpdateSettingMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: SettingInput;
}>;


type UpdateSettingMutation = { updateSetting?: { data?: { id?: string | null | undefined, attributes?: { name?: string | null | undefined, theme?: string | null | undefined, level?: EnumSettingLevel | null | undefined, language?: EnumSettingLanguage | null | undefined, tenses?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

type UpdateWordMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: WordInput;
}>;


type UpdateWordMutation = { updateWord?: { data?: { id?: string | null | undefined, attributes?: { word?: string | null | undefined, translation?: string | null | undefined, active?: boolean | null | undefined, studied?: boolean | null | undefined, point?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined };

type UpdateWordsPointsMutationVariables = Exact<{ [key: string]: never; }>;


type UpdateWordsPointsMutation = { updateWordsPoints?: { data: Array<{ id?: string | null | undefined, attributes?: { word?: string | null | undefined, translation?: string | null | undefined, active?: boolean | null | undefined, studied?: boolean | null | undefined, point?: number | null | undefined } | null | undefined }> } | null | undefined };

type ListQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type ListQuery = { list?: { data?: { id?: string | null | undefined, attributes?: { name?: string | null | undefined, closed?: boolean | null | undefined, createdAt?: Date | null | undefined, words?: { data: Array<{ id?: string | null | undefined, attributes?: { word?: string | null | undefined, translation?: string | null | undefined, active?: boolean | null | undefined, studied?: boolean | null | undefined, point?: number | null | undefined } | null | undefined }> } | null | undefined } | null | undefined } | null | undefined } | null | undefined };

type ListsQueryVariables = Exact<{
  filters?: InputMaybe<ListFiltersInput>;
}>;


type ListsQuery = { lists?: { data: Array<{ id?: string | null | undefined, attributes?: { name?: string | null | undefined, closed?: boolean | null | undefined, createdAt?: Date | null | undefined, words?: { data: Array<{ id?: string | null | undefined, attributes?: { word?: string | null | undefined, translation?: string | null | undefined, active?: boolean | null | undefined, studied?: boolean | null | undefined, point?: number | null | undefined } | null | undefined }> } | null | undefined } | null | undefined }> } | null | undefined };

type MeQueryVariables = Exact<{ [key: string]: never; }>;


type MeQuery = { me?: { email: string, setting?: { data?: { id?: string | null | undefined, attributes?: { name?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined };

type SettingQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type SettingQuery = { setting?: { data?: { id?: string | null | undefined, attributes?: { name?: string | null | undefined, theme?: string | null | undefined, level?: EnumSettingLevel | null | undefined, language?: EnumSettingLanguage | null | undefined, tenses?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

type SettingsQueryVariables = Exact<{ [key: string]: never; }>;


type SettingsQuery = { settings?: { data: Array<{ id?: string | null | undefined, attributes?: { name?: string | null | undefined, theme?: string | null | undefined, level?: EnumSettingLevel | null | undefined, language?: EnumSettingLanguage | null | undefined, tenses?: string | null | undefined } | null | undefined }> } | null | undefined };
