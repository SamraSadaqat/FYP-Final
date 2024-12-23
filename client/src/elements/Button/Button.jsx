import { Button as AntButton } from "antd";
// import styles from "elements/Button/Button.module.scss";
import { PropTypes } from "prop-types";
import React from "react";

const Button = (props) => {
  return <AntButton {...props} />;
};

export default Button;

Button.propTypes = {
  title: PropTypes.string,
  // icon: PropTypes.object,
};
