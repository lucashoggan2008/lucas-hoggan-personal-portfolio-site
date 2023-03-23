import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

/*&lt;<span class="text-white">head</span>&gt;<br></br>
        &lt;<span class="text-white">title</span>&gt;Lucas Hoggan&lt;/<span class="text-white">title</span>&gt;<br></br>
        &lt;<span class="text-white">meta</span> name=<span class="text-pallete-4">"description"</span> content=<span class="text-pallete-4">"The website of Lucas Hoggan."</span> /&gt;<br></br>
        &lt;<span class="text-white">meta</span> name=<span class="text-pallete-4">"viewport"</span> content=<span class="text-pallete-4">"width=device-width, initial-scale=1"</span> /&gt;<br></br>
        &lt;<span class="text-white">link</span> rel="icon" href=<span class="text-pallete-4">"/favicon.ico"</span> /&gt;<br></br>
        &lt;<span class="text-white">link</span> rel=<span class="text-pallete-4">"preconnect"</span> href=<span class="text-pallete-4">"https://fonts.googleapis.com"</span> /&gt;<br></br>
        &lt;<span class="text-white">link</span> rel=<span class="text-pallete-4">"preconnect"</span> href=<span class="text-pallete-4">"https://fonts.gstatic.com"</span> crossorigin /&gt;<br></br>
        &lt;<span class="text-white">link</span> href=<span class="text-pallete-4">"https://fonts.googleapis.com/css2?family=Gloock&family=Quicksand&display=swap"</span> rel="stylesheet" /&gt;<br></br>
        &lt;/<span class="text-white">head</span>&gt;*/

/*
          <div className="w-2/3 h-screen ">
            <div className="flex align-middle justify-start w-screen">
              <p className="para-1 w-1/6 my-18 text-center sm:text-5xl text-sm font-quicksand font-thin">
                Hello my name is Lucas Hoggan. I&apos;m a <em>freelance web developer</em> who helps businesses and induvials increase their client base and professinalism by creating a good looking, well layed out and easy to use websites.
              </p>
              <img id="photo-home-1" src="/20230222_210926.jpg" className="" />
            </div>
          </div>
          <div className="w-1/3 h-screen  bg-pallete-2" ></div>
          */

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
        
          
  
          <p className="code font-quicksand font-bold text-gray-300 w-screen bg-pallete-3 p-5 text-4xl text-center">&lt;title&gt; Lucas Hoggan &lt;/title&gt;
          </p>

          <div className="tag-sect">
              <h3 className='font-gloock'>&lt;p&gt;</h3>
              <div className="">
                  <p className='font-quicksand font-semi-bold'>Hello, my name is Lucas Hoggan. I&apos;m a <i>freelance web developer</i> who helps businesses and individuals increase their client base and professionalism by creating good-looking, well laid and easy-to-use websites.</p>
              </div>
              <h3 className='font-gloock'>&lt;/p&gt;</h3>
          </div>

          <div className="tag-sect">
            <h3 className="font-gloock">&lt;img&gt;</h3>
            <div><img className='mx-auto my-4 rounded-sm' src="/g-p.jpg" alt="" /></div>
            <h3 className="font-gloock">&lt;/img&gt;</h3>
          </div>

        
          
        
        
      </main>
    </>
  )
}
