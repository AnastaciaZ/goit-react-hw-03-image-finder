import React from 'react';

import s from '../Modal/Modal.module.css';

const Modal = ({closeModal, largeImageURL }) => {
  return (
    <div className={s.Overlay} onClick={closeModal}>
      <div className={s.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;