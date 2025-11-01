// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";

// const Navbar = () => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="flex text-white justify-between sticky top-0 z-50 items-center px-8 py-3 rounded-2xl bg-white/15 border border-white/25 backdrop-blur-md shadow-lg">
      
//       {/* Logo */}
//       <button className="logo text-2xl md:text-4xl font-bold cursor-pointer">
//         JSON-Flix
//       </button>

//       {isMobile ? (
//         <>
//           {/* Hamburger */}
//           <button
//             className="text-3xl"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             ☰
//           </button>

//           {/* Dropdown Menu */}
//           {menuOpen && (
//             <nav className="absolute right-5 top-16 bg-black/20 backdrop-blur-md p-4 rounded-xl shadow-lg">
//               <ul className="flex flex-col gap-3 items-start">
//                 <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
//                 <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
//                 <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
//               </ul>
//             </nav>
//           )}
//         </>
//       ) : (
//         <nav>
//           <ul className="flex gap-8 items-center text-lg">
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/contact">Contact</Link>
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 sm:px-10 py-3 rounded-2xl 
      bg-gradient-to-r from-[#0f172a]/80 via-[#1e293b]/70 to-[#0f172a]/80 
      border border-white/10 backdrop-blur-md shadow-md shadow-cyan-500/10">
      
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl md:text-3xl font-extrabold tracking-wide text-white hover:text-cyan-400 transition-colors"
      >
        JSON<span className="text-cyan-400">-Flix</span>
      </Link>

      {/* Desktop Menu */}
      {!isMobile && (
        <nav>
          <ul className="flex gap-8 items-center text-lg font-medium">
            <Link
              to="/"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              Contact
            </Link>
          </ul>
        </nav>
      )}

      {/* Mobile Menu */}
      {isMobile && (
        <>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-white focus:outline-none hover:text-cyan-400 transition-colors"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Dropdown */}
          {menuOpen && (
            <nav
              className="absolute right-5 top-16 w-40 bg-[#0f172a]/90 backdrop-blur-md 
              p-4 rounded-xl border border-white/10 shadow-lg shadow-cyan-500/10 animate-fadeIn"
            >
              <ul className="flex flex-col gap-3 text-lg">
                <Link
                  to="/"
                  className="hover:text-cyan-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="hover:text-cyan-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-cyan-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </ul>
            </nav>
          )}
        </>
      )}
    </header>
  );
};

export default Navbar;
