import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import { useTheme } from '../context/ThemeContext';
import { smoothScrollTo } from '../utils/scroll';

interface TopbarProps {
  onToggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export const Topbar: React.FC<TopbarProps> = ({ onToggleMobileMenu, isMobileMenuOpen }) => {
  const { currentColorHex } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hasVerifiedTestimonials = PORTFOLIO_DATA.testimonials.some((t) => t.verified);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#service' },
    { label: 'Portfolio', href: '#portfolio' },
    ...(hasVerifiedTestimonials ? [{ label: 'Testimonials', href: '#testimonials' }] : []),
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-neutral-900/95 shadow-sm backdrop-blur-md py-3.5 border-b border-neutral-100 dark:border-neutral-800'
          : 'bg-white/70 backdrop-blur-sm sm:bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Signature handwritten style logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo('home');
          }}
          className="group flex items-center shrink-0 cursor-pointer"
          aria-label="Abdi Adan"
        >
          <span className="font-['Caveat'] text-2xl sm:text-3xl font-bold tracking-wider text-neutral-900 dark:text-neutral-100 transition-colors">
            AbdiAdan<span style={{ color: currentColorHex }}>....</span>
          </span>
        </a>

        {/* Desktop Navigation Links with butter-smooth scrolling */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo(item.href);
              }}
              className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors font-['Poppins'] relative py-1 group cursor-pointer"
            >
              <span>{item.label}</span>
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full"
                style={{ backgroundColor: currentColorHex }}
              />
            </a>
          ))}
        </nav>

        {/* Right side: Direct CTA + Hamburger Menu (Mobile/Tablet Only) */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo('contact');
            }}
            className="hidden sm:inline-flex items-center px-5 py-2 rounded-full text-xs font-bold text-white shadow-xs hover:shadow-md transition-all font-['Poppins'] cursor-pointer"
            style={{ backgroundColor: currentColorHex }}
          >
            Let's Talk
          </a>

          {/* Minimal hamburger menu button - hidden on desktop since navigation is visible at top */}
          <button
            onClick={onToggleMobileMenu}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 -mr-1.5 rounded-lg group focus:outline-none cursor-pointer flex flex-col justify-center items-end gap-1.5"
          >
            <span
              className={`block h-[2px] bg-neutral-900 dark:bg-white rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-7 group-hover:w-8'
              }`}
            />
            <span
              className={`block h-[2px] bg-neutral-900 dark:bg-white rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0 w-6' : 'w-5 group-hover:w-8'
              }`}
            />
            <span
              className={`block h-[2px] bg-neutral-900 dark:bg-white rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6 group-hover:w-8'
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
