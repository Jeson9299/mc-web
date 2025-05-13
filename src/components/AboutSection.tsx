
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="content-section py-8 px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-emcee-darkGray">About Me</h2>
          
          <Card className="overflow-hidden shadow-lg bg-white/90 border-none">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 w-full">
                  <div className="bg-emcee-lightGray aspect-square flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                      alt="Jessica Kakkanad" 
                      className="object-cover h-full w-full opacity-80"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-emcee-darkGray">Hi, I'm Jessica</h3>
                  <p className="text-lg leading-relaxed text-emcee-darkGray/90 mb-6">
                    A professional emcee based in Kakkanad. I specialize in hosting memorable events with charm, energy, and elegance.
                  </p>
                  <p className="text-lg leading-relaxed text-emcee-darkGray/90">
                    With my experience and passion for public speaking, I bring a unique blend of professionalism and fun to every event I host. I understand that your special occasion deserves nothing but the best, and I'm here to make it truly unforgettable.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
