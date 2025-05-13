
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="hero-pattern py-20 md:py-28 px-4 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-emcee-darkGray animate-fade-in">
          Emcee Jessica Kakkanad
        </h1>
        <p className="text-xl md:text-2xl italic text-emcee-darkGray/80 max-w-2xl mx-auto animate-slide-up">
          "Making your moments unforgettable!"
        </p>
      </div>
    </header>
  );
};

export default Header;
