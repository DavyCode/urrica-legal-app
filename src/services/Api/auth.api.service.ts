import axiosService from "utils/axios.service.helper";
import configEnv from "config";
import { LoginTypes, RegisterUserTypes, VerifyEmailOtpTypes, EmailTypes, ResetPasswordTypes } from "types/auth.types";

export default class Auth_API {
  static async loginUser(userData: LoginTypes): Promise<any> {
    return await axiosService({
      method: "POST",
      data: userData,
      url: `${configEnv.BASE_API_URL}/auth`,
    });
  }
  static async registerUser(userData: RegisterUserTypes): Promise<any> {
    return await axiosService({
      method: "POST",
      data: userData,
      url: `${configEnv.BASE_API_URL}/users`,
    });
  }
  static async verifyUserEmailOTP(userData: VerifyEmailOtpTypes): Promise<any> {
    return await axiosService({
      method: "GET",
      url: `${configEnv.BASE_API_URL}/users/verify/${userData.verifyEmailOtp}`,
    });
  }
  static async getVerifyUserEmailOTP(userData: EmailTypes): Promise<any> {
    return await axiosService({
      method: "GET",
      url: `${configEnv.BASE_API_URL}/users/verify/otp/${userData.email}`,
    });
  }
  static async getPasswordResetOtp(userData: EmailTypes): Promise<any> {
    return await axiosService({
      method: "GET",
      url: `${configEnv.BASE_API_URL}/users/password/reset/${userData.email}`,
    });
  }
  static async resetPassword(userData: ResetPasswordTypes): Promise<any> {
    return await axiosService({
      method: "GET",
      url: `${configEnv.BASE_API_URL}/users/password/reset/${userData.otp}/${userData.password}`,
    });
  }
}
