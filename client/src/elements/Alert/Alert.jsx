import styles from "Alert.module.scss";
import { Alert as AntAlert, Col, Row } from "antd";
import { PropTypes } from "prop-types";
import React from "react";
const Alert = (props) => {
  return (
    <>
      {props.visible ? (
        <Row justify="center">
          <Col xs={24} sm={12} md={6} lg={8}>
            <AntAlert className={styles.alertFonts} {...props} closable />
          </Col>
        </Row>
      ) : null}
    </>
  );
};

export default Alert;

Alert.propTypes = {
  visible: PropTypes.bool,
};
