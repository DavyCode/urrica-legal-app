import clsx from "clsx";
import { useState } from "react";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../../store";
import withAuth from "../../utils/withAuth";
import Breadcrumb from "../../components/Breadcrumb";

import DefaultUserIcon from "../../icons/default-user-icon";
import Tabs from "../../components/Tab/tabs";
import { userProfileData } from "../../utils/data";

import ProfileSettings from "../../components/Settings/profile";
import ResetUserPassword from "../../components/Settings/changePassword";

const Profile = () => {
  const router = useRouter();
  const [userImage, setUserImage] = useState(true);
  const [currentTab, setCurrentTab] = useState("Profile");

  const items = [{ label: "Dashboard", href: "/" }, { label: router.pathname.split("/")[1] }];
  const toggleCollapse = useSelector((state: RootState) => state.toggle.toggleCollapse);

  return (
    <Layout>
      <div className='flex justify-between flex-col md:flex-row md:gap-4 mt-4 text-color-200'>
        <div
          className={clsx({
            ["flex flex-col justify-between pt-2 md:pt-4"]: true,
            ["w-full md:w-[98.5%] md:ml-1"]: toggleCollapse,
            ["w-full md:w-[99.5%] md:ml-1"]: !toggleCollapse,
          })}
        >
          <Breadcrumb items={items} />
          <div className='mt-10'>
            <h1 className='w-[90%] md:w-full mb-[51px] text-center md:text-left text-2xl text-color font-bold'>
              Profile
            </h1>
            {/* <div className="flex flex-col w-full md:flex-row gap-y-3 md:gap-y-0 items-center mb-10">
              {userImage ? (
                <img
                  className="w-[110px] rounded-full md:mr-3"
                  src="https://randomuser.me/api/portraits/men/10.jpg"
                  alt="Avatar"
                />
              ) : (
                <div className="w-[110px] h-[110px] rounded-full bg-[#EDE9FFE5] mr-3 flex items-center justify-center object-contain">
                  <DefaultUserIcon />
                </div>
              )}
              <div className="h-10 rounded-full bg-[#FAD360] w-[193px] text-[#050505] text-base flex items-center justify-center cursor-pointer mr-4 font-bold">
                Upload new picture
              </div>
              <div className="w-[123px] h-10 bg-[#EFECE2] rounded-full text-[#888886] flex items-center justify-center cursor-pointer font-medium">
                Delete
              </div>
            </div> */}
            {/* mini nav */}
            <Tabs
              tabsData={userProfileData}
              handleTabClick={(tabName: string) => setCurrentTab(tabName)}
              activeTabLabel={currentTab}
            />
            {/* End of mini nav */}
            {currentTab === "Profile" ? <ProfileSettings /> : <ResetUserPassword />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withAuth(Profile);
