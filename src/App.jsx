
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Caterers from './pages/Caterers.jsx';
import Contact from './pages/Contact.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import Dashboard from './pages/Dashboard.jsx';
import CatererDetail from './pages/CatererDetail.jsx';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('userGoogle');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (!user) {
      const timer = setTimeout(() => setShowModal(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [user]);

  const handleGoogleSuccess = (credentialResponse) => {
    if (credentialResponse.credential) {
      const decoded = jwtDecode(credentialResponse.credential);
      const userData = {
        name: decoded.name,
        avatar: decoded.picture,
      };
      setUser(userData);
      localStorage.setItem('userGoogle', JSON.stringify(userData));
      setShowModal(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('userGoogle');
  };

  return (
    <>
      <div className={`${showModal && !user ? 'pointer-events-none select-none' : ''} flex flex-col min-h-screen`}>
        <Header userName={user?.name} userAvatar={user?.avatar} onLoginClick={() => setShowModal(true)} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/caterers" element={<Caterers />} />
            <Route path="/caterers/:id" element={<CatererDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
      {showModal && !user && (
        <>
          <div className="fixed inset-0 bg-black/60 z-40"></div>
          <div className="fixed top-0 right-0 h-full w-full sm:max-w-md bg-white shadow-2xl z-50 animate-slide-in-right flex flex-col justify-center p-0">
            <div className="relative w-full h-full flex flex-col justify-center p-8">
              <button
                className="absolute top-4 left-4 text-2xl text-orange-600 hover:text-orange-800"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-3xl font-bold mb-2 text-black">Sign Up</h2>
              <ManualSignupForm onSignup={({ name, email }) => {
                const userData = { name, avatar: null, email };
                setUser(userData);
                localStorage.setItem('userGoogle', JSON.stringify(userData));
                setShowModal(false);
              }} />
              <div className="flex items-center my-6">
                <div className="flex-grow h-px bg-gray-300" />
                <span className="mx-3 text-gray-400 text-sm">or</span>
                <div className="flex-grow h-px bg-gray-300" />
              </div>
              <div className="flex flex-col items-center">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={() => alert('Google Sign In Failed')}
                  width="260"
                  shape="pill"
                  text="signup_with"
                  theme="filled_blue"
                />
              </div>
            </div>
          </div>
          <style>{`
            @keyframes slide-in-right {
              0% { transform: translateX(100%); }
              100% { transform: translateX(0); }
            }
            .animate-slide-in-right {
              animation: slide-in-right 0.5s cubic-bezier(0.4,0,0.2,1);
            }
          `}</style>
        </>
      )}
    </>
  );
}


function ManualSignupForm({ onSignup }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!email.trim()) {
      setError('Please enter your email.');
      return;
    }
    setError('');
    onSignup({ name: name.trim(), email: email.trim() });
  };

  return (
    <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm mb-1">Phone number:</label>
        <input type="text" placeholder="Enter here..." className="w-full p-3 bg-gray-100 rounded" value={phone} onChange={e => setPhone(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm mb-1">Name:</label>
        <input type="text" placeholder="Enter here..." className="w-full p-3 bg-gray-100 rounded" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm mb-1">Email:</label>
        <input type="email" placeholder="Enter here..." className="w-full p-3 bg-gray-100 rounded" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button type="submit" className="w-full bg-orange-500 text-white font-semibold py-3 rounded hover:bg-orange-600 transition">SIGN UP</button>
    </form>
  );
}

export default App;



