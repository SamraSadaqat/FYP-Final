import { Steps } from "antd";
import styles from "elements/Steps/Steps.module.scss";
import { PropTypes } from "prop-types";
import React from "react";

const CustomSteps = (props) => {
  return (
    <Steps className={styles.stepsFont} current={props.current} {...props}>
      {props.children}
    </Steps>
  );
};

export default CustomSteps;

CustomSteps.propTypes = {
  children: PropTypes.node,
  current: PropTypes.number,
};
