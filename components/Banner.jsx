import React from 'react'

const Banner = ({title}) => {
  return (
    <div class="banner">
            <img className="squat-banner" src="/squat-photo.jpg" alt="Squat PR" />
            <h1 className="title">{title}</h1>
    </div>
  )
}

export default Banner