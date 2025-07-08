"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, ArrowLeft, CheckCircle, Clock } from "lucide-react"
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
    <div className="min-h-screen bg-[#0a0e17] pb-5 text-white flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[rgba(26,33,58,0.6)] backdrop-blur-md border border-[#00f0ff]/20 rounded-2xl p-8"
        >
          {/* Back to Login */}
          <Link
            to="/login"
            className="inline-flex items-center text-[#00f0ff] hover:text-[#00d4e6] transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </Link>

          {step === "email" ? (
            <>
              {/* Email Step */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#00f0ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-[#00f0ff]" />
                </div>
                <h1 className="text-3xl font-bold mb-2">
                  Forgot <span className="text-[#00f0ff]">Password</span>?
                </h1>
                <p className="text-gray-400">
                  No worries! Enter your email address and we'll send you a verification code to reset your password.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#00f0ff] hover:bg-[#00d4e6] text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105"
                >
                  Send Verification Code
                </Button>
              </form>
            </>
          ) : (
            <>
              {/* Code Verification Step */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#4ade80]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#4ade80]" />
                </div>
                <h1 className="text-3xl font-bold mb-2">
                  Check Your <span className="text-[#4ade80]">Email</span>
                </h1>
                <p className="text-gray-400 mb-4">
                  We've sent a 6-digit verification code to
                  <br />
                  <span className="text-[#00f0ff] font-medium">{formData.email}</span>
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  Code expires in 10 minutes
                </div>
              </div>

              <form onSubmit={handleCodeSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Verification Code</label>
                  <Input
                    type="text"
                    placeholder="Enter 6-digit code"
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                    className="text-center text-2xl tracking-widest"
                    maxLength={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#4ade80] hover:bg-[#3bc470] text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105"
                >
                  Verify Code
                </Button>

                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">Didn't receive the code?</p>
                  <button
                    type="button"
                    onClick={() => console.log("Resend code")}
                    className="text-[#00f0ff] hover:text-[#00d4e6] text-sm font-medium transition-colors duration-200"
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
              <Link to="/login" className="text-[#00f0ff] hover:underline font-semibold">
                Sign in here
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-[#00f0ff]/20">
            <div className="text-center text-sm text-gray-400">
              <p>🔒 Your account security is our priority</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
