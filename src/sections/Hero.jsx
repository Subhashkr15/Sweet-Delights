import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative bg-gradient-to-b from-pink-50 to-white overflow-visible">
      {/* Background blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-pink-100 text-accent font-semibold text-sm mb-4">
            Sweetest Treats in Town 🍰
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-800 mb-6 leading-tight">
            Baked with <span className="text-accent">Love</span> & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Passion</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Indulge in our handcrafted pastries, cookies, and cakes. Made from scratch daily with the finest ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="secondary" onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}>
              View Menu <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>

        {/* Visuals */}
        <div className="md:w-1/2 relative h-[500px] w-full flex items-center justify-center">
          {/* Main Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 w-full max-w-md"
          >
            <div className="bg-pink-100/50 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-xl relative min-h-[300px] flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=503&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Beautiful Pink Frosted Cake" 
                className="w-full h-auto rounded-xl drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('bg-pink-200');
                  e.target.parentElement.innerHTML = '<div class="text-6xl">🎂</div>';
                }}
              />
            </div>
          </motion.div>

          {/* Floating Elements */}
          <motion.img 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: [0, -20, 0], opacity: 1 }}
            transition={{ 
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
              opacity: { duration: 0.5, delay: 0.6 }
            }}
            src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Pink Lollipop"
            className="absolute top-10 right-10 w-32 h-32 rounded-full border-4 border-white drop-shadow-lg object-cover z-20 bg-purple-100"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <motion.img 
            viewport={{ once: true }}
            animate={{ y: [0, 20, 0]}}
            transition={{ 
              y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }
            }}
            src="https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=300&auto=format&fit=crop" 
            alt="Strawberry Croissant"
            className="absolute bottom-0 left-10 w-32 h-auto rounded-2xl border-4 border-white drop-shadow-2xl rotate-6 object-cover z-50 bg-pink-50"
            onError={(e) => {
               e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </section>
  );
}
