import React from 'react'

const Footer = () => {
  return (
    <footer>
          <div className="column">
            <h3 className="header">My Social Media</h3>
            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100076263414741" className="social">Facebook</a>
            <a rel="noreferrer" target="_blank" href="https://twitter.com/lucashoggan" className="social">Twitter</a>
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/lucashoggan08/" className="social">Instagram</a>
            <a rel="noreferrer" target="_blank" href="https://github.com/lucashoggan2008" className="social">Github</a>
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