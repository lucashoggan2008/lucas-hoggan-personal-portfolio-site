import React from 'react'


const Navbar = () => {
  return (
    <nav>
        <a href="/" className="header-link">
          <h1 className="title-text">Lucas Hoggan</h1>
        </a>
        <div className="arangement">
          <a href="/my-work" className="my-work-btn">
              MY WORK
          </a>
          <a href="/the-gym" className="my-work-btn">
              THE GYM
          </a>
        </div>
    </nav>
  )
}

export default Navbar