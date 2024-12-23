import { Popover } from "antd";
import { PropTypes } from "prop-types";
import React from "react";

const IconPopover = (props) => {
  const content = <span>{props.content}</span>;
  return (
    <Popover content={content} {...props}>
      {props.children}
    </Popover>
  );
};
export default IconPopover;

IconPopover.propTypes = {
  content: PropTypes.string,
  children: PropTypes.node,
};
