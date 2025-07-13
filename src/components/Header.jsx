import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ userName, onLoginClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="shadow-md px-4 md:px-10 py-3 flex items-center justify-between w-full fixed top-0 left-0 z-50 bg-transparent pt-5">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <img src="/images/logo.jpeg" className="w-10 h-10" alt="Logo" />
        <h1 className="text-2xl font-bold text-orange-600">BITEBOOKED</h1>
      </div>

      {/* Center: Nav links (hidden on mobile) */}
      <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8 text-white hidden md:flex">
        <Link to="/" className="hover:text-orange-600 font-medium">Home</Link>
        <Link to="/about" className="hover:text-orange-600 font-medium">About</Link>
        <Link to="/caterers" className="hover:text-orange-600 font-medium">Caterers</Link>
        <Link to="/contact" className="hover:text-orange-600 font-medium">Contact</Link>
      </nav>

      {/* Hamburger menu button (mobile only) */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 text-white focus:outline-none z-50"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Open menu"
      >
        <span className={`block w-7 h-0.5 bg-white mb-1 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-7 h-0.5 bg-white mb-1 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/80 z-40 flex flex-col items-center justify-center md:hidden animate-fade-in">
          <nav className="flex flex-col gap-8 text-white text-xl font-semibold">
            <Link to="/" className="hover:text-orange-400" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-orange-400" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/caterers" className="hover:text-orange-400" onClick={() => setMenuOpen(false)}>Caterers</Link>
            <Link to="/contact" className="hover:text-orange-400" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
          <div className="mt-10">
            {userName ? (
              <span className="bg-orange-600 text-white px-5 py-2 rounded-full font-medium shadow">{userName}</span>
            ) : (
              <button
                onClick={() => { setMenuOpen(false); onLoginClick(); }}
                className="bg-orange-600 text-white px-5 py-2 rounded-full font-medium hover:bg-orange-700 transition"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}

      {/* Right: User name or Login button (desktop only) */}
      <div className="hidden md:block">
        {userName ? (
          <span className="bg-orange-600 text-white px-5 py-2 rounded-full font-medium shadow">{userName}</span>
        ) : (
          <button
            onClick={onLoginClick}
            className="bg-orange-600 text-white px-5 py-2 rounded-full font-medium hover:bg-orange-700 transition"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
