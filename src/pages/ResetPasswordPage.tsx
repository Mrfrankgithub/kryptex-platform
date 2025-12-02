"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Lock, Eye, EyeOff, CheckCircle, Shield, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })

  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  })

  const checkPasswordStrength = (password: string) => {
    setPasswordStrength({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    })
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value
    setFormData({ ...formData, password: newPassword })
    checkPasswordStrength(newPassword)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Password reset:", formData)

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!")
      return
    }

    // Simulate successful password reset
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-kryptex-dark text-white flex items-center justify-center px-4 pt-20">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass border border-[#a78bfa]/20 rounded-2xl p-8 text-center shadow-lg shadow-purple-900/20"
          >
           

            <div className="w-20 h-20 bg-gradient-to-r from-[#a78bfa]/20 to-[#8b5cf6]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-[#a78bfa]" />
            </div>

            <h1 className="text-3xl font-bold mb-4 text-white">
              Password <span className="text-[#a78bfa]">Reset</span> Successful!
            </h1>

            <p className="text-gray-400 mb-8">
              Your password has been successfully reset. You can now sign in with your new password.
            </p>

            <Link to="/login">
              <Button className="w-full bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] hover:from-[#8b5cf6] hover:to-[#7c3aed] text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#a78bfa]/20">
                Continue to Login
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
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
        

          {/* Back to Login */}
          <Link
            to="/login"
            className="inline-flex items-center text-[#fbbf24] hover:text-[#f59e0b] transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </Link>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-[#fbbf24]/20 to-[#f59e0b]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-[#fbbf24]" />
            </div>
            <h1 className="text-3xl font-bold mb-2 text-white">
              Reset Your <span className="text-[#fbbf24]">Password</span>
            </h1>
            <p className="text-gray-400">Create a strong, secure password for your Cryptoglobtrade account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">New Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#a78bfa]" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a new password"
                  value={formData.password}
                  onChange={handlePasswordChange}
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

              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-4 p-4 bg-purple-900/20 border border-purple-700/30 rounded-lg">
                  <div className="text-sm font-medium text-gray-300 mb-2">Password Requirements:</div>
                  <div className="space-y-2">
                    {[
                      { key: "length", text: "At least 8 characters" },
                      { key: "uppercase", text: "One uppercase letter" },
                      { key: "lowercase", text: "One lowercase letter" },
                      { key: "number", text: "One number" },
                      { key: "special", text: "One special character" },
                    ].map((req) => (
                      <div key={req.key} className="flex items-center text-sm">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                            passwordStrength[req.key as keyof typeof passwordStrength] 
                              ? "bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] text-white" 
                              : "bg-purple-900/50 text-gray-500 border border-purple-700/50"
                          }`}
                        >
                          {passwordStrength[req.key as keyof typeof passwordStrength] && (
                            <CheckCircle className="w-3 h-3" />
                          )}
                        </div>
                        <span
                          className={
                            passwordStrength[req.key as keyof typeof passwordStrength]
                              ? "text-[#a78bfa]"
                              : "text-gray-400"
                          }
                        >
                          {req.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Confirm New Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#a78bfa]" />
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your new password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="pl-10 pr-10 bg-purple-900/20 border-purple-700/50 focus:border-[#fbbf24] text-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#fbbf24]"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Password Match Indicator */}
              {formData.confirmPassword && (
                <div className="mt-3">
                  {formData.password === formData.confirmPassword ? (
                    <div className="flex items-center text-sm text-[#a78bfa] bg-gradient-to-r from-[#a78bfa]/10 to-transparent p-2 rounded-lg">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Passwords match
                    </div>
                  ) : (
                    <div className="flex items-center text-sm text-red-400 bg-gradient-to-r from-red-500/10 to-transparent p-2 rounded-lg">
                      <div className="w-4 h-4 rounded-full bg-red-400 mr-2 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      Passwords don't match
                    </div>
                  )}
                </div>
              )}
            </div>

            <Button
              type="submit"
              disabled={
                !Object.values(passwordStrength).every(Boolean) || formData.password !== formData.confirmPassword
              }
              className="w-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#fbbf24]/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none"
            >
              Reset Password
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Remember your password?{" "}
              <Link to="/login" className="text-[#fbbf24] hover:underline font-semibold hover:text-[#f59e0b]">
                Sign in here
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-[#fbbf24]/20">
            <div className="flex items-center justify-center text-sm text-gray-400">
              <Shield className="w-4 h-4 mr-2 text-[#fbbf24]" />
              <p>Your new password will be encrypted and secured</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}