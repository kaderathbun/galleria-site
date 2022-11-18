import React from 'react'

function ImageWorks({ source, alt, className }) {
  return (
    <React.Fragment>
      <img className={className} src={source} alt={alt} />
    </React.Fragment>
  )
}

export default ImageWorks
