
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen dreamy-bg flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg text-center max-w-2xl mx-4">
        <h1 className="text-3xl md:text-4xl font-bold text-emcee-darkGray mb-4">Thank You!</h1>
        <div className="mb-8 text-lg text-emcee-darkGray/80">
          <p>Your booking request has been received successfully.</p>
          <p className="mt-2">I'll get back to you within 24-48 hours to discuss your event details.</p>
        </div>
        <div className="space-y-4">
          <p className="text-emcee-pink font-medium">Looking forward to making your event unforgettable!</p>
          <Button 
            asChild 
            className="bg-emcee-pink hover:bg-emcee-darkPink text-emcee-darkGray font-semibold"
          >
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
