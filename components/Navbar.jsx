import React from 'react'
import Link from 'next/link'
import PhoneWebComponent from './PhoneWebComponent'

const Navbar = () => {
  return (
    <header className="absolute bg-pallete-olive w-screen h-[5rem] flex justify-between items-center">
      <Link className='p-0 h-[5rem]' href='/'>
        <PhoneWebComponent PhoneComponent={<img className="w-[5rem]" src="/icon-logo.svg" alt="logo" />} WebComponent={<h1 className='ml-5 text-pallete-flame text-3xl  font-bold rounded-sm shadow-pallete-floral'><span className='text-pallete-floral'>Lucas /</span>/ Hoggan</h1>} />
        
        
      </Link>
    </header>
  )
}

export default Navbar