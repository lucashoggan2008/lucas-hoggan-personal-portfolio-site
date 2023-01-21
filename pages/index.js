import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import '../styles/Home.module.css';

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



export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Hoggan</title>
        <meta name="description" content="The website of Lucas Hoggan." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Navbar />
        <WelcomeContainer />
        <div id="first-section" className="section">
          <h2 className="header">Who i am.</h2>
          <div className="divider"></div>
          <div className="row">
            <p className="paragraph">Hi there! My name is Lucas and I am a 14 year old <em>freelance web developer</em>. In my free time, I enjoy staying active and healthy by playing rugby and hitting the gym. I am passionate about technology and love using my skills to create and build new projects. I am <em>always</em> looking for new opportunities to challenge myself and expand my knowledge in the field of development, I am based in central Scotland. <em>Thank you</em> for visiting my website</p>
            <Image id="home-page-good-photo-1" src="/good-photo-1.jpg" width="1000" height="1000" alt="Picture of me"/>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
