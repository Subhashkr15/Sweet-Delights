import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', type: 'Order Inquiry', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Thanks ${formState.name}! We'll get back to you soon.`);
    setFormState({ name: '', email: '', type: 'Order Inquiry', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-pink-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-gray-800 mb-4">Contact <span className="text-accent">Us</span></h2>
          <p className="text-gray-600">Have a question or want to place a custom order? Reach out to us!</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Contact Info */}
          <div className="lg:w-1/3 bg-accent text-white p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full -ml-16 -mb-16 blur-2xl"></div>
            
            <div>
              <h3 className="text-2xl font-bold font-display mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-full"><Phone size={20} /></div>
                  <p>+91 70042 87500</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-full"><Mail size={20} /></div>
                  <p>hello@sweetdelights.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-full"><MapPin size={20} /></div>
                  <p>123 Bakery Lane, Sweet City , Ranchi</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="opacity-80 text-sm">Follow our sweet journey</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-accent transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-accent transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-accent transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                    placeholder="Enter your full name"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                    placeholder="your.email@provider.com"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Inquiry Type</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-pink-100 outline-none transition-all bg-white"
                  value={formState.type}
                  onChange={e => setFormState({...formState, type: e.target.value})}
                >
                  <option>Order Inquiry</option>
                  <option>Custom Cake</option>
                  <option>Catering</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-pink-100 outline-none transition-all resize-none"
                  placeholder="Tell us about your sweet cravings..."
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>

              <div className="flex justify-end">
                <Button variant="primary" className="!px-8">
                  Send Message <Send size={18} />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
