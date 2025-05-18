import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const BookingSection: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <section id="booking" className="py-16 px-4">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="content-section py-8 px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-emcee-darkGray">
            Book Me For Your Event!
          </h2>
          <p className="text-center text-emcee-darkGray/80 mb-12 max-w-2xl mx-auto">
            Ready to make your event unforgettable? Fill out the form below and I'll get back to you soon.
          </p>

          <Card className="bg-white/90 shadow-lg border-none">
            <CardContent className="p-6 sm:p-8">
              <form
                action="https://formsubmit.co/jesondsouzadx@gmail.com"
                method="POST"
                className="space-y-6"
              >
                {/* Update this to your actual domain */}
                <input type="hidden" name="_next" value="https://emceejessicakakkanad.com/thankyou" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="eventDate" value={date ? format(date, "PPP") : ""} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
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
                      required
                      className="border-emcee-pink focus:border-emcee-darkPink"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="eventType">Event Type</Label>
                    <select
                      name="eventType"
                      required
                      className="w-full border-emcee-pink focus:border-emcee-darkPink rounded-md p-2"
                    >
                      <option value="">Select Event Type</option>
                      <option value="wedding">Wedding</option>
                      <option value="birthday">Birthday</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="holy-communion">First Holy Communion</option>
                      <option value="christening">Christening</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="date">Event Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          type="button"
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
      </div>
    </section>
  );
};

export default BookingSection;
