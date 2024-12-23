import './Title.module.scss';

import { Typography as CustomTitle } from "antd";
import { PropTypes } from "prop-types";
import React from "react";
const Title = (props) => {
  const { title, className } = props;
  return (
    <CustomTitle.Title className={className} {...props}>
      {title}
    </CustomTitle.Title>
  );
};

export default Title;

Title.propTypes = {
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
