import React, { useState } from 'react'
import Link from 'next/link';

import OpenMenuIcon from '../../svgs/menus/open-menu-icon.svg'
import CloseMenuIcon from '../../svgs/menus/close-menu-arrow.svg'
import UnfilledCircle from '../../svgs/menus/sub-menu-open.svg'
import FilledCircle from '../../svgs/menus/sub-menu-filled.svg'

const MenuAccordion = ({ label, Icon, link, hasSubmenu, submenu }: any) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="">
      <div
        className="flex items-center cursor-pointer w-[92%] pl-4 gap-x-1 h-[20px]"
        onClick={() => setIsActive(!isActive)}
      >
        <Icon />

        {!hasSubmenu && (
          <Link
            href={link}
            className="flex py-4 px-3 items-center w-full h-full"
          >
            {label}
          </Link>
        )}
        {hasSubmenu && (
          <p className="text-[15px] font-medium w-52 ml-2">{label}</p>
        )}
        {hasSubmenu && (
          <div className="text-2xl">
            {isActive ? <OpenMenuIcon /> : <CloseMenuIcon />}
          </div>
        )}
      </div>
      {hasSubmenu && isActive && (
        <div
          className="pt-3 w-full md:w-[82%] ml-12 flex flex-col"
          style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
        >
          {submenu.map((sub: any, index: any) => (
            <Link
              href={sub.link}
              key={index}
              className="flex py-4 px-3 items-center w-full h-full"
            >
              <span className={`text-sm text-[#D2CECE]`}>{sub.text}</span>
              <UnfilledCircle />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuAccordion;
