import React from 'react'
import Navbar from '../../components/Navbar'
import Head from 'next/head'

const index = () => {
    //const circles = [[<div className={" rounded-full bg-pallete-4 w-" + cir_width + " h-" + cir_width}></div>, <div className={" rounded-full bg-pallete-3 w-" + cir_width + " h-" + cir_width}></div>, <div className={" rounded-full bg-pallete-2 w-" + cir_width + " h-" + cir_width}></div>, <div className={" rounded-full bg-pallete-1 w-" + cir_width + " h-" + cir_width}></div>, <div className={" rounded-full bg-pallete-5 w-" + cir_width + " h-" + cir_width}></div>]*3]
    const circles = Array(3).fill().map((element, index) => ([
    <div key={index+"a"} className="circle-bg bg-pallete-1"></div>,
    <div key={index+"b"} className="circle-bg bg-pallete-2"></div>,
    <div key={index+"c"} className="circle-bg bg-pallete-3"></div>,
    <div key={index+"d"} className="circle-bg bg-pallete-4"></div>,
    <div key={index+"e"} className="circle-bg bg-pallete-5"></div>]))
    return (
    <>
    <Head>
        <title>Lucas Hoggan</title>
        <meta name="description" content="The website of Lucas Hoggan." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Gloock&family=Quicksand&display=swap" rel="stylesheet" />
      </Head>
    <main className="main">
        <Navbar />
        <div className="grid grid-cols-12 -z-10 w-screen">
            {circles}
        </div>
        <div className="examples-grid grid sm:grid-cols-3 grid-cols-1"></div>
        
    </main>
    </>
  )
}

export default index