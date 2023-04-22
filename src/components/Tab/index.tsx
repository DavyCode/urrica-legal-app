import { clsx } from 'clsx';

interface TabProps {
    label: string;
    handleClick: (arg: string) => void;
    isActive: boolean;
}

const Tab:React.FC<TabProps> = ({ label, handleClick, isActive }) => {
    return (
      <button
        className={clsx({
          "text-[#9E9E9E] mr-10 py-2":
            true,
          "border-b-[3px] border-[#7C01BD]": isActive,
        })}
        onClick={() => {
          handleClick(label);
        }}
      >
        {label}
      </button>
    );
}

export default Tab;
