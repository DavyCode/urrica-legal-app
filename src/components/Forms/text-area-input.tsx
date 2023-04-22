interface TextAreaProps {
  label: string;
  name: string;
  rows?: number;
  cols?: number;
  width?: string;
  required?: boolean;
  control: any;
}

const TextAreaInput: React.FC<TextAreaProps> = ({
  label,
  name,
  rows = 2,
  cols = 30,
  width = "full",
  required = false,
  control
}) => {
    const errorMessage = false;
  return (
    <div className={`w-full md:w-${width}`}>
      <label htmlFor={name} className="block text-color mb-2">
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        cols={cols}
        className="form-textarea p-2 px-4 rounded-full w-full md:w-[74%] border border-solid border-[#d1d1d1] focus:border-[#CEDCDE] focus:outline-none md:mr-6 resize-none"
        {...control.register(name, {
          required: required && `${label} is required`,
        })}
      />
      {errorMessage && (
        <p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default TextAreaInput;
