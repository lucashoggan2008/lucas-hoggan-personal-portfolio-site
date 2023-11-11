import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import Navbar from '../components/Navbar';
import PhoneWebComponent from '../components/PhoneWebComponent';
import Footer, {FooterCol} from "../components/Footer";
import Seperator from '../components/Seperator';
import {Parallax, ParallaxLayer} from "@react-spring/parallax"
// python, html + css + js, React, Tailwind css

const SocialLink = ({url, text, newtab}) => {
  return (
    <a href={url} target={newtab ? "_blank" : "_self"}>
      <p className="text-pallete-flame font-semibold text-center">{text}</p>
    </a>
  )
}

const MainPage = () => {
  return (
    <main>
      <Seperator />
      <PhoneWebComponent PhoneComponent={<Image rel="noreferrer" alt="about me"   width={0} height={0} className="w-screen" src="/intro-code-banner.svg" />} WebComponent={<Image rel="noreferrer" alt="about me"   width={0} height={0}  className="w-screen" src="/intoduction-banner.svg" />} />
      <Seperator />
      <PhoneWebComponent PhoneComponent={<Image rel="noreferrer" priority={true} alt="photo of me"   width={0} height={0} className="w-screen" src="/phone-lift-collage.jpg" />} WebComponent={<Image rel="noreferrer" priority={true} alt="photo of me" className="w-screen"   width={0} height={0}  src="/web-lift-collage.jpg" />}  />
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
      {/*
      <Footer >
        <FooterCol>
          <h3 className="text-pallete-green font-bold text-2xl text-center">Socials</h3>
          <SocialLink url="https://github.com/lucashoggan2008" text="Github" newtab={true}  />
          <SocialLink url="https://www.instagram.com/lucashoggan08/" text="Instagram" newtab={true}  />
          <SocialLink url="https://www.instagram.com/lucas.h.pl/" text="Lifting Instagram" newtab={true}  />
          <SocialLink url="https://www.tiktok.com/@lucashoggan2?lang=en" text="Tiktok" newtab={true}  />
        </FooterCol>
      </Footer>
  */}
    </>
  )
}
