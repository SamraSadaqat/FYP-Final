import { Tabs } from "antd";
import { PropTypes } from "prop-types";
import React from "react";

const AppTabs = (props) => {
  return <Tabs {...props}>{props.children}</Tabs>;
};
export default AppTabs;

AppTabs.propTypes = {
  children: PropTypes.node,
};
