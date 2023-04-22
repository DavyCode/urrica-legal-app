import axiosService from "utils/axios.service.helper";
import configEnv from "config";
import { CreatePostTypes } from "types";

export default class API_USER_COMMENT {
	static async addACommentToPost(
		commentInfo: CreatePostTypes,
		postId: string
	): Promise<any> {
		const userToken = localStorage.getItem("token");
		return await axiosService({
			method: "POST",
			data: commentInfo,
			url: `${configEnv.BASE_API_URL}/posts/${postId}/comments`,
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		});
	}

	static async addACommentToComment(
		commentInfo: CreatePostTypes,
		postId: string,
		commentId: string
	): Promise<any> {
		const userToken = localStorage.getItem("token");
		return await axiosService({
			method: "POST",
			data: commentInfo,
			url: `${configEnv.BASE_API_URL}/posts/${postId}/comments/${commentId}`,
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		});
	}

	static async getSinglePostComments(postId: string): // userId: string
	Promise<any> {
		const userToken = localStorage.getItem("token");
		return await axiosService({
			method: "GET",
			url: `${configEnv.BASE_API_URL}/posts/${postId}/comments?skip=0&limit=20`,
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		});
	}

	static async putUpCommentVote(
		postId: string,
		commentId: string
	): Promise<any> {
		const userToken = localStorage.getItem("token");
		return await axiosService({
			method: "PUT",
			url: `${configEnv.BASE_API_URL}/posts/${postId}/comments/${commentId}/upvote`,
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		});
	}

	static async putDownCommentVote(
		postId: string,
		commentId: string
	): Promise<any> {
		const userToken = localStorage.getItem("token");
		return await axiosService({
			method: "PUT",
			url: `${configEnv.BASE_API_URL}/posts/${postId}/comments/${commentId}/downvote`,
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		});
	}

	static async getACommentById(
		postId: string,
		commentId: string
	): Promise<any> {
		const userToken = localStorage.getItem("token");
		return await axiosService({
			method: "GET",
			url: `${configEnv.BASE_API_URL}/posts/${postId}/comments/${commentId}`,
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		});
	}

	static async getAPublicCommentById(
		postId: string,
		commentId: string
	): Promise<any> {
		return await axiosService({
			method: "GET",
			url: `${configEnv.BASE_API_URL}/posts/${postId}/comments/${commentId}`,
		});
	}

	static async getAllCommentOfAComment(
		postId: string,
		commentId: string
	): Promise<any> {
		const userToken = localStorage.getItem("token");

		return await axiosService({
			method: "GET",
			url: `${configEnv.BASE_API_URL}/public/posts/${postId}/comments/${commentId}/comments`,
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		});
	}

	static async getAllPublicCommentOfAComment(
		postId: string,
		commentId: string
	): Promise<any> {
		return await axiosService({
			method: "GET",
			url: `${configEnv.BASE_API_URL}/public/posts/${postId}/comments/${commentId}/comments`,
		});
	}

	static async upVoteComment(postId: string, commentId: string): Promise<any> {
		const userToken = localStorage.getItem("token");
		return await axiosService({
			method: "PUT",
			url: `${configEnv.BASE_API_URL}/posts/${postId}/comments/${commentId}/upvote`,
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		});
	}

	static async downVoteComment(
		postId: string,
		commentId: string
	): Promise<any> {
		const userToken = localStorage.getItem("token");
		return await axiosService({
			method: "PUT",
			url: `${configEnv.BASE_API_URL}/posts/${postId}/comments/${commentId}/downvote`,
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		});
	}
}
