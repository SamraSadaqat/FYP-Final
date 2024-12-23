import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { PropTypes } from "prop-types";
import React from "react";
export default function AppLoader(props) {
  const antIcon = <LoadingOutlined spin style={{ color: "white" }} />;

  return <Spin {...props} indicator={antIcon} />;
}

AppLoader.propTypes = {
  size: PropTypes.string,
};
