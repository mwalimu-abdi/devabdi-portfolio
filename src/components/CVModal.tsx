import React from 'react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import { useTheme } from '../context/ThemeContext';
import { X, Printer, Download, Mail, MessageCircle, MapPin, CheckCircle, ExternalLink } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const { currentColorHex } = useTheme();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:px-6 py-4 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between bg-neutral-50 dark:bg-neutral-800/60">
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: currentColorHex }}
            />
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
              Curriculum Vitae Preview &middot; {PORTFOLIO_DATA.personal.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close CV modal"
              className="p-1.5 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-left bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-['Mulish']">
          {/* Header */}
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6">
            <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white font-['Poppins']">
              {PORTFOLIO_DATA.personal.name}
            </h2>
            <p className="text-base font-bold mt-1" style={{ color: currentColorHex }}>
              {PORTFOLIO_DATA.personal.title}
            </p>

            <div className="flex flex-wrap gap-4 mt-3 text-xs text-neutral-600 dark:text-neutral-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {PORTFOLIO_DATA.personal.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                {PORTFOLIO_DATA.contact.email}
              </span>
              <a
                href={PORTFOLIO_DATA.contact.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:underline"
                style={{ color: currentColorHex }}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
              Professional Summary
            </h3>
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              {PORTFOLIO_DATA.personal.bio} Proven track record over {PORTFOLIO_DATA.personal.experienceYears} years delivering end-to-end full-stack applications, scalable educational platforms, and high-performance websites with clean, accessible code.
            </p>
          </div>

          {/* Core Technical Competencies */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
              Technical Proficiencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-100 dark:border-neutral-800">
                <div className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">Frontend Development</div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  React JS, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design, Accessibility (WCAG)
                </div>
              </div>
              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-100 dark:border-neutral-800">
                <div className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">Backend & APIs</div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  Node.js, Express, PHP, MySQL, RESTful APIs, JSON Schemas, Query Optimization
                </div>
              </div>
              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-100 dark:border-neutral-800">
                <div className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">Database & Architecture</div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  Relational Data Modeling, MySQL Query Tuning, Authentication, MVC Architecture
                </div>
              </div>
              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-100 dark:border-neutral-800">
                <div className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">Dev Tools & Workflow</div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  Git, GitHub, Vite, npm, REST client testing, Agile Sprint Execution
                </div>
              </div>
            </div>
          </div>

          {/* Featured Projects Highlight */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
              Key Projects
            </h3>
            <div className="space-y-4">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div
                  key={proj.id}
                  className="pb-3 border-b border-neutral-100 dark:border-neutral-800 last:border-0"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-neutral-900 dark:text-neutral-100 font-['Poppins']">
                      {proj.title}
                    </span>
                    <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-1.5">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1 text-[10px] text-neutral-500 dark:text-neutral-400 font-medium">
                    <span className="font-bold">Tech:</span> {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center text-xs text-neutral-500 dark:text-neutral-400">
            <span>Available for remote & Nairobi-based contracts.</span>
            <span>References available upon request.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
