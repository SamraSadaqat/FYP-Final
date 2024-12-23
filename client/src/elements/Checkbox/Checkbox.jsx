import { Checkbox as CustomCheckbox } from "antd";
import { PropTypes } from "prop-types";
import React from "react";
const Checkbox = (props) => {
  const { children } = props;
  return <CustomCheckbox {...props}>{children}</CustomCheckbox>;
};

export default Checkbox;
Checkbox.propTypes = {
  children: PropTypes.string,
};
