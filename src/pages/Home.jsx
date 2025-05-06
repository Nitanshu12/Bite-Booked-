
function Home() {

  return (
    <>
      <div
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center relative"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        <div className="flex flex-col items-center justify-center text-center px-4 mt-[-450px]">
          <div className="flex items-center bg-white text-black rounded-full px-4 py-2 mb-6 shadow-md">
            <span className="text-xl mr-2">🔍</span>
            <input
              type="text"
              placeholder="Search Caterers..."
              className="flex-1 outline-none border-none bg-transparent"
            />
            <span className="text-xl ml-2">⚙️</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-orange-500">
            BITEBOOKED
          </h1>
          <p className="text-lg text-white">
            Your Event. Our Caterers. Perfectly Served.
          </p>
          <p className="text-sm mt-1 italic text-white">
            “Book a Bite, Make it Right.”
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
