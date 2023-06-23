import React from 'react'
import "./modal.css"

function Modal(props) {
    console.log(props)
  return (
    <div className='modal__back'>
        <div className="modal">
            {props.children}
            <button onClick={props.closeModal}>Close</button>
        </div>
    </div>
    
  )
  
}

export default Modal