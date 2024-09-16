import React from 'react';
import drone8 from '../assets/Drones/drone8.jpg';

export const AboutUsSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100">
      
      {/* Image Section */}
      <img src={drone8} alt="Drone" className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg mb-6 md:mb-0" />

      {/* Content Section */}
      <div className="md:ml-10">
        <div className="about mb-4">
          <h2 className="text-4xl font-semibold text-black mb-2">
            ABOUT US
          </h2>
          <hr className="border-t-2 border-[#cbdeec] w-16" />
        </div>

        <div className="paragraph">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to our dronoticz, where innovation and technology converge to shape the future. 
            We revolutionize industries and improve lives worldwide through our passion for pushing the boundaries of what robots can do. 
            With expertise in AI, computer vision, mechanical engineering, and automation, we lead the way in the robotics revolution. 
            Our brilliant team creates intelligent machines that seamlessly integrate into daily life, enhancing productivity, 
            safety, and efficiency. Join us on this exciting journey as we unlock new frontiers, solve complex challenges, 
            and shape a future where intelligent machines work hand-in-hand with humans. Discover the power of robotics and be 
            part of the revolution.
          </p>
        </div>
      </div>
    </div>
  );
};
