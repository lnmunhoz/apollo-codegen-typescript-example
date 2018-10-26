/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FeedQuery
// ====================================================

export interface FeedQuery_feed {
  __typename: "Post";
  id: string;
  title: string;
}

export interface FeedQuery {
  feed: FeedQuery_feed[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostQuery
// ====================================================

export interface PostQuery_post {
  __typename: "Post";
  id: string;
  text: string;
}

export interface PostQuery {
  post: PostQuery_post | null;
}

export interface PostQueryVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
