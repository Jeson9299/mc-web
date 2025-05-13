
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from 'sonner';

const BookingSection: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, eventDate: date });
    toast.success("Booking request received! I'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      message: ''
    });
    setDate(undefined);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="booking" className="py-16 px-4 bg-emcee-lightGray">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-emcee-darkGray">Book Me For Your Event!</h2>
        <p className="text-center text-emcee-darkGray/80 mb-12 max-w-2xl mx-auto">
          Ready to make your event unforgettable? Fill out the form below and I'll get back to you soon.
        </p>
        
        <Card className="bg-white shadow-lg border-none">
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-emcee-pink focus:border-emcee-darkPink"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email"
                    placeholder="your.email@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-emcee-pink focus:border-emcee-darkPink"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    placeholder="Your Phone Number" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-emcee-pink focus:border-emcee-darkPink"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="eventType">Event Type</Label>
                  <Select 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, eventType: value }))}
                    value={formData.eventType}
                  >
                    <SelectTrigger className="border-emcee-pink focus:border-emcee-darkPink">
                      <SelectValue placeholder="Select Event Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="birthday">Birthday</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="holy-communion">First Holy Communion</SelectItem>
                      <SelectItem value="christening">Christening</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="date">Event Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal border-emcee-pink hover:bg-emcee-pink/10",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message / Special Requests</Label>
                <Textarea 
                  id="message"
                  name="message" 
                  placeholder="Tell me more about your event and any special requirements"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="border-emcee-pink focus:border-emcee-darkPink"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-emcee-pink hover:bg-emcee-darkPink text-emcee-darkGray font-semibold"
              >
                Submit Booking Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingSection;
