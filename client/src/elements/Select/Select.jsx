import { Select as CustomSelect } from "antd";
import { PropTypes } from "prop-types";
import React from "react";

const Select = (props) => {
  return (
    <CustomSelect
      {...props}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {props.children}
    </CustomSelect>
  );
};

export default Select;

Select.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
