import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { RootState } from "../../../../store";
import clsx from "clsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

/* Components */
import AddPost from "../../../../components/Add-new-post";
import RightStat from "../../../../components/Add-new-post/right-stat";
import Breadcrumb from "../../../../components/Breadcrumb";
// import Comment from "../../../components/Cards/Comment";
import MoreSettingsIcon from "../../../../icons/setting-dots";
import Layout from "../../../../components/Layout";
import Button from "../../../../components/Button";

/* Icons */
import CreateAtIcon from "../../../../icons/created-at-icon";
import CollapseIcon from "../../../../icons/collapse-icon";
import Posted from "../../../icons/pngs/post-image.png";
import SendPostBtnIcon from "../../../../icons/send-post-button";
import ReportIcon from "../../../../icons/comments-icon/report-icon";

// import { Comments } from "../../../utils/data";
import API_USERS_POST from "../../../../services/Api/post.api.service";
import ReplyOnComment from 'components/AddReplies/reply-comment';
import { PostComment } from "types";
import { Comments } from 'utils/data';
import useAuth from "./../../../../hooks/useAuth";
import PostCommentReply from "components/Cards/PostCommentReply";
import CommentHolder from './../../../../components/Cards/CommentHolder';
import AddCommentOnComment from "components/AddReplies/comment-reply";

import BaseComment from "components/Cards/BaseComment";
import { Post, CommentType } from "types";

const PostReplies = () => {
  const router = useRouter();
  const { id } = router.query;
  
  let shouldPostBeClickable = false;
  let isPost: boolean = true;
  if (router.query?.isPost) {
    isPost = router.query?.isPost == "true" ? true : false;
  }
  const isAuthenticated = useAuth();

  const [isRepliesModelOpen, setIsRepliesModelOpen] = useState(false);
  const [loading, setLoading] = useState(true)
  const [loadingComments, setLoadingComments] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comments, setComments] = useState<[]>([])
  const [currentPost, setCurrentPost] = useState<Post>({
    comments: [],
    meta: {
      createdAt: "",
      updatedAt: "",
    },
    _id: "",
    community: "",
    text: "",
    owner: {
      _id: "",
      firstName: "",
      lastName: "",
      profileImage: "",
    },
    images: [],
    isDagerous: false,
    isViewable: true,
    __v: 0,
    commentsCount: 0,
    upvotesCount: 0,
    downvotesCount: 0,
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const closeReplyModel = () => setIsRepliesModelOpen(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

useEffect(() => {
  async function fetchPost() {
    try {
      const response = isAuthenticated
        ? await API_USERS_POST.getAPostById(id as string)
        : await API_USERS_POST.getAPublicPostById(id as string);

      setComments(response.data.data.comments)
      setCurrentPost(response.data.data.post)


      setLoading(false);
      setLoadingComments(false)
    } catch (error) {
      setLoading(false);
      setLoadingComments(false)

      router.back()
      console.error("Error fetching post:", error);
    }
  }


  if (id && isPost == true) {
    fetchPost();

    const intervalId = setInterval(fetchPost, 5000);

    return () => clearInterval(intervalId);
  }

}, [id, isAuthenticated, isPost, router]);

  const handlePostAuthorization = () => {
    if (isAuthenticated) {
      setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
    } else {
      router.push("/login");
    }
  };


  const handleShowReplyForm = () => {
    setIsRepliesModelOpen(true);
  };

  const postCard = (
    postId: string,
    selectedPost: Post | CommentType,
    isPost: boolean,
    shouldPostBeClickable: boolean,
    commentId? : string
  ) => {
    const created = dayjs(selectedPost.meta.createdAt);

    return (
      <div>
        <BaseComment
          imgUrl={"https://images.unsplash.com/placeholder-avatars/extra-large.jpg"}
          timeAgo={created.fromNow()}
          message={selectedPost.text}
          user={selectedPost.owner}
          upvoteCount={selectedPost.upvotesCount}
          downvoteCount={selectedPost.downvotesCount}
          replyCount={selectedPost.commentsCount}
          isInner={false}
          setIsRepliesModelOpen={setIsRepliesModelOpen}
          currentPost={selectedPost}
          postId={postId} // todo this will Post ID
          isPost={isPost}
          shouldPostBeClickable={shouldPostBeClickable}
          commentId={commentId? commentId : undefined} // todo - this will be comment id
        />
      </div>
    )
  }

  return (
    <Layout>
      <>
        {/* <div className="flex justify-between flex-col md:flex-row md:gap-4 mt-4 text-color-200"> */}
        <span
          className="flex font-bold ml-4 w-fit cursor-pointer text-color-100 hover:text-color transition ease-in-out"
          onClick={() => 
            router.back() 
          }
        >
          Go Back
        </span>
        
        <div className="flex justify-between flex-col md:flex-row md:gap-4 text-color-200">
          <div className="w-full md:w-8/12 md:px-3 bg-white relative">
            {/* Main Card */}
            <div className="mt-2 md:mt-2 rounded w-full top-menu-bar-shadow px-6 py-8 border border-[#F1F1f1]">
              {loading ? "Loading..." : postCard(currentPost._id, currentPost, isPost, shouldPostBeClickable)}
              <br />
              {loading ? '' : <span
                className="flex font-bold ml-4 w-fit text-color-100 hover:text-color transition ease-in-out"
              >
                {comments?.length > 0 && "Replies"}
              </span>}
              <hr className="text-[#f1f1f1] border-b border-[#f1f1f1]" />
              {/* {selectedPost.comments?.length > 0 && <PostCommentReply />} */}
              {loadingComments ? <p className="animate-pulse font-semibold text-center text-color-200">Loading comments</p> :
                (
                  <div className="my-2">
                    { comments?.length === 0 ? <p className="text-center text-color-100">Be the first to comment on this post</p> :
                      comments?.length > 0 && 
                      (comments || []).map((comment: any, index: any) => 
                        postCard(currentPost._id, comment, isPost=false, shouldPostBeClickable=true, comment._id)
                      )
                    }
                  </div>
                )
              }
            </div>
            {/* Main card ends here */}
          </div>
          <RightStat handlePostAuthorization={handlePostAuthorization} />
        </div>
        {isModalOpen && (
          <AddPost
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            value="Create Post"
            title="Create Post"
            handleClick={() => {}}
          />
        )}
      </>
    </Layout>
  );
};

export default PostReplies;
