/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  GraphbackObjectID: string;
};

/**  @model  */
export type Comment = {
  __typename?: 'Comment';
  _id: Scalars['GraphbackObjectID'];
  text?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** @manyToOne(field: 'comments', key: 'noteId') */
  note?: Maybe<Note>;
};

export type CommentFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  text?: Maybe<StringInput>;
  description?: Maybe<StringInput>;
  noteId?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<CommentFilter>>;
  or?: Maybe<Array<CommentFilter>>;
  not?: Maybe<CommentFilter>;
};

export type CommentResultList = {
  __typename?: 'CommentResultList';
  items: Array<Maybe<Comment>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type CommentSubscriptionFilter = {
  and?: Maybe<Array<CommentSubscriptionFilter>>;
  or?: Maybe<Array<CommentSubscriptionFilter>>;
  not?: Maybe<CommentSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  text?: Maybe<StringInput>;
  description?: Maybe<StringInput>;
};

export type CreateCommentInput = {
  text?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  noteId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type CreateNoteInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type CreateNutirtionInfoInput = {
  calories?: Maybe<Scalars['Int']>;
  fat?: Maybe<Scalars['Int']>;
  carb?: Maybe<Scalars['Int']>;
  protein?: Maybe<Scalars['Int']>;
};

export type CreateNutritionInput = {
  dessert?: Maybe<Scalars['String']>;
  nutirtionInfoId?: Maybe<Scalars['GraphbackObjectID']>;
};


export type GraphbackObjectIdInput = {
  ne?: Maybe<Scalars['GraphbackObjectID']>;
  eq?: Maybe<Scalars['GraphbackObjectID']>;
  le?: Maybe<Scalars['GraphbackObjectID']>;
  lt?: Maybe<Scalars['GraphbackObjectID']>;
  ge?: Maybe<Scalars['GraphbackObjectID']>;
  gt?: Maybe<Scalars['GraphbackObjectID']>;
  in?: Maybe<Array<Scalars['GraphbackObjectID']>>;
  between?: Maybe<Array<Scalars['GraphbackObjectID']>>;
};

export type IntInput = {
  ne?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  between?: Maybe<Array<Scalars['Int']>>;
};

export type MutateCommentInput = {
  _id: Scalars['GraphbackObjectID'];
  text?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  noteId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type MutateNoteInput = {
  _id: Scalars['GraphbackObjectID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type MutateNutirtionInfoInput = {
  _id: Scalars['GraphbackObjectID'];
  calories?: Maybe<Scalars['Int']>;
  fat?: Maybe<Scalars['Int']>;
  carb?: Maybe<Scalars['Int']>;
  protein?: Maybe<Scalars['Int']>;
};

export type MutateNutritionInput = {
  _id: Scalars['GraphbackObjectID'];
  dessert?: Maybe<Scalars['String']>;
  nutirtionInfoId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createNote?: Maybe<Note>;
  updateNote?: Maybe<Note>;
  deleteNote?: Maybe<Note>;
  createComment?: Maybe<Comment>;
  updateComment?: Maybe<Comment>;
  deleteComment?: Maybe<Comment>;
  createNutrition?: Maybe<Nutrition>;
  updateNutrition?: Maybe<Nutrition>;
  deleteNutrition?: Maybe<Nutrition>;
  createNutirtionInfo?: Maybe<NutirtionInfo>;
  updateNutirtionInfo?: Maybe<NutirtionInfo>;
  deleteNutirtionInfo?: Maybe<NutirtionInfo>;
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};


export type MutationUpdateNoteArgs = {
  input: MutateNoteInput;
};


export type MutationDeleteNoteArgs = {
  input: MutateNoteInput;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationUpdateCommentArgs = {
  input: MutateCommentInput;
};


export type MutationDeleteCommentArgs = {
  input: MutateCommentInput;
};


export type MutationCreateNutritionArgs = {
  input: CreateNutritionInput;
};


export type MutationUpdateNutritionArgs = {
  input: MutateNutritionInput;
};


export type MutationDeleteNutritionArgs = {
  input: MutateNutritionInput;
};


export type MutationCreateNutirtionInfoArgs = {
  input: CreateNutirtionInfoInput;
};


export type MutationUpdateNutirtionInfoArgs = {
  input: MutateNutirtionInfoInput;
};


export type MutationDeleteNutirtionInfoArgs = {
  input: MutateNutirtionInfoInput;
};

/**  @model  */
export type Note = {
  __typename?: 'Note';
  _id: Scalars['GraphbackObjectID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  /**
   * @oneToMany(field: 'note', key: 'noteId')
   * @oneToMany(field: 'note')
   */
  comments: Array<Maybe<Comment>>;
};


/**  @model  */
export type NoteCommentsArgs = {
  filter?: Maybe<CommentFilter>;
};

export type NoteFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  title?: Maybe<StringInput>;
  description?: Maybe<StringInput>;
  and?: Maybe<Array<NoteFilter>>;
  or?: Maybe<Array<NoteFilter>>;
  not?: Maybe<NoteFilter>;
};

export type NoteResultList = {
  __typename?: 'NoteResultList';
  items: Array<Maybe<Note>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type NoteSubscriptionFilter = {
  and?: Maybe<Array<NoteSubscriptionFilter>>;
  or?: Maybe<Array<NoteSubscriptionFilter>>;
  not?: Maybe<NoteSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  title?: Maybe<StringInput>;
  description?: Maybe<StringInput>;
};

/**  @model  */
export type NutirtionInfo = {
  __typename?: 'NutirtionInfo';
  _id: Scalars['GraphbackObjectID'];
  calories?: Maybe<Scalars['Int']>;
  fat?: Maybe<Scalars['Int']>;
  carb?: Maybe<Scalars['Int']>;
  protein?: Maybe<Scalars['Int']>;
};

export type NutirtionInfoFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  calories?: Maybe<IntInput>;
  fat?: Maybe<IntInput>;
  carb?: Maybe<IntInput>;
  protein?: Maybe<IntInput>;
  and?: Maybe<Array<NutirtionInfoFilter>>;
  or?: Maybe<Array<NutirtionInfoFilter>>;
  not?: Maybe<NutirtionInfoFilter>;
};

export type NutirtionInfoResultList = {
  __typename?: 'NutirtionInfoResultList';
  items: Array<Maybe<NutirtionInfo>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type NutirtionInfoSubscriptionFilter = {
  and?: Maybe<Array<NutirtionInfoSubscriptionFilter>>;
  or?: Maybe<Array<NutirtionInfoSubscriptionFilter>>;
  not?: Maybe<NutirtionInfoSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  calories?: Maybe<IntInput>;
  fat?: Maybe<IntInput>;
  carb?: Maybe<IntInput>;
  protein?: Maybe<IntInput>;
};

/**  @model  */
export type Nutrition = {
  __typename?: 'Nutrition';
  _id: Scalars['GraphbackObjectID'];
  dessert?: Maybe<Scalars['String']>;
  /**
   * @oneToOne(key: 'nutirtionInfoId')
   * @oneToOne
   */
  nutirtionInfo?: Maybe<NutirtionInfo>;
};

export type NutritionFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  dessert?: Maybe<StringInput>;
  nutirtionInfoId?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<NutritionFilter>>;
  or?: Maybe<Array<NutritionFilter>>;
  not?: Maybe<NutritionFilter>;
};

export type NutritionResultList = {
  __typename?: 'NutritionResultList';
  items: Array<Maybe<Nutrition>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type NutritionSubscriptionFilter = {
  and?: Maybe<Array<NutritionSubscriptionFilter>>;
  or?: Maybe<Array<NutritionSubscriptionFilter>>;
  not?: Maybe<NutritionSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  dessert?: Maybe<StringInput>;
};

export type OrderByInput = {
  field: Scalars['String'];
  order?: Maybe<SortDirectionEnum>;
};

export type PageRequest = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getDraftNotes?: Maybe<Array<Maybe<Note>>>;
  getNote?: Maybe<Note>;
  findNotes: NoteResultList;
  getComment?: Maybe<Comment>;
  findComments: CommentResultList;
  getNutrition?: Maybe<Nutrition>;
  findNutritions: NutritionResultList;
  getNutirtionInfo?: Maybe<NutirtionInfo>;
  findNutirtionInfos: NutirtionInfoResultList;
};


export type QueryGetNoteArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindNotesArgs = {
  filter?: Maybe<NoteFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};


export type QueryGetCommentArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindCommentsArgs = {
  filter?: Maybe<CommentFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};


export type QueryGetNutritionArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindNutritionsArgs = {
  filter?: Maybe<NutritionFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};


export type QueryGetNutirtionInfoArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindNutirtionInfosArgs = {
  filter?: Maybe<NutirtionInfoFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};

export enum SortDirectionEnum {
  Desc = 'DESC',
  Asc = 'ASC'
}

export type StringInput = {
  ne?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newNote: Note;
  updatedNote: Note;
  deletedNote: Note;
  newComment: Comment;
  updatedComment: Comment;
  deletedComment: Comment;
  newNutrition: Nutrition;
  updatedNutrition: Nutrition;
  deletedNutrition: Nutrition;
  newNutirtionInfo: NutirtionInfo;
  updatedNutirtionInfo: NutirtionInfo;
  deletedNutirtionInfo: NutirtionInfo;
};


export type SubscriptionNewNoteArgs = {
  filter?: Maybe<NoteSubscriptionFilter>;
};


export type SubscriptionUpdatedNoteArgs = {
  filter?: Maybe<NoteSubscriptionFilter>;
};


export type SubscriptionDeletedNoteArgs = {
  filter?: Maybe<NoteSubscriptionFilter>;
};


export type SubscriptionNewCommentArgs = {
  filter?: Maybe<CommentSubscriptionFilter>;
};


export type SubscriptionUpdatedCommentArgs = {
  filter?: Maybe<CommentSubscriptionFilter>;
};


export type SubscriptionDeletedCommentArgs = {
  filter?: Maybe<CommentSubscriptionFilter>;
};


export type SubscriptionNewNutritionArgs = {
  filter?: Maybe<NutritionSubscriptionFilter>;
};


export type SubscriptionUpdatedNutritionArgs = {
  filter?: Maybe<NutritionSubscriptionFilter>;
};


export type SubscriptionDeletedNutritionArgs = {
  filter?: Maybe<NutritionSubscriptionFilter>;
};


export type SubscriptionNewNutirtionInfoArgs = {
  filter?: Maybe<NutirtionInfoSubscriptionFilter>;
};


export type SubscriptionUpdatedNutirtionInfoArgs = {
  filter?: Maybe<NutirtionInfoSubscriptionFilter>;
};


export type SubscriptionDeletedNutirtionInfoArgs = {
  filter?: Maybe<NutirtionInfoSubscriptionFilter>;
};
