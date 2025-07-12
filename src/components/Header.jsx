import { Link } from "react-router-dom";

function Header({ onLoginClick }) {
  return (
    <header
      className="shadow-md p-4 flex justify-between items-center fixed w-full top-0 left-0 z-50 bg-transparent"
    >
      <div className="flex gap-4">
        <img src="/images/logo.jpeg" className="w-10 h-10"/>
        <h1 className="text-2xl font-bold text-orange-600">BITEBOOKED</h1>
      </div>
      <div className="flex gap-4 items-center">
        <nav
          className="space-x-6 text-white ml-12"
        >
          <Link to="/" className="hover:text-orange-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-orange-600">
            About
          </Link>
          <Link to="/caterers" className="hover:text-orange-600">
            Caterers
          </Link>
          <Link to="/contact" className="hover:text-orange-600">
            Contact
          </Link>
        </nav>
        <button
          onClick={onLoginClick}
          className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
        >
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
