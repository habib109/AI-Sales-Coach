import React from 'react'

const Image = ({ className, src, alt}) => {
  return (
    <picture>
      

        <img className={`${className}`} src={src} alt={src} />
       
    </picture>
  )
}

export default Image