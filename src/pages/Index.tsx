
import React from 'react';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BookingSection from '../components/BookingSection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen dreamy-bg">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm py-4 px-6 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-playfair text-xl font-bold text-emcee-darkGray">
            JK
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-emcee-darkGray hover:text-emcee-darkPink transition-colors">About</a>
            <a href="#services" className="text-emcee-darkGray hover:text-emcee-darkPink transition-colors">Services</a>
            <a href="#testimonials" className="text-emcee-darkGray hover:text-emcee-darkPink transition-colors">Testimonials</a>
            <a href="#booking" className="text-emcee-darkGray hover:text-emcee-darkPink transition-colors">Book Now</a>
          </div>
          <div className="md:hidden">
            <button className="text-emcee-darkGray">
              Menu
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Header />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
