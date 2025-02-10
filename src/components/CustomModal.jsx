import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CustomModal = ({ isOpen, onRequestClose, contentLabel, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      className="modal"
      overlayClassName="overlay"
    >
      {children}
    </Modal>
  );
};

export default CustomModal;