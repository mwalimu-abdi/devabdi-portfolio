import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import { useTheme } from '../context/ThemeContext';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { currentColorHex } = useTheme();
  // Filter for real, verified testimonials only
  const testimonials = PORTFOLIO_DATA.testimonials.filter((t) => t.verified);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  // Automatically advance to the next review smoothly every 3 seconds
  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  // If no testimonials are verified, completely hide the section from DOM and crawlers
  if (testimonials.length === 0) {
    return null;
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Touch gesture support for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (diff > 50) {
      goToNext();
    } else if (diff < -50) {
      goToPrev();
    }
    touchStartXRef.current = null;
  };

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-24 bg-[#f9f9f9] transition-colors duration-300 relative overflow-hidden w-full max-w-full scroll-mt-16"
      style={{ backgroundColor: '#f9f9f9' }}
    >
      {/* Background Big Marquee / Loop Text matching reference style */}
      <div className="absolute top-6 left-0 right-0 w-full max-w-full overflow-hidden pointer-events-none opacity-5 select-none">
        <div className="animate-marquee whitespace-nowrap flex text-[70px] sm:text-[120px] font-black uppercase font-['Poppins'] tracking-wider text-neutral-900">
          <span className="mr-12">TESTIMONIALS · CLIENT REVIEWS · TESTIMONIALS · CLIENT REVIEWS ·</span>
          <span className="mr-12">TESTIMONIALS · CLIENT REVIEWS · TESTIMONIALS · CLIENT REVIEWS ·</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section title */}
        <div className="text-center mb-8 sm:mb-12">
          <span
            className="text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2 font-['Poppins']"
            style={{ color: currentColorHex }}
          >
            Client Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-['Poppins']">
            What Clients Say About Working With Me
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-['Mulish']">
            Reviews smoothly advance every 3 seconds &middot; Hover to pause
          </p>
        </div>

        {/* Carousel Container with smooth sliding animation */}
        <div
          className="relative overflow-hidden rounded-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Track sliding leftward by 100% for each index */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={item.id}
                className="w-full shrink-0 px-1 sm:px-2"
              >
                <div className="relative bg-white rounded-3xl p-7 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-neutral-200/80 flex flex-col justify-between min-h-[300px] sm:min-h-[320px]">
                  {/* Watermark Quote Icon */}
                  <Quote
                    className="absolute top-6 right-6 sm:top-8 sm:right-8 w-14 h-14 opacity-10 pointer-events-none"
                    style={{ color: currentColorHex }}
                  />

                  <div className="flex flex-col text-left">
                    {/* Top Row: Stars and Counter */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-1.5">
                        {[...Array(item.rating)].map((_, starIdx) => (
                          <Star
                            key={starIdx}
                            className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-neutral-400 font-['Poppins']">
                        {idx + 1} / {testimonials.length}
                      </span>
                    </div>

                    {/* Quotation text */}
                    <p className="text-base sm:text-lg lg:text-xl text-neutral-800 leading-relaxed font-['Mulish'] mb-8 italic">
                      "{item.content}"
                    </p>
                  </div>

                  {/* Reviewer Details */}
                  <div className="pt-5 border-t border-neutral-100 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      {/* Avatar initial badge */}
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-base shrink-0 shadow-sm"
                        style={{ backgroundColor: currentColorHex }}
                      >
                        {item.author.charAt(0)}
                      </div>

                      <div className="text-left">
                        <h4 className="text-base sm:text-lg font-bold text-neutral-900 font-['Poppins']">
                          {item.author}
                        </h4>
                        <p className="text-xs sm:text-sm font-semibold text-neutral-500">
                          {item.role} &middot;{' '}
                          <span style={{ color: currentColorHex }}>{item.company}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Controls & Indicators */}
        <div className="mt-8 flex items-center justify-between px-2">
          {/* Indicator dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to review ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                  currentIndex === idx ? 'w-8 shadow-xs' : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
                }`}
                style={currentIndex === idx ? { backgroundColor: currentColorHex } : undefined}
              />
            ))}
          </div>

          {/* Left & Right navigation arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrev}
              aria-label="Previous review"
              className="p-2.5 rounded-full border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50 active:scale-95 transition-all shadow-xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goToNext}
              aria-label="Next review"
              className="p-2.5 rounded-full border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50 active:scale-95 transition-all shadow-xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
