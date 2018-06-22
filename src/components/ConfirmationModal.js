import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = ({ modalState, onModalCancel, onModalConfirm }) => (
  <Modal
    className="modal"
    isOpen={modalState}
    onRequestClose={onModalCancel}
  >
    <div className="modal__border-container">
      <h1 className="modal__title">Remove Expense</h1>
      <p className="modal__body">Proceeding will delete and un-archive this expense.</p>
      <div className="button__container">
        <button className="button button-secondary" onClick={onModalConfirm}>Proceed</button>
        <button className="button" onClick={onModalCancel}>Cancel</button>
      </div>
    </div>
  </Modal>
);

Modal.setAppElement('#app');

export default ConfirmationModal;
