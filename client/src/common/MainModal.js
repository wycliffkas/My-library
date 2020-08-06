import React from "react";
import Modal from "react-bootstrap/Modal";

const MainModal = ({ children, onHideModal, modal }) => {
  return (
    <div>
      <Modal show={modal} onHide={onHideModal}>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </div>
  );
};

export default MainModal;
