import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import { useTheme } from '../context/ThemeContext';
import { ServiceIcon } from './ServiceIcon';
import { Code, CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  const { currentColorHex } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="service"
      className="py-16 sm:py-20 lg:py-28 bg-[#f9f9f9] transition-colors duration-300 overflow-hidden w-full max-w-full scroll-mt-20"
      style={{ backgroundColor: '#f9f9f9' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">
          {/* Left Column: Heading, Context & Technical Skills */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <div className="mb-2">
              <span
                className="text-xs sm:text-sm font-bold uppercase tracking-widest font-['Poppins']"
                style={{ color: currentColorHex }}
              >
                Services
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-neutral-900 tracking-tight leading-tight mb-4 font-['Poppins']">
              Web development services in Nairobi, Kenya
            </h2>

            <p className="text-[15px] sm:text-base text-[#767676] font-['Mulish'] leading-relaxed mb-8">
              Full-cycle engineering delivering fast, secure, and modern digital solutions tailored for businesses, schools, and organizations.
            </p>

            {/* Technical Skills grouped by category without arbitrary percentage bars */}
            <div className="w-full pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800 font-['Poppins'] mb-4 flex items-center gap-2">
                <Code className="w-4 h-4" style={{ color: currentColorHex }} />
                <span>Core Technical Proficiencies</span>
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {PORTFOLIO_DATA.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-sm hover:border-neutral-300 transition-all text-xs font-semibold text-neutral-800 font-['Poppins']"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: currentColorHex }}
                    />
                    <span>{skill.name}</span>
                    <span className="text-[10px] text-neutral-400 font-normal">
                      ({skill.category})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Search-Friendly Client-Facing Services */}
          <div className="lg:col-span-7 w-full">
            <div className="flex flex-col gap-5 sm:gap-6 w-full">
              {PORTFOLIO_DATA.services.map((service, index) => {
                const delay = index * 100;
                return (
                  <article
                    key={service.id}
                    className="w-full"
                    style={{
                      opacity: hasAnimated ? 1 : 0,
                      transform: hasAnimated ? 'translateY(0)' : 'translateY(24px)',
                      transition: `opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) ${delay}ms, transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) ${delay}ms`,
                    }}
                  >
                    <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.09)] transition-all duration-300 border border-neutral-150 relative overflow-hidden flex flex-col sm:flex-row items-start gap-5">
                      {/* Left accent indicator on hover */}
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1 opacity-80"
                        style={{ backgroundColor: currentColorHex }}
                      />

                      {/* Icon */}
                      <div
                        className="p-3 rounded-xl bg-neutral-50 shrink-0"
                        style={{ color: currentColorHex }}
                      >
                        <ServiceIcon name={service.icon} size={36} />
                      </div>

                      {/* Content: Title & 2-sentence description */}
                      <div className="flex-1 text-left">
                        <h3 className="text-lg sm:text-xl font-bold font-['Poppins'] text-neutral-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-neutral-600 font-['Mulish'] leading-relaxed mb-3">
                          {service.description}
                        </p>

                        {/* Deliverables tags */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {service.deliverables.map((item) => (
                            <span
                              key={item}
                              className="inline-flex items-center gap-1.5 text-xs text-neutral-500 font-medium font-['Mulish'] bg-neutral-100 px-2.5 py-1 rounded-md"
                            >
                              <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                              <span>{item}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
