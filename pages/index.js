import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import Navbar from '../components/Navbar';
import PhoneWebComponent from '../components/PhoneWebComponent';
import Seperator from '../components/Seperator';
import {Parallax, ParallaxLayer} from "@react-spring/parallax"
// python, html + css + js, React, Tailwind css

const MainPage = () => {
  return (
    <main>
      <Seperator />
      <PhoneWebComponent PhoneComponent={<img className="" src="/intro-code-banner.svg" />} WebComponent={<img className="" src="/intoduction-banner.svg" />} />
      <Seperator />
      <PhoneWebComponent PhoneComponent={<img className="" src="/phone-lift-collage.jpg" />} WebComponent={<img src="/web-lift-collage.jpg" />}  />
      {/*<Parallax pages = {5}>
        <ParallaxLayer offset={0} sticky={{start:0, end:5}}>
          <div className="w-[70vw] h-[100vw] bg-pallete-olive"></div>
        </ParallaxLayer>

  </Parallax>*/}
    </main>
  )
}


export default function Home() {


  return (
    <>
      <Navbar />
      <MainPage />
      
    </>
  )
}
