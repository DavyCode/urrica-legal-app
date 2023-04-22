import { clsx } from 'clsx';
import PhoneInput from "react-phone-input-2";
import { Controller } from 'react-hook-form';

interface FieldProps {
  name: string;
  label: string;
  control: any;
  rules?: any;
  required?: boolean;
  autoFocus?: boolean;
}

const PhonePickerInput: React.FC<FieldProps> = ({
  name,
  label,
  control,
  rules,
  required = false,
  autoFocus = false,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-color font-bold mb-2">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <PhoneInput
            inputClass="w-full md:w-[343px] h-10 rounded-full flex justify-between items-center border border-solid border-[#d1d1d1] focus:border-[#CEDCDE] focus:outline-none placeholder:text-color-100"
            country={"us"}
            disableDropdown
            value={value}
            inputProps={{
              name,
              required,
              autoFocus,
              onBlur: onBlur,
              ref: ref,
            }}
            onChange={onChange}
          />
        )}
      />
    </div>
  );
};

export default PhonePickerInput
