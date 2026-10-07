import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { PORTFOLIO_DATA } from '../config/portfolio';
import { smoothScrollTo } from '../utils/scroll';
import { playMenuCloseSound } from '../utils/audio';
import { Sun, Moon, MessageCircle, Mail, MapPin, X, ArrowUpRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { isDark, toggleDarkMode, currentColorHex } = useTheme();

  if (!isOpen) return null;

  const hasVerifiedTestimonials = PORTFOLIO_DATA.testimonials.some((t) => t.verified);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#service' },
    { label: 'Portfolio', href: '#portfolio' },
    ...(hasVerifiedTestimonials ? [{ label: 'Testimonials', href: '#testimonials' }] : []),
    { label: 'Learn with Abdi', href: '#contact' },
  ];

  const handleClose = () => {
    playMenuCloseSound();
    onClose();
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    playMenuCloseSound();
    onClose();
    setTimeout(() => {
      smoothScrollTo(href);
    }, 150);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={handleClose}
    >
      <div
        className="fixed inset-y-0 right-0 w-full max-w-sm sm:max-w-md bg-white dark:bg-neutral-900 p-8 sm:p-12 shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-8 border-b border-neutral-100 dark:border-neutral-800">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="font-['Caveat'] text-3xl font-bold tracking-wider text-neutral-800 dark:text-neutral-100 cursor-pointer"
          >
            AbdiAdan<span style={{ color: currentColorHex }}>....</span>
          </a>
          <button
            onClick={handleClose}
            aria-label="Close menu"
            className="p-2.5 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list - Beautiful typography, without numbering */}
        <nav className="my-auto py-8">
          <ul className="space-y-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="group flex items-center justify-between py-1 text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-neutral-100 font-['Poppins'] tracking-tight hover:translate-x-2 transition-all cursor-pointer"
                >
                  <span className="group-hover:text-[#d1701f] transition-colors">
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-[#d1701f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Settings & Socials - Color locked to Orange */}
        <div className="pt-8 border-t border-neutral-100 dark:border-neutral-800 space-y-6">
          {/* Appearance Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-['Poppins']">
              Theme Mode
            </span>
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle theme mode"
              className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors flex items-center gap-2 text-xs font-semibold"
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4" />
                  <span>Dark</span>
                </>
              )}
            </button>
          </div>

          {/* Location & Social Icons */}
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 pt-2">
            <div className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#d1701f]" />
              <span>{PORTFOLIO_DATA.personal.location}</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.contact.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="text-neutral-500 hover:text-[#d1701f] transition-colors"
                title="WhatsApp: +254 708 779 692"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.contact.socials.emailLink}
                aria-label="Email"
                className="text-neutral-500 hover:text-[#d1701f] transition-colors"
                title="Email: info@devabdi.co.ke"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

