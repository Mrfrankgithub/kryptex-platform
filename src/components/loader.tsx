// components/Loader.jsx
"use client"

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentWord, setCurrentWord] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  const companyName = "Future Gains";
  const tagline = "Intelligent Investment Platform";
  
  const words = companyName.split(" ");

  useEffect(() => {
    let currentIndex = 0;
    let timeout: NodeJS.Timeout;
    
    const typeText = () => {
      if (currentWord >= words.length) {
        setIsComplete(true);
        return;
      }
      
      const word = words[currentWord];
      const wordWithSpace = currentWord < words.length - 1 ? word + " " : word;
      
      if (currentIndex <= wordWithSpace.length) {
        setDisplayText(prev => wordWithSpace.substring(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(typeText, 100); // Typing speed
      } else {
        setCurrentWord(prev => prev + 1);
        currentIndex = 0;
        setTimeout(typeText, 300); // Pause between words
      }
    };
    
    timeout = setTimeout(typeText, 500); // Initial delay
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentWord]);

  return (
    <div className="fixed inset-0 bg-kryptex-dark z-50 flex items-center justify-center">
      <div className="relative w-full max-w-4xl px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-64 h-64 rounded-full bg-gradient-to-r from-kryptex-cyan/10 to-kryptex-gold/10 blur-3xl"
          />
        </div>
        
        {/* Main content */}
        <div className="relative z-10">
          {/* Company name typing animation */}
          <div className="text-center mb-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-kryptex-cyan via-kryptex-gold to-kryptex-cyan bg-clip-text text-transparent animate-gradient-x">
                {displayText}
              </span>
              {!isComplete && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="inline-block w-[2px] h-16 bg-kryptex-cyan ml-1 align-middle"
                />
              )}
            </h1>
          </div>
          
          {/* Tagline */}
          <AnimatePresence>
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl text-kryptex-light tracking-wider font-light">
                  {tagline}
                </p>
                
                {/* Progress bar */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="mt-12 w-full max-w-md mx-auto h-1 bg-gradient-to-r from-kryptex-cyan via-kryptex-gold to-kryptex-cyan origin-left"
                />
                
                {/* Loading dots */}
                <div className="mt-8 flex justify-center space-x-2">
                  {[0, 1, 2].map((dot) => (
                    <motion.div
                      key={dot}
                      initial={{ opacity: 0.3, scale: 0.8 }}
                      animate={{ 
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1, 0.8]
                      }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 1,
                        delay: dot * 0.2
                      }}
                      className="w-2 h-2 rounded-full bg-kryptex-cyan"
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -top-20 -left-20 w-40 h-40 rounded-full border border-kryptex-cyan/20"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full border border-kryptex-gold/20"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;