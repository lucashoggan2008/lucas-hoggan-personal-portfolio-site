import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer>
          <div className="column">
            <h3 className="header">My Social Media</h3>
            <Link rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100076263414741" className="social">Facebook</Link>
            <Link rel="noreferrer" target="_blank" href="https://twitter.com/lucashoggan" className="social">Twitter</Link>
            <Link rel="noreferrer" target="_blank" href="https://www.instagram.com/lucashoggan08/" className="social">Instagram</Link>
            <Link rel="noreferrer" target="_blank" href="https://github.com/lucashoggan2008" className="social">Github</Link>
          </div>
          <div className="column">
            <h3 className="header">My Email</h3>
            <p className="text">lucashoggan@yahoo.com</p>
            <button className="copy"
              onClick = {() => navigator.clipboard.writeText("lucashoggan@yahoo.com")}
            >Click to copy</button>
          </div>
        </footer>
  )
}

export default Footer