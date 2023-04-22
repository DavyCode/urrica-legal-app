export type LoginTypes = {
  email: string
  password: string
}

export type RegisterUserTypes = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  referredBy?: string;
  howDidYouHearAboutUs: string;
}

export type ResetPasswordTypes = {
  password: string;
  otp: string;
}

export type VerifyEmailOtpTypes = {
  verifyEmailOtp: string
};

export type EmailTypes = {
  email: string
};

export type EmailForOtpVerifyTypes = {
  email: string
};

export type ProfileTypes = {
  firstName: string
  lastName: string
  gender: string
  country: string
  state: string
  address: string
};

export type PasswordTypes = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string
}
