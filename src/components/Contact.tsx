import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import { useTheme } from '../context/ThemeContext';
import {
  MapPin,
  Phone,
  Mail,
  BookOpen,
  Sparkles,
  Check,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Download,
  X,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { currentColorHex } = useTheme();
  const [isDocsModalOpen, setIsDocsModalOpen] = useState(false);

  const whatsappEnrollUrl = `https://wa.me/254708779692?text=${encodeURIComponent(
    'Hello Abdi Adan, I am interested in enrolling in the Premium 1-on-1 Web Development + Deployment Coaching Course. Please share details on scheduling and commencement.'
  )}`;

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-white transition-colors duration-300 overflow-hidden w-full max-w-full scroll-mt-16"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header: Learn with Abdi Adan */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span
            className="text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2 font-['Poppins']"
            style={{ color: currentColorHex }}
          >
            Education & Mentorship
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight font-['Poppins']">
            Learn with Abdi Adan
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base font-['Mulish'] leading-relaxed max-w-2xl mx-auto">
            Master modern web development, build production-grade applications, and launch your software engineering journey with proven roadmaps and hands-on guidance.
          </p>
        </div>

        {/* Two Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto mb-16 sm:mb-20 items-stretch">
          {/* OFFER 1: Learning Documents */}
          <div className="bg-neutral-50 rounded-3xl p-7 sm:p-9 lg:p-10 border border-neutral-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-200 text-neutral-700 font-['Poppins']">
                  Self-Paced Resources
                </span>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-xs"
                  style={{ backgroundColor: currentColorHex }}
                >
                  <BookOpen className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-['Poppins'] mb-2 text-left">
                Learning Documents
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 font-['Mulish'] mb-6 text-left">
                Curated comprehensive documentation, architectural roadmaps, code templates, and cheat sheets.
              </p>

              {/* Price display */}
              <div className="bg-white p-5 rounded-2xl border border-neutral-200/80 mb-6 text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-['Poppins']">
                  One-Time Payment
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-neutral-900 font-['Poppins']">
                    KES 2,150
                  </span>
                  <span className="text-xs font-semibold text-neutral-500 font-['Mulish']">
                    / full lifetime access
                  </span>
                </div>
              </div>

              {/* Feature list */}
              <ul className="space-y-3 mb-8 text-left">
                {[
                  'Complete full-stack study guides (HTML, CSS, Modern JavaScript)',
                  'React & TypeScript architecture and hooks reference guides',
                  'Node.js & Express REST API blueprints and database schemas',
                  'Production boilerplate templates and reusable starter code',
                  'Instant access to all upcoming documents & resources uploaded by Abdi',
                  'Lifetime updates with zero recurring subscription fees',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 font-['Mulish']">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action button */}
            <div className="pt-4 border-t border-neutral-200/70">
              <button
                onClick={() => setIsDocsModalOpen(true)}
                className="w-full py-3.5 px-6 rounded-full text-sm font-bold text-white shadow-md hover:shadow-lg transition-all font-['Poppins'] flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
                style={{ backgroundColor: currentColorHex }}
              >
                <Download className="w-4 h-4" />
                <span>Access Documents &middot; KES 2,150</span>
              </button>
              <p className="text-[11px] text-neutral-400 text-center mt-2.5">
                Instant access to downloadable materials &middot; Secure integration
              </p>
            </div>
          </div>

          {/* OFFER 2: Premium 1-on-1 Coaching (WhatsApp Redirect) */}
          <div className="bg-neutral-900 text-white rounded-3xl p-7 sm:p-9 lg:p-10 border border-neutral-800 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group">
            {/* Top Badge */}
            <div className="absolute -top-3.5 right-6 sm:right-8">
              <span
                className="px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md flex items-center gap-1.5 font-['Poppins']"
                style={{ backgroundColor: currentColorHex }}
              >
                <Sparkles className="w-3 h-3" />
                <span>Most Popular &middot; 1-on-1</span>
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-800 text-neutral-300 font-['Poppins']">
                  Live Mentorship
                </span>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-xs"
                  style={{ backgroundColor: currentColorHex }}
                >
                  <MessageCircle className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Poppins'] mb-2 text-left">
                Premium 1-on-1 Coaching
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-['Mulish'] mb-6 text-left">
                Full Web Development + Deployment Course personally coached by Abdi Adan.
              </p>

              {/* Price display / highlight */}
              <div className="bg-neutral-800/90 p-5 rounded-2xl border border-neutral-700/80 mb-6 text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-['Poppins']">
                  Direct WhatsApp Enrollment
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-['Poppins']">
                    Full Course & Mentorship
                  </span>
                </div>
                <p className="text-xs text-neutral-300 mt-1">
                  Payment and personalized schedule are arranged directly via WhatsApp with Abdi.
                </p>
              </div>

              {/* Feature list */}
              <ul className="space-y-3 mb-8 text-left">
                {[
                  '1-on-1 personalized live coaching sessions adapted to your schedule',
                  'Full curriculum: Frontend (React, TS) + Backend (Node, DBs, REST APIs)',
                  'Build real, impressive client-grade projects for your developer portfolio',
                  'Live cloud deployment coaching: VPS, Domains, SSL, CI/CD, and Vercel',
                  'Direct private WhatsApp access for code reviews, debugging & guidance',
                  'Career readiness: Freelance client acquisition and technical interviews',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200 font-['Mulish']">
                    <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action button - Redirects to WhatsApp */}
            <div className="pt-4 border-t border-neutral-800">
              <a
                href={whatsappEnrollUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-6 rounded-full text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md hover:shadow-lg transition-all font-['Poppins'] flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enroll via WhatsApp &middot; Chat with Abdi</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
              <p className="text-[11px] text-neutral-400 text-center mt-2.5">
                Opens directly in WhatsApp &middot; Start your personalized coaching
              </p>
            </div>
          </div>
        </div>

        {/* 3 Contact Info Boxes for direct inquiries */}
        <div className="border-t border-neutral-200/80 pt-12 sm:pt-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-neutral-900 font-['Poppins']">
              Get in Touch Directly
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 font-['Mulish'] mt-1">
              Have questions about courses, projects, or collaborations? Reach out anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {/* Location Box */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/90 flex items-center gap-4 group hover:shadow-md transition-all">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-110"
                style={{
                  backgroundColor: `${currentColorHex}18`,
                  color: currentColorHex,
                }}
              >
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-['Poppins']">
                  Location
                </h4>
                <p className="text-sm sm:text-base font-bold text-neutral-900 font-['Poppins']">
                  {PORTFOLIO_DATA.personal.location}
                </p>
              </div>
            </div>

            {/* WhatsApp / Phone Box */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/90 flex items-center gap-4 group hover:shadow-md transition-all">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-110"
                style={{
                  backgroundColor: `${currentColorHex}18`,
                  color: currentColorHex,
                }}
              >
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-['Poppins']">
                  WhatsApp / Phone
                </h4>
                <a
                  href={PORTFOLIO_DATA.contact.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm sm:text-base font-bold text-neutral-900 hover:underline inline-flex items-center gap-1.5 font-['Poppins']"
                  style={{ color: currentColorHex }}
                >
                  <span>{PORTFOLIO_DATA.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Email Box */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/90 flex items-center gap-4 group hover:shadow-md transition-all">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-110"
                style={{
                  backgroundColor: `${currentColorHex}18`,
                  color: currentColorHex,
                }}
              >
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left overflow-hidden">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-['Poppins']">
                  Email
                </h4>
                <a
                  href={PORTFOLIO_DATA.contact.socials.emailLink}
                  className="text-sm sm:text-base font-bold text-neutral-900 hover:underline truncate block font-['Poppins']"
                  style={{ color: currentColorHex }}
                >
                  {PORTFOLIO_DATA.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Learning Documents Access */}
      {isDocsModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsDocsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl p-7 sm:p-9 shadow-2xl border border-neutral-200 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsDocsModalOpen(false)}
              aria-label="Close"
              className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 shadow-sm"
              style={{ backgroundColor: currentColorHex }}
            >
              <BookOpen className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-neutral-900 font-['Poppins'] mb-2">
              Learning Documents Access
            </h3>
            <p className="text-sm text-neutral-600 font-['Mulish'] mb-5 leading-relaxed">
              You are requesting full lifetime access to Abdi Adan's web development learning documents and code starter templates (KES 2,150).
            </p>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 mb-6 text-xs text-amber-900 leading-relaxed font-['Mulish']">
              <strong>Notice:</strong> The automated document download and M-Pesa / Card checkout portal is currently being integrated and will be live shortly. In the meantime, you can reach out directly via WhatsApp for instant access to the current document vault!
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/254708779692?text=${encodeURIComponent(
                  'Hello Abdi, I would like to get access to the Learning Documents (KES 2,150).'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-5 rounded-full text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm transition-all font-['Poppins'] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Contact on WhatsApp for Early Access</span>
              </a>
              <button
                onClick={() => setIsDocsModalOpen(false)}
                className="py-3 px-5 rounded-full text-xs sm:text-sm font-bold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-all font-['Poppins'] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
