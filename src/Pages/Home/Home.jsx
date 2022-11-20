import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// styles
import './Home.scss'

// components
import ImageWorks from '../../Components/ImageWorks/ImageWorks'

// helpers
import { ContentContext } from '../../Helpers/ContentContext'

function Home() {
  const { data, setIndex, dispatch, ACTIONS, setIsHome } =
    useContext(ContentContext)

  // set document title when component first mounts
  useEffect(() => {
    document.title = `Galleria | Discover Masterpieces`
    setIsHome(true)
  }, [setIsHome])

  return (
    <main className="home">
      {data.map((work, index) => {
        return (
          <motion.figure
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            key={index}
            className="home__work-container"
          >
            <Link
              className="home__link-overlay"
              key={work.name}
              to={`/galleria/slideshow`}
              onClick={() => {
                setIndex(index)
                dispatch({ type: ACTIONS.UPDATE })
              }}
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
          </motion.figure>
        )
      })}
    </main>
  )
}

export default Home
