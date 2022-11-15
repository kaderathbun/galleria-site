import React from 'react'
import { Link } from 'react-router-dom'

// components
import ImageWorks from '../../Components/ImageWorks/ImageWorks'

function Home({ data }) {
  return (
    <main className="main__container">
      {data.map((work) => {
        return (
          <Link
            key={work.name}
            to={`/galleria/${work.name.toLowerCase().replaceAll(' ', '-')}`}
          >
            <ImageWorks
              className="main__image"
              source={work.images.hero.small}
              alt={work.name}
            />
          </Link>
        )
      })}
    </main>
  )
}

export default Home
