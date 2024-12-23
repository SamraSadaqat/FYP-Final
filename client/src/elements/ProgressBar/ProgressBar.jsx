import { Progress as ProgressBar } from "antd";
import styles from "elements/ProgressBar/ProgressBar.module.scss";
import { PropTypes } from "prop-types";
import React, { useState } from "react";

const Progress = (props) => {
  const progressData = props.details;
  const [percentage, setPercentage] = useState(0);
  const determineRatio = (provided, completed) => {
    let total = (completed / provided) * 100;
    return setPercentage(total);
  };

  return (
    <div className={styles.progressBarMain}>
      <ProgressBar
        percent={percentage}
        size="small"
        format={() =>
          determineRatio(progressData.assigned, progressData.completed)
        }
        showInfo={true}
      />
    </div>
  );
};

export default Progress;

Progress.propTypes = {
  details: PropTypes.Object,
};
