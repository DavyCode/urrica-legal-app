// https://react-hook-form.com/kr/v6/api/
import * as Yup from "yup";

export const loginSchemaValidator = Yup.object().shape({
	password: Yup.string()
		.min(8, "Must be 8 characters or greater")
		.required("Password required"),
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
});

export const resetPasswordSchemaValidator = Yup.object().shape({
	password: Yup.string()
		.min(8, "Must be 8 characters or greater")
		.required("Password required"),
	otp: Yup.string()
		.min(6, "OTP must be 6 digits")
		.max(6, "OTP is more than 6 digits")
		.required("Valid OTP required"),
});

export const emailSchemaValidator = Yup.object().shape({
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
});

export const registerSchemaValidator = Yup.object().shape({
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	firstName: Yup.string().required("First name is required"),
	lastName: Yup.string().required("Last name is required"),
	password: Yup.string()
		.min(8, "Must be 8 characters or greater")
		.required("Password required"),
	referredBy: Yup.string(),
	howDidYouHearAboutUs: Yup.string().required(
		"Please tell us how you found us"
	),
});

export const verifyEmailOtpSchemaValidator = Yup.object().shape({
	verifyEmailOtp: Yup.string()
		.min(6, "OTP must be 6 digits")
		.max(6, "OTP is more than 6 digits")
		.required("Valid OTP required"),
});

export const profileSchemaValidator = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  gender: Yup.string()
    .oneOf(["Male", "Female", "Non-binary", "Prefer not to say"])
    .required("Select Gender")
});

export const passwordSchemaValidator = Yup.object().shape({
	oldPassword: Yup.string().required("Old password is required"),
	newPassword: Yup.string()
		.notOneOf(
			[Yup.ref("oldPassword"), null],
			"New password must be different from old password"
		)
		.min(8, "Must be 8 characters or greater")
		.required("New password is required"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("newPassword"), null], "Passwords must match")
		.required("Confirm password is required"),
});
