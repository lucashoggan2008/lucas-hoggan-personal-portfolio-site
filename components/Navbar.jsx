import React from 'react'
import Link from 'next/link'
import PhoneWebComponent from './PhoneWebComponent'

const Navbar = () => {
  return (
    <header className="bg-pallete-olive w-screen h-[5rem] flex justify-between items-center overflow-hidden pl-2">
      <Link className='p-0 h-[5rem]' href='/'>
        <PhoneWebComponent PhoneComponent={<img className="w-[5rem]" src="/icon-logo.svg" alt="logo" />} WebComponent={<h1 className=' text-pallete-flame text-3xl  font-bold rounded-sm shadow-pallete-floral'><span className='text-pallete-floral'>Lucas /</span>/ Hoggan</h1>} />
      </Link>
    </header>
  )
}

export default Navbar