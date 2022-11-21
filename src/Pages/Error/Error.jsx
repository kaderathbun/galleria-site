import React from 'react'
import { useNavigate } from 'react-router-dom'

// styles
import './Error.scss'
import { FaSpinner } from 'react-icons/fa'

function Error() {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate('/')
  }, 6000)

  return (
    <div className="error">
      <section className="error__container">
        <h1>Sorry, this page does not exist.</h1>
        <p>Please wait while we redirect you to the home page.</p>
        <FaSpinner className="error__loading" />
      </section>
    </div>
  )
}

export default Error
