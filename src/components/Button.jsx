import { motion } from 'framer-motion';

export default function Button({ children, onClick, className = '', variant = 'primary' }) {
  const baseStyles = "px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-pink-600 shadow-pink-200 shadow-lg hover:shadow-pink-300",
    secondary: "bg-white text-accent border-2 border-pink-100 hover:border-accent hover:bg-pink-50",
    outline: "border-2 border-gray-300 text-gray-600 hover:border-accent hover:text-accent"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
