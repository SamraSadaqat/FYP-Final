import { Col, Image,Row } from "antd";
import BackButton from "assets/images/bacl-btn.svg";
import { PropTypes } from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
const BackPage = (props) => {
  const { title } = props;
  const nav = useNavigate();
  return (
    <>
      <div className="page-top-row">
        <div className="container">
          <Row align="middle">
            <Col span={8}>
              <Image
                preview={false}
                src={BackButton}
                className="back-btn"
                onClick={() => nav(-1)}
                width="35px"
              />
            </Col>
            <Col span={8} className="text-center">
              <h1>{title}</h1>
            </Col>
            <Col span={8}></Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default BackPage;
BackPage.propTypes = {
  title: PropTypes.string,
};
