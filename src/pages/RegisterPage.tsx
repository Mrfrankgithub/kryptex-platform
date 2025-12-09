"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { User, Mail, Lock, Eye, EyeOff, Phone, Shield, Globe } from "lucide-react" // Added Globe icon
import { Link } from "react-router-dom"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"

// A comprehensive list of countries for the select dropdown
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
  "Comoros", "Congo (Brazzaville)", "Congo (Kinshasa)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark",
  "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
  "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
  "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland",
  "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan",
  "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
  "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
  "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
  "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
  "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama",
  "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
  "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden",
  "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
  "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
  "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen",
  "Zambia", "Zimbabwe"
]

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "", // Added country to formData
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Registration attempt:", formData)
  }

  return (
    <div className="min-h-screen bg-kryptex-dark text-white flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass border border-kryptex-gold/20 rounded-2xl p-8 shadow-lg shadow-kryptex-gold/10"
        >
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-6">
            <div className="ml-3">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-kryptex-cyan to-kryptex-gold bg-clip-text text-transparent">
                <Link to="/" className="flex items-center">
                  <motion.div whileHover={{ scale: 1.04 }} className="flex items-center">
                    {/* Assuming /logo.png is in your public directory */}
                    <img src="/logo.png" alt="Future Gains Logo" className="h-24 w-auto mr-4" /> 
                  </motion.div>
                </Link>
              </h1>
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-white">
              Join <span className="text-kryptex-gold">Future Gains</span>
            </h1>
            <p className="text-kryptex-light">Create your investment account today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-kryptex-light">First Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-kryptex-cyan" />
                  <Input
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="pl-10 bg-kryptex-card/20 border-kryptex-card/50 focus:border-kryptex-gold text-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-kryptex-light">Last Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-kryptex-cyan" />
                  <Input
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="pl-10 bg-kryptex-card/20 border-kryptex-card/50 focus:border-kryptex-gold text-white"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-kryptex-light">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-kryptex-cyan" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10 bg-kryptex-card/20 border-kryptex-card/50 focus:border-kryptex-gold text-white"
                  required
                />
              </div>
            </div>

            {/* Country Select Field */}
            <div>
              <label className="block text-sm font-medium mb-2 text-kryptex-light" htmlFor="country">Country of Residence</label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-kryptex-cyan pointer-events-none" />
                <select
                  id="country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 bg-kryptex-card/20 border border-kryptex-card/50 rounded-lg text-white placeholder-kryptex-light focus:outline-none focus:ring-1 focus:ring-kryptex-gold focus:border-kryptex-gold appearance-none cursor-pointer transition-all duration-200"
                  required
                >
                  <option value="" disabled className="bg-kryptex-dark text-kryptex-light">Select your country</option>
                  {countries.map((country) => (
                    // Setting background color for options for better dark mode visibility
                    <option key={country} value={country} className="bg-kryptex-dark text-white">
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-kryptex-light">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-kryptex-cyan" />
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="pl-10 bg-kryptex-card/20 border-kryptex-card/50 focus:border-kryptex-gold text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-kryptex-light">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-kryptex-cyan" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10 pr-10 bg-kryptex-card/20 border-kryptex-card/50 focus:border-kryptex-gold text-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-kryptex-light hover:text-kryptex-gold"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-xs text-kryptex-light mt-1">Minimum 8 characters with uppercase, lowercase, and number</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-kryptex-light">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-kryptex-cyan" />
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="pl-10 pr-10 bg-kryptex-card/20 border-kryptex-card/50 focus:border-kryptex-gold text-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-kryptex-light hover:text-kryptex-gold"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                className="mr-3 mt-1 accent-kryptex-gold"
                required
              />
              <span className="text-sm text-kryptex-light">
                I agree to the{" "}
                <Link to="/terms" className="text-kryptex-gold hover:underline hover:text-kryptex-cyan">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-kryptex-gold hover:underline hover:text-kryptex-cyan">
                  Privacy Policy
                </Link>
              </span>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-kryptex-gold to-kryptex-cyan hover:from-kryptex-cyan hover:to-kryptex-gold text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-kryptex-gold/20"
            >
              Create Account
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-kryptex-light">
              Already have an account?{" "}
              <Link to="/login" className="text-kryptex-gold hover:underline font-semibold hover:text-kryptex-cyan">
                Sign in here
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-kryptex-gold/20">
            <div className="flex items-center justify-center text-sm text-kryptex-light">
              <Shield className="w-4 h-4 mr-2 text-kryptex-gold" />
              <p>Your data is protected by 256-bit SSL encryption</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}