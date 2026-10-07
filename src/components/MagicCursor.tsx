import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const MagicCursor: React.FC = () => {
  const { currentColorHex } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const outerRefPos = useRef({ x: -100, y: -100 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);

      if (innerRef.current) {
        innerRef.current.style.transform =
          `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const interactive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        !!target.closest('a') ||
        !!target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.classList.contains('cursor-pointer');

      setIsHovered(interactive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const follow = () => {
      const current = outerRefPos.current;
      const target = mouseRef.current;

      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;

      if (outerRef.current) {
        outerRef.current.style.transform =
          `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      }

      animationRef.current = requestAnimationFrame(follow);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    animationRef.current = requestAnimationFrame(follow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);

      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={outerRef}
        className="fixed pointer-events-none z-50 rounded-full transition-transform duration-100 ease-out border"
        style={{
          width: '32px',
          height: '32px',
          borderColor: currentColorHex,
          opacity: 0.7,
          left: 0,
          top: 0,
        }}
      />

      <div
        ref={innerRef}
        className="fixed pointer-events-none z-50 rounded-full transition-transform duration-75 ease-out"
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: currentColorHex,
          left: 0,
          top: 0,
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      />
    </>
  );
};
