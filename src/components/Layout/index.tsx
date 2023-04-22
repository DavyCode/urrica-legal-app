import { useState, ReactElement } from "react";
import TopMenu from "../NavBar";
import Sidebar from "../Sidebar";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

type LayoutProps = {
  children: ReactElement;
};
const Layout = ({ children }: LayoutProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleCollapse = useSelector((state: RootState) => state.toggle.toggleCollapse);

  return (
    <div className='md:h-screen'>
      <div className='flex justify-between'>
        <Sidebar toggleCollapse={toggleCollapse} />
        <div className='flex flex-col w-full md:flex-1 text-color'>
          <TopMenu isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
          <div
            className={clsx({
              "flex-1 pt-3 overflow-auto px-3 md:px-5": true,
              ["md:ml-64"]: !toggleCollapse,
              ["md:ml-20"]: toggleCollapse,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
