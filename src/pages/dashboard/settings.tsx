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
import { userSettingsData } from "../../utils/data";

import SubscriptionSettings from "../../components/Settings/subscriptionSettings";
import BusinessInfoSettings from "../../components/Settings/businessInfoSettings";

const Settings = () => {
  const router = useRouter();
  const [userImage, setUserImage] = useState(true);
  const [currentTab, setCurrentTab] = useState("Subscription");

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
              Settings
            </h1>

            {/* mini nav */}
            <Tabs
              tabsData={userSettingsData}
              handleTabClick={(tabName: string) => setCurrentTab(tabName)}
              activeTabLabel={currentTab}
            />
            {/* End of mini nav */}
            {currentTab === "Subscription" ? <SubscriptionSettings /> : <BusinessInfoSettings />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withAuth(Settings);
