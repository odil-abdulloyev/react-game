import React from 'react';
import './modal.scss';
import Form from '../form/form';

export default function Modal({ title, score, isOpen }) {
  return isOpen ? (
    <div className='modal' tabIndex='-1'>
      <div className='modal-dialog modal-dialog-centered ld ld-bounce-in'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h2 className='modal-title'>{title}</h2>
          </div>
          <div className='modal-body'>
            <p className='fs-4'>Your score is {score}</p>
          </div>
          <div className='modal-footer'>
            <Form score={score} />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
