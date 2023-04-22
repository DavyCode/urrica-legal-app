import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import clsx from "clsx";

import Logo from "../../icons/Logo";
import LogoName from "../../icons/Logo-name";
import ToggleSubMenuIcon from "../../icons/toggle-sub-menu-icon";
import CollapseIcon from "../../icons/collapse-icon";
import SubCircleIcon from "../../icons/submenu-icon";
import { MenuItems } from "../../utils/data";
import CloseModalIcon from "../../icons/modal-icon/close-modal-icon";

interface Props {
  isMobileOpen: boolean;
  setIsMobileOpen: (arg: any) => void;
}

const MobileNavbar: React.FC<Props> = ({ isMobileOpen, setIsMobileOpen }) => {
  const router = useRouter();
  const [openMenus, setOpenMenus] = useState<number[]>([]);

  const closeNav = () => setIsMobileOpen(false);

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
        ["min-h-screen bg-primary p-4 fixed scrollbar-hide z-50"]: true,
        ["w-20"]: !isMobileOpen,
        ["w-64"]: isMobileOpen,
      })}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <nav>
        <div className='items-center flex gap-4 pt-[25px] -mt-5 top-menu-bar-shadow border-b-primary-100 pb-3'>
          <div className='cursor-pointer' onClick={closeNav}>
            <CloseModalIcon stroke='white' />
          </div>
        </div>

        <ul className='list-none mt-6'>
          {MenuItems.map(({ icon: Icon, ...menu }) => (
            <li key={menu.id} className='text-white font-medium cursor-pointer py-2'>
              {menu.children ? (
                <div>
                  <div onClick={() => toggleMenu(menu.id)} className='flex items-center whitespace-nowrap'>
                    <div className='flex items-center rounded p-1 mr-3'>
                      <Icon />
                      {/* <span
                        className={clsx({
                          ["hidden"]: isMobileOpen,
                          ["mx-2 relative z-50 invisible group-hover/item:visible group-hover/edit:text-color-700 -rotate-90 animate-spin translate-y-6"]:
                            isMobileOpen,
                        })}
                      >
                        <ToggleSubMenuIcon fill="#FF0000" />
                      </span> */}
                      {/*  <ul
                          className="list-none bg-primary group-hover/edit:block w-60 rounded-lg flex flex-col p-1 pl-5 absolute ml-[40px] mt-16"
                          style={{
                            transition:
                              "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s",
                          }}
                        >
                           {menu.children.map((child) => (
                            <li
                              key={child.title}
                              className="flex items-center text-white py-2"
                            >
                              <SubCircleIcon fill="#FAD360" />
                              <Link href={child.href} legacyBehavior>
                                <a className="flex text-left text-sm ml-3">
                                  {child.title}
                                </a>
                              </Link>
                              <div className="absolute right-3">
                                <SubCircleIcon fill="#CE9C09" double />
                              </div>
                            </li>
                          ))}
                        </ul> */}
                    </div>

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
                  </div>
                  {openMenus.includes(menu.id) && (
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
                        "flex rounded p-1 -ml-4 pl-5 mr-3": true,
                        ["border-l-2 border-[#FAD360]"]: menu.href === urlName,
                      })}
                    >
                      <Icon />
                    </div>
                    <span
                      className={clsx({
                        ["text-white text-sm font-medium"]: true,
                      })}
                    >
                      {menu.title}
                    </span>
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

export default MobileNavbar;
