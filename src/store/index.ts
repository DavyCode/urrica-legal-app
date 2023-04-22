import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth";
import { userReducer } from "../features/users";
import { postReducer } from "../features/post";
import { commentReducer } from "features/comments";
import toggleReducer from "../slices/toggleSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    toggle: toggleReducer,
    user: userReducer,
    post: postReducer,
    comment: commentReducer
  },
  // devTools: true,
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
