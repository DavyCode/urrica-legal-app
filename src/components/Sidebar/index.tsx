import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setToggleCollapse } from "../../slices/toggleSlice";

import clsx from "clsx";

import Logo from "../../icons/Logo";
import LogoName from "../../icons/Logo-name";
import ToggleSubMenuIcon from "../../icons/toggle-sub-menu-icon";
import CollapseIcon from "../../icons/collapse-icon";
import SubCircleIcon from "../../icons/submenu-icon";
import { MenuItems } from "../../utils/data";

interface Props {
  toggleCollapse: boolean;
}

const Sidebar: React.FC<Props> = ({ toggleCollapse }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [openMenus, setOpenMenus] = useState<number[]>([]);

  const handleToggleSideBar = () => {
    dispatch(setToggleCollapse(!toggleCollapse));
  };

  const urlName = router.pathname;

  const toggleMenu = (index: number) => {
    if (openMenus.includes(index)) {
      setOpenMenus(openMenus.filter((i) => i !== index));
    } else {
      setOpenMenus([...openMenus, index]);
    }
  };

  return (
    <aside
      className={clsx({
        ["min-h-screen bg-primary p-4 hidden md:block fixed scrollbar-hide z-50"]: true,
        ["w-64"]: !toggleCollapse,
        ["w-0 md:w-20"]: toggleCollapse,
      })}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <nav>
        <div className='items-center hidden md:flex gap-4 pt-[25px] -mt-5 top-menu-bar-shadow border-b-primary-100 pb-3'>
          <div className=''>
            <Logo />
          </div>
          <div className={clsx({ ["hidden"]: toggleCollapse })}>
            <LogoName />
          </div>
        </div>
        <div
          className={clsx({
            ["absolute -right-3 top-[90px] w-6 h-6 rounded-full bg-white text-color flex justify-center items-center cursor-pointer z-40 drop-shadow-md"]:
              true,
            ["rotate-180 group"]: toggleCollapse,
          })}
          onClick={handleToggleSideBar}
        >
          <CollapseIcon />
        </div>
        <ul className='list-none mt-6 pt-[41px]'>
          {MenuItems.map(({ icon: Icon, ...menu }) => (
            <li key={menu.id} className='text-white font-medium cursor-pointer py-2'>
              {menu.children ? (
                <div>
                  <div onClick={() => toggleMenu(menu.id)} className='flex items-center whitespace-nowrap group/item'>
                    <div
                      className={clsx({
                        "mr-3": !toggleCollapse,
                        "flex items-center rounded p-1 group/edit": toggleCollapse,
                      })}
                    >
                      <Icon />
                      <span
                        className={clsx({
                          ["hidden"]: !toggleCollapse,
                          ["mx-2 relative z-50 invisible group-hover/item:visible group-hover/edit:text-color-700 -rotate-90 animate-spin translate-y-6"]:
                            toggleCollapse,
                        })}
                      >
                        <ToggleSubMenuIcon fill='#FFFFFF' />
                      </span>
                      {toggleCollapse && (
                        <ul
                          className='list-none bg-primary hidden group-hover/edit:block w-60 rounded-lg flex flex-col p-1 pl-5 absolute ml-[40px] mt-16'
                          style={{
                            transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s",
                          }}
                        >
                          {menu.children.map((child) => (
                            <li key={child.title} className='flex items-center text-white py-2'>
                              <SubCircleIcon fill='#FAD360' />
                              <Link href={child.href} legacyBehavior>
                                <a className='flex text-left text-sm ml-3'>{child.title}</a>
                              </Link>
                              <div className='absolute right-3'>
                                <SubCircleIcon fill='#CE9C09' double />
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {!toggleCollapse && (
                      <div className='flex w-full justify-between relative'>
                        <span className='text-white text-sm font-medium'>{menu.title}</span>
                        <div
                          className={clsx({
                            ["-right-1 absolute"]: true,
                            ["rotate-180"]: openMenus.includes(menu.id),
                          })}
                          style={{
                            transition: "500ms cubic-bezier(0.2, 0, 0, 1) 0s",
                          }}
                        >
                          <ToggleSubMenuIcon />
                        </div>
                      </div>
                    )}
                  </div>
                  {openMenus.includes(menu.id) && !toggleCollapse && (
                    <ul
                      className='list-none'
                      style={{
                        transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s",
                      }}
                    >
                      {menu.children.map((child) => (
                        <li
                          key={child.title}
                          className={clsx({
                            ["flex items-center text-white py-2"]: true,
                          })}
                        >
                          <SubCircleIcon fill='#FAD360' />
                          <Link href={child.href} legacyBehavior>
                            <a className='ftext-left text-sm ml-3'>{child.title}</a>
                          </Link>
                          <div className='absolute right-3'>
                            <SubCircleIcon fill='#CE9C09' double />
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link href={menu.href || "#"} legacyBehavior>
                  <a className='flex text-sm block group/name items-center'>
                    <div
                      className={clsx({
                        "flex rounded p-1 -ml-4 pl-4 mr-3": true,
                        ["border-l-2 border-[#FAD360]"]: menu.href === urlName,
                      })}
                    >
                      <Icon />
                      {toggleCollapse && (
                        <span className='bg-primary px-4 rounded-lg w-auto ml-[30px] h-6 whitespace-nowrap invisible group-hover/name:visible'>
                          {menu.title}
                        </span>
                      )}
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={clsx({
                          ["text-white text-sm font-medium"]: true,
                        })}
                      >
                        {menu.title}
                      </span>
                    )}
                  </a>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
