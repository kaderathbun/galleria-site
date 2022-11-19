import React, { useState, useReducer, useEffect } from 'react'

// styles
import './Gallery.scss'
import { useMediaQuery } from 'react-responsive'
import btnPrev from '../../assets/shared/icon-back-button.svg'
import btnNext from '../../assets/shared/icon-next-button.svg'

// components
import ImageWorks from '../../Components/ImageWorks/ImageWorks'

const ACTIONS = {
  UPDATE: 'UPDATE',
}

function Gallery({ data }) {
  // changes art work image at certain viewport
  const isMobile = useMediaQuery({ query: '(max-width: 460px)' })

  const [i, setIndex] = useState(0)
  const contentReducer = (state, actions) => {
    switch (actions.type) {
      case ACTIONS.UPDATE:
        return {
          ...state,
          imageMobile: data[i].images.hero.small,
          imageLarge: data[i].images.hero.large,
          name: data[i].name,
          artist: data[i].artist.name,
          artistImg: data[i].artist.image,
          year: data[i].year,
          description: data[i].description,
          source: data[i].source,
        }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(contentReducer, {
    imageMobile: data[0].images.hero.small,
    imageLarge: data[0].images.hero.large,
    name: data[0].name,
    artist: data[0].artist.name,
    artistImg: data[0].artist.image,
    year: data[0].year,
    description: data[0].description,
    source: data[0].source,
  })

  // changes document title when state is updated
  useEffect(() => {
    document.title = `Galleria | ${state.name}`
  }, [state])

  const decrementIndex = () => {
    if (i <= 0) {
      setIndex(data.length - 1)
      dispatch({ type: ACTIONS.UPDATE })
    } else {
      setIndex((prevIndex) => prevIndex - 1)
      dispatch({ type: ACTIONS.UPDATE })
    }
  }
  const incrementIndex = () => {
    if (i >= data.length - 1) {
      setIndex(0)
      dispatch({ type: ACTIONS.UPDATE })
    } else {
      setIndex((prevIndex) => prevIndex + 1)
      dispatch({ type: ACTIONS.UPDATE })
    }
  }

  return (
    <main className="gallery">
      <section className="gallery__container">
        <ImageWorks
          className="gallery__image"
          source={isMobile ? state.imageMobile : state.imageLarge}
          alt={`"${state.name}" by ${state.artist}, ${state.year}`}
        />
        <div className="gallery__content-wrapper">
          <h1 className="gallery__name">{state.name}</h1>
          <address className="gallery__artist-name">{state.artist}</address>
          <ImageWorks
            className="gallery__artist-image"
            source={state.artistImg}
            alt={`${state.artist} portrait`}
          />
        </div>
      </section>
      <article className="gallery__description-container">
        <span className="gallery__year">{state.year}</span>
        <p className="gallery__description">{state.description}</p>
        <a
          className="gallery__source"
          href={state.source}
          target="_blank"
          rel="noreferrer"
        >
          Go to source
        </a>
      </article>
      <footer className="footer">
        <div className="footer__progress-bg">
          <div
            className="footer__progress-overlay"
            style={{ width: ((i + 1) / data.length) * 100 + '%' }}
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
    </main>
  )
}

export default Gallery
