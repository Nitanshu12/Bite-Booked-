
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Caterers from './pages/Caterers.jsx';
import Contact from './pages/Contact.jsx';
import Header from './components/Header.jsx';
import AuthModal from './components/AuthModal.jsx';
import { useState, useEffect } from 'react';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState(() => localStorage.getItem('userName') || '');

  useEffect(() => {
    if (!userName) {
      const timer = setTimeout(() => setShowModal(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [userName]);

  const handleSignup = (name) => {
    setUserName(name);
    localStorage.setItem('userName', name);
    setShowModal(false);
  };

  return (
    <>
      <Header userName={userName} onLoginClick={() => setShowModal(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/caterers" element={<Caterers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {showModal && (
        <AuthModal
          onClose={() => setShowModal(false)}
          onSignup={handleSignup}
        />
      )}
    </>
  );
}

export default App;



