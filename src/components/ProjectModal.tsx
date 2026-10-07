import React, { useEffect, useRef } from 'react';
import { Project } from '../config/portfolio';
import { useTheme } from '../context/ThemeContext';
import { TechIcon } from './TechIcon';
import { X, ExternalLink, Code2, Check, Sparkles, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { currentColorHex } = useTheme();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Accessible focus trap, Escape key handling, and return focus on close
  useEffect(() => {
    if (!project) return;

    // Remember the element that triggered the modal
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Move focus to modal close button
    const focusTimer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      // Return focus to the trigger element
      previousFocusRef.current?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasLiveDemo = Boolean(project.liveDemoUrl && !project.liveDemoUrl.startsWith('#'));
  const hasSourceCode = Boolean(project.sourceCodeUrl && !project.sourceCodeUrl.startsWith('#'));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-4 sm:p-6 lg:p-8 pt-16 sm:pt-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-150 dark:border-neutral-800 overflow-hidden my-6 sm:my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 z-30 p-2.5 rounded-full bg-black/70 hover:bg-black text-white transition-all shadow-xl backdrop-blur-sm cursor-pointer hover:scale-105 active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image banner */}
        <div className="relative aspect-video w-full max-h-[380px] bg-neutral-950 overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt}
            width={project.imageWidth}
            height={project.imageHeight}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Banner Details */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 font-['Poppins']"
              style={{ backgroundColor: currentColorHex }}
            >
              {project.category}
            </span>
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-black font-['Poppins'] tracking-tight"
            >
              {project.title}
            </h2>
            <p className="text-sm text-neutral-300 font-medium mt-1 font-['Poppins']">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 space-y-7 max-h-[60vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2 font-['Poppins']">
              Project Overview
            </h3>
            <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-['Mulish']">
              {project.detailedDescription}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3 flex items-center gap-1.5 font-['Poppins']">
              <Sparkles className="w-3.5 h-3.5" style={{ color: currentColorHex }} />
              <span>Key Architecture & Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-300 font-['Mulish']">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center text-white shrink-0 mt-0.5"
                    style={{ backgroundColor: currentColorHex }}
                  >
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3 flex items-center gap-1.5 font-['Poppins']">
              <Layers className="w-3.5 h-3.5" style={{ color: currentColorHex }} />
              <span>Technologies Utilized</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/80 text-xs font-semibold text-neutral-800 dark:text-neutral-200 font-['Poppins']"
                >
                  <TechIcon name={tech} size={16} />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Links - only rendered if real URLs are provided */}
          {(hasLiveDemo || hasSourceCode) && (
            <div className="pt-4 border-t border-neutral-150 dark:border-neutral-800 flex flex-wrap items-center justify-end gap-3">
              {hasSourceCode && (
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-xs font-bold text-neutral-800 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors font-['Poppins']"
                >
                  <Code2 className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}

              {hasLiveDemo && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white shadow-md hover:shadow-lg transition-all font-['Poppins']"
                  style={{ backgroundColor: currentColorHex }}
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
