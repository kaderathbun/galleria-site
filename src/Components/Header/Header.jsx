import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/shared/logo.svg'

function Header() {
  const [isHome, setIsHome] = useState(true)

  const handleIsHome = () => {
    setIsHome(!isHome)
  }

  return (
    <header className="header">
      <img src={Logo} alt="Galleria" />
      <Link
        onClick={handleIsHome}
        to={isHome ? '/galleria/starry-night' : '/galleria/'}
      >
        {isHome ? 'Start Slideshow' : 'Stop Slideshow'}
      </Link>
    </header>
  )
}

export default Header
