"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Lock, Eye, EyeOff, CheckCircle, Shield } from "lucide-react"
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
      <div className="min-h-screen bg-[#0a0e17] text-white flex items-center justify-center px-4 pt-20">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-[rgba(26,33,58,0.6)] backdrop-blur-md border border-[#4ade80]/20 rounded-2xl p-8 text-center"
          >
            <div className="w-20 h-20 bg-[#4ade80]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-[#4ade80]" />
            </div>

            <h1 className="text-3xl font-bold mb-4">
              Password <span className="text-[#4ade80]">Reset</span> Successful!
            </h1>

            <p className="text-gray-400 mb-8">
              Your password has been successfully reset. You can now sign in with your new password.
            </p>

            <Link to="/login">
              <Button className="w-full bg-[#4ade80] hover:bg-[#3bc470] text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105">
                Continue to Login
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white flex items-center justify-center px-4 pt-20">
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
              Reset Your <span className="text-[#00f0ff]">Password</span>
            </h1>
            <p className="text-gray-400">Create a strong, secure password for your Kryptex account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">New Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a new password"
                  value={formData.password}
                  onChange={handlePasswordChange}
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

              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-3 space-y-2">
                  <div className="text-sm font-medium text-gray-300">Password Requirements:</div>
                  <div className="space-y-1">
                    {[
                      { key: "length", text: "At least 8 characters" },
                      { key: "uppercase", text: "One uppercase letter" },
                      { key: "lowercase", text: "One lowercase letter" },
                      { key: "number", text: "One number" },
                      { key: "special", text: "One special character" },
                    ].map((req) => (
                      <div key={req.key} className="flex items-center text-xs">
                        <div
                          className={`w-2 h-2 rounded-full mr-2 ${
                            passwordStrength[req.key as keyof typeof passwordStrength] ? "bg-[#4ade80]" : "bg-gray-500"
                          }`}
                        />
                        <span
                          className={
                            passwordStrength[req.key as keyof typeof passwordStrength]
                              ? "text-[#4ade80]"
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
              <label className="block text-sm font-medium mb-2">Confirm New Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your new password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Password Match Indicator */}
              {formData.confirmPassword && (
                <div className="mt-2">
                  {formData.password === formData.confirmPassword ? (
                    <div className="flex items-center text-xs text-[#4ade80]">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Passwords match
                    </div>
                  ) : (
                    <div className="flex items-center text-xs text-red-400">
                      <div className="w-3 h-3 rounded-full bg-red-400 mr-1" />
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
              className="w-full bg-[#00f0ff] hover:bg-[#00d4e6] text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Reset Password
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Remember your password?{" "}
              <Link to="/login" className="text-[#00f0ff] hover:underline font-semibold">
                Sign in here
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-[#00f0ff]/20">
            <div className="text-center text-sm text-gray-400">
              <p>🔒 Your new password will be encrypted and secured</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
