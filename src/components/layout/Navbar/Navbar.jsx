import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/images/logo/logo.webp';
import './Navbar.css';

function Navbar() {
  const [navBackground, setNavBackground] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          navBackground ? 'bg-gray-800 shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <span className="text-white font-bold text-2xl">Mi Portafolio</span>
          </div>

          <div
            className="menu-icon text-white text-2xl cursor-pointer md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </div>

          <ul
            className={`menu ${
              menuOpen ? 'open' : 'hidden'
            } md:flex md:space-x-0 items-center`}
          >
            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-400"
                onClick={() => setMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <span className="hidden md:inline text-white px-3">|</span> {/* Separador */}
            <li>
              <Link
                to="/about"
                className="text-white hover:text-gray-400"
                onClick={() => setMenuOpen(false)}
              >
                Sobre mí
              </Link>
            </li>
            <span className="hidden md:inline text-white px-3">|</span> {/* Separador */}
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-gray-400"
                onClick={() => setMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div id="nav-bg"></div>
    </>
  );
}

export default Navbar;
