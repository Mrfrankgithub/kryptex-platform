"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, LogIn, UserPlus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Loader from "./loader";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/investment-plans", label: "Inv_Plans" },
    { href: "/support", label: "Support" },
    { href: "/terms", label: "Legal" },
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
      const containerMobile = document.getElementById("google_translate_element_mobile");
      
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

      if (containerMobile && !containerMobile.hasChildNodes()) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "el,en,fr,ar,pl,no,es,mo,ml,mr,pt,vi,ul,ur,cr,de,gu,hi,it,kn,ko,ja,ms,no,sv,sw,tr,zh,uk,ur,cy,sk,ta,te,cs,chr,hr,bg,nl,et,fil,fi,am",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element_mobile"
        );
      }
    };

    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-kryptex-dark flex items-center justify-center">
          <Loader />
        </div>
      )}

      <nav className="fixed top-0 left-0 right-0 z-50 glass-navbar border-b border-kryptex-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo with image */}
            <Link to="/" className="flex items-center">
              <motion.div 
                whileHover={{ scale: 1.04 }} 
                className="flex items-center space-x-3"
              >
                <img 
                  src="/logo.png" 
                  alt="Future Gains Logo" 
                  className="h-28 w-auto"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/48x48?text=FG";
                    e.currentTarget.className = "h-12 w-12 rounded-xl bg-gradient-to-br from-kryptex-cyan to-kryptex-green flex items-center justify-center";
                  }}
                />
               
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    isActive(link.href)
                      ? "text-white bg-gradient-to-r from-kryptex-cyan/20 to-kryptex-green/20 border border-kryptex-cyan/30"
                      : "text-kryptex-light hover:text-white hover:bg-kryptex-card/50"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-kryptex-cyan to-kryptex-gold rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Section - Translate & Buttons */}
            <div className="flex items-center space-x-4">
              {/* Desktop Translate */}
              <div className="hidden md:flex items-center gap-2">
                <div className="relative group">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-kryptex-card/50 border border-kryptex-cyan/20 hover:border-kryptex-cyan/40 transition-all duration-300">
                    <Globe className="w-4 h-4 text-kryptex-cyan" />
                    <div
                      id="google_translate_element"
                      className="w-40 h-8 overflow-hidden flex items-center"
                    ></div>
                  </div>
                  <div className="absolute top-full mt-2 left-0 w-48 p-2 bg-kryptex-card backdrop-blur-sm border border-kryptex-cyan/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <p className="text-xs text-kryptex-light">Translate this page to your preferred language</p>
                  </div>
                </div>
              </div>

              {/* Desktop Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                <Link to="/login">
                  <button className="flex items-center gap-2 bg-transparent border border-kryptex-cyan text-kryptex-cyan px-5 py-2.5 font-semibold rounded-lg relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-kryptex-cyan/20 hover-glow">
                    <LogIn className="w-4 h-4" />
                    <span className="relative z-10">Login</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-kryptex-cyan/10 to-transparent transform -skew-x-12 w-0 group-hover:w-full transition-all duration-300"></div>
                  </button>
                </Link>
                <Link to="/register">
                  <button className="flex items-center gap-2 bg-gradient-to-r from-kryptex-cyan to-kryptex-green text-white px-6 py-2.5 font-semibold rounded-lg relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-kryptex-cyan/30 animate-glow">
                    <UserPlus className="w-4 h-4" />
                    <span className="relative z-10">Register</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-kryptex-gold/20 to-kryptex-cyan/20 transform -skew-x-12 w-0 group-hover:w-full transition-all duration-300"></div>
                  </button>
                </Link>
              </div>

              {/* Mobile Translate & Menu Button */}
              <div className="md:hidden flex items-center space-x-3">
                <div className="relative">
                  <div className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-kryptex-card/50 border border-kryptex-cyan/20">
                    <Globe className="w-4 h-4 text-kryptex-cyan" />
                    <div
                      id="google_translate_element_mobile"
                      className="w-28 h-6 overflow-hidden flex items-center"
                    ></div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white hover:text-kryptex-cyan transition-colors duration-200 p-2 rounded-lg hover:bg-kryptex-card/50"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
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
              className="md:hidden glass border-t border-kryptex-cyan/20"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg ${
                      isActive(link.href)
                        ? "text-white bg-gradient-to-r from-kryptex-cyan/20 to-kryptex-green/20 border border-kryptex-cyan/30"
                        : "text-kryptex-light hover:text-white hover:bg-kryptex-card/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="pt-4 border-t border-kryptex-cyan/20 space-y-3">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <button className="w-full flex items-center justify-center gap-2 bg-transparent border border-kryptex-cyan text-kryptex-cyan px-6 py-3 font-semibold rounded-lg relative overflow-hidden group transition-all duration-300">
                      <LogIn className="w-4 h-4" />
                      <span className="relative z-10">Login</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-kryptex-cyan/10 to-transparent transform -skew-x-12 w-0 group-hover:w-full transition-all duration-300"></div>
                    </button>
                  </Link>
                  <Link to="/register" onClick={() => setIsOpen(false)}>
                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-kryptex-cyan to-kryptex-green text-white px-6 py-3 font-semibold rounded-lg relative overflow-hidden group transition-all duration-300">
                      <UserPlus className="w-4 h-4" />
                      <span className="relative z-10">Register</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-kryptex-gold/20 to-kryptex-cyan/20 transform -skew-x-12 w-0 group-hover:w-full transition-all duration-300"></div>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}