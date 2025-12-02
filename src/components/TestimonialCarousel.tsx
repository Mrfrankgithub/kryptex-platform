"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Tricia Lam",
      role: "Crypto Investor",
      image: "/testw.jpg",
      quote: "Cryptoglobtrade has transformed my financial future. The returns are incredible and the platform is so professional and easy to use.",
    },
    {
      name: "Michael Davis",
      role: "Day Trader",
      image: "/army.jpg",
      quote: "I've tried many platforms, but Cryptoglobtrade's transparency and consistent profits keep me coming back.",
    },
    {
      name: "Ken Roberson",
      role: "Business Owner",
      image: "test.jpg",
      quote: "The passive income from Cryptoglobtrade allows me to focus on growing my business. Highly recommended!",
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
  const [direction, setDirection] = useState(1);

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
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#fbbf24] shadow-lg shadow-[#fbbf24]/20"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder.svg";
                  }}
                />
                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] flex items-center justify-center shadow-lg">
                  <Quote className="h-5 w-5 text-black" />
                </div>
              </div>
            </div>
            
            {/* Testimonial Content */}
            <div className="text-center md:text-left max-w-2xl">
              <div className="mb-6">
                <h4 className="text-2xl font-bold mb-1 text-white">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-400">{testimonials[currentIndex].role}</p>
              </div>
              
              <div className="relative">
                {/* Opening Quote */}
                <div className="absolute -top-6 -left-6 text-[#fbbf24] opacity-30">
                  <Quote className="w-12 h-12" />
                </div>
                
                {/* Testimonial Quote */}
                <p className="text-xl italic text-gray-300 relative z-10 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                {/* Closing Quote */}
                <div className="absolute -bottom-6 -right-6 text-[#fbbf24] opacity-30 rotate-180">
                  <Quote className="w-12 h-12" />
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex items-center justify-center md:justify-start mt-6 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#fbbf24] fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] w-8" 
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;