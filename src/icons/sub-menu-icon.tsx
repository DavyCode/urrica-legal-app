import React from 'react'

//#FAD360

interface Props {
    filled?: string
}

const SubMenuIcon:React.FC<Props> = ({filled=""}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="6.5" stroke={filled} />
    </svg>
  );
}

export default SubMenuIcon