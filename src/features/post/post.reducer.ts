// https://redux-toolkit.js.org/api/createReducer#usage-with-the-builder-callback-notation
import { createReducer, PayloadAction, current, createSlice } from "@reduxjs/toolkit";
import { CreatePostTypes } from "../../types";
import { createAPostAction } from "./post.actions";

export interface PostState {
  error: string;
  loading: boolean;
  user: CreatePostTypes;
}

const initialState = {
  error: "",
  loading: false,
  user: {},
} as PostState;

const postSlice = createSlice({
  name: "post/slice",
  initialState: initialState,
  reducers: {
    /* setAuthentication: (state, { payload }) => {
      state.isAuthenticated = payload;
    }, */
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAPostAction.pending, (state: PostState) => {
        state.loading = true;
      })
      .addCase(createAPostAction.fulfilled, (state: PostState, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(createAPostAction.rejected, (state: PostState, { payload }: any) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const postReducer = postSlice.reducer;
