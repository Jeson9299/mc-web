
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "/src/about.jpg";


const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="content-section py-6 px-5 sm:px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-emcee-darkGray">About Me</h2>
          
          <Card className="overflow-hidden shadow-lg bg-white/90 border-none">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 w-full">
                  <div className="bg-emcee-lightGray aspect-square flex items-center justify-center">
                    <img 
                      src={aboutImage} 
                      alt="Jessica Kakkanad" 
                      //className="object-cover h-full w-full opacity-80"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-emcee-darkGray">Hi, I'm Jessica</h3>
                  <p className="text-lg leading-relaxed text-emcee-darkGray/90 mb-6">
                    A professional emcee based in Mumbai. I specialize in hosting memorable events with charm, energy, and elegance.
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
