"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Lock, Eye, EyeOff, Shield } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", formData)
    // Simulate successful login
    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen bg-kryptex-dark text-white flex items-center justify-center px-4 pt-20">
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
                    <img src="/logo.png" alt="Future Gains Logo" className="h-24 w-auto mr-4" />
                  </motion.div>
                </Link>
              </h1>
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-white">
              Welcome <span className="text-kryptex-gold">Back</span>
            </h1>
            <p className="text-kryptex-light">Sign in to your Future Gains account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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

            <div>
              <label className="block text-sm font-medium mb-2 text-kryptex-light">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-kryptex-cyan" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-kryptex-gold" />
                <span className="text-sm text-kryptex-light">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-kryptex-gold hover:underline hover:text-kryptex-cyan">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-kryptex-gold to-kryptex-cyan hover:from-kryptex-cyan hover:to-kryptex-gold text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-kryptex-gold/20"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-kryptex-light">
              Don't have an account?{" "}
              <Link to="/register" className="text-kryptex-gold hover:underline font-semibold hover:text-kryptex-cyan">
                Sign up here
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-kryptex-gold/20">
            <div className="flex items-center justify-center text-sm text-kryptex-light">
              <Shield className="w-4 h-4 mr-2 text-kryptex-gold" />
              <p>Secure login with 256-bit SSL encryption</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}