
import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-accent/30">
      <div className="container-section">
        <div className="space-y-2 text-center mb-12">
          <h2 className="section-title mx-auto">Get In Touch</h2>
          <p className="section-subtitle max-w-2xl mx-auto">Let's discuss your project or just say hello</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Let's connect</h3>
              <p className="text-muted-foreground">
                I'm currently looking for new opportunities and would love to hear from you. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a 
                    href="mailto:puvithaganapathi@gmail.com" 
                    className="font-medium hover:text-primary transition-colors"
                  >
                    puvithaganapathi@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a 
                    href="tel:+917200442576" 
                    className="font-medium hover:text-primary transition-colors"
                  >
                    +91 7200 442 576
                  </a>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-semibold mb-3">Connect with me</h4>
                <div className="flex gap-4">
                  <a 
                    href="mailto:puvithaganapathi@gmail.com"
                    className="p-3 bg-card rounded-full border border-border hover:border-primary hover:text-primary transition-all"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/puvitha-g-0802ab27a" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-card rounded-full border border-border hover:border-primary hover:text-primary transition-all"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22.225 0h-20.45A1.775 1.775 0 0 0 0 1.775v20.45C0 23.2.8 24 1.775 24h20.45A1.775 1.775 0 0 0 24 22.225v-20.45A1.775 1.775 0 0 0 22.225 0ZM7.147 20.444H3.551v-9.647h3.596v9.647ZM5.349 9.038a2.077 2.077 0 1 1 0-4.154 2.077 2.077 0 0 1 0 4.154Zm15.096 11.406h-3.592v-5.569c0-1.313-.023-3-1.829-3-1.832 0-2.112 1.429-2.112 2.905v5.664h-3.593v-9.647h3.448v1.583h.05c.473-.896 1.628-1.841 3.347-1.841 3.581 0 4.24 2.358 4.24 5.425v4.48Z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Contact form */}
          <div className="bg-card p-6 md:p-8 rounded-xl shadow-sm border border-border">
            <h3 className="text-xl font-bold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Email Adress"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
