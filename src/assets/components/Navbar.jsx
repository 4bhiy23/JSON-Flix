import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex text-white justify-between sticky top-0 z-50 items-center px-8 py-3 rounded-2xl bg-white/15 border border-white/25 backdrop-blur-md shadow-lg">
      
      {/* Logo */}
      <button className="logo text-2xl md:text-4xl font-bold cursor-pointer">
        JSON-Flix
      </button>

      {isMobile ? (
        <>
          {/* Hamburger */}
          <button
            className="text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <nav className="absolute right-5 top-16 bg-black/20 backdrop-blur-md p-4 rounded-xl shadow-lg">
              <ul className="flex flex-col gap-3 items-start">
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
              </ul>
            </nav>
          )}
        </>
      ) : (
        <nav>
          <ul className="flex gap-8 items-center text-lg">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;