import { Statistic as CustomStatistics } from "antd";
import { PropTypes } from "prop-types";
import React from "react";

const Statistics = (props) => {
  return (
    <>
      <CustomStatistics
        valueStyle={{ fontSize: "10px" }}
        value={props.completed}
        suffix={`/ ${props.assigned}`}
      />
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  completed: PropTypes.string,
  assigned: PropTypes.string,
};
