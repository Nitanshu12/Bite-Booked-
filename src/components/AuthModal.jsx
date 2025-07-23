import { useState, useRef, useEffect } from 'react';

function AuthModal({ onClose, onSignup }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const modalRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }
    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }
    setError("");
    onSignup(name.trim());
  };

  return (
    <div className="fixed inset-0 bg-black/40 bg-opacity-50 z-50 flex justify-end">
      <div
        ref={modalRef}
        className="w-full sm:w-[400px] bg-white p-8 h-full overflow-auto relative"
      >
        <button
          className="absolute top-4 right-4 text-2xl text-orange-600"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-3xl font-bold mb-2">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-1">Phone number:</label>
            <input
              type="text"
              placeholder="Enter here..."
              className="w-full p-3 bg-gray-100 rounded"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Name:</label>
            <input
              type="text"
              placeholder="Enter here..."
              className="w-full p-3 bg-gray-100 rounded"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email:</label>
            <input
              type="email"
              placeholder="Enter here..."
              className="w-full p-3 bg-gray-100 rounded"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded hover:bg-orange-600 transition cursor-pointer"
          >
            SIGN UP
          </button>
        </form>
        <p className="text-xs mt-4">
          By clicking on Sign Up, I accept the{' '}
          <span className="font-bold">Terms & Conditions & Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

export default AuthModal;
