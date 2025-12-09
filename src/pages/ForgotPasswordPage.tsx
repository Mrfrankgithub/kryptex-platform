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
          className="glass border border-kryptex-gold/20 rounded-2xl p-8 shadow-lg shadow-kryptex-cyan/10"
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

          {/* Back to Login */}
          <Link
            to="/login"
            className="inline-flex items-center text-kryptex-gold hover:text-kryptex-cyan transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </Link>

          {step === "email" ? (
            <>
              {/* Email Step */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-kryptex-gold/20 to-kryptex-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-kryptex-gold" />
                </div>
                <h1 className="text-3xl font-bold mb-2 text-white">
                  Forgot <span className="text-kryptex-gold">Password</span>?
                </h1>
                <p className="text-kryptex-light">
                  No worries! Enter your email address and we'll send you a verification code to reset your password.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-kryptex-light">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-kryptex-cyan" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10 bg-kryptex-card/20 border-kryptex-card/50 focus:border-kryptex-gold text-white"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-kryptex-gold to-kryptex-cyan hover:from-kryptex-cyan hover:to-kryptex-gold text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-kryptex-gold/20"
                >
                  Send Verification Code
                </Button>
              </form>
            </>
          ) : (
            <>
              {/* Code Verification Step */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-kryptex-cyan/20 to-kryptex-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-kryptex-cyan" />
                </div>
                <h1 className="text-3xl font-bold mb-2 text-white">
                  Check Your <span className="text-kryptex-cyan">Email</span>
                </h1>
                <p className="text-kryptex-light mb-4">
                  We've sent a 6-digit verification code to
                  <br />
                  <span className="text-kryptex-gold font-medium">{formData.email}</span>
                </p>
                <div className="flex items-center justify-center text-sm text-kryptex-light">
                  <Clock className="w-4 h-4 mr-1 text-kryptex-gold" />
                  Code expires in 10 minutes
                </div>
              </div>

              <form onSubmit={handleCodeSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-kryptex-light">Verification Code</label>
                  <Input
                    type="text"
                    placeholder="Enter 6-digit code"
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                    className="text-center text-2xl tracking-widest bg-kryptex-card/20 border-kryptex-card/50 focus:border-kryptex-gold text-white"
                    maxLength={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-kryptex-cyan to-kryptex-green hover:from-kryptex-green hover:to-kryptex-cyan text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-kryptex-cyan/20"
                >
                  Verify Code
                </Button>

                <div className="text-center">
                  <p className="text-kryptex-light text-sm mb-2">Didn't receive the code?</p>
                  <button
                    type="button"
                    onClick={() => console.log("Resend code")}
                    className="text-kryptex-gold hover:text-kryptex-cyan text-sm font-medium transition-colors duration-200"
                  >
                    Resend Code
                  </button>
                </div>
              </form>
            </>
          )}

          <div className="mt-8 text-center">
            <p className="text-kryptex-light">
              Remember your password?{" "}
              <Link to="/login" className="text-kryptex-gold hover:underline font-semibold hover:text-kryptex-cyan">
                Sign in here
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-kryptex-gold/20">
            <div className="flex items-center justify-center text-sm text-kryptex-light">
              <Shield className="w-4 h-4 mr-2 text-kryptex-gold" />
              <p>Your account security is our priority</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}