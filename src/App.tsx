import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { PORTFOLIO_DATA } from './config/portfolio';
import { Topbar } from './components/Topbar';
import { MobileMenu } from './components/MobileMenu';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { MagicCursor } from './components/MagicCursor';
import { ScrollReveal } from './components/ScrollReveal';
import { playMenuOpenSound, playMenuCloseSound } from './utils/audio';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const hasVerifiedTestimonials = PORTFOLIO_DATA.testimonials.some((t) => t.verified);

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
            <Hero onOpenCV={() => setIsCVModalOpen(true)} />
          </ScrollReveal>

          {/* About Section */}
          <ScrollReveal>
            <About onOpenCV={() => setIsCVModalOpen(true)} />
          </ScrollReveal>

          {/* Services & Technical Skills Section */}
          <ScrollReveal>
            <Services />
          </ScrollReveal>

          {/* Projects Portfolio Section */}
          <ScrollReveal>
            <Portfolio />
          </ScrollReveal>

          {/* Testimonials Section - Rendered only when verified testimonials exist */}
          {hasVerifiedTestimonials && (
            <ScrollReveal>
              <Testimonials />
            </ScrollReveal>
          )}

          {/* Contact Section */}
          <ScrollReveal>
            <Contact />
          </ScrollReveal>
        </main>

        {/* Footer */}
        <Footer />

        {/* CV / Resume Modal */}
        <CVModal
          isOpen={isCVModalOpen}
          onClose={() => setIsCVModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
