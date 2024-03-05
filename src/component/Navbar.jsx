import React, { useState } from 'react';
import logo from '../assets/image1.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-[1328px] flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Koinx Logo" />
        </a>

        {/* Mobile Menu Button */}
        <div className="flex justify-end md:hidden">
          <button
            className="p-2 text-gray-500 rounded focus:outline-none focus:ring"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } items-center justify-end w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-2 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li className='md:flex md:items-center md:justify-center'>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-black md:hover:text-blue-700 "
                aria-current="page"
              >
                Crypto taxes
              </a>
            </li>
            <li className='md:flex md:items-center md:justify-center'>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Free tool
              </a>
            </li>
            <li className='md:flex md:items-center md:justify-center'>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:text-black"
              >
                Resource center
              </a>
            </li>
            <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Get started
          </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
