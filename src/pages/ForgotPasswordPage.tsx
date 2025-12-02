"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, ArrowLeft, CheckCircle, Clock, Shield } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<"email" | "code">("email")
  const [formData, setFormData] = useState({
    email: "",
    code: "",
  })

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", formData.email)
    // Simulate sending email
    setStep("code")
  }

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Code submitted:", formData.code)
    // Redirect to reset password page
    window.location.href = "/reset-password"
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

          {/* Back to Login */}
          <Link
            to="/login"
            className="inline-flex items-center text-[#fbbf24] hover:text-[#f59e0b] transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </Link>

          {step === "email" ? (
            <>
              {/* Email Step */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#fbbf24]/20 to-[#f59e0b]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-[#fbbf24]" />
                </div>
                <h1 className="text-3xl font-bold mb-2 text-white">
                  Forgot <span className="text-[#fbbf24]">Password</span>?
                </h1>
                <p className="text-gray-400">
                  No worries! Enter your email address and we'll send you a verification code to reset your password.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#a78bfa]" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10 bg-purple-900/20 border-purple-700/50 focus:border-[#fbbf24] text-white"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#fbbf24]/20"
                >
                  Send Verification Code
                </Button>
              </form>
            </>
          ) : (
            <>
              {/* Code Verification Step */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#a78bfa]/20 to-[#8b5cf6]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#a78bfa]" />
                </div>
                <h1 className="text-3xl font-bold mb-2 text-white">
                  Check Your <span className="text-[#a78bfa]">Email</span>
                </h1>
                <p className="text-gray-400 mb-4">
                  We've sent a 6-digit verification code to
                  <br />
                  <span className="text-[#fbbf24] font-medium">{formData.email}</span>
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1 text-[#fbbf24]" />
                  Code expires in 10 minutes
                </div>
              </div>

              <form onSubmit={handleCodeSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Verification Code</label>
                  <Input
                    type="text"
                    placeholder="Enter 6-digit code"
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                    className="text-center text-2xl tracking-widest bg-purple-900/20 border-purple-700/50 focus:border-[#fbbf24] text-white"
                    maxLength={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] hover:from-[#8b5cf6] hover:to-[#7c3aed] text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#a78bfa]/20"
                >
                  Verify Code
                </Button>

                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">Didn't receive the code?</p>
                  <button
                    type="button"
                    onClick={() => console.log("Resend code")}
                    className="text-[#fbbf24] hover:text-[#f59e0b] text-sm font-medium transition-colors duration-200"
                  >
                    Resend Code
                  </button>
                </div>
              </form>
            </>
          )}

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
              <p>Your account security is our priority</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}