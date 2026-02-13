import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Program } from './components/Program';
import { Logistics } from './components/Logistics';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ParticlesBackground } from './components/ParticlesBackground';

export function App() {
  return (
    <div className="min-h-screen bg-[#030a09] text-white overflow-x-hidden">
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
      
      {/* Animated background with logo and particles */}
      <ParticlesBackground />
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Program />
        <Logistics />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
