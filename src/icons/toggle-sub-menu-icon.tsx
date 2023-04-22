import React from 'react'

interface Props {
  fill?: string
}
const ToggleSubMenuIcon:React.FC<Props> = ({ fill="#FAD360"}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.00281 8.68836C3.00209 8.53003 3.0597 8.37143 3.18414 8.24587C3.42471 8.00311 3.8247 8.0013 4.06746 8.24187L9.52535 13.6505C9.92716 14.0487 10.5772 14.0458 10.9753 13.644L16.384 8.18607C16.6246 7.94331 17.0246 7.9415 17.2673 8.18207C17.5101 8.42264 17.5119 8.82263 17.2713 9.06539L11.8627 14.5233C11.4396 14.9502 10.8657 15.1945 10.2574 15.1972C9.64904 15.2 9.07299 14.9693 8.64603 14.5379L3.18814 9.12919C3.07091 9.00472 3.00352 8.84669 3.00281 8.68836Z"
        fill={fill}
      />
    </svg>
  );
}

export default ToggleSubMenuIcon