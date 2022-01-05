import React from 'react';
import {createPortal} from 'react-dom';

const modalElement = document.getElementById('modal-root');

const Modal = ({ show, buttonClicked }) => {

  console.log(show)
return( 
  show ? createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={buttonClicked}>
            <span aria-hidden="false">&times;</span>
          </button>
        </div>
        <p>
          Hello, I'm a modal.
        </p>
      </div>
    </div>
  </React.Fragment>, modalElement
) : null
)
}
export default Modal;