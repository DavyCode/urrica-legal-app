import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { UserState } from "./user.reducer";

// calling the above actions would be useless if we could not access
// the data in the state. So, we use something called a selector which
// allows us to select a value from the state.
export const selectUser = (state: RootState): UserState => state.user;

export const UserSelector = createSelector(selectUser, (state) => state);
