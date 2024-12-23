import { Input } from "antd";
import styles from "elements/TextArea/TextArea.module.scss";
import React from "react";
const { TextArea } = Input;

const CustomTextArea = (props) => {
  return <TextArea className={styles.font} {...props} />;
};

export default CustomTextArea;
