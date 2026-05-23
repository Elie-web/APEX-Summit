import { useEffect } from 'react';
import Lenis from 'lenis';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Concept from './components/Concept';
import WhyAttend from './components/WhyAttend';
import Speakers from './components/Speakers';
import Experience from './components/Experience';
import Agenda from './components/Agenda';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    let raf;
    function loop(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh' }}>
      <Navbar />
      {/* Conversion funnel: hook → validate → educate → proof → atmosphere → buy → reassure */}
      <Hero />
      <SocialProof />
      <Concept />
      <WhyAttend />
      <Speakers />
      <Experience />
      <Agenda />
      <Testimonials />
      <Gallery />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyBar />
    </div>
  );
}
