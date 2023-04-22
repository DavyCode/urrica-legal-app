// https://redux-toolkit.js.org/api/createReducer#usage-with-the-builder-callback-notation
import {
  createReducer,
  PayloadAction,
  current,
  createSlice,
} from "@reduxjs/toolkit";
import { CreatePostTypes } from "../../types";
import { createAPostCommentAction } from "./comment.actions";

export interface ReplyState {
  error: string;
  loading: boolean;
  replyInfo: CreatePostTypes;
}

const initialState = {
  error: "",
  loading: false,
  replyInfo: {},
} as ReplyState;

const commentSlice = createSlice({
  name: "comment/slice",
  initialState: initialState,
  reducers: {
    /* setAuthentication: (state, { payload }) => {
      state.isAuthenticated = payload;
    }, */
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAPostCommentAction.pending, (state: ReplyState) => {
        state.loading = true;
      })
      .addCase(createAPostCommentAction.fulfilled, (state: ReplyState, action) => {
        state.loading = false;
        state.replyInfo.isBaseComment = true;
        state.replyInfo = action.payload.data;
      })
      .addCase(
        createAPostCommentAction.rejected,
        (state: ReplyState, { payload }: any) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export const commentReducer = commentSlice.reducer;
