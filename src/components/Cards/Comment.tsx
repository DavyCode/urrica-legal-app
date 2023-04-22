import { useState } from 'react'
import MoreSettingsIcon from "../../icons/setting-dots";
import UpvoteIcon from "../../icons/comments-icon/upvote-icon";
import ReplyIcon from "../../icons/comments-icon/reply-icon";
import SaveIcon from "../../icons/comments-icon/save-icon";
import ReportIcon from "../../icons/comments-icon/report-icon";
import { clsx } from "clsx";
import Image from "next/image";
import SharePost from 'components/Share';
import CommentFooter from 'components/Comment-footer';
import API_USERS_POST from 'services/Api/post.api.service';
import { AppToaster } from 'utils/AppToast';
import Replies from 'components/AddReplies';

interface IProps {
  timeAgo: string;
  message: string;
  downvoteCount: any;
  upvoteCount: any;
  replyCount: any;
  imgUrl: string;
  isInner?: boolean;
  selectedPostId: string;
  selectedPost?: any;
  handleOpenCommentModal: () => void;
  postComments?: any
}

const Comment: React.FC<IProps> = ({ timeAgo, message, upvoteCount, replyCount, downvoteCount, imgUrl, isInner, selectedPostId, selectedPost, handleOpenCommentModal = () => null, postComments }) => {

  const handleUpVote = async (selectedPostId: string) => {
      await API_USERS_POST.putUpVote(selectedPostId).then((result) => {
        AppToaster("Voted Added ", "top-center", "success");
      });
  }
  const handleDownVote = async (selectedPostId: string) => {
      await API_USERS_POST.putDownVote(selectedPostId).then((result) => {
        AppToaster("Vote removed ", "top-center", "success");
      });
  }

  return (
    <>
      <div
        className={clsx({
          ["min-h-min flex items-start py-2 mb-1"]: true,
          ["md:ml-9 md:w-[95%]"]: isInner,
          ["w-full"]: !isInner,
        })}
      >
        <div className="bg-[#FBFBFB] min-h-[80px] p-2 mb-2 w-[94%] md:w-full">
          <div className="text-base text-color my-2">{message}</div>
          <hr className="text-[#f1f1f1] border-b border-[#f1f1f1]" />
          <CommentFooter
            handleShowReplyForm={handleOpenCommentModal}
            handleUpVote={handleUpVote}
            handleDownVote={handleDownVote}
            selectedPostId={selectedPostId}
            downvoteCount={downvoteCount}
            replyCount={replyCount}
            upvoteCount={upvoteCount}
            commentArray={postComments}
          />
          <hr className="text-[#f1f1f1] border-b border-[#f1f1f1]" />
        </div>
      </div>
    </>
  );
};

export default Comment;
