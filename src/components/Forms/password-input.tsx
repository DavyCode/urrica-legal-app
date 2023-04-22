import clsx from "clsx";

import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

interface PasswordProps {
  label?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
  onClick?: () => void;
  onBlur?: (e: React.FocusEvent<any, Element>) => void;
  value: string;
  name: string;
  showPassword?: boolean;
  size?: string;
  width?: number;
  errorMessage?: string;
  disabled?: boolean;
  showToggleIcon?: boolean;
  id?: string;
  required?: boolean;
}

const PasswordInput: React.FC<PasswordProps> = ({
  label,
  placeholder = "",
  onChange = (e) => {},
  onClick = () => {},
  onBlur = () => {},
  name,
  value = "",
  width = 246,
  errorMessage,
  size,
  disabled = false,
  id,
  showPassword,
  showToggleIcon = true,
  required = false,
}) => {
  return (
    <div
      className="text-input__root"
      style={{ width: `${size === "full" ? "100%" : `${width}px`}` }}
    >
      {label && (
        <>
          <label htmlFor={label}>
            {label}
            <span className="text-red-500">{required && " *"}</span>
          </label>
        </>
      )}
      <div
        className={clsx({
          ["text-input__password_wrapper items-center"]: true,
          ["text-input--error"]: errorMessage,
        })}
      >
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          value={value}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          placeholder={placeholder}
          className="text-input__password"
        />
        {showToggleIcon && (
          <span className="pl-2 cursor-pointer" onClick={onClick}>
            {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </span>
        )}
      </div>
      {errorMessage && (
        <div className="text-input__error mt-2 text-xs text-red-600 capitalize">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
