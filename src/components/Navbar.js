import React, { useState } from "react";
const Navbar=()=>{
const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return(
        <nav className="navbar fixed w-full py-3 flex flex-col lg:flex-row justify-between items-center bg-[#10101061] border-b p-3 max-w-7xl m-auto "  data-aos="fade-down">
            <div className="container mx-auto lg:flex justify-between items-center relative z-10">

              <div className="logo-button flex justify-between">
                <a href="/" className="flex items-center"><p className=' font-extrabold text-2xl md:text-5xl'>Anurag</p></a>
                <button className="block lg:hidden text-white" onClick={toggleMenu} id="navbar-toggler">
                  <svg className="h-6 w-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                </button>
              </div>

              <div className={`md:visible lg:flex lg:items-center w-full lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} backdrop-blur-sm`} id="navbar-menu">
                <ul className="text-white flex flex-col justify-end md:justify-normal lg:flex-row lg:space-x-4 mt-4 lg:mt-0 transition-all">
                  <li className="nav-item">
                  <a href="/" className="block py-2 lg:py-0 px-4 hover:text-slate-400 rounded"> About </a>
                  </li>
                  <li className="nav-item">
                    <a href="/experience-and-expertise" className="block py-2 lg:py-0 px-4 hover:text-slate-400 rounded"> Education </a>
                  </li>
                  <li className="nav-item">
                    <a href="/why-choose-us" className="block py-2 lg:py-0 px-4 hover:text-slate-400 rounded"> Skills </a>
                  </li>
                  <li className="nav-item">
                    <a href="/contact-us" className="block py-2 lg:py-0 px-4 hover:text-slate-400 rounded"> Projects  </a>
                  </li>
                  <li className="nav-item">
                    <a href="/contact-us" className="block py-2 lg:py-0 px-4 hover:text-slate-400 rounded"> contact me  </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    )
}
export default Navbar;