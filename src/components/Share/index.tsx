import { useState } from 'react'
import Modal from './../Modal';
import { useRouter } from "next/router";
import ShareIcon from "../../icons/comments-icon/save-icon";
import Link from 'next/link'


import {
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";

interface IProps {
    postId?: string;
}

const SharePost:React.FC<IProps> = ({ postId }) => {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const baseUrl = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;

  const currentUrl = window.location.origin + window.location.pathname;

  const sharePath = router.asPath === "/" ? "/community/" : router.asPath;

  const shareUrl = `${baseUrl}${sharePath}${postId}`;

  const shareButtons = [
    {
      Icon: FacebookIcon,
      name: "Facebook",
      url: `https://www.facebook.com/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      Icon: TwitterIcon,
      name: "Twitter",
      url: `https://twitter.com/share?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      Icon: TelegramIcon,
      name: "Telegram",
      url: `https://telegram.me/share/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      Icon: WhatsappIcon,
      name: "Whatsapp",
      url: `https://web.whatsapp.com/?url=${encodeURIComponent(shareUrl)}`,
    },
  ];

  return (
    <>
      <div
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <ShareIcon />
      </div>
      <Modal
        isOpen={isModalOpen}
        title="Share"
        closeModal={() => setIsModalOpen(false)}
      >
        <div className="grid grid-cols-4 gap-x-7 px-8 pb-8">
          {shareButtons.map((button) => (
            <Link
              key={button.name}
              className="flex items-center justify-center hover:bg-[#b79ac917] rounded-full"
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button.Icon size={24} round />
            </Link>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default SharePost
