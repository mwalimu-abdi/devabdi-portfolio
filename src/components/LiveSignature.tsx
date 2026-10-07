import React, { useState, useEffect, useRef } from 'react';
import { smoothScrollTo } from '../utils/scroll';

interface LiveSignatureProps {
  className?: string;
}

export const LiveSignature: React.FC<LiveSignatureProps> = ({ className = '' }) => {
  const [animKey, setAnimKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Trigger signature writing animation when entering viewport
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimKey((prev) => prev + 1);
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setAnimKey((prev) => prev + 1);
    smoothScrollTo('contact');
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      title="Devabdiiii - click to re-sign"
      aria-label="Devabdiiii live signature"
      className={`inline-block bg-transparent p-0 m-0 cursor-pointer select-none transition-transform duration-300 hover:scale-[1.02] active:scale-[0.99] ${className}`}
      style={{ background: 'transparent' }}
    >
      {/* Pure Live Handwriting Signature: Devabdiiii in solid black with narrow fine-nib ink */}
      <svg
        key={animKey}
        viewBox="0 0 360 105"
        className="w-[260px] sm:w-[320px] md:w-[350px] h-auto overflow-visible"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: '#000000', background: 'transparent' }}
      >
        {/* 'D' - vertical calligraphic stem */}
        <path
          pathLength="100"
          d="M 28 22 C 28 42 26 66 24 82"
          strokeWidth="2.1"
          className="signature-stroke"
          style={{ animationDelay: '0.08s', animationDuration: '0.4s' }}
        />

        {/* 'D' - sweeping calligraphic loop & belly */}
        <path
          pathLength="100"
          d="M 24 82 C 16 86 12 78 18 68 C 24 58 32 30 38 22 C 48 12 68 14 74 34 C 80 54 72 82 46 84 C 34 84 22 82 32 82"
          strokeWidth="1.9"
          className="signature-stroke"
          style={{ animationDelay: '0.42s', animationDuration: '0.55s' }}
        />

        {/* 'e' - flowing cursive loop */}
        <path
          pathLength="100"
          d="M 72 66 C 70 52 86 50 88 62 C 88 74 74 82 94 80"
          strokeWidth="1.8"
          className="signature-stroke"
          style={{ animationDelay: '0.92s', animationDuration: '0.35s' }}
        />

        {/* 'v' - elegant valley and exit connector */}
        <path
          pathLength="100"
          d="M 94 80 C 100 68 106 56 112 54 C 118 52 120 68 124 80 C 128 82 134 60 140 56"
          strokeWidth="1.8"
          className="signature-stroke"
          style={{ animationDelay: '1.22s', animationDuration: '0.4s' }}
        />

        {/* 'a' - round bowl and descender */}
        <path
          pathLength="100"
          d="M 156 56 C 144 56 138 66 138 74 C 138 82 148 82 156 80 M 156 56 L 156 80 C 156 82 162 82 168 76"
          strokeWidth="1.8"
          className="signature-stroke"
          style={{ animationDelay: '1.58s', animationDuration: '0.45s' }}
        />

        {/* 'b' - tall loop and rounded base */}
        <path
          pathLength="100"
          d="M 168 76 C 176 56 186 28 190 20 C 194 14 196 22 190 46 L 182 80 C 188 84 198 82 202 66 C 204 58 198 56 204 56"
          strokeWidth="1.9"
          className="signature-stroke"
          style={{ animationDelay: '1.98s', animationDuration: '0.5s' }}
        />

        {/* 'd' - bowl & tall stem */}
        <path
          pathLength="100"
          d="M 220 56 C 210 56 204 66 204 74 C 204 82 214 82 222 80 M 224 20 L 224 80 C 224 82 230 82 236 76"
          strokeWidth="1.9"
          className="signature-stroke"
          style={{ animationDelay: '2.42s', animationDuration: '0.48s' }}
        />

        {/* First 'i' stem */}
        <path
          pathLength="100"
          d="M 236 76 C 240 66 244 56 248 56 L 248 80 C 248 82 254 82 258 76"
          strokeWidth="1.8"
          className="signature-stroke"
          style={{ animationDelay: '2.84s', animationDuration: '0.3s' }}
        />

        {/* Second 'i' stem */}
        <path
          pathLength="100"
          d="M 258 76 C 262 66 266 56 270 56 L 270 80 C 270 82 276 82 280 76"
          strokeWidth="1.8"
          className="signature-stroke"
          style={{ animationDelay: '3.1s', animationDuration: '0.3s' }}
        />

        {/* Third 'i' stem */}
        <path
          pathLength="100"
          d="M 280 76 C 284 66 288 56 292 56 L 292 80 C 292 82 298 82 302 76"
          strokeWidth="1.8"
          className="signature-stroke"
          style={{ animationDelay: '3.35s', animationDuration: '0.3s' }}
        />

        {/* Fourth 'i' stem & sweeping exit */}
        <path
          pathLength="100"
          d="M 302 76 C 306 66 310 56 314 56 L 314 80 C 316 82 322 82 332 74"
          strokeWidth="1.8"
          className="signature-stroke"
          style={{ animationDelay: '3.6s', animationDuration: '0.35s' }}
        />

        {/* Dots (tittles) for the four 'i's */}
        <path
          pathLength="100"
          d="M 248 38 C 249 37 251 38 250 40"
          strokeWidth="2.5"
          className="signature-stroke"
          style={{ animationDelay: '3.9s', animationDuration: '0.15s' }}
        />
        <path
          pathLength="100"
          d="M 270 38 C 271 37 273 38 272 40"
          strokeWidth="2.5"
          className="signature-stroke"
          style={{ animationDelay: '4.02s', animationDuration: '0.15s' }}
        />
        <path
          pathLength="100"
          d="M 292 38 C 293 37 295 38 294 40"
          strokeWidth="2.5"
          className="signature-stroke"
          style={{ animationDelay: '4.14s', animationDuration: '0.15s' }}
        />
        <path
          pathLength="100"
          d="M 314 38 C 315 37 317 38 316 40"
          strokeWidth="2.5"
          className="signature-stroke"
          style={{ animationDelay: '4.26s', animationDuration: '0.15s' }}
        />

        {/* Dynamic sweeping underline flourish */}
        <path
          pathLength="100"
          d="M 22 92 C 100 100 200 98 335 84"
          strokeWidth="1.7"
          className="signature-stroke"
          style={{ animationDelay: '4.4s', animationDuration: '0.55s' }}
        />
      </svg>
    </div>
  );
};
