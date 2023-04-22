// https://redux-toolkit.js.org/api/createReducer#usage-with-the-builder-callback-notation
import { createReducer, PayloadAction, current, createSlice } from "@reduxjs/toolkit";
import { ChangePasswordTypes } from "../../types";
import { changeUserPasswordAction } from "./user.actions";

export interface UserState {
  error: string;
  loading: boolean;
  user: ChangePasswordTypes;
}

const initialState = {
  error: "",
  loading: false,
  user: {},
} as UserState;

const userSlice = createSlice({
  name: "user/slice",
  initialState: initialState,
  reducers: {
    /* setAuthentication: (state, { payload }) => {
      state.isAuthenticated = payload;
    }, */
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeUserPasswordAction.pending, (state: UserState) => {
        state.loading = true;
      })
      .addCase(changeUserPasswordAction.fulfilled, (state: UserState, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(changeUserPasswordAction.rejected, (state: UserState, { payload }: any) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const userReducer = userSlice.reducer;
