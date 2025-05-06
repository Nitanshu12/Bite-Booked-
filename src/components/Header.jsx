import { Link } from 'react-router-dom';

function Header({ onLoginClick }) {
  return (
    <header className=" shadow-md p-4 flex justify-between items-center" style={{
        backgroundColor:'#2D2D2D'
    }}>
      <h1 className="text-2xl font-bold text-orange-600">BITEBOOKED</h1>
      <div className="flex gap-4 items-center">
        <nav className="space-x-4" style={{
            color:'white',
            marginLeft:'50px'
        }}>
          <Link to="/" className="hover:text-orange-600">Home</Link>
          <Link to="/about" className="hover:text-orange-600">About</Link>
          <Link to="/caterers" className="hover:text-orange-600">Caterers</Link>
          <Link to="/contact" className="hover:text-orange-600">Contact</Link>
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
