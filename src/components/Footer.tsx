"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Shield, Lock, Verified } from "lucide-react"
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
    { href: "/terms", label: "Scam Warning" },
    { href: "/privacy-policy", label: "Financial Security" },
  ]

  return (
    <footer className="bg-gradient-to-b from-[rgba(30,25,50,0.9)] to-[rgba(15,11,30,0.95)] backdrop-blur-md border-t border-[#fbbf24]/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#fbbf24] to-[#a78bfa] flex items-center justify-center">
                <span className="text-black font-bold text-xl">C</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#fbbf24] to-[#a78bfa] bg-clip-text text-transparent">
                Cryptoglobtrade
              </h3>
            </div>
            <p className="text-gray-300">
              Leading cryptocurrency investment platform helping investors achieve financial freedom through strategic
              crypto trading.
            </p>
            <div className="flex space-x-4 pt-2">
              <div className="h-10 w-10 rounded-full bg-purple-900/50 border border-[#fbbf24]/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#fbbf24]" />
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-900/50 border border-[#fbbf24]/20 flex items-center justify-center">
                <Lock className="w-5 h-5 text-[#fbbf24]" />
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-900/50 border border-[#fbbf24]/20 flex items-center justify-center">
                <Verified className="w-5 h-5 text-[#fbbf24]" />
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#fbbf24]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-[#fbbf24] transition-colors duration-200 flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#fbbf24]">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-[#fbbf24] transition-colors duration-200 flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#fbbf24]">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300 group hover:text-[#fbbf24] transition-colors duration-200">
                <div className="w-8 h-8 rounded-full bg-purple-900/50 border border-[#fbbf24]/20 flex items-center justify-center mr-3 group-hover:bg-[#fbbf24] group-hover:border-[#fbbf24] transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span>support@cryptoglobtrade.com</span>
              </div>
              <div className="flex items-center text-gray-300 group hover:text-[#fbbf24] transition-colors duration-200">
                <div className="w-8 h-8 rounded-full bg-purple-900/50 border border-[#fbbf24]/20 flex items-center justify-center mr-3 group-hover:bg-[#fbbf24] group-hover:border-[#fbbf24] transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300 group hover:text-[#fbbf24] transition-colors duration-200">
                <div className="w-8 h-8 rounded-full bg-purple-900/50 border border-[#fbbf24]/20 flex items-center justify-center mr-3 group-hover:bg-[#fbbf24] group-hover:border-[#fbbf24] transition-all">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>1 Old Street Yard, London UK EC1Y 8AF</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#fbbf24]/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left"
            >
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Cryptoglobtrade. All rights reserved. | Licensed and regulated financial services provider.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-6 text-sm"
            >
              <div className="flex items-center space-x-2 text-gray-300">
                <Shield className="w-4 h-4 text-[#fbbf24]" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Lock className="w-4 h-4 text-[#fbbf24]" />
                <span>IARC Insured</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Verified className="w-4 h-4 text-[#fbbf24]" />
                <span>Verified Platform</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}