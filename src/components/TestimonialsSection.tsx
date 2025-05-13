
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  text: string;
  author: string;
  event: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, author, event }) => {
  return (
    <Card className="bg-white/90 border border-emcee-pink shadow-md h-full">
      <CardContent className="p-6">
        <div className="text-emcee-darkPink text-4xl font-serif mb-4">"</div>
        <p className="text-emcee-darkGray/80 mb-4 italic">
          {text}
        </p>
        <div className="text-right">
          <p className="font-semibold text-emcee-darkGray">{author}</p>
          <p className="text-sm text-emcee-darkGray/70">{event}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      text: "Jessica was the perfect emcee for our wedding. She was professional, charismatic, and kept everything running smoothly. Our guests loved her energy and charm!",
      author: "Priya & Rahul",
      event: "Wedding Reception"
    },
    {
      text: "We hired Jessica for our daughter's sweet sixteen and she was absolutely fantastic. She engaged with the teenagers perfectly and made the event so much fun.",
      author: "Anjali Thomas",
      event: "Birthday Party"
    },
    {
      text: "Jessica brought such elegance and professionalism to our corporate event. She was well-prepared, articulate, and adaptive throughout the program.",
      author: "Vivek Menon",
      event: "Company Anniversary"
    }
  ];

  return (
    <section id="testimonials" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="content-section py-8 px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-emcee-darkGray">Testimonials</h2>
          <p className="text-center text-emcee-darkGray/80 mb-12 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about my emcee services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                text={testimonial.text}
                author={testimonial.author}
                event={testimonial.event}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
