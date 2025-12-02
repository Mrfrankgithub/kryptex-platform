// components/Loader.jsx
"use client"

import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-kryptex-dark z-50 flex items-center justify-center">
      <div className="relative">
        {/* Animated "C" shape */}
        <svg 
          width="120" 
          height="120" 
          viewBox="0 0 120 120" 
          className="animate-spin"
          style={{ animationDuration: '2s' }}
        >
          {/* Outer glow circle */}
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="220 314"
            className="opacity-30"
          />
          
          {/* Main "C" shape */}
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray="220 314"
            transform="rotate(-90 60 60)"
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center "C" letter */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-bold bg-gradient-to-r from-kryptex-purple via-kryptex-purple-light to-kryptex-gold bg-clip-text text-transparent animate-pulse">
            C
          </span>
        </div>
      </div>
      
      {/* Loading text */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <p className="text-kryptex-purple-light text-sm font-medium tracking-wider animate-pulse">
          LOADING...
        </p>
      </div>
    </div>
  );
};

export default Loader;