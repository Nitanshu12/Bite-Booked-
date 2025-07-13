import { Link } from "react-router-dom";

function Header({ userName, onLoginClick }) {
  return (
    <header className="shadow-md px-4 md:px-10 py-3 flex items-center justify-between w-full fixed top-0 left-0 z-50 bg-transparent">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <img src="/images/logo.jpeg" className="w-10 h-10" alt="Logo" />
        <h1 className="text-2xl font-bold text-orange-600">BITEBOOKED</h1>
      </div>

      {/* Center: Nav links */}
      <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-8 text-white">
        <Link to="/" className="hover:text-orange-600 font-medium">Home</Link>
        <Link to="/about" className="hover:text-orange-600 font-medium">About</Link>
        <Link to="/caterers" className="hover:text-orange-600 font-medium">Caterers</Link>
        <Link to="/contact" className="hover:text-orange-600 font-medium">Contact</Link>
      </nav>

      {/* Right: User name or Login button */}
      <div>
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
