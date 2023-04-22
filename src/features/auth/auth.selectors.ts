import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { AuthState } from "./auth.reducer";

// calling the above actions would be useless if we could not access
// the data in the state. So, we use something called a selector which
// allows us to select a value from the state.
export const selectAuth = (state: RootState): AuthState => state.auth;

export const AuthSelector = createSelector(selectAuth, (state) => state);
