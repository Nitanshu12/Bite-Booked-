import { Link } from "react-router-dom";
import { useState } from "react";
import LoginOverlay from "./AuthModel.jsx";

function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between text-white px-6 py-4" style={{
        backgroundColor:'#2D2D2D'
      }}>
        {/* left */}
        <div className="flex items-center gap-3">
          <img src="/images/logo.jpeg" alt="logo" className="w-10 h-10" />
          <div>
            <h3 className="text-lg font-bold">AGGARWAL COLONY</h3>
            <p className="text-xs text-gray-300">Samana, Patiala, Punjab - 147101</p>
          </div>
        </div>

        {/* right nav */}
        <nav className="flex items-center gap-6 font-medium">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/caterers">Caterers</Link>
            <Link to="/contact">Contact</Link>
          <button
            onClick={() => setIsLoginOpen(true)}
            className="bg-orange-500 text-white px-4 py-1.5 rounded-full hover:bg-orange-600"
          >
            Login
          </button>
        </nav>
      </header>

      {/* Login Overlay */}
      <LoginOverlay isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}

export default Header;

