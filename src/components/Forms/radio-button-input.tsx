interface Props {
  label: string;
  values: string[];
  error?: string;
  register?: any
}

const RadioButtonInput: React.FC<Props> = ({ register, error, values, label }) => {
  return (
    <div className="mb-4">
      <span className="text-base text-color font-medium">{label}</span>
      <div className="flex flex-col md:flex-row">
        {values.map((value) => (
          <div
            className="flex items-center mr-6 mt-2 cursor-pointer"
            key={value}
          >
            <input
              type="radio"
              className="autofill:bg-primary h-6 w-6 border-[#F1f1f1] rounded-full"
              name="gender"
              id={value}
              value={value}
              {...register("gender")}
            />
            <label className="ml-2 text-color text-sm" htmlFor={value}>
              {value}
            </label>
          </div>
        ))}
      </div>
      {error ? (
        <p className="mt-2 flex items-center lowercase text-[#ED2E7E] text-xs">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default RadioButtonInput;
 