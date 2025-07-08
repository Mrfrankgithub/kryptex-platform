"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
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
    <footer className="bg-[rgba(26,33,58,0.8)] backdrop-blur-md border-t border-[#00f0ff]/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold text-[#00f0ff] mb-4">Kryptex</h3>
            <p className="text-gray-300 mb-4">
              Leading cryptocurrency investment platform helping investors achieve financial freedom through strategic
              crypto trading.
            </p>
           
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-300 hover:text-[#00f0ff] transition-colors duration-200">
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
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-300 hover:text-[#00f0ff] transition-colors duration-200">
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
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-[#00f0ff]" />
                <span>support@kryptex.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-[#00f0ff]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-[#00f0ff]" />
                <span>New York, NY 10001</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#00f0ff]/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
            <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Kryptex. All rights reserved. | Licensed and regulated financial services provider.
          </p>
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-4 text-sm text-gray-400"
            >
              <span>🔒 SSL Secured</span>
              <span>🛡️ IARC Insured</span>
              <span>✅ Verified Platform</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
