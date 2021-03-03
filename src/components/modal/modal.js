import React from 'react';
import './modal.scss';

export default function Modal({ title, score, isOpen }) {
  const handleSubmit = () => {};

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
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <input type='text' placeholder='Enter your name' className='form-control' />
              </div>
              <button type='submit' className='btn btn-primary'>
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
