import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ReplyState } from "./comment.reducer";

// calling the above actions would be useless if we could not access
// the data in the state. So, we use something called a selector which
// allows us to select a value from the state.
export const selectComment = (state: RootState): ReplyState => state.comment;

export const CommentSelector = createSelector(selectComment, (state) => state);
