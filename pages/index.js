import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

/* quite cool featute that i'd like to use again
const WelcomeContainer = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("first-section")
    if (element) {
      element.scrollIntoView({ behavior:"smooth"})
    }
  }

  return (
    <div className="welcome-container">
          <h1 className="title-text">HELLO.</h1>
            <button id="scroll-btn" onClick={handleClickScroll}>
              <h2 className="sub-text">I am Lucas Hoggan</h2>
            </button>
    </div>
  )
}
*/


export default function Home() {
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
      <main className="main h-screen">
        <Navbar />
        <div className="flex">
          <div className="w-2/3 h-screen ">
            <div className="flex align-middle justify-start w-screen">
              <p className="para-1 w-1/6 my-18 text-center sm:text-5xl text-sm font-quicksand font-thin">
                Hello my name is Lucas Hoggan. I&aposm a <em>freelance web developer</em> who helps businesses and induvials increase their client base and professinalism by creating a good looking, well layed out and easy to use websites.
              </p>
              <img id="photo-home-1" src="/20230222_210926.jpg" className="" />
            </div>
          </div>
          <div className="w-1/3 h-screen  bg-pallete-2" ></div>
        </div>
        
        
      </main>
    </>
  )
}
