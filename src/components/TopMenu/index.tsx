import React from "react";
import { Input, Space } from "antd";
import {
  HomeOutlined,
  TwitterOutlined,
  UserAddOutlined,
  SettingFilled,
} from "@ant-design/icons";

const TopMenu = () => {
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);

  return (
    <div className="flex justify-between h-10 justify-items-center pb-2">
      <div className="justify-items-center ml-4 mt-2 w-[250px]">
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
        />
      </div>
      <div className="flex mr-4">
        <Space>
            <HomeOutlined />
          <TwitterOutlined />
          <UserAddOutlined />
          <SettingFilled />
        </Space>
      </div>
    </div>
  );
};

export default TopMenu;
