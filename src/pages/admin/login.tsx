"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Lock, Eye, EyeOff, Shield } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Admin login attempt:", formData)

    // Simple validation for demo
    if (formData.email === "admin@kryptex.com" && formData.password === "admin123") {
      localStorage.setItem("adminToken", "admin-authenticated")
      navigate("/admin/dashboard")
    } else {
      alert("Invalid credentials. Use admin@kryptex.com / admin123")
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[rgba(26,33,58,0.6)] backdrop-blur-md border border-[#00f0ff]/20 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#00f0ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-[#00f0ff]" />
            </div>
            <h1 className="text-3xl font-bold mb-2">
              Admin <span className="text-[#00f0ff]">Login</span>
            </h1>
            <p className="text-gray-400">Access the Kryptex admin panel</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter admin email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter admin password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#00f0ff] hover:bg-[#00d4e6] text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105"
            >
              Sign In to Admin Panel
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">Demo credentials: admin@kryptex.com / admin123</p>
          </div>

          <div className="mt-6 pt-6 border-t border-[#00f0ff]/20">
            <div className="text-center">
              <Link to="/" className="text-[#00f0ff] hover:underline text-sm">
                ← Back to Main Site
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
