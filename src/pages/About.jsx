import Header from "../components/Header";

function About() {
    return (
      <>
      <Header/>
      <div className=" text-white min-h-screen px-8 py-16 bg-black" style={{
        backgroundImage: "url('/images/About-bg.jpeg') bg-image",
      }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">About Us</h1>
          <p className="text-lg mb-8">
            At <span className="font-semibold text-orange-400">BITEBOOKED</span>, we believe food is more than just a necessity — it's an experience. 
            We are a community-driven platform connecting local caterers with customers looking for delicious, reliable, and personalized food services for their events.
          </p>
          
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-3">Our Mission</h2>
            <p className="text-base">
              To make event catering effortless by helping users discover and book the best local caterers in their area — no hassle, no stress, just great food.
            </p>
          </div>
  
          <div className="mt-10 flex flex-col gap-6 md:flex-row justify-between">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex-1">
              <h3 className="text-xl text-orange-400 font-semibold mb-2">Why Choose Us?</h3>
              <ul className="list-disc list-inside text-left space-y-1">
                <li>Verified local caterers</li>
                <li>Easy booking and communication</li>
                <li>Custom menu options</li>
                <li>Transparent pricing</li>
                <li>Trusted by hundreds of happy clients</li>
              </ul>
            </div>
  
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex-1">
              <h3 className="text-xl text-orange-400 font-semibold mb-2">Our Journey</h3>
              <p>
                Started in Punjab, we are now expanding to multiple cities across India to help communities celebrate their most important moments with food that matters.
              </p>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default About;
  