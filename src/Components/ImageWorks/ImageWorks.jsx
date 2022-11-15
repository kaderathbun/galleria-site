import React from 'react'

function ImageWorks({ source, alt }) {
  return (
    <React.Fragment>
      <img src={source} alt={alt} />
    </React.Fragment>
  )
}

export default ImageWorks
