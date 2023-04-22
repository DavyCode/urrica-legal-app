import { NextRouter } from "next/router";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { usersConstant, usersProfileConstant } from "../../constants";

import { ChangePasswordTypes, UserProfileTypes } from "../../types";
import { AppToaster } from "../../utils/AppToast";
import { FormatErrorArray } from "../../utils/error";
import API_USERS_SETTINGS from "../../services/Api/users.api.services";

interface ChangePasswordPayload {
  userData: ChangePasswordTypes;
  userId: string;
}

interface UpdateUserProfilePayload {
  userData: UserProfileTypes;
  userId: string;
}

export const changeUserPasswordAction = createAsyncThunk(
  usersConstant.CHANGE_PASSWORD,
  async ({ userData, userId }: ChangePasswordPayload, { rejectWithValue }) => {
    try {
      const { data } = await API_USERS_SETTINGS.changePassword(userData, userId);
      AppToaster("Password changed successfully", "top-center", "success");
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

export const changeUserProfileAction = createAsyncThunk(
  usersProfileConstant.UPDATE_USER_PROFILE,
  async ({ userData, userId }: UpdateUserProfilePayload, { rejectWithValue }) => {
    try {
      const { data } = await API_USERS_SETTINGS.updateUserProfile(userData, userId);
      AppToaster("Profile updated successfully", "top-center", "success");
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
