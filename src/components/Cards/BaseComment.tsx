import React, { useState, useEffect, MouseEvent, useCallback } from "react";
import { useRouter } from "next/router";
import MoreSettingsIcon from "../../icons/setting-dots";
import UpvoteIcon from "../../icons/comments-icon/upvote-icon";
import ReplyIcon from "../../icons/comments-icon/reply-icon";
import ShareIcon from "../../icons/comments-icon/save-icon";
import ReportIcon from "../../icons/comments-icon/report-icon";
import Image from "next/image";
import AddReplies from 'components/AddReplies';
import SharePost from 'components/Share';
import API_USERS_POST from "../../services/Api/post.api.service";
import API_USERS_COMMENT from "../../services/Api/comments.api.service"

import { AppToaster } from "../../utils/AppToast";
import CommentFooter from "components/Comment-footer";
import TrashIcon from "icons/trash-icon";

interface IProps {
  timeAgo: string;
  message: string;
  user: any;
  upvoteCount: number;
  downvoteCount: number;
  replyCount: number;
  imgUrl: string;
  isInner?: boolean;
  setIsRepliesModelOpen: any;
  currentPost?: any;
  postId: string;
  isPost: boolean;
  shouldPostBeClickable?: boolean
  commentId?: string
}

const BaseComment: React.FC<IProps> = ({
  timeAgo,
  message,
  user,
  upvoteCount,
  downvoteCount,
  replyCount,
  imgUrl,
  isInner,
  currentPost,
  setIsRepliesModelOpen,
  postId,
  isPost,
  shouldPostBeClickable,
  commentId
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [singlePost, setSinglePost] = useState();
  const [userDetail, setUserDetail] = useState({ id: "" })
  const handleShowReplies = (
    selectedPostId: string,
    selectedCommentId?: string
  ) => {
    if (!shouldPostBeClickable) {
      // TODO: Leave empty or refactor
    } else {
      if (selectedPostId && selectedCommentId) {
        router.push({
          pathname: `/dashboard/community/${selectedPostId}/${selectedCommentId}`,
        });
      } else {
        router.push({
          pathname: `/dashboard/community/${selectedPostId}`,
        });
      }
    }
  };

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

  // console.log("========isPost=====", isPost)
  const handleShowReplyForm = () => {
    setModalOpen(true);
  };

  // const getPostById = (postId: string) => {
  //   return (currentPosts ?? []).find((post: any) => post._id === postId);
  // }

  // const postToCommentOn = getPostById(postId);
  const postToCommentOn = currentPost;

  const closeModal = () => setModalOpen(false);

  const handleUpVote = async (postId: string) => {
    if (postId && commentId) {
      await API_USERS_COMMENT.upVoteComment(postId, commentId).then(
        (result) => {
          AppToaster("You liked this", "top-center", "success");
        }
      );
    } else {
      await API_USERS_POST.putUpVote(postId).then((result) => {
        AppToaster("You liked this", "top-center", "success");
      });
    }
  };
  const handleDownVote = async (postId: string) => {
    if (postId && commentId) {
      await API_USERS_COMMENT.downVoteComment(postId, commentId).then(
        (result) => {
          AppToaster("You dis-like this", "top-center", "success");
        }
      );
    } else {
      await API_USERS_POST.putDownVote(postId).then((result) => {
        AppToaster("You dis-like this", "top-center", "success");
      });
    }
  };
  const handleDeletePost = async (postId: string) => {
    if(postToCommentOn.owner._id !== userDetail.id) {
      AppToaster("You can't Delete this POST! It's doesn't belong to you. Contact Admin", "top-center", "error");
    } else {
      await API_USERS_POST.deleteAPostById(postId).then((result) => {
        AppToaster("Post Deleted Successfully", "top-center", "success")
      })
    }
  };

  const isForPost = () => {
    if (postId && commentId) {
      return false;
    }
    return true;
  };

  return (
    <>
      <div className="flex items-center md:mt-2 w-full cursor-pointer">
        <div className="flex items-center justify-between w-full">
          <div
            className="flex justify-between items-center"
            onClick={() => handleShowReplies(postId, commentId)}
          >
            <Image
              className="w-6 h-6 mr-2 rounded-full"
              src={imgUrl}
              alt="Avatar"
              width={24}
              height={24}
            />
            <h2 className="text-base font-medium text-color">
              {user?.firstName} {user?.lastName} <strong> - </strong>
              <span className="text-sm">{timeAgo}</span>
            </h2>
          </div>
          <span
            className="cursor-pointer w-8 h-8 rounded-full flex justify-center items-center hover:bg-[#b79ac917]"
            onClick={() => setIsDropdownActive(!isDropdownActive)}
          >
            <MoreSettingsIcon />
            {isDropdownActive && (
              <div className="absolute z-30 gap-4 mt-16 mr-8 group overflow-hidden transition-shadow ease-in-out bg-white rounded-md drop-shadow gap-y-6 mr-2">
                <div className="flex flex-col gap-2 p-2">
                  <div
                    className="flex items-center gap-x-2 text-xs md:text-sm justify-between items-center group-hover:font-bold"
                    onClick={() => handleDeletePost(postId)}
                  >
                    <span className="hidden cursor-pointer md:inline-block text-[#FF0000]">
                      Delete
                    </span>
                    <TrashIcon fill="#FF0000" width={18} height={18} />
                  </div>
                </div>
              </div>
            )}
          </span>
        </div>
      </div>

      <div className="bg-[#ffffff] min-h-[10px] p-2 w-[94%] md:w-full hover:bg-[#b79ac917]">
        <div
          onClick={() => handleShowReplies(postId, commentId)}
          className="my-2 text-sm cursor-pointer text-color"
        >
          {message}
        </div>
        <hr className="text-[#f1f1f1] border-b border-[#f1f1f1]" />
        <CommentFooter
          handleShowReplyForm={handleShowReplyForm}
          handleUpVote={handleUpVote}
          handleDownVote={handleDownVote}
          selectedPostId={postId}
          downvoteCount={downvoteCount}
          replyCount={replyCount}
          upvoteCount={upvoteCount}
        />
        <hr className="text-[#f1f1f1] border-b border-[#f1f1f1]" />
        {modalOpen && (
          <AddReplies
            isModalOpen={modalOpen}
            closeModal={closeModal}
            value="Reply"
            handleClick={() => {}}
            // currentComment={postToCommentOn}
            currentPostORComment={postToCommentOn}
            postId={postId}
            isForPost={isForPost()}
            commentId={commentId}
          />
        )}
      </div>
    </>
  );
};

export default BaseComment;
