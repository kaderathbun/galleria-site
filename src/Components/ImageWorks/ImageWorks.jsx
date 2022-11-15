import React from 'react'

function ImageWorks({ source, alt }) {
  return (
    <React.Fragment>
      <img className="works__image" src={source} alt={alt} />
    </React.Fragment>
  )
}

export default ImageWorks
