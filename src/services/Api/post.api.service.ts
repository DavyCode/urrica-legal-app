import axiosService, { clientService } from "utils/axios.service.helper";
import configEnv from "config";
import { CreatePostTypes, GetAllPostsType } from "types";
import { QueryFunctionContext, useQuery } from "react-query";
import { AxiosResponse } from "axios";

export default class API_USERS_POST {
	static async addAPost(text: CreatePostTypes): Promise<any> {
		const userToken = localStorage.getItem("token");
		return await axiosService({
			method: "POST",
			data: text,
			url: `${configEnv.BASE_API_URL}/posts`,
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		});
	}

	static async getUserPosts(
		queryContext: QueryFunctionContext<[string, { [key: string]: any }]>
	): Promise<any> {
		const { queryKey } = queryContext;
		const [, params] = queryKey;
		const { userId, ...rest } = params;
		const userToken = localStorage.getItem("token");
		return await axiosService({
			method: "GET",
			// data: userId,
			params: rest,
			url: `${configEnv.BASE_API_URL}/posts/${userId}`,
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		});
	}

	static async getAllPost(): // userId: string
	Promise<any> {
		const userToken = localStorage.getItem("token");
		return await axiosService({
			method: "GET",
			url: `${configEnv.BASE_API_URL}/posts`,
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		});
	}

	static async getPublicPosts(): // userId: string
	Promise<any> {
		return await axiosService({
			method: "GET",
			url: `${configEnv.BASE_API_URL}/public/posts`,
		});
	}

	static async getAPostById(id: string): Promise<any> {
		const userToken = localStorage.getItem("token");
		return await axiosService({
			method: "GET",
			url: `${configEnv.BASE_API_URL}/posts/${id}`,
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		});
	}

	static async deleteAPostById(id: string): Promise<any> {
		const userToken = localStorage.getItem("token");
		return await axiosService({
			method: "DELETE",
			url: `${configEnv.BASE_API_URL}/posts/${id}`,
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		});
	}

	static async getAPublicPostById(id: string): Promise<any> {
		return await axiosService({
			method: "GET",
			url: `${configEnv.BASE_API_URL}/public/posts/${id}`,
		});
	}

	// TODO: Paginate this
	static async getAllCommentOfAPost(postId: string): Promise<any> {
		const userToken = localStorage.getItem("token");

		return await axiosService({
			method: "GET",
			url: `${configEnv.BASE_API_URL}/public/posts/${postId}/comments`,
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		});
	}

	// TODO: Paginate this
	static async getAllPublicCommentOfAPost(postId: string): Promise<any> {
		return await axiosService({
			method: "GET",
			url: `${configEnv.BASE_API_URL}/public/posts/${postId}/comments`,
		});
	}

	static async putUpVote(id: string): Promise<any> {
		const userToken = localStorage.getItem("token");
		return await axiosService({
			method: "PUT",
			url: `${configEnv.BASE_API_URL}/posts/${id}/upvote`,
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		});
	}

	static async putDownVote(id: string): Promise<any> {
		const userToken = localStorage.getItem("token");
		return await axiosService({
			method: "PUT",
			url: `${configEnv.BASE_API_URL}/posts/${id}/downvote`,
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		});
	}
}

async function getAllPost(
	queryContext: QueryFunctionContext<[string, { [key: string]: any }]>
): // userId: string
Promise<any> {
	const { queryKey } = queryContext;
	const [, params] = queryKey;
	const { userId, ...rest } = params;
	const userToken = localStorage.getItem("token");
	const res = await clientService.get<GetAllPostsType>(
		`${configEnv.BASE_API_URL}/posts`,
		{
			params: rest,
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		}
	);

	return res;
}

export const useGetAllPosts = (params: { [key: string]: any }) => {
	return useQuery<
		GetAllPostsType,
		Error,
		AxiosResponse<GetAllPostsType>,
		[string, { [key: string]: any }]
	>(["post-list", params], getAllPost);
};
