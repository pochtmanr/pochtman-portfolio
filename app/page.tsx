import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}