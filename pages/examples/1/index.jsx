import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const stylesheet = {
    navbar: {
        width: '100vw',
        backgroundColor: 'black',
        padding: "1rem 0 1rem 1rem",
        display: 'flex',
        justifyContent: 'flex-start',
        alignContent: 'center',
        gap: '1rem',

        header1: {
            color: 'white',
        }
    }
}

const index = () => {
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
    <main className="main bg-black" style={{minHeight:"100vh"}}>
        <nav style={stylesheet.navbar}>
            <h1 className="font-gloock text-lg sm:text-3xl" style={stylesheet.navbar.header1}>Your-Company</h1>
            <Link className="font-quicksand text-base font-bold text-white text-center my-auto border-stone-500 hover:border-b-4 sm:text-xl" href="https://www.google.com">PAGE-1</Link>
            <Link className="font-quicksand text-base font-bold text-white text-center my-auto border-stone-500 hover:border-b-4 sm:text-xl" href="https://www.google.com">PAGE-2</Link>
            <Link className="font-quicksand text-base font-bold text-white text-center my-auto border-stone-500 hover:border-b-4 sm:text-xl" href="https://www.google.com">PAGE-3</Link>
            <Link className="font-quicksand text-base font-bold text-white text-center my-auto border-stone-500 hover:border-b-4 sm:text-xl" href="https://www.google.com">PAGE-4</Link>
        </nav>
        <h1 className="text-2xl text-center bg-slate-400 py-5 font-bold font-gloock">How we can help you.</h1>        
        <div className="bg-green-100">
            <p className="text-center bg-green-100 text-black font-semibold w-3/4 mx-auto py-6 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non neque ut diam aliquam vehicula ut vel ex. Nullam lacinia, sapien in fermentum fringilla, lectus lorem tincidunt arcu, a pharetra arcu nisl semper dui. Curabitur fringilla, sapien quis congue ullamcorper, velit augue mattis arcu, vitae vehicula quam justo nec purus. Aliquam finibus diam feugiat, lacinia sem eu, congue enim. Nunc imperdiet vel augue sit amet convallis. Nunc varius scelerisque arcu. Aliquam ullamcorper, magna a congue aliquet, justo erat consectetur orci, ut hendrerit arcu sapien et orci. Mauris non pretium ex. Donec in sem placerat, lobortis arcu et, suscipit arcu. Aliquam.</p>
        </div>
        <h1 className="text-2xl text-center bg-slate-400 py-5 font-bold font-gloock">Where to contact us.</h1>   
        <div className="bg-green-100">
            <p className="text-center bg-green-100 text-black font-semibold w-3/4 mx-auto py-6 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non neque ut diam aliquam vehicula ut vel ex. Nullam lacinia, sapien in fermentum fringilla, lectus lorem tincidunt arcu. <br></br>- 07386206459<br />-jonedoe@gmail.com</p>
        </div>    
    </main>
    </>
  )
}

export default index