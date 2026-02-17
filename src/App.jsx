import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Menu from './sections/Menu';
import About from './sections/About';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
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
