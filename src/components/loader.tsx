// components/Loader.jsx
"use client"

import React from "react";
import { Link } from "react-router-dom"

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#0a0e17] z-50 flex items-center justify-center">
      <div className="flex flex-col items-center animate-[bounce_1s_ease-in-out_infinite_0.1s]">
        <div className="w-1 h-6 bg-green-500"></div>
        <div className="w-3 h-12 bg-green-500 rounded-sm"></div>
        <div className="w-1 h-6 bg-green-500"></div>
      </div>

      <div className="flex flex-col items-center animate-[bounce_1s_ease-in-out_infinite_0.2s]">
        <div className="w-1 h-6 bg-red-500"></div>
        <div className="w-3 h-12 bg-red-500 rounded-sm"></div>
        <div className="w-1 h-6 bg-red-500"></div>
      </div>

      <div className="flex flex-col items-center animate-[bounce_1s_ease-in-out_infinite_0.1s]">
        <div className="w-1 h-6 bg-green-500"></div>
        <div className="w-3 h-12 bg-green-500 rounded-sm"></div>
        <div className="w-1 h-6 bg-green-500"></div>
      </div>
    </div>
  );
};

export default Loader;