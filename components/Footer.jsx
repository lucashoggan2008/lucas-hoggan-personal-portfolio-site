import React from 'react'

export const FooterCol = ({children}) => {
    return (
        <div className="footer-col border-l-pallete-flame flex flex-col justify-start gap-2">
            {children}
        </div>
    )
}

const Footer = ({children}) => {
  return (
    <footer className="w-screen h-[10rem] bg-pallete-olive flex flex-row justify-around">
        {children}
    </footer>
  )
}

export default Footer