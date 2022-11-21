import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// styles
import './Header.scss'
import Logo from '../../assets/shared/logo.svg'

// helpers
import { ContentContext } from '../../Helpers/ContentContext'

function Header() {
  const { isHome, setIsHome } = useContext(ContentContext)

  const handleIsHome = () => {
    setIsHome(!isHome)
  }

  return (
    <header className="header">
      <Link onClick={handleIsHome} to={'/'}>
        <img className="header__logo" src={Logo} alt="Galleria" />
      </Link>
      <Link
        className="header__btn-slideshow"
        onClick={handleIsHome}
        to={isHome ? '/galleria/slideshow' : '/'}
      >
        {isHome ? 'Start Slideshow' : 'Stop Slideshow'}
      </Link>
    </header>
  )
}

export default Header
