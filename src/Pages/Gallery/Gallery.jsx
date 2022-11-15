import React from 'react'
import { useParams } from 'react-router-dom'

function Gallery({ data }) {
  const { galleryId } = useParams()

  const galleryData = data.find(
    (works) => works.name.toLowerCase().replaceAll(' ', '-') === galleryId
  )

  console.log(galleryData)

  return (
    <div>
      <h1>{galleryData.name}</h1>
      <h2>{galleryData.year}</h2>
    </div>
  )
}

export default Gallery
