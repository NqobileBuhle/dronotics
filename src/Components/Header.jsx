
import React from 'react';
import { ToggleMenu } from './ToggleMenu';
import hero from '../assets/Drones/hero.jpg';

export const Header = () => {
  return (
    
    <div className="relative bg-cover bg-center h-[1080px] mb-10 mt-2 ml-2" style={{ backgroundImage: `url(${hero})` }}>
        <ToggleMenu />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">
      
        <h1 className="text-9xl font-light mb-4 text-black">DRONOTICZ</h1>
        <h2 className="text-4xl font-light mb-4 text-black">THE ERA OF DRONES</h2>
        <hr className="border-black w-16 mx-auto" />
      </div>
    </div>
  );
};



