import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <Link href="/" className="header-link">
          <h1 className="title-text">Lucas Hoggan</h1>
        </Link>
        <div className="arangement">
          <Link href="/my-work" className="my-work-btn">
              MY WORK
          </Link>
          <Link href="/the-gym" className="my-work-btn">
              THE GYM
          </Link>
        </div>
    </nav>
  )
}

export default Navbar