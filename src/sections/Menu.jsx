import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ShoppingBag } from 'lucide-react';

const products = [
  { id: 1, name: "Bento Cake", price: "₹220", desc: "Vanilla sponge & buttercream", color: "bg-pink-100", img: "https://i.pinimg.com/736x/e1/2b/25/e12b25ffe05588391d1dca16417c8b18.jpg" },
  { id: 2, name: "Chocolate Delight", price: "₹150", desc: "Rich belgian chocolate", color: "bg-amber-100", img: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=400&auto=format&fit=crop" },
  { id: 3, name: "Blueberry Muffin", price: "₹90", desc: "Bursting with blueberries", color: "bg-blue-100", img: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=400&auto=format&fit=crop" },
  { id: 4, name: "Macaron Box", price: "₹350", desc: "Assorted french macarons", color: "bg-purple-100", img: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=400&auto=format&fit=crop" },
  { id: 5, name: "Croissant", price: "₹80", desc: "Butter & Flaky Pastry", color: "bg-orange-100", img: "https://images.unsplash.com/photo-1731153073446-fb3ed78bcf63?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, name: "Red Velvet", price: "₹140", desc: "Classic with cream cheese", color: "bg-red-100", img: "https://images.unsplash.com/photo-1714386148315-2f0e3eebcd5a?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-gray-800 mb-4">Our Sweet <span className="text-accent">Menu</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our wide variety of freshly baked goods. From cupcakes to croissants, we have something for everyone.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-pink-50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-full aspect-[4/3] rounded-2xl mb-6 ${product.color} flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-transform duration-500`}>
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerText = '🍰';
                    e.target.parentElement.classList.add('text-4xl');
                  }}
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold font-display text-gray-800">{product.name}</h3>
                <span className="text-accent font-bold text-lg">{product.price}</span>
              </div>
              <p className="text-gray-500 text-sm">{product.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
