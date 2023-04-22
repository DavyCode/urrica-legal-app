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
import API_USERS_COMMENT from "../../../../services/Api/comments.api.service"
import ReplyOnComment from 'components/AddReplies/reply-comment';
import { PostComment } from "types";
import { Comments } from 'utils/data';
import useAuth from "../../../../hooks/useAuth";
import PostCommentReply from "components/Cards/PostCommentReply";
import CommentHolder from '../../../../components/Cards/CommentHolder';
import AddCommentOnComment from "components/AddReplies/comment-reply";

import BaseComment from "components/Cards/BaseComment";
import { Post, CommentType } from "types";

const CommentReplies = () => {
  const router = useRouter();
  const { id, com_id } = router.query;

  let shouldPostBeClickable = false;
  let isPost: boolean = false;
  if (router.query?.isPost) {
    isPost = router.query?.isPost == "true" ? true : false;
  }
  const isAuthenticated = useAuth();

  const [isRepliesModelOpen, setIsRepliesModelOpen] = useState(false);
  const [loading, setLoading] = useState(true)
  const [loadingComments, setLoadingComments] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comments, setComments] = useState<[]>([])
  const [currentComment, setCurrentComment] = useState<CommentType>({
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
    post: "",
    isBaseComment: true,
    isDagerous: false,
    isViewable: true,
    __v: 0,
    commentsCount: 0,
    upvotesCount: 0,
    downvotesCount: 0,
  })

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const closeReplyModel = () => setIsRepliesModelOpen(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  useEffect(() => {
    // async function fetchPost() {
    //   try {
    //     const response = isAuthenticated
    //       ? await API_USERS_POST.getAPostById(id as string)
    //       : await API_USERS_POST.getAPublicPostById(id as string);

    //     setComments(response.data.data.comments)
    //     setCurrentComment(response.data.data.post)


    //     setLoading(false);
    //     setLoadingComments(false)
    //   } catch (error) {
    //     setLoading(false);
    //     setLoadingComments(false)

    //     router.back()
    //     console.error("Error fetching post:", error);
    //   }
    // }

    async function fetchBaseComment() {
      try {
        const response = isAuthenticated
          ? await API_USERS_COMMENT.getACommentById(id as string, com_id as string) // todo: create API
          : await API_USERS_COMMENT.getAPublicCommentById(id as string, com_id as string); // todo: create API

        setComments(response.data.data.comments)
        setCurrentComment(response.data.data.comment)

        setLoading(false);
        setLoadingComments(false)
      } catch (error) {
        setLoading(false);
        setLoadingComments(false)

        router.back()
        console.error("Error fetching post:", error);
      }
    }


    // if (id && isPost == true) {
    //   fetchPost();
    // }

    if (com_id && id) {
      // router.reload()
      setLoading(true);
      setLoadingComments(true)

      fetchBaseComment()

      const intervalId = setInterval(fetchBaseComment, 5000);

      return () => clearInterval(intervalId);
    }

  }, [com_id, id, isAuthenticated, router]);

  // const { owner } = selectedPost.post;

  const handlePostAuthorization = () => {
    if (isAuthenticated) {
      setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
    } else {
      router.push("/login");
    }
  };

  // const handlePostAuthorization = () => {
  //   isAuthenticated ? toggleModal() : redirectToLogin();
  // };

  // const toggleModal = () => {
  //   setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  // }
  
  // const redirectToLogin = () => {
  //   router.push("/login");
  // }


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
          postId={postId}
          isPost={isPost}
          shouldPostBeClickable={shouldPostBeClickable}
          commentId={commentId? commentId : undefined}
        />
        
        {/* <Comment
          handleOpenCommentModal={handleShowReplyForm}
          imgUrl={"https://images.unsplash.com/placeholder-avatars/extra-large.jpg"}
          timeAgo={created.fromNow()}
          message={selectedPost.text}
          upvoteCount={selectedPost.post.upvotesCount}
          downvoteCount={selectedPost.post.downvotesCount}
          replyCount={selectedPost.post.commentsCount}
          selectedPostId={selectedPost.post._id}
          selectedPost={selectedPost.post}
          postComments={selectedPost.comments}
        />
        <hr className="text-[#f1f1f1] border-b border-[#f1f1f1]" /> */}
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
            // router.push("/dashboard/community")
          }
        >
          Go Back
        </span>
        
        <div className="flex justify-between flex-col md:flex-row md:gap-4 text-color-200">
          <div className="w-full md:w-8/12 md:px-3 bg-white relative">
            {/* Main Card */}
            <div className="mt-2 md:mt-2 rounded w-full top-menu-bar-shadow px-6 py-8 border border-[#F1F1f1]">
              {loading ? "Loading..." : postCard(id as string, currentComment, isPost, shouldPostBeClickable, com_id as string)}
              <br />
              {loading ? '' : <span
                className="flex font-bold ml-4 w-fit text-color-100 hover:text-color transition ease-in-out"
              >
                Replies
              </span>}
              <hr className="text-[#f1f1f1] border-b border-[#f1f1f1]" />
              {/* {selectedPost.comments?.length > 0 && <PostCommentReply />} */}
              {loadingComments ? <p className="animate-pulse font-semibold text-center text-color-200">Loading comments</p> :
                (
                  <div className="my-2">
                    {
                      comments?.length > 0 && 
                      (comments || []).map((comment: any, index: any) => 
                        // <CommentHolder
                        //   key={index} 
                        //   commentId={comments._id}
                        //   replies={comments} 
                        //   />
                        postCard(id as string, comment, isPost=false, shouldPostBeClickable=true, comment._id)
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
        {/* {isRepliesModelOpen && (
          <ReplyOnComment
            isModalOpen={isRepliesModelOpen}
            closeModal={closeReplyModel}
            value="Reply"
            handleClick={() => {}}
            currentComment={selectedPost.post}
          />
        )} */}
       {/*  {isRepliesCommentOpen && (
          <AddCommentOnComment
            isModalOpen={isRepliesCommentOpen}
            closeModal={}
            value=""
            title=""
            handleClick={() => {}}
            currentComment={selectedPost.post}
            commentId=""
          />
        )} */}
      </>
    </Layout>
  );
};

export default CommentReplies;
