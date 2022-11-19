import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// styles
import './Home.scss'

// components
import ImageWorks from '../../Components/ImageWorks/ImageWorks'

function Home({ data }) {
  // set document title when component first mounts
  useEffect(() => {
    document.title = `Galleria | Discover Masterpieces`
  }, [])

  return (
    <main className="home">
      {data.map((work) => {
        return (
          <figure key={work.name} className="home__work-container">
            <Link
              className="home__link-overlay"
              key={work.name}
              to={`/galleria/slideshow`}
            >
              <div className="home__overlay"></div>
              <ImageWorks
                source={work.images.gallery}
                alt={`"${work.name}" by ${work.artist.name}, ${work.year}`}
              />
              <figcaption className="home__work-caption">
                <span>{work.name}</span>
                <address>{work.artist.name}</address>
              </figcaption>
            </Link>
          </figure>
        )
      })}
    </main>
  )
}

export default Home
