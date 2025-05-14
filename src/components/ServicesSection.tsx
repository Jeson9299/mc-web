
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CakeSlice, Users, Heart, Bell, Gift, Briefcase } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description }) => {
  return (
    <Card className="bg-white/90 border-2 border-emcee-pink hover:border-emcee-darkPink transition-colors duration-300 shadow-md hover:shadow-lg h-full">
      <CardContent className="p-6 text-center">
        <div className="bg-emcee-pink w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-emcee-darkGray">{title}</h3>
        <p className="text-emcee-darkGray/80">{description}</p>
      </CardContent>
    </Card>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Parties",
      icon: <Users size={32} className="text-emcee-darkGray" />,
      description: "From corporate events to casual gatherings, I'll keep your guests entertained."
    },
    {
      title: "Weddings",
      icon: <Heart size={32} className="text-emcee-darkGray" />,
      description: "I'll guide your wedding celebration with elegance and create beautiful moments."
    },
    {
      title: "Birthdays",
      icon: <CakeSlice size={32} className="text-emcee-darkGray" />,
      description: "Make your birthday celebration extra special with a professional host."
    },
    {
      title: "First Holy Communions",
      icon: <Bell size={32} className="text-emcee-darkGray" />,
      description: "I'll host your sacred ceremony with appropriate respect and joy."
    },
    {
      title: "Christenings",
      icon: <Gift size={32} className="text-emcee-darkGray" />,
      description: "Welcome your little one with a beautifully hosted christening ceremony."
    },
    {
      title: "Corporate Events",
      icon: <Briefcase size={32} className="text-emcee-darkGray" />,
      description: "Professional hosting for your meetings, conferences, and company celebrations."
    }
  ];

  return (
    <section id="services" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="content-section py-8 px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-emcee-darkGray">Events I Host</h2>
          <p className="text-center text-emcee-darkGray/80 mb-12 max-w-2xl mx-auto">
            With experience across various event types, I'll make sure your special occasion runs smoothly and memorably.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                icon={service.icon}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
