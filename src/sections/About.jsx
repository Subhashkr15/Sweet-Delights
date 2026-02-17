import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-pink-50/50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent rounded-3xl transform rotate-3 opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop" 
              alt="Classic bakery display" 
              className="relative rounded-3xl shadow-xl w-full h-[400px] object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('bg-pink-100', 'flex', 'items-center', 'justify-center', 'h-[400px]', 'rounded-3xl');
                e.target.parentElement.innerHTML = '<div class="text-6xl">👩‍🍳</div>';
              }}
            />
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl font-display font-bold text-gray-800 mb-6">Our Sweet <span className="text-accent">Story</span></h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Founded with a passion for all things sweet, SweetDelights began in a small home kitchen. Today, we are a family of bakers dedicated to spreading joy through our handcrafted pastries.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We use only the finest ingredients—organic flour, farm-fresh eggs, and real butter. Every cupcake, croissant, and macaron is baked with love and attention to detail.
          </p>
          
          <div className="flex gap-4">
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-pink-100">
              <span className="text-3xl font-bold text-accent">5k+</span>
              <span className="text-sm text-gray-500">Happy Customers</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-pink-100">
              <span className="text-3xl font-bold text-accent">100+</span>
              <span className="text-sm text-gray-500">Unique Flavors</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
