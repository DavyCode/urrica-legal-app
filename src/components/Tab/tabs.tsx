import Tab from './index';

interface TabsProps {
  tabsData: {
    label: string;
  }[];
  handleTabClick: (arg: string) => void;
  activeTabLabel: string;
}

const Tabs:React.FC<TabsProps> = ({tabsData,
  handleTabClick,
  activeTabLabel
}) => {
  return (
    <ul className="w-full">
      {tabsData.map((datum: any) => {
        return (
          <Tab
            isActive={datum.label === activeTabLabel}
            key={datum.label}
            handleClick={handleTabClick}
            label={datum.label}
          />
        );
      })}
    </ul>
  );
}

export default Tabs
