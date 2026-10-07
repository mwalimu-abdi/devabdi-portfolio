import React from 'react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import { useTheme } from '../context/ThemeContext';
import { LiveSignature } from './LiveSignature';

export const About: React.FC = () => {
  const { currentColorHex } = useTheme();

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white transition-colors duration-300 overflow-hidden w-full max-w-full scroll-mt-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Portrait & Rotating Circular Experience Badge */}
          <div className="lg:col-span-6 flex justify-center pb-8 sm:pb-0">
            {/* Unconstrained wrapper allowing full, unlimited portrait size */}
            <div className="relative w-full max-w-[440px] lg:max-w-[500px]">
              {/* Profile Image - static, clean, accessible */}
              <div className="relative w-full bg-transparent border-0 shadow-none overflow-visible">
                <img
                  src={PORTFOLIO_DATA.personal.defaultAvatar}
                  alt={`Portrait of ${PORTFOLIO_DATA.personal.name}, Full-Stack Web Developer in Nairobi, Kenya`}
                  width={500}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain block select-none"
                />
              </div>

              {/* Rotating Circular Experience Badge: Solid white circle appearing above the image */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white shadow-md flex items-center justify-center pointer-events-none z-10">
                {/* Rotating Circular Text SVG with black words */}
                <div className="absolute inset-0 animate-spin-slow pointer-events-none">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path
                      id="circlePath"
                      d="M 100, 100 m -68, 0 a 68,68 0 1,1 136,0 a 68,68 0 1,1 -136,0"
                      fill="none"
                    />
                    <text className="text-[12px] font-extrabold tracking-[0.22em] uppercase fill-black">
                      <textPath href="#circlePath" startOffset="0%">
                        Years of best and successful work experience.
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Center number 5 in green with no background */}
                <div className="flex items-center justify-center bg-transparent z-20">
                  <span className="text-3xl sm:text-4xl font-black font-['Poppins'] leading-none text-emerald-600">
                    {PORTFOLIO_DATA.personal.experienceYears}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Narrative matching reference layout */}
          <div className="lg:col-span-6 flex flex-col text-left">
            {/* Section Tagline matching reference */}
            <div className="mb-2">
              <span
                className="text-xs sm:text-sm font-bold uppercase tracking-widest"
                style={{ color: currentColorHex }}
              >
                About Me
              </span>
            </div>

            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-5 font-['Poppins']">
              Web Developer
            </h2>

            {/* Text description matching reference text structure */}
            <div className="space-y-3 text-[15px] sm:text-[16px] text-[#767676] dark:text-neutral-400 font-['Mulish'] leading-relaxed mb-6">
              <p>{PORTFOLIO_DATA.personal.bio}</p>
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2.5 text-neutral-800 dark:text-neutral-200 font-medium text-sm">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentColorHex }} />
                  <span>Sub-second page loads and responsive UI.</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-800 dark:text-neutral-200 font-medium text-sm">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentColorHex }} />
                  <span>Clean React and TypeScript component architecture.</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-800 dark:text-neutral-200 font-medium text-sm">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentColorHex }} />
                  <span>Reliable REST APIs and optimized MySQL databases.</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Grid - Strong & Informative */}
            {PORTFOLIO_DATA.personal.stats && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 mb-4 border-y border-neutral-100 dark:border-neutral-800">
                {PORTFOLIO_DATA.personal.stats.map((stat, idx) => (
                  <div key={idx} className="text-left">
                    <div className="text-xl sm:text-2xl font-black font-['Poppins'] text-neutral-900 dark:text-white" style={{ color: idx === 0 ? currentColorHex : undefined }}>
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Live Handwriting Signature replacing the second Get in touch button (jhey.dev style) */}
            <div className="pt-2">
              <LiveSignature />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

