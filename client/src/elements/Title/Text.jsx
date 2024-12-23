import { Typography as CustomTitle } from "antd";
import { PropTypes } from "prop-types";
import React from "react";

const Text = (props) => {
  return (
    <CustomTitle.Text className={props.className} {...props}>
      {props.title}
    </CustomTitle.Text>
  );
};

export default Text;

Text.propTypes = {
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
