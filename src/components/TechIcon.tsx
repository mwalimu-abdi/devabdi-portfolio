import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = '', size = 20 }) => {
  const normalized = name.toLowerCase();

  if (normalized.includes('react')) {
    return (
      <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  if (normalized.includes('shopify') && !normalized.includes('api')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M18.8 6.2c-.1-.4-.4-.6-.7-.6-.1 0-1.8.1-1.8.1s-1.2-1.2-1.4-1.4c-.2-.2-.5-.3-.7-.3l-1.3.3c-.4-.7-1-1.3-1.8-1.6-.3-.1-.6-.2-.9-.2-2.3 0-3.4 2.8-3.7 4.5l-2.6.8c-.8.2-1.3.9-1.2 1.7l1.4 10.6c.1.9.9 1.6 1.8 1.6h11.2c.9 0 1.6-.7 1.8-1.6l1.3-11.8c0-.6-.3-1.3-.9-1.5z"
          fill="#95BF47"
        />
        <path
          d="M13.2 4.3c-.4.1-.7.2-1 .4-.2.2-.4.4-.5.7-.3 1.1-.3 2.6-.1 3.8l3-.9c-.1-1.4-.6-3.2-1.4-4z"
          fill="#5E8E3E"
        />
        <path
          d="M11.7 8.3L8.9 9.2c.3-1.5 1.1-3.6 2.5-4.1.2.3.4.7.5 1.1-.2.6-.3 2.6-.2 2.1z"
          fill="#ffffff"
          opacity="0.6"
        />
      </svg>
    );
  }

  if (normalized.includes('node')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#339933">
        <path d="M12 2L3 7.2v10.4l9 5.2 9-5.2V7.2L12 2zm-1 15.8l-5-2.9V9.7l5 2.9v5.2zm2 0v-5.2l5-2.9v5.2l-5 2.9zm5.5-9.3L13.8 6 12 5 10.2 6 5.5 8.5 12 12.2l6.5-3.7z" />
      </svg>
    );
  }

  if (normalized.includes('javascript') || normalized === 'js') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#F7DF1E">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path
          d="M7 17.5c.6.9 1.6 1.5 2.8 1.5 1.6 0 2.6-.8 2.6-2.5v-7.3H10v7.2c0 .7-.3 1-1 1-.5 0-.8-.3-1.1-.7L7 17.5zm7.3-.2c.8 1 2 1.7 3.6 1.7 2.1 0 3.3-1.1 3.3-2.7 0-1.7-1.1-2.3-2.6-2.9l-.6-.3c-.9-.4-1.3-.7-1.3-1.3 0-.6.5-1.1 1.4-1.1.9 0 1.5.4 1.9 1.1l1.8-1.2C19.7 9.4 18.7 8.8 17.4 8.8c-2 0-3.3 1.2-3.3 2.7 0 1.6 1 2.2 2.4 2.8l.6.3c1 .4 1.5.8 1.5 1.5 0 .8-.7 1.2-1.7 1.2-1.1 0-1.8-.5-2.3-1.4l-1.8 1.4z"
          fill="#000000"
        />
      </svg>
    );
  }

  if (normalized.includes('typescript') || normalized === 'ts') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <path
          d="M4.5 10.5h6v2h-2v6.5h-2V12.5h-2v-2zm8.5 5.5c.5.8 1.4 1.3 2.6 1.3 1.4 0 2.2-.7 2.2-1.8 0-1.1-.8-1.6-1.9-2.1l-.5-.2c-.9-.4-1.3-.7-1.3-1.2 0-.6.5-1 1.3-1 .8 0 1.4.3 1.8.9l1.4-1c-.8-.9-1.8-1.4-3.2-1.4-1.9 0-3.1 1.1-3.1 2.6 0 1.4.9 2 2.2 2.5l.5.2c.9.4 1.3.7 1.3 1.3 0 .7-.6 1.1-1.4 1.1-.9 0-1.5-.4-1.9-1l-1.5 1.1z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  if (normalized.includes('php')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#777BB4">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-5 13H5.5l1.2-6h2.2c1.2 0 2 .6 1.7 2.1-.3 1.4-1.3 3.9-3.6 3.9zm5.5 0h-1.5l1.2-6h1.5l-1.2 6zm5 0h-1.5l1.2-6h2.2c1.2 0 2 .6 1.7 2.1-.3 1.4-1.3 3.9-3.6 3.9z" />
      </svg>
    );
  }

  if (normalized.includes('mysql')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#00758F">
        <path d="M12 3C7 3 3 5 3 7.5S7 12 12 12s9-2 9-4.5S17 3 12 3zm0 6c-3.87 0-7-1.34-7-3s3.13-3 7-3 7 1.34 7 3-3.13 3-7 3zm9 2.5c0 2.5-4 4.5-9 4.5s-9-2-9-4.5V14c0 2.5 4 4.5 9 4.5s9-2 9-4.5v-2.5zm0 5c0 2.5-4 4.5-9 4.5s-9-2-9-4.5V19c0 2.5 4 4.5 9 4.5s9-2 9-4.5v-2.5z" />
      </svg>
    );
  }

  if (normalized.includes('html')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#E34F26">
        <path d="M3 2l1.6 18.5 7.4 2.1 7.4-2.1L21 2H3zm14.8 5.4l-.2 2.3H8.8l.2 2.3h7.2l-.6 6.3-4.6 1.3-4.6-1.3-.3-3.6h2.3l.2 1.9 2.4.6 2.4-.6.3-3.1H6.4L5.8 5.1h12.2l-.2 2.3z" />
      </svg>
    );
  }

  if (normalized.includes('css') && !normalized.includes('tailwind')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#1572B6">
        <path d="M3 2l1.6 18.5 7.4 2.1 7.4-2.1L21 2H3zm14.8 5.4l-.2 2.3H8.8l.2 2.3h7.2l-.6 6.3-4.6 1.3-4.6-1.3-.3-3.6h2.3l.2 1.9 2.4.6 2.4-.6.3-3.1H6.4L5.8 5.1h12.2l-.2 2.3z" />
      </svg>
    );
  }

  if (normalized.includes('tailwind')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#06B6D4">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    );
  }

  if (normalized.includes('git')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#F05032">
        <path d="M21.6 10.9L13.1 2.4a2.4 2.4 0 0 0-3.4 0L7.8 4.3l3.6 3.6a2.4 2.4 0 0 1 3 3l3.4 3.4a2.4 2.4 0 1 1-1.4 1.4l-3.2-3.2v4.8a2.4 2.4 0 1 1-2 0v-5a2.4 2.4 0 0 1-1.3-3.1L6.3 7.6 2.4 11.5a2.4 2.4 0 0 0 0 3.4l8.5 8.5a2.4 2.4 0 0 0 3.4 0l7.3-7.3a2.4 2.4 0 0 0 0-3.4z" />
      </svg>
    );
  }

  // Generic API / GraphQL / Liquid icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
};
