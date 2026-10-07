import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const MagicCursor: React.FC = () => {
  const { currentColorHex } = useTheme();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [outerPos, setOuterPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable magic cursor on devices with fine pointer (mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth lerp for outer cursor ring
  useEffect(() => {
    let animId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const follow = () => {
      setOuterPos((prev) => ({
        x: lerp(prev.x, pos.x, 0.18),
        y: lerp(prev.y, pos.y, 0.18),
      }));
      animId = requestAnimationFrame(follow);
    };

    animId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animId);
  }, [pos]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Circle Ring */}
      <div
        className="fixed pointer-events-none z-50 rounded-full transition-transform duration-100 ease-out border"
        style={{
          left: `${outerPos.x}px`,
          top: `${outerPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.6 : 1})`,
          width: '32px',
          height: '32px',
          borderColor: currentColorHex,
          opacity: 0.7,
        }}
      />
      {/* Inner Dot */}
      <div
        className="fixed pointer-events-none z-50 rounded-full transition-transform duration-75 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 0 : 1})`,
          width: '6px',
          height: '6px',
          backgroundColor: currentColorHex,
        }}
      />
    </>
  );
};
