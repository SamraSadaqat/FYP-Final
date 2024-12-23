import { ConfigProvider, Space } from "antd";
import enUS from "antd/lib/locale/en_US";
import DatePicker from "elements/DatePicker/DatePicker";
import Typography from "elements/Title/Title";
import { PropTypes } from "prop-types";
import React from "react";

const LabelledDatePicker = (props) => {
  const { label, required } = props;
  return (
    <>
      <div>
        <Space direction="vertical" size={5} className="spacer">
          <Typography
            type={required ? "label" : "text"}
            title={label}
          />
          <ConfigProvider locale={enUS}>
            <DatePicker allowClear={false} {...props} />
          </ConfigProvider>
        </Space>
      </div>
    </>
  );
};

export default LabelledDatePicker;
LabelledDatePicker.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
};
