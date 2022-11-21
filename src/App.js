import React, { useReducer, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// data
import data from './data/data.json'

// styles
import './App.scss'

// components
import Header from './Components/Header/Header'

// helpers
import { ContentContext } from './Helpers/ContentContext'

// pages
import Home from './Pages/Home/Home'
import Gallery from './Pages/Gallery/Gallery'
import Error from './Pages/Error/Error'

function App() {
  const ACTIONS = {
    UPDATE: 'UPDATE',
  }

  const [index, setIndex] = useState(0)

  const contentReducer = (state, actions) => {
    switch (actions.type) {
      case ACTIONS.UPDATE:
        return {
          ...state,
          imageMobile: data[index].images.hero.small,
          imageLarge: data[index].images.hero.large,
          name: data[index].name,
          artist: data[index].artist.name,
          artistImg: data[index].artist.image,
          year: data[index].year,
          description: data[index].description,
          source: data[index].source,
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

  const [isHome, setIsHome] = useState(true)

  return (
    <div className="App">
      <BrowserRouter>
        <ContentContext.Provider
          value={{
            data,
            state,
            dispatch,
            index,
            setIndex,
            ACTIONS,
            isHome,
            setIsHome,
          }}
        >
          <Header />
          <Routes>
            <Route index path="/galleria" element={<Home />} />
            <Route path="/galleria/slideshow" element={<Gallery />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </ContentContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
