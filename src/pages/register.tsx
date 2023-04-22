import React, { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../hooks";

import Button from "../components/Button/index";

import Logo from "../svgs/logo.svg";
import GoogleIcon from "../svgs/google_icon.svg";
import TogglePasswordText from "../svgs/toggle-password.svg";

import OrDivider from "../components/OrDivider";
import InputField from "../components/Forms/text-input";
import SelectField from "../components/Forms/select-input";
import { RegisterUserTypes } from "../types";
import { registerUserInitials } from "../schemas/initialFormsValue";
import { registerSchemaValidator } from "../schemas/validators/auth.validator";
import { registerUserAction, selectAuth } from "../features/auth";

const Register = () => {
  const router = useRouter();
  const { referralCode } = router.query;
  const [refCode, setRefCode] = useState<any>("");
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  // const [loading, setLoading] = useState(false);
  const { loading, error } = useAppSelector(selectAuth);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    defaultValues: {
      ...registerUserInitials,
    },
    resolver: yupResolver(registerSchemaValidator),
  });

  const onSubmit = async (data: RegisterUserTypes) => {
    let userData = data;
    if (!userData.referredBy) {
      const { referredBy, ...rest } = data;
      userData = rest;
      dispatch(registerUserAction({ userData: rest, router }));
    } else {
      dispatch(registerUserAction({ userData: data, router }));
    }
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    if (referralCode) {
      setRefCode(referralCode);
    } else {
      return;
    }
  }, [referralCode]);

  return (
    <div className='flex flex-col justify-center h-fit md:h-full w-full md:w-[529px] pt-4 md:pt-9 mx-auto md:px-[85px]'>
      <Logo
        className='flex justify-start md:justify-center ml-5 mb-9 md:mb-4 md:mx-auto object-contain'
        aria-label='Website logo'
      />
      <form onSubmit={handleSubmit(onSubmit)} className='form-wrapper rounded-lg h-auto text-center bg-white'>
        <div className='h-auto text-center'>
          <p className='text-center font-bold text-xl mb-1 mt-4'>Sign up</p>
          <span className='inline-block text-center font-normal text-sm mb-6'>
            Sign up for free and become a member
          </span>
          <div className='px-10 text-left gap-y-6'>
            <InputField
              label='First Name'
              name='firstName'
              type='text'
              error={errors.firstName?.message}
              placeholder='First Name'
              register={register}
            />
            <InputField
              label='Last Name'
              name='lastName'
              type='text'
              error={errors.lastName?.message}
              placeholder='Last Name'
              register={register}
            />
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
            <InputField
              label='Got a referral code?'
              name='referredBy'
              type='text'
              error={errors.referredBy?.message}
              placeholder='URR12345'
              register={register}
              value={refCode ? refCode : ""}
            />

            <SelectField
              name='howDidYouHearAboutUs'
              // type="select"
              error={errors.howDidYouHearAboutUs?.message}
              placeholder='Tell us how you found us'
              register={register}
              // className={styles.select}
              // label="Got a referral code?"
              // value={selectValue}
              // onChange={onChange}
            >
              <option value=''>How did you hear about us</option>
              <option value='Facebook'>Facebook</option>
              <option value='Twitter'>Twitter</option>
              <option value='Instagram'>Instagram</option>
              <option value='Friends'>Friends</option>
              <option value='Family'>Family</option>
              <option value='Google'>Google</option>
              <option value='Google Playstore'>Google Playstore</option>
              <option value='Apple Appstore'>Apple Store</option>
              <option value='Online Blog'>Blog</option>
              <option value='Newspaper'>Newspaper</option>
              <option value='Event'>Event</option>
              <option value='Other'>Other</option>
            </SelectField>
            {/* <label htmlFor="remember" className="flex items-center mb-3">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="default:ring-2 mr-2"
              />
              <span className="text-[#8B8B8B] text-sm">
                Subscribe to newsletter
              </span>
            </label> */}
            <Button
              variant='primary'
              type='submit'
              value={loading ? "Loading..." : "Sign up"}
              disabled={loading}
              handleClick={handleSubmit(onSubmit)}
              additionalClassname={"w-full md:w-[278px] mx-auto my-2 font-bold hover:text-white"}
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
          <p className='text-xs mt-[15px] text-center text-[#69758B] mb-6'>
            Already have an account?
            <Link href='/login' passHref>
              <span className='font-bold ml-2 text-[#E6B800]'>Log in</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
