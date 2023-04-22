import { useEffect, useState } from "react";
import InputField from "../Forms/text-input";
import Button from "../Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../../hooks";

import { passwordInitials } from "../../schemas/initialFormsValue";
import { passwordSchemaValidator } from "../../schemas/validators/auth.validator";
import { PasswordTypes } from "../../types";
import { changeUserPasswordAction } from "../../features/users/user.actions";
import { selectUser } from "../../features/users/user.selectors";

const ResetUserPassword = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(selectUser);
  const [userDetail, setUserDetail] = useState({
    id: "",
  });

  useEffect(() => {
    try {
      const data = localStorage.getItem("user") ?? "";
      const userDetail = JSON.parse(data);
      const { _id } = userDetail;
      setUserDetail({ id: _id });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...passwordInitials,
    },
    resolver: yupResolver(passwordSchemaValidator),
  });

  const onSubmit = async (data: PasswordTypes) => {
    dispatch(changeUserPasswordAction({ userData: data, userId: userDetail.id }));
  };
  return (
    <div className='flex items-start mt-[35px]'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
        <div className='flex gap-y-2  w-full flex-col'>
          <InputField
            label='Old Password'
            name='oldPassword'
            type='password'
            error={errors.oldPassword?.message}
            placeholder='old Password'
            additionalClassname='rounded-full md:w-[343px] overflow-hidden'
            register={register}
          />
          <InputField
            label='New Password'
            name='newPassword'
            type='password'
            error={errors.newPassword?.message}
            placeholder='New Password'
            additionalClassname='rounded-full md:w-[343px] overflow-hidden'
            register={register}
          />
          <InputField
            label='Confirm Password'
            name='confirmPassword'
            type='password'
            error={errors.confirmPassword?.message}
            placeholder='Confirm Password'
            additionalClassname='rounded-full md:w-[343px] overflow-hidden'
            register={register}
          />
          <Button
            variant='primary'
            type='button'
            value={loading ? "Loading..." : "Save Changes"}
            disabled={loading}
            handleClick={handleSubmit(onSubmit)}
            additionalClassname={`bg-[#EFECE2] md:w-[175px] h-10 !rounded-full font-bold flex justify-center items-center ${
              loading && "text-white"
            } text-color border-[#EFECE2] text-base mb-10 cursor-pointer`}
          />
        </div>
      </form>
    </div>
  );
};

export default ResetUserPassword;
