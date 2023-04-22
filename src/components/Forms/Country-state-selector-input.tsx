import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { Controller } from "react-hook-form";

interface CountryStateSelectorProps {
  onCountryChange?: (value: string) => void;
  onStateChange?: (value: string) => void;
  required?: boolean;
  register?: any;
  control: any;
  watch: any;
  setValue: any;

}

const CountryStateSelector: React.FC<CountryStateSelectorProps> = ({
  onCountryChange,
  onStateChange,
  required = false,
  control,
  watch,
  setValue,
}) => {

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col">
        <label htmlFor="country" className="block text-color mb-2">
          Country
          {required && <span className="text-red-600">*</span>}
        </label>
        <Controller
          name="country"
          control={control}
          rules={{ required: required ? "Please select a country" : false }}
          render={({ field }) => (
            <CountryDropdown
              value={field.value}
              onChange={(value: string) => {
                field.onChange(value);
                setValue("country", value);
                if (onCountryChange) {
                  onCountryChange(value);
                }
              }}
              classes="form-select p-2 rounded-full w-full md:w-[343px] border border-solid border-[#d1d1d1] shadow appearance-none focus:border-[#CEDCDE] focus:outline-none md:mr-6"
              id="country"
              name="country"
            />
          )}
        />
      </div>
      {/* {countryError && <p className="text-red-600 text-sm">{countryError}</p>} */}
      <div className="flex flex-col">
        <label
          htmlFor="state"
          className="block text-color mb-2"
        >
          State/Region
          {required && <span className="text-red-600">*</span>}
        </label>
        <Controller
          name="state"
          control={control}
          rules={{
            required: required ? "Please select a state or region" : false,
          }}
          render={({ field }) => (
            <RegionDropdown
              disableWhenEmpty={true}
              country={watch("country")}
              value={field.value}
              onChange={(value: string) => {
                field.onChange(value);
                setValue("state", value);
                if (onStateChange) {
                  onStateChange(value);
                }
              }}
              classes="form-select p-2 rounded-full w-full md:w-[343px] border border-solid border-[#d1d1d1] shadow appearance-none focus:border-[#CEDCDE] focus:outline-none md:mr-6"
              id="state"
              name="state"
            />
          )}
        />
      </div>
      {/* {stateError && <p className="text-red-600 text-sm">{stateError}</p>} */}
    </div>
  );
};

export default CountryStateSelector;
