import React from 'react';
import Modal from 'react-modal';

import CloseImage from 'assets/icons/ic_close.svg';
import mapModifiers from 'utils/functions';

interface ModalProps {
  isOpen: boolean;
  classnames?: string;
  handleClose?: () => void;
  noScrollContainer?: boolean;
}

const CustomModal: React.FC<ModalProps> = ({
  isOpen,
  classnames,
  handleClose,
  children,
  noScrollContainer,
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={handleClose}
    closeTimeoutMS={250}
    className={`o-modal ${classnames}`}
    appElement={document.getElementById('root') as HTMLElement}
    ariaHideApp={false}
    portalClassName={mapModifiers('o-modal-portal', isOpen && 'open')}
    overlayClassName="o-modal-overlay"
    bodyOpenClassName="reactmodal-body-open"
    htmlOpenClassName="reactmodal-html-open"
  >
    <div className={mapModifiers('o-modal-container', noScrollContainer && 'noScrollContainer')}>
      <img
        className="o-modal-icon"
        src={CloseImage}
        alt="close"
        onClick={handleClose}
      />
      <div className="o-modal-content">
        {children}
      </div>
    </div>
  </Modal>
);

export default CustomModal;
