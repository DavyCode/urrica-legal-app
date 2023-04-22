import Modal from "../Modal";
import ImageUploadIcon from "../../icons/modal-icon/image-icon";
import VideoUploadIcon from "../../icons/modal-icon/video-icon";
import FileTextUploadIcon from "../../icons/modal-icon/file-text-icon";
import Button from "../Button";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectPost } from "../../features/post/post.selectors";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { createAPostInitials } from "../../schemas/initialFormsValue/post.initialValues";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPostSchemaValidator } from "../../schemas/validators/post.validator";
import { CreatePostTypes } from "../../types";
import { createAPostAction } from "../../features/post/post.actions";
import { useRouter } from "next/router";

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
  value: string;
  title: string;
  handleClick: (arg: any) => void;
}

const AddPost: React.FC<Props> = ({ isModalOpen, closeModal, value, title, handleClick }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { loading, error } = useAppSelector(selectPost);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePostTypes>({
    defaultValues: {
      ...createAPostInitials,
    },
    resolver: yupResolver(createPostSchemaValidator),
  });

  const onSubmit = async (data: CreatePostTypes) => {
    console.log('onSubmit======', data)

    await dispatch(createAPostAction({ text: data }));

    /* Close Modal */
    closeModal()
  };

    const handleTextareaKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
    }
  };

  return (
    <Modal isOpen={isModalOpen} closeModal={closeModal} title={title}>
      <div className="w-[306px] md:w-[600px] md:h-[400px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:mt-[45px] rounded-md w-full md:w-[550px] md:mx-auto h-[220px] relative">
            <Controller
              name="text"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  cols={4}
                  rows={5}
                  onKeyDown={handleTextareaKeyDown}
                  className="resize-none p-2 md:h-56 bg-[#FBFBFB] outline-0 border border-[#F1f1f1] bg-[#FBFBFB]"
                />
              )}
            />
            <hr />
            {errors.text && (
              <p className="text-[#ED2E7E] text-center mb-4">
                {errors.text.message}
              </p>
            )}
          </div>
          <br />
          <Button
            variant="primary"
            type="button"
            value={loading ? "Loading..." : value}
            // handleClick={() => {}}
            handleClick={handleSubmit(onSubmit)}
            additionalClassname={`py-2 h-9 font-bold ml-4 md:mr-4 rounded-full my-4 md:my-0 text-sm text-[#050505] right-0 ${
              loading && "text-white"
            }`}
          />
        </form>
      </div>
    </Modal>
  );
};

export default AddPost;
