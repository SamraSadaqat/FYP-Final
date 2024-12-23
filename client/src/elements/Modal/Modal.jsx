import { Modal as CustomModal } from "antd";
import styles from "elements/Modal/Modal.module.scss";
import { PropTypes } from "prop-types";
import React from "react";
const Modal = (props) => {
  return (
    <>
      <CustomModal className={styles.modalFonts} {...props}>
        {props.children}
      </CustomModal>
    </>
  );
};

export default Modal;

Modal.propTypes = {
  modalText: PropTypes.string,
  children: PropTypes.object,
};
