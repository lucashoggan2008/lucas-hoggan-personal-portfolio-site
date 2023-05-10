import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Link from "next/link";
import Banner from '../components/Banner';




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
        <div className="main-section">
          <Banner title="HOME" />
          <div className="spacing"></div>
          <section>
            <h1 className="title">Who I am.</h1>
            <p>I am an up-and-coming web developer and junior powerlifter from Fife, Scotland. I have been in the website development space for about 3 years and I am trying now to help businesses grow and create a better image with professional website development, hosting and management services.</p>
          </section>
          <Footer />
        </div>
      </main>
    </>
  )
}
