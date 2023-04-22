import { NextRouter } from "next/router";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import API_AUTH from "../../services/Api/auth.api.service";
import API_USERS_POST from "../../services/Api/post.api.service";
import AuthModule from "../../modules/auth.module";
import { postConstant } from "../../constants";
import { AppDispatch } from "../../store";

import { CreatePostTypes, Post } from "../../types";
import { AppToaster } from "../../utils/AppToast";
import { FormatErrorArray } from "../../utils/error";

interface PostPayload {
	text: CreatePostTypes;
	// router: NextRouter;
}

export const createAPostAction = createAsyncThunk(
	postConstant.CREATE_A_NEW_POST,
	async ({ text }: PostPayload, { rejectWithValue }) => {
		try {
			const { data } = await API_USERS_POST.addAPost(text);

			AppToaster("Post created! ", "top-center", "success");

			return data;
		} catch (ex: any) {
			const msg: string = ex.response
				? FormatErrorArray(ex.response?.data.errors)
				: new Error("Something went wrong!").message;

			console.log("Error", msg, ex.response.data.errors);
			AppToaster(msg, "top-center", "error");
			return rejectWithValue(msg);
		}
	}
);
