import { useState, useRef, useEffect } from 'react';

function AuthModal({ onClose }) {
  const [isSignup, setIsSignup] = useState(false);
  const modalRef = useRef();

  // Close modal when clicking outside
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
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

        <h2 className="text-3xl font-bold mb-2">{isSignup ? 'Sign Up' : 'Login'}</h2>
        <p className="text-sm mb-6">
          or{' '}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-orange-600 font-semibold underline"
          >
            {isSignup ? 'login to your account' : 'create an account'}
          </button>
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Phone number:</label>
            <input
              type="text"
              placeholder="Enter here..."
              className="w-full p-3 bg-gray-100 rounded"
            />
          </div>

          {isSignup && (
            <>
              <div>
                <label className="block text-sm mb-1">Name:</label>
                <input
                  type="text"
                  placeholder="Enter here..."
                  className="w-full p-3 bg-gray-100 rounded"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email:</label>
                <input
                  type="email"
                  placeholder="Enter here..."
                  className="w-full p-3 bg-gray-100 rounded"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded"
          >
            {isSignup ? 'SIGN UP' : 'LOGIN'}
          </button>
        </form>

        <p className="text-xs mt-4">
          By clicking on {isSignup ? 'Sign Up' : 'Login'}, I accept the{' '}
          <span className="font-bold">Terms & Conditions & Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

export default AuthModal;
