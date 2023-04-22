import { clsx } from 'clsx';
interface IProps {
  // type: string;
  label?: string;
  placeholder?: string;
  name: string;
  register?: any;
  error?: any;
  children?: any;
  // icon?: JSX.Element;
  additionalClassname?: any;
  value?: any;
}

const SelectField = ({
  // type,
  placeholder,
  name,
  error,
  register,
  label,
  children,
  // icon,
  additionalClassname
}: IProps): JSX.Element => {
  return (
    <div className="mb-4">
      <div className="w-full">
        <span className="text-base text-color font-medium">{label}</span>
        <div
          className={clsx({
            ["flex justify-between items-center border border-solid border-[#d1d1d1] focus:border-[#CEDCDE] focus:outline-none placeholder:text-color-100"]:
              true,
            [additionalClassname]: !!additionalClassname,
          })}
        >
        <select
          placeholder={placeholder}
          className="w-full h-10 px-4 focus:outline-0 shadow appearance-none leading-tight"
          {...register(name)}
          name={name}
        >
          {children}
        </select>
        </div>
      </div>
      {error ? (
        <p className="flex items-center lowercase text-[#ED2E7E] text-xs">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default SelectField;
