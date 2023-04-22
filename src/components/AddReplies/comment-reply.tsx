import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "../Modal";
import Button from "../Button";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { createPostSchemaValidator } from "../../schemas/validators/post.validator";
import { CreatePostTypes } from "../../types";
import ShowBaseCommentInReply from "../Cards/ShowBaseCommentInReply";
import { TimeAgoFormat } from "./../../utils/timeAgo";
import useAuth from "../../hooks/useAuth";
import { createACommentOnCommentAction } from "features/comments";
import { selectComment } from "./../../features/comments/comment.selectors";
import { createACommentOnCommentInitials } from "./../../schemas/initialFormsValue/comment.initialValues";
import API_USER_COMMENT from "./../../services/Api/comments.api.service";
import CommentHolder from "components/Cards/CommentHolder";
import { Comment } from "types/comment.type";

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
  value: string;
  title?: string;
  handleClick: (arg: any) => void;
  currentComment: any;
  selectedPost?: any;
  commentId: string;
}

const AddCommentOnComment: React.FC<Props> = ({
  isModalOpen,
  closeModal,
  value,
  title,
  handleClick,
  currentComment,
  selectedPost,
  commentId
}) => {
  // const dispatch = useAppDispatch();
  // const router = useRouter();
  // console.log(">>>>",selectedPost, ">>>Here", currentComment)

  // const isAuthenticated = useAuth();

  // const { loading, error } = useAppSelector(selectComment);
  // const [loadingComments, setLoadingComments] = useState(true);
  // const [userDetail, setUserDetail] = useState({
  //   id: "",
  // });
  // const [comments, setComments] = useState<Comment[] | []>();

  // useEffect(() => {
  //   try {
  //     const data = localStorage.getItem("user") ?? "";
  //     const userDetail = JSON.parse(data);
  //     const { _id } = userDetail;
  //     setUserDetail({ id: _id });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  //   useEffect(() => {
  //   const fetchComments = async () => {
  //     const result = await API_USER_COMMENT.getSinglePostComments(
  //       commentId
  //     );
  //     setComments(result?.data?.data?.comments);
  //     setLoadingComments(false)
  //   }

  //   fetchComments()
  // }, [commentId])

  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   formState: { errors },
  // } = useForm<CreatePostTypes>({
  //   defaultValues: {
  //     ...createACommentOnCommentInitials,
  //   },
  //   resolver: yupResolver(createPostSchemaValidator),
  // });

  // const onSubmit: SubmitHandler<CreatePostTypes> = async (
  //   data: CreatePostTypes
  // ) => {
  //   await dispatch(
  //     createACommentOnCommentAction({
  //       replyInfo: data,
  //       commentId: commentId,
  //     })
  //   );

  //   // closeModal
  //   closeModal();
  // };
  // const { owner, text, meta } = currentComment;

  // const baseCommentInReply = () => {
  //   return (
  //     <ShowBaseCommentInReply
  //       imgUrl={owner.profileImage}
  //       timeAgo={TimeAgoFormat(meta.createdAt)}
  //       message={text}
  //       firstname={owner.firstName}
  //       lastname={owner.lastName}
  //     />
  //   );
  // };

  // const handlePreventDefault = (
  //   e: React.KeyboardEvent<HTMLTextAreaElement>
  // ) => {
  //   if (e.key === "Enter" && !e.shiftKey) {
  //     e.preventDefault();
  //   }
  // };

  return (<></>)
  // return (
  //   <Modal isOpen={isModalOpen} closeModal={closeModal} title={title}>
  //     <div className="w-[306px] md:w-full md:mb-6 overflow-x-hidden overflow-y-auto">
  //       {baseCommentInReply()}
  //       <form onSubmit={handleSubmit(onSubmit)}>
  //         <div className="flex flex-col md:mt-[4px] rounded-md w-full md:w-[520px] md:mx-auto h-[150px] relative">
  //           <textarea
  //             cols={4}
  //             rows={5}
  //             autoFocus
  //             onKeyDown={handlePreventDefault}
  //             className="resize-none p-2 md:h-56 bg-[#FBFBFB] outline-0 border border-[#F1f1f1] bg-[#FBFBFB] md:w-11/12 mb-4 mx-auto"
  //             {...register("text")}
  //           ></textarea>
  //           <hr className="text-color-100" />
  //           {errors.text && (
  //             <p className="text-[#ED2E7E] text-center mb-4">
  //               {errors.text.message}
  //             </p>
  //           )}
  //         </div>
  //         <br />
  //         {/* <div className="flex items-start md:items-end md:justify-between flex-col md:flex-row md:absolute md:bottom-1 mt-4"> */}
  //         <Button
  //           additionalClassname="py-2 h-9 font-bold ml-4 md:mr-4 rounded-full my-4 md:my-0 text-sm text-[#050505] right-0"
  //           type="submit"
  //           variant="primary"
  //           value={loading ? "Loading..." : value}
  //           handleClick={
  //             isAuthenticated
  //               ? () => handleSubmit(onSubmit)
  //               : () => router.push("/login")
  //           }
  //         />
  //         {/* </div> */}
  //       </form>
  //     </div>
  //   </Modal>
  // );
};

export default AddCommentOnComment;
