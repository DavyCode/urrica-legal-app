import DashboardIcon from "../icons/dashboard-icon";
import AccountIcon from "../icons/accounting-finance";
import GrowthIcon from "../icons/growth-marketing";
import OrdersIcon from "../icons/orders-inventories";
import TestimonialIcon from "../icons/testimonial";
import NotesIcon from "../icons/notes-and-reminders";
import ProductIcon from "../icons/product-source";
import KnowledgeIcon from "../icons/knowledge-icon";
import CommunityIcon from "../icons/community";
import HelpIcon from "../icons/help-icon";

interface MenuItem {
  id: number;
  icon: any;
  title: string;
  href?: string;
  children?: { title: string; href: string }[];
}

interface CommentProp {
  timeAgo: number;
  message: string;
  upvoteCount: number;
  replyCount: number;
  imgUrl: string;
  children?: {
    imgUrl: string;
    timeAgo: number;
    message: string;
    upvoteCount: number;
    replyCount: number;
    isInner?: boolean;
  }[];
}

export const MenuItems: MenuItem[] = [
  {
    id: 1,
    icon: DashboardIcon,
    title: "Dashboard",
    href: "/dashboard",
  },
  // {
  //   id: 2,
  //   icon: OrdersIcon,
  //   title: "Orders and Inventories",
  //   children: [
  //     {
  //       title: "Shipping & Logistics",
  //       href: "/dashboard/shipping",
  //     },
  //     {
  //       title: "Inventory Management",
  //       href: "/dashboard/inventory",
  //     },
  //     {
  //       title: "Order Management",
  //       href: "/dashboard/order",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   icon: GrowthIcon,
  //   title: "Growth & Marketing",
  //   children: [
  //     {
  //       title: "Social Media Analytics",
  //       href: "/dashboard/social",
  //     },
  //     {
  //       title: "Influencers",
  //       href: "/dashboard/influencers",
  //     },
  //     {
  //       title: "Design & Branding",
  //       href: "/dashboard/branding",
  //     },
  //     {
  //       title: "Email Newsletter",
  //       href: "/dashboard/newsletter",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   icon: TestimonialIcon,
  //   title: "Testimonials & Reviews",
  //   children: [
  //     {
  //       title: "Reviews",
  //       href: "/dashboard/reviews",
  //     },
  //     {
  //       title: "Request a Review",
  //       href: "/dashboard/requests",
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   icon: AccountIcon,
  //   title: "Accounting & Finance",
  //   children: [
  //     {
  //       title: "Accounting",
  //       href: "/dashboard/account",
  //     },
  //     {
  //       title: "Capital & Funding",
  //       href: "/dashboard/capital",
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   icon: NotesIcon,
  //   title: "Notes & Reminders",
  //   href: "/dashboard/notes",
  // },
  {
    id: 7,
    icon: ProductIcon,
    title: "Billing",
    href: "/dashboard/billing",
  },
  // {
  //   id: 8,
  //   icon: KnowledgeIcon,
  //   title: "Knowledge",
  //   href: "/dashboard/knowledge",
  // },
  {
    id: 9,
    icon: CommunityIcon,
    title: "Community",
    href: "/dashboard/community",
  },
  // {
  //   id: 10,
  //   icon: HelpIcon,
  //   title: "Help",
  //   href: "/dashboard/help",
  // },
];

export const Comments: CommentProp[] = [
  {
    timeAgo: 6,
    message:
      "Lorem ipsum dolor sit amet, coetur adipiscing elit ut aliquam, purus sit amet luctus Lorem ipsum dolor sit amet aliquam, purus sit amet luctus ",
    upvoteCount: 15,
    replyCount: 5,
    imgUrl: "https://randomuser.me/api/portraits/women/30.jpg",
    children: [
      {
        timeAgo: 3,
        message: "Lorem ipsum dolor sit amet, coetur adipiscing elit ut.",
        upvoteCount: 10,
        replyCount: 3,
        imgUrl: "https://randomuser.me/api/portraits/women/40.jpg",
        isInner: true,
      },
      {
        timeAgo: 3,
        message:
          "Lorem ipsum dolor sit amet,ipsum dolor sit amet, ipsum dolor sit amet, ipsum dolor sit amet coetur adipiscing elit ut.",
        upvoteCount: 0,
        replyCount: 3,
        imgUrl: "https://randomuser.me/api/portraits/men/20.jpg",
        isInner: true,
      },
    ],
  },
];

export const userProfileData = [{ label: "Profile" }, { label: "Password" }];

export const userSettingsData = [{ label: "Subscription" }, { label: "Business Info" }];
export const genderOptions = ["Male", "Female", "Non-binary", "Prefer not to say"];
