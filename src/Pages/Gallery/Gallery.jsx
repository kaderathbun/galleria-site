import React, { useState, useReducer } from 'react'

// styles
import './Gallery.scss'
import btnPrev from '../../assets/shared/icon-back-button.svg'
import btnNext from '../../assets/shared/icon-next-button.svg'

// componentsS
import ImageWorks from '../../Components/ImageWorks/ImageWorks'

const ACTIONS = {
  UPDATE: 'UPDATE',
}

function Gallery({ data }) {
  const [i, setIndex] = useState(0)
  const contentReducer = (state, actions) => {
    switch (actions.type) {
      case ACTIONS.UPDATE:
        return {
          ...state,
          image: data[i].images.gallery,
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
    image: data[0].images.gallery,
    name: data[0].name,
    artist: data[0].artist.name,
    artistImg: data[0].artist.image,
    year: data[0].year,
    description: data[0].description,
    source: data[0].source,
  })

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
      <div className="gallery__container">
        <ImageWorks
          source={state.image}
          alt={`"${state.name}" by ${state.artist}, ${state.year}`}
        />
        <div className="gallery__content-wrapper">
          <h1 className="gallery__name">{state.name}</h1>
          <address className="gallery__artist">{state.artist}</address>
          <ImageWorks source={state.artistImg} />
        </div>
      </div>
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
        <hr className="footer__progress" />
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
      </footer>
    </main>
  )
}

export default Gallery
