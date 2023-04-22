import { useEffect, useState } from "react";
import InputField from "../Forms/text-input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../../hooks";

import { profileSchemaValidator } from "../../schemas/validators/auth.validator";
import { profileInitials } from "../../schemas/initialFormsValue";
import { ProfileTypes } from "../../types";

import Button from "../Button";
import PhonePickerInput from "../Forms/phone-input";
import RadioButtonInput from "../Forms/radio-button-input";

import { genderOptions } from "../../utils/data";
import { changeUserProfileAction } from "../../features/users";
import { selectUser } from "../../features/users/user.selectors";
import CountryStateSelector from "../Forms/Country-state-selector-input";
import TextAreaInput from "../Forms/text-area-input";

const ProfileSettings = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(selectUser);

  const [userDetail, setUserDetail] = useState({
    id: "",
    email: "",
  });

  useEffect(() => {
    try {
      const data = localStorage.getItem("user") ?? "";
      const userDetail = JSON.parse(data);
      const { _id, email } = userDetail;
      setUserDetail({ id: _id, email: email });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...profileInitials,
    },
    resolver: yupResolver(profileSchemaValidator),
  });

  const onSubmit = async (data: ProfileTypes) => {
    // console.log(">>>>>>>>>>>", JSON.stringify(data));
    dispatch(changeUserProfileAction({ userData: data, userId: userDetail.id }));
  };

  return (
    <div className='flex items-start mt-[35px]'>
      <form className='w-full mx-auto' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col  md:flex-row md:gap-x-6'>
          <InputField
            label='First Name'
            name='firstName'
            type='text'
            error={errors.firstName?.message}
            placeholder='Firstname'
            additionalClassname='rounded-full md:w-[343px] overflow-hidden'
            register={register}
          />
          <InputField
            label='Last Name'
            name='lastName'
            type='text'
            error={errors.lastName?.message}
            placeholder='Lastname'
            additionalClassname='rounded-full md:w-[343px] overflow-hidden'
            register={register}
          />
        </div>
        <div className='flex flex-col md:flex-row gap-x-6'>
          <InputField
            label='Email address'
            name='email'
            type='email'
            placeholder={userDetail.email}
            additionalClassname='rounded-full md:w-[343px] overflow-hidden'
            disabled={true}
          />
          {/*  <InputField
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            error={errors.dateOfBirth?.message}
            placeholder="Date of Birth"
            additionalClassname="rounded-full md:w-[343px] overflow-hidden"
            register={register}
          /> */}
          <RadioButtonInput values={genderOptions} label='Gender' error={errors.gender?.message} register={register} />
        </div>
        <div className='flex flex-col md:flex-row gap-x-6'>
          <CountryStateSelector register={register} control={control} watch={watch} setValue={setValue} />
        </div>
        <div className='flex flex-col md:flex-row gap-x-6 my-4'>
          {/* <PhonePickerInput
            label="Phone Number"
            control={control}
            name="phone"
          /> */}
          <TextAreaInput label='Address' name='address' control={control} width='750px' />
        </div>
        <Button
          variant='primary'
          type='button'
          value={loading ? "Loading..." : "Save Changes"}
          disabled={loading}
          handleClick={handleSubmit(onSubmit)}
          additionalClassname='bg-[#EFECE2] md:w-[175px] h-10 !rounded-full font-bold flex justify-center items-center text-color border-[#EFECE2] text-base md:float-right mb-10 cursor-pointer'
        />
      </form>
    </div>
  );
};

export default ProfileSettings;
