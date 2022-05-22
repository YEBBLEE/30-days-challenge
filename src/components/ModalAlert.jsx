import React from 'react';

function ModalAlert({text, isAlert,onClose}) {
  return (
    <>
    { text && (
        <div className='modal'>
        <div className={`modal-container ${isAlert ? 'red' : 'green'} `}>
          <span className="close" onClick={onClose}>×</span>
          <div className="modal-text">{text}</div>
        </div>
      </div>
      )
    }
    </>
  )
    
}
export default React.memo(ModalAlert);