import React, { useEffect, useContext, useState } from 'react'
import { motion } from 'framer-motion'

// styles
import './Gallery.scss'
import { useMediaQuery } from 'react-responsive'
import btnPrev from '../../assets/shared/icon-back-button.svg'
import btnNext from '../../assets/shared/icon-next-button.svg'
import modalIcon from '../../assets/shared/icon-view-image.svg'

// components
import ImageWorks from '../../Components/ImageWorks/ImageWorks'
import Modal from '../../Components/Modal/Modal'

// helpers
import { ContentContext } from '../../Helpers/ContentContext'

function Gallery() {
  const { data, state, dispatch, index, setIndex, ACTIONS, setIsHome } =
    useContext(ContentContext)

  // changes art work image at certain viewport
  const isMobile = useMediaQuery({ query: '(max-width: 460px)' })
  const [isOpen, setIsOpen] = useState(false)

  // changes document title when state is updated
  useEffect(() => {
    document.title = `Galleria | ${state.name}`
    setIsHome(false)
    setIsOpen(false)
  }, [state, setIsHome, setIsOpen])

  // button controllers
  const decrementIndex = () => {
    if (index <= 0) {
      setIndex(data.length - 1)
      dispatch({ type: ACTIONS.UPDATE })
    } else {
      setIndex((prevIndex) => prevIndex - 1)
      dispatch({ type: ACTIONS.UPDATE })
    }
  }
  const incrementIndex = () => {
    if (index >= data.length - 1) {
      setIndex(0)
      dispatch({ type: ACTIONS.UPDATE })
    } else {
      setIndex((prevIndex) => prevIndex + 1)
      dispatch({ type: ACTIONS.UPDATE })
    }
  }

  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <main className="gallery">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="gallery__container"
      >
        <button onClick={handleOpen} className="gallery__btn-view">
          <img src={modalIcon} alt="View Work" />
          View Image
        </button>
        <ImageWorks
          className="gallery__image"
          source={isMobile ? state.imageMobile : state.imageLarge}
          alt={`"${state.name}" by ${state.artist}, ${state.year}`}
        />
        <div className="gallery__content-wrapper">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="gallery__name"
          >
            {state.name}
          </motion.h1>
          <motion.address
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.75 }}
            className="gallery__artist-name"
          >
            {state.artist}
          </motion.address>
          <ImageWorks
            className="gallery__artist-image"
            source={state.artistImg}
            alt={`${state.artist} portrait`}
          />
        </div>
      </motion.section>
      <article className="gallery__description-container">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="gallery__year"
        >
          {state.year}
        </motion.span>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.15 }}
          className="gallery__description"
        >
          {state.description}
        </motion.p>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.25 }}
          className="gallery__source"
          href={state.source}
          target="_blank"
          rel="noreferrer"
        >
          Go to source
        </motion.a>
      </article>
      <footer className="footer">
        <div className="footer__progress-bg">
          <div
            className="footer__progress-overlay"
            style={{ width: ((index + 1) / data.length) * 100 + '%' }}
          />
        </div>
        <nav className="footer__nav-container">
          <div className="footer__content-wrapper">
            <span className="footer__title">{state.name}</span>
            <span className="footer__artist">{state.artist}</span>
          </div>
          <div className="footer__btn-wrapper">
            <button onClick={decrementIndex}>
              <img src={btnPrev} alt="previous" />
            </button>
            <button onClick={incrementIndex}>
              <img src={btnNext} alt="next" />
            </button>
          </div>
        </nav>
      </footer>
      {isOpen ? (
        <Modal>
          <button onClick={handleClose} className="modal__close">
            Close
          </button>
          <ImageWorks
            className="modal__image"
            source={state.imageLarge}
            alt={`"${state.name}" by ${state.artist}, ${state.year}`}
          />
        </Modal>
      ) : null}
    </main>
  )
}

export default Gallery
