import {
  CountryDropdown,
  RegionDropdown,
} from "react-country-region-selector";
import { Controller } from 'react-hook-form';

interface Props {
  control: any;
  label: string;
  name: string;
  country: any;
}

const CountryInputField: React.FC<Props> = ({ label, control, name }) => {
  return (
    <div className="mb-4">
      
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <div className="flex items-center">
            <div className="w-full">
              <label className="block text-color font-bold mb-2" htmlFor={name}>
                {label}
              </label>
              <CountryDropdown
                value={value.country}
                onChange={(country) => onChange({ country })}
                classes="form-select p-2 rounded-full w-full md:w-[343px] border border-solid border-[#d1d1d1] focus:border-[#CEDCDE] focus:outline-none md:mr-6"
              />
            </div>
            <div className="w-full">
              <label className="block text-color font-bold mb-2" htmlFor={name}>
              </label>
              <RegionDropdown
                disableWhenEmpty={true}
                country={value.country}
                value={value.region}
                onChange={(region) => onChange({ region })}
                classes="p-2 rounded-full w-full md:w-[343px] border border-solid border-[#d1d1d1] focus:border-[#CEDCDE] focus:outline-none"
              />
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default CountryInputField;

{/* <CountryDropdown
            value={value.country}
            onChange={(country) => onChange({ country })}
            classes="p-2 rounded-full w-full md:w-[343px] border border-solid border-[#d1d1d1] focus:border-[#CEDCDE] focus:outline-none"
          /> */}
