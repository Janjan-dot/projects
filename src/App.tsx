import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
