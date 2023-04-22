import { NextRouter } from "next/router";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import API_AUTH from "../../services/Api/auth.api.service";
import API_USERS_POST from "../../services/Api/post.api.service";
import AuthModule from "../../modules/auth.module";
import { AppDispatch } from "../../store";

import { CreatePostTypes, Post } from "../../types";
import { AppToaster } from "../../utils/AppToast";
import { FormatErrorArray } from "../../utils/error";
import { commentConstant } from "./../../constants/actionTypes.constant";
import API_USER_COMMENT from "./../../services/Api/comments.api.service";

interface CommentPayload {
	replyInfo: CreatePostTypes;
	postId: string;
	// router: NextRouter;
}

interface CommentOnPayload {
	replyInfo: CreatePostTypes;
	commentId: string;
	postId: string;
}

export const createAPostCommentAction = createAsyncThunk(
	commentConstant.CREATE_A_NEW_COMMENT,
	async ({ replyInfo, postId }: CommentPayload, { rejectWithValue }) => {
		try {
			const { data } = await API_USER_COMMENT.addACommentToPost(
				replyInfo,
				postId
			);

			AppToaster("Comment created successfully ", "top-center", "success");

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

export const createACommentOnCommentAction = createAsyncThunk(
	commentConstant.CREATE_A_NEW_COMMENT,
	async (
		{ replyInfo, postId, commentId }: CommentOnPayload,
		{ rejectWithValue }
	) => {
		try {
			const { data } = await API_USER_COMMENT.addACommentToComment(
				replyInfo,
				postId,
				commentId
			);

			AppToaster("Comment created ", "top-center", "success");

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
