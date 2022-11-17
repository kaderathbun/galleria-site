import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// data
import data from './data/data.json'

// styles
import './App.scss'

// components
import Header from './Components/Header/Header'

// pages
import Home from './Pages/Home/Home'
import Gallery from './Pages/Gallery/Gallery'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/galleria" element={<Home data={data} />} />
          <Route path="/galleria/slideshow" element={<Gallery data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
