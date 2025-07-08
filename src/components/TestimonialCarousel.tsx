// components/TestimonialCarousel.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Tricia Lam",
      role: "Crypto Investor",
      image: "/testw.jpg",
      quote: "Kryptex mining farm has transformed my financial future. The returns are incredible and the platform is so easy to use.",
    },
    {
      name: "Michael Davis",
      role: "Day Trader",
      image: "/army.jpg",
      quote: "I've tried many platforms, but Kryptex's transparency and consistent profits keep me coming back.",
    },
    {
      name: "Ken Roberson",
      role: "Business Owner",
      image: "test.jpg",
      quote: "The passive income from Kryptex allows me to focus on growing my business. Highly recommended!",
    },
    {
      name: "Kenji Tanaka",
      role: "Blockchain Developer",
      image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=150&h=150&fit=crop&crop=face",
      quote: "The security measures on this platform give me confidence to invest larger amounts without worry.",
    },
    {
      name: "Fatima Al-Farsi",
      role: "Finance Director",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      quote: "My portfolio has grown by 78% in just 6 months. This is the best investment decision I've made.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative h-[500px] md:h-[400px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-10"
          >
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#00f0ff] shadow-lg"
                />
                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#00f0ff] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-left max-w-2xl">
              <div className="mb-6">
                <h4 className="text-2xl font-bold mb-1">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-400">{testimonials[currentIndex].role}</p>
              </div>
              
              <div className="relative">
                <svg className="absolute -top-8 -left-8 text-[#00f0ff] opacity-20 w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <p className="text-xl italic text-gray-300 relative z-10">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <svg className="absolute -bottom-8 -right-8 text-[#00f0ff] opacity-20 w-16 h-16 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#00f0ff] w-8" : "bg-gray-600"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;