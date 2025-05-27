import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BookingSection from '../components/BookingSection';
import Footer from '../components/Footer';
import { Menu, X } from 'lucide-react';

const Index: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuOpenedAt = useRef<number>(0); // timestamp of when menu was opened

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        menuOpenedAt.current = Date.now();
      }
      return next;
    });
  };

  // Close menu on outside click or scroll
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (menuOpen && Date.now() - menuOpenedAt.current > 300) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen dreamy-bg">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm py-4 px-6 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center relative">
          {/* Logo */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-emcee-darkPink bg-emcee-white text-black font-playfair text-lg font-bold shadow-sm">
            JK
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#booking" className="nav-link">Book Now</a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="text-emcee-darkGray focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          ref={menuRef}
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col bg-white/95 rounded-lg shadow-md mt-3 mx-4 py-4 px-4 space-y-3 border border-emcee-pink">
            {['About', 'Services', 'Testimonials', 'Book Now'].map((label, i) => (
              <a
                key={i}
                href={`#${label.toLowerCase().replace(/\s/g, '')}`}
                onClick={() => setMenuOpen(false)}
                className="text-emcee-darkGray hover:bg-emcee-pink/10 px-3 py-2 rounded-md transition-colors duration-200 font-medium"
              >
                {label}
              </a>
            ))}
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
