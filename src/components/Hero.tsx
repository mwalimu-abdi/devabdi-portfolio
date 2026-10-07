import React from 'react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import { useTheme } from '../context/ThemeContext';
import { TechIcon } from './TechIcon';
import { smoothScrollTo } from '../utils/scroll';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenCV?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const { currentColorHex } = useTheme();

  const coreSkills = [
    { name: 'HTML5', label: 'HTML5' },
    { name: 'React', label: 'React JS' },
    { name: 'Node.js', label: 'Node.js' },
    { name: 'JavaScript', label: 'JavaScript' },
    { name: 'PHP', label: 'PHP' },
    { name: 'CSS3', label: 'CSS3' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] lg:min-h-screen flex flex-col justify-center items-center pt-24 sm:pt-28 lg:pt-20 pb-12 sm:pb-16 bg-white w-full max-w-full"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-7xl w-full mx-auto px-5 sm:px-10 lg:px-16 my-auto">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Text content: centered on mobile, left-aligned on desktop */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            {/* Strong Live Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100/90 border border-neutral-200/80 mb-4 sm:mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                Full-Stack Web Developer &middot; Nairobi, Kenya
              </span>
            </div>

            {/* Masked Video Headline: GUARANTEED video inside letters across ALL devices */}
            <div
              className="relative overflow-hidden mb-4 sm:mb-6 inline-block select-none max-w-full rounded-sm"
              style={{
                backgroundColor: '#ffffff',
                lineHeight: 1.15,
              }}
            >
              {/* Cityscape Video Layer */}
              <video
                playsInline
                autoPlay
                muted
                loop
                preload="metadata"
                poster="/video/poster.jpg"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              >
                <source src="/video/1.mp4" type="video/mp4" />
              </video>

              {/* Text Layer with screen blend mode: Black text reveals video, White background masks outside */}
              <h1
                style={{
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  mixBlendMode: 'screen',
                  position: 'relative',
                  zIndex: 5,
                  margin: 0,
                  padding: '2px 8px 2px 2px',
                }}
                className="text-4xl sm:text-6xl lg:text-[72px] xl:text-[80px] font-black font-['Poppins'] tracking-tight leading-[1.12]"
              >
                Web Developer
              </h1>
            </div>

            {/* Description matching reference site */}
            <div className="mb-6 sm:mb-8 max-w-xl">
              <p className="text-[15px] sm:text-[17px] text-[#767676] font-['Mulish'] leading-[1.8]">
                {PORTFOLIO_DATA.personal.heroGreeting}
              </p>
            </div>

            {/* Direct Contact Action (CV and See Portfolio buttons removed per request) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10 w-full">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('contact');
                }}
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-bold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all font-['Poppins'] cursor-pointer group"
                style={{ backgroundColor: currentColorHex }}
              >
                <span>Get In Touch</span>
                <span className="inline-flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 animate-arrow-fade" />
                </span>
              </a>
            </div>

            {/* Short Skills Row matching reference site exactly */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-1 w-full justify-center lg:justify-start">
              {/* Left label with divider on desktop, centered on mobile */}
              <div className="relative sm:pr-6 sm:border-r border-neutral-300 shrink-0 mb-1 sm:mb-0">
                <span className="text-[12px] sm:text-[13px] font-bold text-neutral-800 font-['Poppins'] leading-tight block">
                  High knowledge on<br className="hidden sm:inline" /> softwares
                </span>
              </div>

              {/* Floating circular icon badges */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                {coreSkills.map((tech) => (
                  <div
                    key={tech.name}
                    className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-neutral-150 flex items-center justify-center hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative"
                    title={tech.label}
                  >
                    <TechIcon name={tech.name} size={18} className="sm:scale-105" />
                    <span className="absolute -top-7 scale-0 group-hover:scale-100 transition-all text-[10px] font-bold bg-neutral-900 text-white px-2 py-0.5 rounded shadow pointer-events-none whitespace-nowrap z-20">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Avatar Container */}
          <div className="lg:col-span-5 flex justify-center items-center relative mb-4 lg:mb-0">
            <div className="relative flex items-center justify-center">
              {/* The Morphing Image Container - Pure White Background, No Outer Circular Border */}
              <div
                className="relative w-[210px] h-[210px] sm:w-[280px] sm:h-[280px] lg:w-[340px] lg:h-[340px] xl:w-[380px] xl:h-[380px] animate-morph overflow-hidden shadow-lg bg-white"
                style={{
                  backgroundColor: '#ffffff',
                }}
              >
                <img
                  src={PORTFOLIO_DATA.personal.defaultAvatar}
                  alt={`Portrait of ${PORTFOLIO_DATA.personal.name}, Full-Stack Web Developer in Nairobi, Kenya`}
                  width={380}
                  height={380}
                  loading="eager" fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                  style={{ backgroundColor: '#ffffff' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
