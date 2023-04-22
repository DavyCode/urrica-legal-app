// https://redux-toolkit.js.org/api/createReducer#usage-with-the-builder-callback-notation
import {
	createReducer,
	PayloadAction,
	current,
	createSlice,
} from "@reduxjs/toolkit";
import { logUserInAction } from "./auth.actions";

export interface AuthState {
	error: string;
	loading: boolean;
	isAuthenticated: boolean | null;
}

const initialState = {
	error: "",
	loading: false,
	isAuthenticated: null,
} as AuthState;

const authSlice = createSlice({
	name: "auth/slice",
	initialState: initialState,
	reducers: {
		setAuthentication: (state, { payload }) => {
			state.isAuthenticated = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(logUserInAction.pending, (state: AuthState) => {
				state.loading = true;
			})
			.addCase(logUserInAction.fulfilled, (state: AuthState, action) => {
				state.loading = false;
				state.isAuthenticated = true;
			})
			.addCase(
				logUserInAction.rejected,
				(state: AuthState, { payload }: any) => {
					state.loading = false;
					state.error = payload;
				}
			);
	},
});

export const { setAuthentication } = authSlice.actions;
export const authReducer = authSlice.reducer;
