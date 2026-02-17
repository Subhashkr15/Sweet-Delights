import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Menu from './sections/Menu';
import About from './sections/About';
import Contact from './sections/Contact';

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

function App() {
  const location = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 2.0, // Increased from 1.2
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const path = location.pathname.substring(1); // Remove leading slash
    
    if (lenisRef.current) {
      if (path) {
        const element = document.getElementById(path);
        if (element) {
          lenisRef.current.scrollTo(element, {
            offset: 0,
            duration: 2.5, // Slower, smoother navigation
          });
        }
      } else {
        // If path is empty (root), scroll to top
        lenisRef.current.scrollTo(0, {
          duration: 2.5,
        });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧁</span>
            <span className="text-xl font-display font-bold">SweetDelights</span>
          </div>
          <p className="text-gray-400 text-sm">© 2026 SweetDelights Bakery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App;
