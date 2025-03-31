import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

// Define the contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  program: z.string(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactSection() {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      program: "none", // Set to match the default SelectItem value
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      form.reset({
        name: "",
        email: "",
        phone: "",
        program: "none",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-[#D2B48C] mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto">Have questions or ready to start your wellness journey? Get in touch with us.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            {formSubmitted ? (
              <div className="bg-[#F9F5F0] p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-check text-green-500 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Thank You!</h3>
                <p className="text-lg mb-6">
                  Your message has been sent successfully. We'll get back to you as soon as possible.
                </p>
                <Button 
                  onClick={() => setFormSubmitted(false)}
                  className="bg-primary hover:bg-primary/90"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="bg-[#F9F5F0] p-8 rounded-lg shadow-md">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your full name" 
                            {...field} 
                            className="focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Enter your email address" 
                            {...field} 
                            className="focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="Enter your phone number" 
                            {...field} 
                            className="focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="program"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel>Interested In</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="focus:ring-primary">
                              <SelectValue placeholder="Select a Program" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="none">Select a Program</SelectItem>
                            <SelectItem value="weight-loss">Weight Loss</SelectItem>
                            <SelectItem value="weight-gain">Weight Gain</SelectItem>
                            <SelectItem value="therapeutic">Therapeutic Diet</SelectItem>
                            <SelectItem value="pregnancy">Pregnancy Diet</SelectItem>
                            <SelectItem value="child">Child Nutrition</SelectItem>
                            <SelectItem value="fitness">Fitness Diet</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Type your message here" 
                            rows={4} 
                            {...field} 
                            className="focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-cta font-semibold shadow transition"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>
          
          <div className="md:w-1/2">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Quick Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-phone-alt text-primary text-lg mt-1 mr-4"></i>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:7264072630" className="hover:text-primary transition">7264072630</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-envelope text-primary text-lg mt-1 mr-4"></i>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:dt.sakshimahalle@gmail.com" className="hover:text-primary transition">dt.sakshimahalle@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt text-primary text-lg mt-1 mr-4"></i>
                  <div>
                    <p className="font-medium">Location</p>
                    <p>AP Pinnacle, Lonikand, Pune</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-clock text-primary text-lg mt-1 mr-4"></i>
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p>Monday to Saturday: 10 AM - 7 PM</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-[#D2B48C] transition" aria-label="Facebook">
                  <i className="fab fa-facebook-f text-lg"></i>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-[#D2B48C] transition" aria-label="Instagram">
                  <i className="fab fa-instagram text-lg"></i>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-[#D2B48C] transition" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in text-lg"></i>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-[#D2B48C] transition" aria-label="YouTube">
                  <i className="fab fa-youtube text-lg"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Location</h3>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">
                  <i className="fas fa-map-marked-alt text-4xl"></i>
                  <p className="text-center mt-4">Google Map Embed</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
