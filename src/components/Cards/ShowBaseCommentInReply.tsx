import React, { useState, useEffect, MouseEvent, useCallback } from "react";
import { useRouter } from "next/router";
import MoreSettingsIcon from "../../icons/setting-dots";
import UpvoteIcon from "../../icons/comments-icon/upvote-icon";
import ReplyIcon from "../../icons/comments-icon/reply-icon";
import SaveIcon from "../../icons/comments-icon/save-icon";
import ReportIcon from "../../icons/comments-icon/report-icon";
import { clsx } from "clsx";
import Image from "next/image";

interface IProps {
  timeAgo: string;
  message: string;
  imgUrl: string;
  firstname: string;
  lastname: string;
  secondLayerComment?: boolean
}

const ShowBaseCommentInReply: React.FC<IProps> = ({ timeAgo, message, imgUrl, firstname, lastname, secondLayerComment = false }) => {
  return (
    <div className={clsx({
      ["rounded ml-8 mr-2"]: secondLayerComment
    })}>
      <div className='flex items-center md:mt-2 mx-4'>
        <Image className='w-6 h-6 rounded-full mr-2' src={imgUrl} alt='Avatar' width={24} height={24} />
        <div className='flex flex-col'>
          <h2 className='text-base font-medium text-color'>
            {firstname} {lastname} <strong> - </strong>
            <span className='text-sm'>{timeAgo} mins</span>
          </h2>
        </div>
      </div>
      <div className={clsx({
        ["bg-[#ffffff] p-2 mb-2 w-[94%] mx-6"]: true,
      })}>
        <div className='text-sm text-color my-2'>{message}</div>
      </div>
    </div>
  );
};

export default ShowBaseCommentInReply;
