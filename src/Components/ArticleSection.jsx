import React from "react";
import drone1 from "../assets/Drones/drone1.jpg";
import drone2 from "../assets/Drones/drone2.jpg";
import drone4 from "../assets/Drones/drone4.jpg";
import drone6 from "../assets/Drones/drone6.jpg";

export const ArticlesSection = () => {
  return (
    <div className="bg-gray-100 py-8">
      <section className="container mx-auto">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-black mb-2">LATEST ARTICLES</h2>
          <hr className="border-t-2 border-[#cbdeec] w-16 mx-auto" />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Article Card 1 */}
          <div className="card bg-white rounded-lg shadow-lg p-4">
            <img className="w-full h-48 object-cover rounded-t-lg" src={drone1} alt="Drone 1" />
            <hr className="border-t-2 border-gray-200 my-4" />
            <p className="text-lg text-gray-700 text-center">How to automate <br /> surveillance drones</p>
          </div>

          {/* Article Card 2 */}
          <div className="card bg-white rounded-lg shadow-lg p-4">
            <img className="w-full h-48 object-cover rounded-t-lg" src={drone2} alt="Drone 2" />
            <hr className="border-t-2 border-gray-200 my-4" />
            <p className="text-lg text-gray-700 text-center">Robotics and Artificial <br /> Intelligence</p>
          </div>

          {/* Article Card 3 */}
          <div className="card bg-white rounded-lg shadow-lg p-4">
            <img className="w-full h-48 object-cover rounded-t-lg" src={drone4} alt="Drone 4" />
            <hr className="border-t-2 border-gray-200 my-4" />
            <p className="text-lg text-gray-700 text-center">Improve Lives through <br /> Robotics Prosthetics</p>
          </div>

          {/* Article Card 4 */}
          <div className="card bg-white rounded-lg shadow-lg p-4">
            <img className="w-full h-48 object-cover rounded-t-lg" src={drone6} alt="Drone 6" />
            <hr className="border-t-2 border-gray-200 my-4" />
            <p className="text-lg text-gray-700 text-center">Power of Robotics in <br /> Agriculture</p>
          </div>
        </div>
      </section>
      <br />
    </div>
  );
};
