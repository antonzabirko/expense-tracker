import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = (props) => (
    <Modal
        className="modal"
        isOpen={props.modalState}
        onRequestClose={props.onModalCancel}
    >
        <div className="modal__border-container">
            <h1 className="modal__title">Remove Expense</h1>
            <p className="modal__body">Proceeding will delete and un-archive this expense.</p>
            <div className="button__container">
                <button className="button button-secondary" onClick={props.onModalConfirm}>Proceed</button>
                <button className="button" onClick={props.onModalCancel}>Cancel</button>
            </div>
        </div>
    </Modal>
);

export default ConfirmationModal;