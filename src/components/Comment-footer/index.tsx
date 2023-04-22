
import SharePost from 'components/Share';
import ReplyIcon from 'icons/comments-icon/reply-icon';
import UpvoteIcon from 'icons/comments-icon/upvote-icon';
import { clsx } from 'clsx';
import AddCommentOnComment from './../AddReplies/comment-reply';

interface IProps {
  handleDownVote?: (arg: string) => void;
  handleShowReplyForm?: () => void;
  handleUpVote?: (arg: string) => void;
  handleDownVoteComment?: () => void;
  handleUpVoteComment?: () => void;
  selectedPostId?: string;
  downvoteCount: number;
  replyCount: number;
  upvoteCount: number;
  selectedPost?: any;
  handlePostClick?: (arg: string) => void;
  innerComment?: boolean;
  isCommentOpen?: boolean;
  closeComment?: () => void;
  commentArray?: any;
}
const CommentFooter: React.FC<IProps> = ({
  handleDownVote = (e) => null,
  handleShowReplyForm = () => null,
  handleUpVote = (e) => null,
  handleDownVoteComment = () => null,
  handleUpVoteComment = () => null,
  selectedPostId = "",
  downvoteCount = 0,
  replyCount = 0,
  upvoteCount = 0,
  selectedPost,
  handlePostClick = (e) => null,
  innerComment = false,
  isCommentOpen = false,
  closeComment = () => null,
  commentArray
}) => {
  return (
    <>
      <div
        className={clsx({
          "flex justify-between items-center w-[100%] md:w-8/12 ":
            true,
          ["md:w-6/12 md:ml-14 md:mb-5"]: innerComment,
        })}
      >
        <div
          className="flex justify-center cursor-pointer items-center gap-x-2 text-[10px] md:text-xs text-color-1000 w-20"
          onClick={() => {
            handleShowReplyForm();
            handlePostClick(selectedPostId);
          }}
        >
          {replyCount}
          <span className="w-8 h-8 rounded-full hover:bg-[#b79ac917] flex items-center justify-center">
            <ReplyIcon />
          </span>
        </div>
        <div className="flex justify-center cursor-pointer items-center gap-x-2 text-xs md:text-sm text-color-1000 w-20">
          {upvoteCount}
          <span
            className="w-8 h-8 rounded-full hover:bg-[#b79ac917] flex items-center justify-center"
            onClick={
              innerComment
                ? () => handleUpVoteComment()
                : () => handleUpVote(selectedPostId)
            }
          >
            <UpvoteIcon />
          </span>
        </div>
        <div className="flex md:justify-center cursor-pointer items-center gap-x-2 text-xs md:text-sm text-color-1000 w-20">
          {downvoteCount}
          <span
            className="w-8 h-8 rounded-full hover:bg-[#b79ac917] flex items-center justify-center rotate-180"
            onClick={
              innerComment
                ? () => handleDownVoteComment()
                : () => handleDownVote(selectedPostId)
            }
          >
            <UpvoteIcon />
          </span>
        </div>
        <div className="flex justify-center cursor-pointer items-center gap-x-2 text-[10px] md:text-xs text-color-1000 w-fit">
          <span className="w-8 h-8 rounded-full hover:bg-[#b79ac917] flex items-center justify-center">
            <SharePost postId={selectedPostId} />
          </span>
        </div>
      </div>
      {/* {isCommentOpen && (
        <AddCommentOnComment
          isModalOpen={isCommentOpen}
          closeModal={closeComment}
          value=""
          title="hjghjgvhjfjhg"
          handleClick={() => {}}
          currentComment={commentArray}
          commentId=""
        />
      )} */}
    </>
  );
};

export default CommentFooter
