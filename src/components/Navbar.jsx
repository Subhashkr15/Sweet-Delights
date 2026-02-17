import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-3xl font-display font-bold text-accent flex items-center gap-2">
          <span className="text-4xl">🧁</span> 
          <span className="bg-gradient-to-r from-accent to-pink-400 bg-clip-text text-transparent">Sweet Delights</span>
        </a>

        {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Menu', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`${item.toLowerCase()}`} 
                className="font-display font-semibold text-gray-700 hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-pink-100 overflow-hidden shadow-lg absolute w-full top-full left-0"
          >
            <div className="flex flex-col p-6 gap-4">
               {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-lg font-display font-semibold text-gray-700 hover:text-accent" 
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
