import { PropTypes } from "prop-types";
import React from "react";

const Tag = (props) => {
  const { color, fontcolor, title, fullWidth } = props;
  const style = {
    color: fontcolor,
    backgroundColor: color,
    boxSizing: "border-box",
    fontVariant: "tabular-nums",
    listStyle: "none",
    fontFeatureSettings: "tnum",
    height: "auto",
    padding: "0 7px",
    fontSize: "12px",
    lineHeight: "20px",
    whiteSpace: "nowrap",
    background: color,
    borderRadius: "2px",
    opacity: 1,
    transition: "all .3s",
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...(!fullWidth && { maxWidth: "110px" }),
  };
  return <span style={style}>{`${title}`}</span>;
};
export default Tag;

Tag.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  fontcolor: PropTypes.string,
  fullWidth: PropTypes.bool,
};
