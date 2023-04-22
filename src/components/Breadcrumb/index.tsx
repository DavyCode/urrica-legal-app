import React from "react";
import Link from "next/link";
import CollapseIcon from "../../icons/collapse-icon";

interface Props {
  items: { label: string; href?: string }[];
}

const Breadcrumb = ({ items }: Props) => {
  return (
    <nav className='flex items-center md:px-4 text-sm font-medium mb-10'>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index !== 0 && (
            <span className='mx-2 rotate-180'>
              {" "}
              <CollapseIcon />
            </span>
          )}
          <Link href={item.href || ""} legacyBehavior>
            <a className='text-color-200 last:text-color last:capitalize last:cursor-none hover:text-color-600'>
              {item.label}
            </a>
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
