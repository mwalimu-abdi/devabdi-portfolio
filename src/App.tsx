import React, { Suspense, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Topbar } from './components/Topbar';
import { MobileMenu } from './components/MobileMenu';
import { Hero } from './components/Hero';
import { About } from './components/About';
const Services = React.lazy(() => import('./components/Services').then(m => ({ default: m.Services }))); 
const Portfolio = React.lazy(() => import('./components/Portfolio').then(m => ({ default: m.Portfolio }))); 
const Contact = React.lazy(() => import('./components/Contact').then(m => ({ default: m.Contact }))); 
import { Footer } from './components/Footer';
import { MagicCursor } from './components/MagicCursor';
import { ScrollReveal } from './components/ScrollReveal';
import { playMenuOpenSound, playMenuCloseSound } from './utils/audio';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      playMenuOpenSound();
      setIsMobileMenuOpen(true);
    } else {
      playMenuCloseSound();
      setIsMobileMenuOpen(false);
    }
  };

  const handleCloseMobileMenu = () => {
    playMenuCloseSound();
    setIsMobileMenuOpen(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen min-h-[100dvh] w-full max-w-full overflow-x-clip flex flex-col bg-white text-neutral-800 selection:bg-[#d1701f] selection:text-white relative">
        {/* Custom cursor effect */}
        <MagicCursor />

        {/* Minimal Navigation Bar */}
        <Topbar
          isMobileMenuOpen={isMobileMenuOpen}
          onToggleMobileMenu={handleToggleMobileMenu}
        />

        {/* Clean Slide-in Menu Drawer */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={handleCloseMobileMenu}
        />

        {/* Main Content Sections */}
        <main className="flex-1 w-full max-w-full overflow-x-clip flex flex-col">
          {/* Hero Section */}
          <ScrollReveal>
            <Hero />
          </ScrollReveal>

          {/* About Section */}
          <ScrollReveal>
            <About />
          </ScrollReveal>

          {/* Services & Technical Skills Section */}
          <Suspense fallback={null}>
            
          <ScrollReveal>
            <Services />
          </ScrollReveal>
          </Suspense>

          {/* Projects Portfolio Section */}
          <Suspense fallback={null}>
            
          <ScrollReveal>
            <Portfolio />
          </ScrollReveal>
          </Suspense>

          {/* Contact Section */}
          <Suspense fallback={null}>
            
          <ScrollReveal>
            <Contact />
          </ScrollReveal>
          </Suspense>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}














