import { clsx } from "clsx";
import { useState } from "react";
import Spacer from "../spacer";

type Prop = {
  type: "submit" | "button";
  value: string;
  disabled?: boolean;
  handleClick?: (arg?: any) => void;
  icon?: JSX.Element;
  additionalClassname?: any;
  variant: "primary" | "tertiary";
};

const Button = ({
  type = "button",
  value,
  disabled,
  handleClick,
  icon,
  additionalClassname,
  variant,
}: Prop): JSX.Element => {
  const [loading, setLoading] = useState(false);
  return (
    <div className=''>
      <button
        className={clsx({
          "flex items-center justify-center leading-[17px] h-11 px-8 border-solid cursor-pointer": true,
          "bg-[#FFFFFF] border border-[#D1D1D1] rounded-lg": variant === "tertiary",
          "bg-[#FAD360] hover:bg-[#D6B01B] border border-[#FAD360]": variant === "primary",
          [additionalClassname]: additionalClassname,
        })}
        type={type}
        name=''
        value={value}
        onClick={handleClick}
      >
        {loading ? (
          <svg
            className={clsx({
              ["animate-spin -ml-1 mr-3 h-5 w-5 text-white"]: true,
              ["text-black"]: variant === "tertiary",
            })}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
        ) : (
          icon
        )}
        {!loading ? (
          <>
            {icon && value && <Spacer width={6} />}
            {value}
          </>
        ) : (
          "Processing"
        )}
      </button>
    </div>
  );
};

export default Button;
