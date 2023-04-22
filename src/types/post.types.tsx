export type CreatePostTypes = {
  text: string;
  isBaseComment?: boolean;
};

export type Post = {
  comments: any[],
  meta: {
    createdAt: string;
    updatedAt: string;
  };
  _id: string;
  community: string;
  text: string;
  owner: {
    _id: string;
    firstName: string;
    lastName: string;
    profileImage: string;
  };
  images: string[];
  isDagerous: boolean;
  isViewable: boolean;
  __v: number;
  commentsCount: number;
  upvotesCount: number;
  downvotesCount: number;
};

export type CommentType = {
  comments?: any[],
  meta: {
    createdAt: string;
    updatedAt: string;
  };
  _id: string;
  community: string;
  text: string;
  owner: {
    _id: string;
    firstName: string;
    lastName: string;
    profileImage: string;
  };
  images: string[];
  post: string;
  isBaseComment: boolean;
  isDagerous: boolean;
  isViewable: boolean;
  __v: number;
  commentsCount: number;
  upvotesCount: number;
  downvotesCount: number;
};

export type PostComment = {
  comments: string[];
  post: {
    meta: {
      createdAt: string;
      updatedAt: string;
    };
    _id: string;
    community: string;
    text: string;
    owner: {
      _id: string;
      firstName: string;
      lastName: string;
      profileImage: string;
    };
    images: string[];
    isDagerous: boolean;
    isViewable: boolean;
    __v: number;
    commentsCount: number;
    upvotesCount: number;
    downvotesCount: number;
  }
};

export type GetAllPostsType = {
  statusCode: number;
  status: string;
  message: string;
  data: { limit: number; posts: Post[]; queryWith: { [key: string]: any; }; skip: number; totalDocumentCount: number };
};
