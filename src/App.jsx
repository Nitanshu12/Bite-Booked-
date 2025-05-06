
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Caterers from './pages/Caterers.jsx';
import Contact from './pages/Contact.jsx';
import Header from './components/Header.jsx';
import AuthModal from './components/AuthModal.jsx';
import { useState } from 'react';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLoginClick={() => setShowModal(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/caterers" element={<Caterers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {showModal && (
        <AuthModal
          onClose={() => setShowModal(false)}
          onLoginSuccess={() => {
            setIsLoggedIn(true);
            setShowModal(false);
          }}
        />
      )}
    </>
  );
}

export default App;



