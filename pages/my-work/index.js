import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const handleClickScroll = (elementName) => {
  element = document.getElementById(elementName)
  if (element) {
  return () => {
    element.scrollIntoView({behavior:"smooth"})   
  }
}
}

const index = () => {
  return (
    <main className="main my-work">
      <Navbar />
      <h1 className="title">My Work</h1>
      <div className="main-grid">
        {/* example
        <a href="https://www.google.com" target="_blank" className="work-example-container">
          <img className='img' src="/my-work/client-1.png" alt="" />
          <h3 className="caption">Kerry At the Loft</h3>  
        </a>
        */}
      </div>
      
    </main>
  )
}

export default index