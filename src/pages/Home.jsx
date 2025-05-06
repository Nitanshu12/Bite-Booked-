import { useState } from "react";
import AuthModal from "../components/AuthModel";

function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        <button
          onClick={() => setShowModal(true)}
          className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-2 rounded"
        >
          Login / Signup
        </button>

        <div className="flex flex-col justify-center items-center text-center px-4 mt-[-80px]">
          <div className="flex items-center bg-white text-black rounded-full px-4 py-2 mb-6 shadow-md">
            <span className="text-xl mr-2">🔍</span>
            <input
              type="text"
              placeholder="Search Caterers..."
              className="flex-1 outline-none border-none bg-transparent"
            />
            <span className="text-xl ml-2">⚙️</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-orange-500">BITEBOOKED</h1>
          <p className="text-lg text-white">Your Event. Our Caterers. Perfectly Served.</p>
          <p className="text-sm mt-1 italic text-white">“Book a Bite, Make it Right.”</p>
        </div>
      </div>

      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default Home;
