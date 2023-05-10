import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="home-nav">
      <Link className='title-link' href="/">
        <h1 >Lucas-Hoggan</h1>
        
      </Link>
      <div className="page-selc">
          <Link href='/the-gym'><p>The Gym</p></Link>
        </div>
    </nav>
  );
};

export default Navbar;
