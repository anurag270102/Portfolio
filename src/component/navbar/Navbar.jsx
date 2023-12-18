import { useState, useEffect } from 'react';
import './navbar.css';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbg, setnavbg] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const isActive = () => {
    window.scrollY > 30 ? setnavbg(true) : setnavbg(false);
  }
  useEffect(() => {
    
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener('scroll', isActive);
    }
  }, []);
  return (
    <div className={navbg ? " text-black py-2 px-[20px] md:px-[40px]  lg:py-3 sticky top-0 bg-white w-full z-10 transition-all duration-200" : "w-full py-2 px-[20px] md:px-[40px]  lg:py-3 sticky top-0 z-20 text-black   transition-all duration-200"}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" >
          <h2 className="text-4xl  md:text-[35px]  lg:text-[40px] font-berkishireswash pt-5 hover:text-gray-700 duration-200 animate-pulse">Anurag.</h2>
        </a>
        {/* Navbar Links */}
        <nav className="hidden md:flex space-x-4 text-[24px] pt-5 lg:pr-[150px] font-sen">
          <a href="#hero" className="hover:text-gray-500 duration-500 transition-all  scroll-smooth" >
            Home
          </a>
          <a href="#skill" className="hover:text-gray-500 duration-500 transition-all  scroll-smooth ">
            Skill
          </a>
          <a href="#about" className="hover:text-gray-500 duration-500 transition-all  scroll-smooth">
            About
          </a>
          <a href="#contact" className="hover:text-gray-500 duration-500 transition-all  scroll-smooth">
            Contact
          </a>
        </nav>
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-8 w-8 absolute right-0 top-7"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div
        className={`${isMobileMenuOpen ? 'block' : 'hidden'
          } md:hidden fixed inset-0 bg-gray-300 h-[50vh] bg-opacity-90  z-50 items-center justify-center transition duration-200`}
      >
        <a href="/" >
          <h2 className="text-4xl  px-[20px]  font-PlayfairDisplaySC pt-5 hover:text-gray-700 duration-200 ">Anurag.</h2>
        </a>
        <div className="text-black text-2xl pt-10 text-center font-sen">
          <a href="#hero" className="block py-2 fadein " onClick={closeMobileMenu}>
            Home
          </a>
          <a href="#skill" className="block py-2 fadein " onClick={closeMobileMenu}>
            Skill
          </a>
          <a href="#about" className="block py-2 fadein" onClick={closeMobileMenu}>
            About
          </a>
          <a href="#contact" className="block py-2 fadein" onClick={closeMobileMenu}>
            Contact
          </a>
        </div>

        {/* Close Button */}
        <button
          onClick={closeMobileMenu}
          className="absolute top-4 right-1 m-4 text-white"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

