import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// styles
import './Header.scss'
import Logo from '../../assets/shared/logo.svg'

function Header() {
  const [isHome, setIsHome] = useState(true)

  const handleIsHome = () => {
    setIsHome(!isHome)
  }

  return (
    <header className="header">
      <img className='header__logo' src={Logo} alt="Galleria" />
      <Link
        className="header__btn-slideshow"
        onClick={handleIsHome}
        to={isHome ? '/galleria/starry-night' : '/galleria/'}
      >
        {isHome ? 'Start Slideshow' : 'Stop Slideshow'}
      </Link>
    </header>
  )
}

export default Header
