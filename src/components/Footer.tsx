"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Shield, Lock, Verified, TrendingUp, Globe, Award } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/investment-plans", label: "Investment Plans" },
    { href: "/support", label: "Contact Us" },
  ]

  const legalLinks = [
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Risk Disclosure" },
    { href: "/privacy-policy", label: "Compliance" },
  ]

  return (
    <footer className="bg-gradient-to-b from-kryptex-card to-kryptex-dark border-t border-kryptex-cyan/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-kryptex-cyan to-kryptex-green flex items-center justify-center shadow-lg shadow-kryptex-cyan/20">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-kryptex-cyan to-kryptex-gold bg-clip-text text-transparent">
                  Future Gains
                </h3>
                <p className="text-xs text-kryptex-light">Intelligent Investment Platform</p>
              </div>
            </div>
            <p className="text-kryptex-light text-sm">
              Empowering your financial future with smart, strategic investments. We provide cutting-edge investment solutions for modern investors.
            </p>
            <div className="flex space-x-3 pt-2">
              <div className="glass-gold rounded-lg p-2 border border-kryptex-gold/20">
                <Shield className="w-4 h-4 text-kryptex-gold" />
              </div>
              <div className="glass rounded-lg p-2 border border-kryptex-cyan/20">
                <Lock className="w-4 h-4 text-kryptex-cyan" />
              </div>
              <div className="glass-gold rounded-lg p-2 border border-kryptex-gold/20">
                <Verified className="w-4 h-4 text-kryptex-gold" />
              </div>
              <div className="glass rounded-lg p-2 border border-kryptex-cyan/20">
                <Award className="w-4 h-4 text-kryptex-cyan" />
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-kryptex-cyan"></div>
              <span className="text-kryptex-cyan">Quick Links</span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={link.href} 
                    className="text-kryptex-light hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-kryptex-cyan to-kryptex-gold mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-kryptex-gold"></div>
              <span className="text-kryptex-gold">Legal</span>
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={link.href} 
                    className="text-kryptex-light hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-kryptex-gold to-kryptex-cyan mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-kryptex-cyan"></div>
              <span className="text-kryptex-cyan">Contact Us</span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-center group hover:translate-x-1 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center mr-3 group-hover:bg-kryptex-cyan/20 transition-all">
                  <Mail className="w-4 h-4 text-kryptex-cyan" />
                </div>
                <span className="text-kryptex-light group-hover:text-white transition-colors">support@futuregains.net</span>
              </div>
              <div className="flex items-center group hover:translate-x-1 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg glass-gold flex items-center justify-center mr-3 group-hover:bg-kryptex-gold/20 transition-all">
                  <Phone className="w-4 h-4 text-kryptex-gold" />
                </div>
                <span className="text-kryptex-light group-hover:text-white transition-colors">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center group hover:translate-x-1 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center mr-3 group-hover:bg-kryptex-cyan/20 transition-all">
                  <MapPin className="w-4 h-4 text-kryptex-cyan" />
                </div>
                <span className="text-kryptex-light group-hover:text-white transition-colors">1 Old Street Yard, London</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-kryptex-cyan/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left mb-4 md:mb-0"
            >
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4 text-kryptex-cyan" />
                <span className="text-sm text-kryptex-light">Global Platform • Multi-Language Support</span>
              </div>
              <p className="text-xs text-kryptex-light">
                &copy; {new Date().getFullYear()} Future Gains Investment Platform. All rights reserved.<br />
                Future Gains is a registered trademark. Financial services regulated in multiple jurisdictions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-4 text-sm"
            >
              <div className="flex items-center space-x-2 text-kryptex-light">
                <Shield className="w-4 h-4 text-kryptex-cyan" />
                <span className="text-xs">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-kryptex-light">
                <Lock className="w-4 h-4 text-kryptex-gold" />
                <span className="text-xs">256-bit Encryption</span>
              </div>
              <div className="flex items-center space-x-2 text-kryptex-light">
                <Verified className="w-4 h-4 text-kryptex-cyan" />
                <span className="text-xs">Regulated</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}