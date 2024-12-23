import Modal from "elements/Modal/Modal";
import Typography from "elements/Title/Title";
import { PropTypes } from "prop-types";
import React from "react";

const ConfirmationModal = (props) => {
  const { setVisible, visible, onOk, content } = props;
  const confirmFunc = () => {
    onOk();
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Modal
        visible={visible}
        onCancel={handleCancel}
        onOk={confirmFunc}
        cancelText={"Close"}
      >
        <Typography level={5} title={content} />
      </Modal>
    </>
  );
};

export default ConfirmationModal;
ConfirmationModal.propTypes = {
  /**
   * state to preview the modal.
   */
  visible: PropTypes.bool,
  /**
   * function to toggle the state of modal.
   */
  setVisible: PropTypes.func,
  onOk: PropTypes.func,
  content: PropTypes.string,
};
