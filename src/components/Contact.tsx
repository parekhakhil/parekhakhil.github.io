import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import portfolioData from '../data/portfolio.json';
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get IP address (for demo purposes using a service)
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const { ip } = await ipResponse.json();

      // Insert into Supabase without selecting
      const { error: insertError } = await supabase
        .from('contact_messages')
        .insert([
          {
            ...formData,
            ip_address: ip,
            user_agent: navigator.userAgent,
          }
        ]);

      if (insertError) throw insertError;

      // Trigger email notification
      const { error: notificationError } = await supabase.functions.invoke('contact-notification', {
        body: { 
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
      });

      if (notificationError) throw notificationError;

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const { email, phone, address } = portfolioData.contactDetails;

  return (
    <section id="contact" className="py-24 bg-background/50">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center mb-16">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-4">Let's Talk</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in hearing about new projects and opportunities.
              </p>
            </div>

            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 hover:border-border transition-colors">
                <Mail className="text-primary h-5 w-5" />
                <span><a href={`mailto:${email}`}>{email}</a></span>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 hover:border-border transition-colors">
                <Phone className="text-primary h-5 w-5" />
                <span><a href={`tel:${phone}`}>{phone}</a></span>
              </div>
              <a 
                href={address.addressLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 hover:border-border transition-colors"
              >
                <MapPin className="text-primary h-5 w-5" />
                <span>{address.addressText}</span>
              </a>
            </div>
          </div>

          <form 
            onSubmit={handleSubmit} 
            className="space-y-6 animate-fade-in-up backdrop-blur-xl bg-background/50 dark:bg-background/20 p-8 rounded-xl border border-border/50 shadow-lg"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="Your name"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full"
                placeholder="Your message"
                disabled={isSubmitting}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;