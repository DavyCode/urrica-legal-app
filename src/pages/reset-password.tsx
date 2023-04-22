import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";

import Button from "../components/Button/index";
import TogglePasswordText from "../svgs/toggle-password.svg";

import Logo from "../svgs/logo.svg";
import InputField from "../components/Forms/text-input";
import { ResetPasswordTypes } from "../types";
import { resetPasswordInitials } from "../schemas/initialFormsValue";
import { resetPasswordSchemaValidator } from "../schemas/validators/auth.validator";
import { useAppDispatch, useAppSelector } from "../hooks";
import { resetPasswordAction, selectAuth } from "../features/auth";

const ResetPassword = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(selectAuth);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    defaultValues: {
      ...resetPasswordInitials,
    },
    resolver: yupResolver(resetPasswordSchemaValidator),
  });

  const onSubmit = async (data: ResetPasswordTypes) => {
    dispatch(resetPasswordAction({ userData: data, router }));
  };

  const handleShowPassword = () => setShowPassword(!showPassword);
  return (
    <div className='flex flex-col justify-center h-fit md:h-screen w-full md:w-[529px] pt-4 md:pt-9 mx-auto md:px-[85px]'>
      <Logo
        className='flex justify-start md:justify-center ml-5 mb-9 md:mb-4 md:mx-auto object-contain'
        aria-label='Website logo'
      />
      <form onSubmit={handleSubmit(onSubmit)} className='form-wrapper rounded-lg h-auto text-center bg-white'>
        <div className='h-auto text-center'>
          <p className='text-center font-bold text-xl mb-1 mt-4'>Set new password</p>
          <span className='inline-block text-center font-normal text-sm mb-6 px-6'>
            Enter your email and we will send you a password reset link
          </span>
          <div className='px-10 text-left gap-y-6'>
            <InputField
              label='Reset OTP'
              name='otp'
              type='number'
              error={errors.otp?.message}
              placeholder='000000'
              register={register}
            />
            <InputField
              label='Password'
              name='password'
              type={showPassword ? "text" : "password"}
              error={errors.password?.message}
              placeholder='Password'
              icon={<TogglePasswordText onClick={handleShowPassword} className='cursor-pointer' />}
              register={register}
            />
            <Button
              variant='primary'
              type='submit'
              value={loading ? "Loading..." : "Reset password"}
              disabled={loading}
              handleClick={handleSubmit(onSubmit)}
              additionalClassname={"w-full md:w-[278px] mx-auto my-2 font-bold hover:text-white"}
            />
            <p className='text-xs mt-4 text-center mb-4'>
              <Link href='/login' passHref>
                <span className='font-bold text-[#E6B800]'>Back to log in</span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
