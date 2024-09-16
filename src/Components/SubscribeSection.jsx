import React from 'react';

export const SubscribeSection = () => {
  return (
    <section className="relative bg-secondary text-gray py-12">
      <div className="absolute inset-0">
        {/* <img
          src="path/to/your/background-image.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        /> */}
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4">
        <h2 className="text-3xl font-bold mb-2">SUBSCRIBE</h2>
        <span className="text-lg">Sign-up to our newsletter</span>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Your email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div>
          <button
            type="submit"
            className="border border-black px-5 py-2 text-black hover:bg-[#cbdeec] hover:text-white transition-colors"
          >
            SUBMIT
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

