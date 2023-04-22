import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";

import Button from "../components/Button/index";

import Logo from "../svgs/logo.svg";
import GoogleIcon from "../svgs/google_icon.svg";
import TogglePasswordText from "../svgs/toggle-password.svg";
import { useAppDispatch, useAppSelector } from "../hooks";

import OrDivider from "../components/OrDivider";
import InputField from "../components/Forms/text-input";
import { LoginTypes } from "../types";
import { loginInitials } from "../schemas/initialFormsValue";
import { loginSchemaValidator } from "../schemas/validators/auth.validator";
import { selectAuth, logUserInAction } from "../features/auth";

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(selectAuth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...loginInitials,
    },
    resolver: yupResolver(loginSchemaValidator),
  });

  const onSubmit = async (data: LoginTypes) => {
    dispatch(logUserInAction({ userData: data, router }));
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className='flex flex-col justify-center h-fit md:h-full w-full md:w-[529px] pt-4 md:pt-9 mx-auto md:px-[85px]'>
      <Logo
        className='flex justify-start object-contain ml-5 md:justify-center mb-9 md:mb-4 md:mx-auto'
        aria-label='Website logo'
      />
      <form onSubmit={handleSubmit(onSubmit)} className='h-auto text-center bg-white rounded-lg form-wrapper'>
        <div className='h-auto text-center'>
          <p className='mt-4 mb-1 text-xl font-bold text-center'>Login</p>
          <span className='inline-block mb-6 text-sm font-normal text-center'>Login to access your account</span>
          <div className='px-10 text-left gap-y-6'>
            <InputField
              label='Email'
              name='email'
              type='email'
              error={errors.email?.message}
              placeholder='Email address'
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

            {/* <label htmlFor="remember" className="flex items-center mb-3">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="mr-2 default:ring-2"
              />
              <span className="text-[#8B8B8B] text-sm">
                Always remember password
              </span>
            </label> */}
            <Button
              variant='primary'
              type='submit'
              value={loading ? "Loading..." : "Log in"}
              disabled={loading}
              handleClick={handleSubmit(onSubmit)}
              additionalClassname={`w-full md:w-[278px] mx-auto my-2 font-bold hover:text-white ${
                loading && "text-white"
              }`}
            />
          </div>
          {/* <OrDivider content='Or' />
          <div className='px-10'>
            <Button
              variant='tertiary'
              type='button'
              disabled={false}
              icon={<GoogleIcon />}
              value='Sign up with Google'
              handleClick={() => {}}
              additionalClassname={"w-full md:w-[278px] mx-auto"}
            />
          </div> */}
          <p className='text-xs mt-[15px] text-center text-[#69758B]'>
            Don&apos;t have an account?
            <Link href='/register' passHref>
              <span className='font-bold ml-2 text-[#E6B800]'>Sign up</span>
            </Link>
          </p>
          <p className='mt-4 mb-4 text-xs text-center'>
            <Link href='/forgot-password' passHref>
              <span className='font-bold text-[#E6B800]'>Forgot your password?</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
