export type Comment = {
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
  post: string;
  isBaseComment: boolean;
  images: [];
  isDagerous: boolean;
  isViewable: boolean;
  __v: number;
  commentsCount: number;
  upvotesCount: number;
  downvotesCount: number;
}[];