import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head';
import Banner from '../components/Banner';

const theGym = () => {
  return (
    <>
    <Head>
        <title>Lucas Hoggan</title>
        <meta name="description" content="The website of Lucas Hoggan." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className="main gym">
        <Navbar />
        <Banner title="THE GYM" />
        <section>
            <h1 className="title">My current personal records.</h1>
            <ul className="pr-sec">
                <li> - Squat - 147.5Kg</li>
                <li> - Bench - 75Kg</li>
                <li> - Deadlift - 152.5kg</li>
            </ul>
        </section>
        <Footer />
    </main>
    </>
  )
}

export default theGym