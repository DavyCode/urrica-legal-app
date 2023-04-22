import { NextRouter } from "next/router";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import API_AUTH from "../../services/Api/auth.api.service";
import AuthModule from "../../modules/auth.module";
import { authConstant } from "../../constants";
import { AppDispatch } from "../../store";

import {
  LoginTypes,
  RegisterUserTypes,
  VerifyEmailOtpTypes,
  EmailTypes,
  EmailForOtpVerifyTypes,
  ResetPasswordTypes,
} from "../../types";
import { AppToaster } from "../../utils/AppToast";
import { FormatErrorArray } from "../../utils/error";

interface LoginPayload {
  userData: LoginTypes;
  router: NextRouter;
}

interface RegisterPayload {
  userData: RegisterUserTypes;
  router: NextRouter;
}

interface VerifyUserEmailOTPPayload {
  userData: VerifyEmailOtpTypes;
  router: NextRouter;
}

interface GetVerifyUserEmailOTPPayload {
  userData: EmailForOtpVerifyTypes;
  router: NextRouter;
}

interface ResetPasswordPayload {
  userData: ResetPasswordTypes;
  router: NextRouter;
}

export const logUserInAction = createAsyncThunk(
  authConstant.AUTH_LOGIN,
  async ({ userData, router }: LoginPayload, { rejectWithValue }) => {
    try {
      const { data } = await API_AUTH.loginUser(userData);
      AuthModule.authenticateUser(data);

      AppToaster("Welcome ", "top-center", "success");

      if (router.query && router.query.from) {
        router.push(`${router.query.from}`);
      } else {
        router.push("/");
      }
      
      return data;
    } catch (ex: any) {
      const msg: string = ex.response
        ? FormatErrorArray(ex.response?.data.errors)
        : new Error("Something went wrong!").message;

      console.log("Error", msg, ex.response.data.errors);
      AppToaster(msg, "top-center", "error");
      return rejectWithValue(msg);
    }
  },
);

export const registerUserAction = createAsyncThunk(
  authConstant.AUTH_REGISTER,
  async ({ userData, router }: RegisterPayload, { rejectWithValue }) => {
    try {
      const { data } = await API_AUTH.registerUser(userData);
      router.push(`/email-verification?email=${userData.email}`);
      AppToaster("Verification OTP sent to email", "top-center", "success");
      return data;
    } catch (ex: any) {
      const msg: string = ex.response
        ? FormatErrorArray(ex.response?.data.errors)
        : new Error("Something went wrong!").message;

      AppToaster(msg, "top-center", "error");
      return rejectWithValue(msg);
    }
  },
);

export const verifyUserEmailAction = createAsyncThunk(
  authConstant.AUTH_VERIFY_USER_OTP,
  async ({ userData, router }: VerifyUserEmailOTPPayload, { rejectWithValue }) => {
    try {
      const { data } = await API_AUTH.verifyUserEmailOTP(userData);
      router.push("/login");
      AppToaster("All set, Login now", "top-center", "success");
      return data;
    } catch (ex: any) {
      const msg: string = ex.response
        ? FormatErrorArray(ex.response?.data.errors)
        : new Error("Something went wrong!").message;

      AppToaster(msg, "top-center", "error");
      return rejectWithValue(msg);
    }
  },
);

export const getVerifyUserEmailOTPAction = createAsyncThunk(
  authConstant.AUTH_VERIFY_USER_OTP,
  async ({ userData, router }: GetVerifyUserEmailOTPPayload, { rejectWithValue }) => {
    try {
      const { data } = await API_AUTH.getVerifyUserEmailOTP(userData);

      AppToaster("Check your email for verification OTP", "top-center", "success");
      return data;
    } catch (ex: any) {
      if (ex.response.data.statusCode === 404 || ex.response.data.statusCode === 403) {
        router.push("/register");
      }
      const msg: string = ex.response
        ? FormatErrorArray(ex.response?.data.errors)
        : new Error("Something went wrong!").message;

      AppToaster(msg, "top-center", "error");
      return rejectWithValue(msg);
    }
  },
);

export const getPasswordResetOtpAction = createAsyncThunk(
  authConstant.AUTH_FORGET_PASSWORD,
  async ({ userData, router }: GetVerifyUserEmailOTPPayload, { rejectWithValue }) => {
    try {
      const { data } = await API_AUTH.getPasswordResetOtp(userData);
      router.push("/reset-password");
      AppToaster("Check your email for reset OTP", "top-center", "success");
      return data;
    } catch (ex: any) {
      const msg: string = ex.response
        ? FormatErrorArray(ex.response?.data.errors)
        : new Error("Something went wrong!").message;

      AppToaster(msg, "top-center", "error");
      return rejectWithValue(msg);
    }
  },
);

export const resetPasswordAction = createAsyncThunk(
  authConstant.AUTH_FORGET_PASSWORD,
  async ({ userData, router }: ResetPasswordPayload, { rejectWithValue }) => {
    try {
      const { data } = await API_AUTH.resetPassword(userData);
      router.push("/login");
      AppToaster("All set, Login", "top-center", "success");
      return data;
    } catch (ex: any) {
      const msg: string = ex.response
        ? FormatErrorArray(ex.response?.data.errors)
        : new Error("Something went wrong!").message;

      AppToaster(msg, "top-center", "error");
      return rejectWithValue(msg);
    }
  },
);
