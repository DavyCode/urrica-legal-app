import axiosService from "../../utils/axios.service.helper";
import configEnv from "config";
import { ChangePasswordTypes, UserProfileTypes } from "../../types";

export default class API_USERS_SETTINGS {
  static async changePassword(userData: ChangePasswordTypes, userId: string): Promise<any> {
    const userToken = localStorage.getItem("token");
    return await axiosService({
      method: "PUT",
      data: userData,
      url: `${configEnv.BASE_API_URL}/users/password/${userId}`,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
  }

  static async updateUserProfile(userData: any, userId: string): Promise<any> {
    const userToken = localStorage.getItem("token");
    return await axiosService({
      method: "PUT",
      data: userData,
      url: `${configEnv.BASE_API_URL}/users/${userId}`,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
  }
}
