import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PostState } from "./post.reducer";

// calling the above actions would be useless if we could not access
// the data in the state. So, we use something called a selector which
// allows us to select a value from the state.
export const selectPost = (state: RootState): PostState => state.post;

export const PostSelector = createSelector(selectPost, (state) => state);
