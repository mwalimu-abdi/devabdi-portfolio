import React from 'react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import { useTheme } from '../context/ThemeContext';
import { MessageCircle, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { currentColorHex } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="py-9 transition-colors duration-300 text-white relative w-full max-w-full overflow-hidden shrink-0 mt-auto"
      style={{ backgroundColor: currentColorHex }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Copyright notice */}
          <div className="text-sm font-medium text-white/90 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} <span className="font-bold">{PORTFOLIO_DATA.personal.name}</span>. All rights reserved.
            </p>
            <p className="text-xs text-white/80 mt-0.5 font-['Mulish']">
              Full-Stack Web Developer &middot; {PORTFOLIO_DATA.personal.location}
            </p>
          </div>

          {/* Social Links (WhatsApp & Email only) & Back To Top */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href={PORTFOLIO_DATA.contact.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-neutral-900 flex items-center justify-center transition-all shadow-xs"
                title={`WhatsApp: ${PORTFOLIO_DATA.contact.phoneDisplay}`}
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.contact.socials.emailLink}
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-neutral-900 flex items-center justify-center transition-all shadow-xs"
                title="Email: info@devabdi.co.ke"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all ml-1 cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
