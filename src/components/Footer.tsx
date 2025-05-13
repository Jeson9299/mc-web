
import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-emcee-pink py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-emcee-darkGray mb-2">Emcee Jessica Kakkanad</h3>
            <p className="text-emcee-darkGray/80">Making your moments unforgettable!</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a href="#" aria-label="Instagram" className="text-emcee-darkGray hover:text-emcee-darkGray/70 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="Facebook" className="text-emcee-darkGray hover:text-emcee-darkGray/70 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="text-emcee-darkGray hover:text-emcee-darkGray/70 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center text-emcee-darkGray/80">
                <Mail size={16} className="mr-2" />
                <span>contact@emceejessica.com</span>
              </div>
              <div className="flex items-center text-emcee-darkGray/80">
                <Phone size={16} className="mr-2" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-emcee-darkPink/20 pt-6 text-center">
          <p className="text-emcee-darkGray/80 text-sm">
            © {currentYear} Emcee Jessica Kakkanad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
