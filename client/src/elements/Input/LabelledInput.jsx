import { Space } from "antd";
import Input from "elements/Input/Input";
import Typography from "elements/Title/Title";
import { PropTypes } from "prop-types";
import React from "react";

const InputWithLabel = (props) => {
  const { label, maxLength, required } = props;

  return (
    <>
      <div>
        <Space direction="vertical" size={5} className="spacer">
          <Typography type={required ? "label" : "text"} title={label} />
          <Input maxLength={maxLength} />
        </Space>
      </div>
    </>
  );
};

export default InputWithLabel;
InputWithLabel.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
};
