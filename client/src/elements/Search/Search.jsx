import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";

const CustomSearch = (props) => {
  return (
    <Input
      prefix={<SearchOutlined className="site-form-item-icon" />}
      {...props}
    />
  );
};

export default CustomSearch;
