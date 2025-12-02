"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Loader from "./loader";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/support", label: "Support" },
    { href: "/terms", label: "Terms" },
    { href: "/investment-plans", label: "Investment Plans" },
  ];

  const isActive = (href) => location.pathname === href;

  useEffect(() => {
    const scriptId = "google-translate";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      const container = document.getElementById("google_translate_element");
      if (container && !container.hasChildNodes()) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "el,en,fr,ar,pl,no,es,mo,ml,mr,pt,vi,ul,ur,cr,de,gu,hi,it,kn,ko,ja,ms,no,sv,sw,tr,zh,uk,ur,cy,sk,ta,te,cs,chr,hr,bg,nl,et,fil,fi,am",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
          <Loader />
        </div>
      )}

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(15,11,30,0.95)] backdrop-blur-md border-b border-[#fbbf24]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <motion.div whileHover={{ scale: 1.04 }} className="flex items-center">
                <img src="/logo.png" alt="Cryptoglobtrade Logo" className="h-24 w-auto mr-4" />
              </motion.div>
            </Link>

            {/* Unified Translate Element - Visible everywhere */}
            <div className="flex items-center gap-2 text-[#fbbf24] text-sm min-w-max">
              <Globe className="w-4 h-4" />
              {/* <span>Translate</span> */}
              <div
                id="google_translate_element"
                className="w-36 h-10 pt-5 overflow-hidden flex items-center"
              ></div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-[#fbbf24]"
                      : "text-white hover:text-[#fbbf24]"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#fbbf24] to-[#a78bfa]"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login">
                <button className="bg-transparent border-2 border-[#fbbf24] text-[#fbbf24] px-6 py-2 font-semibold rounded-lg relative overflow-hidden group transition-all duration-300 hover:text-black hover:shadow-lg hover:shadow-[#fbbf24]/20">
                  <span className="relative z-10">Login</span>
                  <div className="absolute inset-0 bg-[#fbbf24] transform -skew-x-12 w-0 group-hover:w-full transition-all duration-300"></div>
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-black px-6 py-2 font-semibold rounded-lg relative overflow-hidden group transition-all duration-300 hover:text-white hover:shadow-lg hover:shadow-[#fbbf24]/20">
                  <span className="relative z-10">Register</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 transform -skew-x-12 w-0 group-hover:w-full transition-all duration-300"></div>
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-[#fbbf24] transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[rgba(15,11,30,0.98)] backdrop-blur-md border-t border-[#fbbf24]/20"
            >
              <div className="px-4 py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-[#fbbf24] bg-gradient-to-r from-purple-900/30 to-purple-800/30 rounded-lg"
                        : "text-white hover:text-[#fbbf24] hover:bg-purple-900/10 rounded-lg"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="pt-2 space-y-3">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <button className="w-full bg-transparent border-2 border-[#fbbf24] text-[#fbbf24] px-6 py-2 font-semibold rounded-lg relative overflow-hidden group transition-all duration-300 hover:text-black">
                      <span className="relative z-10">Login</span>
                      <div className="absolute inset-0 bg-[#fbbf24] transform -skew-x-12 w-0 group-hover:w-full transition-all duration-300"></div>
                    </button>
                  </Link>
                  <Link to="/register" onClick={() => setIsOpen(false)}>
                    <button className="w-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-black px-6 py-2 font-semibold rounded-lg relative overflow-hidden group transition-all duration-300 hover:text-white">
                      <span className="relative z-10">Register</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 transform -skew-x-12 w-0 group-hover:w-full transition-all duration-300"></div>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}