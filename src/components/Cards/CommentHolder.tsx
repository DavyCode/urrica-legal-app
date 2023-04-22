import { useState } from 'react'
import ShowBaseCommentInReply from './ShowBaseCommentInReply';
import { TimeAgoFormat } from 'utils/timeAgo';
import CommentFooter from 'components/Comment-footer';
import API_USER_COMMENT from './../../services/Api/comments.api.service';
import { AppToaster } from 'utils/AppToast';

interface IProps {
  closeComment?: () => void;
  commentId: string;
  replies: {
    meta: {
      createdAt: string;
      updatedAt: string;
    };
    _id: string;
    community: string;
    text: string;
    owner: {
      _id: string;
      firstName: string;
      lastName: string;
      profileImage: string;
    };
    post: string;
    isBaseComment: boolean;
    images: [];
    isDagerous: boolean;
    isViewable: boolean;
    __v: number;
    commentsCount: number;
    upvotesCount: number;
    downvotesCount: number;
  };
}

const CommentHolder: React.FC<IProps> = ({
  replies,
  commentId,
  closeComment,
}) => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  const handleShowReplyForm = () => setIsCommentOpen(true);
//  const closeComment = () => setIsCommentOpen(false);

  const {
    meta: { createdAt },
    post,
    _id,
    owner: { firstName, lastName, profileImage },
    text,
    downvotesCount,
    commentsCount,
    upvotesCount,
  } = replies;
  const created = TimeAgoFormat(createdAt);

  const handleUpVote = async () => {
    await API_USER_COMMENT.putUpCommentVote(post, _id).then(() => {
      AppToaster("Voted Added ", "top-center", "success");
    });
  };
  const handleDownVote = async () => {
    await API_USER_COMMENT.putDownCommentVote(post, _id).then(() => {
      AppToaster("Vote removed ", "top-center", "success");
    });
  };
  return (
    <>
      <ShowBaseCommentInReply
        timeAgo={created}
        message={text}
        imgUrl={profileImage}
        firstname={firstName}
        lastname={lastName}
        secondLayerComment={true}
      />
      <CommentFooter
        isCommentOpen={isCommentOpen}
        closeComment={closeComment}
        handleShowReplyForm={handleShowReplyForm}
        handleUpVoteComment={handleUpVote}
        handleDownVoteComment={handleDownVote}
        selectedPostId={commentId}
        downvoteCount={downvotesCount}
        replyCount={commentsCount}
        upvoteCount={upvotesCount}
        innerComment={true}
      />
    </>
  );
};

export default CommentHolder
