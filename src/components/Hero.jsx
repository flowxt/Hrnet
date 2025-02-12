import React from 'react';

const Hero = () => {
  return (
    <header className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <img src="/logo.png" alt="logo" className="mb-8 mt-4 w-32 h-32" />
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">Wealth Health<br />L'innovation au service des finances.</h1>
      </div>
    </header>
  );
};

export default Hero;