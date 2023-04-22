import React, { useState, useEffect, MouseEvent, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "../Sidebar";
import Hamburger from "../../icons/mobiles-icon/hamburger";
import ToggleSubMenuIcon from "../../icons/toggle-sub-menu-icon";
import Mobile from "../../icons/mobiles-icon/dash-logo-icon.svg";
import CloseModalIcon from "../../icons/modal-icon/close-modal-icon";
import MobileNavbar from "./MobileNav";
import useAuth from "../../hooks/useAuth";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setAuthentication } from "../../features/auth";

interface Props {
  isMobileOpen: boolean;
  setIsMobileOpen: (arg: any) => void;
}

const TopMenu: React.FC<Props> = ({ isMobileOpen, setIsMobileOpen }) => {
  const dispatch = useAppDispatch();

  const [isUserDropdownActive, setIsUserDropdownActive] = useState(false);
  const [userDetail, setUserDetail] = useState({
    firstName: "",
    profileImage: "",
  });
  const closeNav = () => setIsMobileOpen(false);

  const isAuthenticated = useAuth();

  useEffect(() => {
    try {
      const data = localStorage.getItem("user") ?? "";
      const userDetail = JSON.parse(data);
      const { firstName, profileImage } = userDetail;
      setUserDetail({ firstName, profileImage });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handlesetLogout = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      localStorage.clear();
      dispatch(setAuthentication(false));
    },
    [dispatch],
  );

  return (
    <>
      <header className="flex w-full items-center justify-between md:justify-end py-4 pr-4 md:pr-16 sticky bg-white z-40 top-menu-bar-shadow top-0 right-0">
        <div className="flex gap-x-4 md:hidden py-2 md:py-4 px-3">
          <span
            className="hover:bg-primary-50 cursor-pointer"
            onClick={() => {
              setIsMobileOpen(true);
            }}
          >
            <Hamburger />
          </span>
          <Mobile />
        </div>
        {isAuthenticated ? (
          <div className="flex items-center">
            <Image
              className="w-8 h-8 rounded-full mr-2 md:mr-4"
              // src={userDetail?.profileImage ? userDetail?.profileImage: "https://images.unsplash.com/placeholder-avatars/extra-large.jpg"}
              src={"https://images.unsplash.com/placeholder-avatars/extra-large.jpg"}
              alt="Avatar"
              width={32}
              height={32}
            />
            <div
              className="flex items-center"
              onClick={() => setIsUserDropdownActive(!isUserDropdownActive)}
            >
              <h2 className="text-base font-medium md:mr-3">
                Hi {userDetail.firstName}
              </h2>
              <div
                className="cursor-pointer"
                onClick={() => setIsUserDropdownActive(!isUserDropdownActive)}
              >
                <ToggleSubMenuIcon fill="#121212" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <Image
              className="w-8 h-8 rounded-full mr-2 md:mr-4"
              src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg"
              alt="Avatar"
              width={32}
              height={32}
            />
            <div
              className="flex items-center"
              onClick={() => setIsUserDropdownActive(!isUserDropdownActive)}
            >
              <h2 className="text-base font-medium md:mr-3">
                Hi, User
              </h2>
              <div
                className="cursor-pointer"
                onClick={() => setIsUserDropdownActive(!isUserDropdownActive)}
              >
                <ToggleSubMenuIcon fill="#121212" />
              </div>
            </div>
          </div>
        )}
      </header>
      {isUserDropdownActive && (
        <div className="w-48 bg-white z-50 drop-shadow rounded-md transition-shadow ease-in-out fixed right-[10px] md:right-[60px] top-[77px] md:top-[68px] text-center overflow-hidden">
          <div className="flex flex-col">
            {isAuthenticated ? (
              <><Link
                href="/dashboard/profile"
                className="py-2 hover:bg-primary-200 hover:text-white"
              > Profile</Link><Link
                href="/dashboard/settings"
                className="py-2 hover:bg-primary-200 hover:text-white"
              >
                  Settings
                </Link><Link
                  href="/#"
                  onClick={handlesetLogout}
                  className="py-2 hover:bg-primary-200 hover:text-white"
                >
                  Sign out
                </Link></>
                ) : (
                  <Link
                  href="/login"
                  className="py-2 hover:bg-primary-200 hover:text-white"
                >
                  Login
                </Link>
                )
            }
          </div>
        </div>
      )}
      {isMobileOpen && (
        <MobileNavbar
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
        />
      )}
    </>
  );
};

export default TopMenu;
