import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import InputField from "../components/Forms/text-input";
import { verifyEmailOtpInitials } from "../schemas/initialFormsValue";
import { verifyEmailOtpSchemaValidator } from "../schemas/validators/auth.validator";
import { useAppDispatch, useAppSelector } from "../hooks";
import { verifyUserEmailAction, getVerifyUserEmailOTPAction, selectAuth } from "../features/auth";
import { VerifyEmailOtpTypes, EmailForOtpVerifyTypes } from "../types";

import Button from "../components/Button/index";

import Logo from "../svgs/logo.svg";
import VerifiedCodeField from "../components/Forms/verified-code-input";

const EmailVerification = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(selectAuth);
  const email = router.query.email as string;

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    defaultValues: {
      ...verifyEmailOtpInitials,
    },
    resolver: yupResolver(verifyEmailOtpSchemaValidator),
  });

  const onSubmit = async (data: VerifyEmailOtpTypes) => {
    dispatch(verifyUserEmailAction({ userData: data, router }));
  };

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    if (email) {
      dispatch(getVerifyUserEmailOTPAction({ userData: { email }, router }));
    }
  };

  return (
    <div className='flex flex-col justify-center h-fit md:h-screen w-full md:w-[529px] pt-4 md:pt-9 mx-auto md:px-[85px]'>
      <Logo
        className='flex justify-start md:justify-center ml-5 mb-9 md:mb-4 md:mx-auto object-contain'
        aria-label='Website logo'
      />
      <form onSubmit={handleSubmit(onSubmit)} className='form-wrapper rounded-lg h-auto text-center bg-white'>
        <div className='h-auto text-center'>
          <p className='text-center font-bold text-xl mb-1 mt-4'>Email verification</p>
          <span className='inline-block text-center font-normal text-sm mb-6 px-6'>
            Please enter the 6-digit number sent to your email
          </span>
          <div className='px-10 text-left gap-y-6'>
            <InputField
              // label="Verification Code"
              name='verifyEmailOtp'
              type='text'
              error={errors.verifyEmailOtp?.message}
              placeholder='000000'
              register={register}
            />
            {/* <VerifiedCodeField error={error} /> */}
            <Button
              variant='primary'
              type='submit'
              value={loading ? "Loading..." : "Verify"}
              disabled={loading}
              handleClick={handleSubmit(onSubmit)}
              additionalClassname={"w-full md:w-[278px] mx-auto my-2 font-bold hover:text-white"}
            />
            <p className='text-xs mt-[15px] text-center text-[#69758B] mb-8'>
              Didnt receive the code?
              <button onClick={handleButtonClick}>
                <span className='font-bold ml-2 text-[#E6B800]'>Resend code</span>
              </button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmailVerification;
