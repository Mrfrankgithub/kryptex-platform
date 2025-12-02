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
          className="glass border border-[#fbbf24]/20 rounded-2xl p-8 shadow-lg shadow-purple-900/20"
        >
          {/* Logo/Brand */}
            <div className="flex items-center justify-center mb-6">
                      
                      <div className="ml-3">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#fbbf24] to-[#a78bfa] bg-clip-text text-transparent">
                          <Link to="/" className="flex items-center">
                                       <motion.div whileHover={{ scale: 1.04 }} className="flex items-center">
                                         <img src="/logo.png" alt="Cryptoglobtrade Logo" className="h-24 w-auto mr-4" />
                                       </motion.div>
                                     </Link>
                        </h1>
                      </div>
                    </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-white">
              Welcome <span className="text-[#fbbf24]">Back</span>
            </h1>
            <p className="text-gray-400">Sign in to your Cryptoglobtrade account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#a78bfa]" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10 bg-purple-900/20 border-purple-700/50 focus:border-[#fbbf24] text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#a78bfa]" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10 pr-10 bg-purple-900/20 border-purple-700/50 focus:border-[#fbbf24] text-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#fbbf24]"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-[#fbbf24]" />
                <span className="text-sm text-gray-400">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-[#fbbf24] hover:underline hover:text-[#f59e0b]">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#fbbf24]/20"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#fbbf24] hover:underline font-semibold hover:text-[#f59e0b]">
                Sign up here
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-[#fbbf24]/20">
            <div className="flex items-center justify-center text-sm text-gray-400">
              <Shield className="w-4 h-4 mr-2 text-[#fbbf24]" />
              <p>Secure login with 256-bit SSL encryption</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}