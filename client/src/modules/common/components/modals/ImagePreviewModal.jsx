import { Col, Image, Row } from "antd";
import Modal from "elements/Modal/Modal";
import Typography from "elements/Title/Title";
import { PropTypes } from "prop-types";
import React from "react";

const ImagePreviewModal = (props) => {
  const { setVisible, visible, src } = props;
  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Modal
        visible={visible}
        onCancel={handleCancel}
        onOk={handleCancel}
        centered={true}
        footer={null}
      >
        {src && src.length > 0 ? (
          <Row gutter={16} justify="center" className="multipleImagesView">
            <Image.PreviewGroup>
              {src.map((item, index) => {
                return (
                  <Col key={`gridImages-${index}`} span={8}>
                    <Image
                      key={index}
                      src={item.image}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Col>
                );
              })}
            </Image.PreviewGroup>
          </Row>
        ) : (
          <Row gutter={16} justify="center">
            <Typography type="text" level={4} title="No media to preview!" />
          </Row>
        )}
      </Modal>
    </>
  );
};

export default ImagePreviewModal;
ImagePreviewModal.propTypes = {
  /**
   * state to preview the modal.
   */
  visible: PropTypes.bool,
  /**
   * function to toggle the state of modal.
   */
  setVisible: PropTypes.func,
  src: PropTypes.string,
};
