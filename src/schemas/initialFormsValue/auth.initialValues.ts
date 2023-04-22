import { ProfileTypes, PasswordTypes } from "../../types";
import {
  LoginTypes,
  RegisterUserTypes,
  VerifyEmailOtpTypes,
  EmailTypes,
  ResetPasswordTypes,
} from "../../types/auth.types";

const loginInitials: LoginTypes = {
  password: "",
  email: "",
};

const emailInitials: EmailTypes = {
  email: "",
};

const resetPasswordInitials: ResetPasswordTypes = {
  password: "",
  otp: "",
};

const registerUserInitials: RegisterUserTypes = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  referredBy: "",
  howDidYouHearAboutUs: "",
};

const verifyEmailOtpInitials: VerifyEmailOtpTypes = {
  verifyEmailOtp: "",
};

const profileInitials: ProfileTypes = {
  firstName: "",
  lastName: "",
  gender: "",
  country: "",
  state: "",
  address: "",
};

const passwordInitials: PasswordTypes = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export {
  loginInitials,
  profileInitials,
  passwordInitials,
  registerUserInitials,
  verifyEmailOtpInitials,
  emailInitials,
  resetPasswordInitials,
};
