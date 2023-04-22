import { CreatePostTypes } from "../../types";

export const createACommentInitials: CreatePostTypes = {
  text: "",
  isBaseComment: true,
};

export const createACommentOnCommentInitials: CreatePostTypes = {
  text: "",
  isBaseComment: false,
};
