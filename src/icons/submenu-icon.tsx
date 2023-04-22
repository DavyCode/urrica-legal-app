import React from 'react'

interface Props {
    fill?: string;
    double?: boolean
}
const SubCircleIcon:React.FC<Props> = ({fill, double = false}): JSX.Element => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
        {
            !double ? (
                <circle cx="12" cy="12" r="6.5" stroke={fill} />
            ) : (
                <>
                <circle cx="10" cy="10" r="6.5" stroke={fill} />
                <circle cx="9.99996" cy="9.99996" r="4.45455" fill={fill} /></>
            )
        }
    </svg>
  );
}

export default SubCircleIcon
{/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
</svg> */}
