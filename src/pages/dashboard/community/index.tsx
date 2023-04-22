import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";
import { RootState } from "store";
import clsx from "clsx";
// import withAuth from "utils/withAuth";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

/* Components */
import AddPost from "components/Add-new-post";
import RightStat from "components/Add-new-post/right-stat";
import Replies from "components/AddReplies";
import Breadcrumb from "components/Breadcrumb";
import Comment from "components/Cards/Comment";
import BaseComment from "components/Cards/BaseComment";
import Layout from "components/Layout";
import Button from "components/Button";

/* Icons */
import CreateAtIcon from "icons/created-at-icon";
import CollapseIcon from "icons/collapse-icon";
import Posted from "icons/pngs/post-image.png";
import SendPostBtnIcon from "icons/send-post-button";

import { Comments } from "utils/data";
import API_USERS_POST, { useGetAllPosts } from "services/Api/post.api.service";
import { Post } from "types";
import useAuth from './../../../hooks/useAuth';

dayjs.extend(relativeTime);

const Community = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRepliesModelOpen, setIsRepliesModelOpen] = useState(false);
  const [allPosts, setPosts] = useState<Post[] | []>();
  const [postCount, setPostCount] = useState(0);
  const [userDetail, setUserDetail] = useState({
    id: "",
  });
  const { data } = useGetAllPosts({});
  const postList = data?.data?.data?.posts;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const closeReplyModel = () => setIsRepliesModelOpen(false);

  const isAuthenticated = useAuth();
  const isPost: boolean = true
  let shouldPostBeClickable = true;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        
        if (isAuthenticated) {
          const data = localStorage.getItem("user") ?? "";
          const userData = JSON.parse(data);
          const { _id } = userData;
          setUserDetail({ id: _id });

          const result = await API_USERS_POST.getAllPost();
          setPosts(result?.data?.data?.posts);
        } else {
          const result = await API_USERS_POST.getPublicPosts();
          setPosts(result?.data?.data?.posts);
        }
      } catch (ex) {
        console.error(ex);
      }
    };

    fetchPosts();

    // Check for new posts every 5 seconds
    const intervalId = setInterval(fetchPosts, 5000);

    return () => clearInterval(intervalId);
  }, [isAuthenticated]);

  const handlePostAuthorization = () => {
    if (isAuthenticated) {
      setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
    } else {
      router.push("/login");
    }
  };

  const postCard = (data: Post, isPost: boolean, shouldPostBeClickable: boolean) => {
    const created = dayjs(data.meta.createdAt);
    return (
      <div className="my-4" key={data._id}>
        <BaseComment
          // imgUrl={data?.owner.profileImage? data?.owner.profileImage : "https://images.unsplash.com/placeholder-avatars/extra-large.jpg"}
          imgUrl={"https://images.unsplash.com/placeholder-avatars/extra-large.jpg"}
          timeAgo={created.fromNow()}
          message={data.text}
          user={data.owner}
          upvoteCount={data.upvotesCount}
          downvoteCount={data.downvotesCount}
          replyCount={data.commentsCount}
          isInner={false}
          setIsRepliesModelOpen={setIsRepliesModelOpen}
          currentPost={data}
          postId={data._id}
          isPost={isPost}
          shouldPostBeClickable={shouldPostBeClickable}
          // commentId={}
        />
        {/* <hr className="text-[#f1f1f1] border-b border-[#f1f1f1]" /> */}
      </div>
    );
  };

  return (
    <Layout>
      <>
        <div className="flex flex-col justify-between md:flex-row md:gap-4 text-color-200">
          <div className="relative w-full bg-white md:w-8/12 md:px-3">
            {/* Main Card */}
            <div className="mt-2 md:mt-2 rounded w-full top-menu-bar-shadow px-6 py-8 border border-[#F1F1f1]">
              {(allPosts || []).map((onePost: any, i) => postCard(onePost, isPost, shouldPostBeClickable))}
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

export default Community;
