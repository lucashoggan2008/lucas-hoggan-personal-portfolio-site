import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-start h-20 sm:h-28  gap-16 p-2 sm:p-5 align-middle bg-pallete-5">
      <div className="dropdown h-20 sm:h-28 ">
          <span id="drop-down-icon" className="material-symbols-outlined sm:text-9xl text-xl my-4 sm:m-auto block">
          menu
        </span>
        <div className="dropdown-content w-screen">
          <div className="cropper bg-pallete-3 w-screen h-20 sm:h-28 flex justify-around align-middle">
            <Link href="/examples" className="text-2xl sm:text-5xl font-gloock  font-bold block m-auto hover:underline">EXAMPLES</Link>
          </div>
        </div>
      </div>
      <Link href="/" className="header-link">
        <h1 className=" nav-title  block  font-gloock font-bold my-3 text-2xl sm:text-4xl">
          Lucas-Hoggan
        </h1>
      </Link>
    </nav>
  );
};

export default Navbar;
