import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../config/portfolio';
import { useTheme } from '../context/ThemeContext';
import { ProjectModal } from './ProjectModal';
import { ExternalLink } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const { currentColorHex } = useTheme();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section
      id="portfolio"
      className="py-16 sm:py-20 lg:py-24 bg-white transition-colors duration-300 overflow-hidden w-full max-w-full scroll-mt-16"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
        {/* Section Heading */}
        <div className="text-left mb-12 sm:mb-16">
          <div className="mb-2">
            <span
              className="text-xs sm:text-sm font-semibold uppercase tracking-widest font-['Poppins']"
              style={{ color: currentColorHex }}
            >
              Featured Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-neutral-900 tracking-tight font-['Poppins'] leading-tight">
            Web applications I've built
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 font-['Mulish'] max-w-2xl">
            A selection of production-grade web applications, business dashboards, and educational platforms engineered with modern frontend and backend technologies.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 sm:gap-x-12 lg:gap-x-14 gap-y-14 sm:gap-y-16 lg:gap-y-20">
          {PORTFOLIO_DATA.projects.map((project) => (
            <button
              type="button"
              key={project.id}
              onClick={() => setActiveProject(project)}
              aria-label={`View details for ${project.title} - ${project.subtitle}`}
              className="project-card group relative cursor-pointer text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 rounded-2xl w-full"
              style={{ '--tw-ring-color': currentColorHex } as React.CSSProperties}
            >
              {/* Dual-color offset shadow layers */}
              <div className="layer-black absolute inset-0 bg-black -z-10 opacity-0 rounded-2xl" />
              <div
                className="layer-color absolute inset-0 -z-10 opacity-0 rounded-2xl"
                style={{ backgroundColor: currentColorHex }}
              ></div>

              {/* Card Container */}
              <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-xs group-hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                {/* Image Box */}
                <div
                  className="relative w-full overflow-hidden flex items-center justify-center border-b border-neutral-100"
                  style={{
                    backgroundColor:
                      project.id === 'school-management-system' ? '#132038' : '#ffffff',
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto block object-contain object-center transition-transform duration-500 group-hover:scale-102"
                  />

                  {/* Subtle dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 text-neutral-900 text-xs font-bold font-['Poppins'] shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span>Inspect Details</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Visible Content Below Image - Essential for SEO and Mobile Visitors */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className="text-xs font-bold uppercase tracking-wider font-['Poppins']"
                        style={{ color: currentColorHex }}
                      >
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-['Poppins'] tracking-tight mb-1 group-hover:text-black transition-colors">
                      {project.title}
                    </h3>

                    <h4 className="text-xs font-semibold text-neutral-500 font-['Poppins'] mb-3">
                      {project.subtitle}
                    </h4>

                    <p className="text-sm text-neutral-600 font-['Mulish'] leading-relaxed mb-5 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="pt-3 border-t border-neutral-100 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 text-xs font-medium font-['Mulish']"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
