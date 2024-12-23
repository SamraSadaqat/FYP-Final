import { PropTypes } from "prop-types";
import React from "react";
const HorizontalRow = (props) => {
  return (
    <>
      <hr
        style={{
          backgroundColor: `${props.bg}`,
          width: `${props.width}`,
          height: `${props.height}`,
          border: "none",
          margin: "0 auto 0.5em",
        }}
      />
    </>
  );
};

export default HorizontalRow;

HorizontalRow.propTypes = {
  bg: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
