import { Descriptions as CustomDescriptions } from "antd";
import { PropTypes } from "prop-types";
import React from "react";

const Descriptions = (props) => {
  return <CustomDescriptions {...props}>{props.children}</CustomDescriptions>;
};

export default Descriptions;

Descriptions.propTypes = {
  children: PropTypes.Object,
};
