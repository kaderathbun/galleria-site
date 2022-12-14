import React from 'react'
import ReactDOM from 'react-dom'

// styles
import './Modal.scss'

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById('portal')
  )
}

export default Modal
