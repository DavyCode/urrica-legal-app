interface IProps {
  error: boolean;
}

const VerifiedCodeField = ({ error }: IProps): JSX.Element => {
  return (
    <>
      <div
        id="otp"
        className="flex flex-row justify-center gap-x-2  text-center my-5"
      >
        <input
          className="border h-10 w-10 text-center form-control rounded"
          type="text"
          id="first"
          maxLength={1}
        />
        <input
          className="border h-10 w-10 text-center form-control rounded"
          type="text"
          id="second"
          maxLength={1}
        />
        <input
          className="border h-10 w-10 text-center form-control rounded"
          type="text"
          id="third"
          maxLength={1}
        />
        <input
          className="border h-10 w-10 text-center form-control rounded"
          type="text"
          id="fourth"
          maxLength={1}
        />
        <input
          className="border h-10 w-10 text-center form-control rounded"
          type="text"
          id="fifth"
          maxLength={1}
        />
        <input
          className="border h-10 w-10 text-center form-control rounded"
          type="text"
          id="sixth"
          maxLength={1}
        />
      </div>
      {error && <div className="text-red-700 text-sm">Invalid Token sent</div>}
    </>
  );
};

export default VerifiedCodeField;
