"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  User,
  Mail,
  MapPin,
  Calendar,
  Shield,
  Copy,
  Edit,
  Camera,
  Lock,
  CheckCircle,
  Crown,
  Gift,
  FileText,
  Upload,
  AlertCircle,
  XCircle,
  Verified,
} from "lucide-react"
import DashboardBottomBar from "../../components/DashboardBottomBar"
import Button from "../../components/ui/Button"

export default function ProfilePage() {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)
  const [showKYCModal, setShowKYCModal] = useState(false)
  const [kycStatus, setKycStatus] = useState("unverified") // "unverified", "pending", "verified", "declined"
  const [showReferralCode, setShowReferralCode] = useState(false)
  const [kycDocuments, setKycDocuments] = useState({
    passport: null,
    driverLicense: null,
    proofOfAddress: null,
    selfie: null,
  })

  const handleToggle2FA = () => {
    alert("Two-Factor Authentication is required and cannot be disabled.")
  }

  // Mock user data
  const userData = {
    fullName: "Alex Thompson",
    email: "alex.thompson@email.com",
    country: "United States",
    accountCreated: "March 15, 2023",
    accountType: "Basic",
    avatar: "/profile.jpg",
    referralCode: "ALEX2023KRX",
    totalReferrals: 12,
    referralEarnings: "$450.00",
  }

  const handleCopyReferralCode = () => {
    navigator.clipboard.writeText(userData.referralCode)
    alert("Referral code copied to clipboard!")
  }

  const handleKYCStatusClick = () => {
    switch(kycStatus) {
      case "verified":
        alert("✅ KYC verified successfully!");
        break;
      case "declined":
        alert("❌ KYC verification declined. Please contact support@cryptoglobtrade.com to process your KYC manually.");
        break;
      case "pending":
        alert("⏳ Your KYC verification is pending review. Please wait 24-48 hours.");
        break;
      case "unverified":
        setShowKYCModal(true);
        break;
    }
  }

  const handleFileUpload = (field: string, file: File) => {
    setKycDocuments(prev => ({
      ...prev,
      [field]: file
    }));
  }

  const handleKYCSubmit = () => {
    // Here you would submit to backend
    setKycStatus("pending");
    setShowKYCModal(false);
    alert("✅ KYC documents submitted for review. Please wait 24-48 hours.");
  }

  const kycStatusConfig = {
    unverified: {
      text: "KYC Unverified",
      color: "text-red-400",
      bgColor: "bg-red-400/20",
      icon: <AlertCircle size={16} className="text-red-400" />,
      buttonText: "Verify KYC",
      buttonColor: "bg-[#fbbf24] hover:bg-[#f59e0b] text-black",
    },
    pending: {
      text: "KYC Pending",
      color: "text-[#fbbf24]",
      bgColor: "bg-[#fbbf24]/20",
      icon: <AlertCircle size={16} className="text-[#fbbf24]" />,
      buttonText: "View Status",
      buttonColor: "bg-[#fbbf24] hover:bg-[#f59e0b] text-black",
    },
    verified: {
      text: "KYC Verified",
      color: "text-[#10b981]",
      bgColor: "bg-[#10b981]/20",
      icon: <Verified size={16} className="text-[#10b981]" />,
      buttonText: "View Status",
      buttonColor: "bg-[#10b981] hover:bg-[#059669] text-white",
    },
    declined: {
      text: "KYC Declined",
      color: "text-red-400",
      bgColor: "bg-red-400/20",
      icon: <XCircle size={16} className="text-red-400" />,
      buttonText: "View Status",
      buttonColor: "bg-red-400 hover:bg-red-500 text-white",
    },
  }

  const kycStatusInfo = kycStatusConfig[kycStatus]

  return (
    <div className="min-h-screen bg-kryptex-dark text-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900/30 to-kryptex-dark p-4 pt-6">
        <div className="flex items-center mb-4">
         
          <div>
            <h1 className="text-2xl font-bold text-white">Profile</h1>
            <p className="text-gray-400 text-sm">Manage your account settings</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass border border-[#fbbf24]/20 rounded-xl p-6 mb-6"
        >
          <div className="flex items-center mb-4">
            <div className="relative">
              <img
                src={userData.avatar || "/placeholder.svg"}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-2 border-[#fbbf24]"
              />
              <button className="absolute bottom-0 right-0 w-6 h-6 bg-[#fbbf24] rounded-full flex items-center justify-center">
                <Camera size={12} className="text-black" />
              </button>
            </div>
            <div className="ml-4 flex-1">
              <h2 className="text-xl font-bold text-white">{userData.fullName}</h2>
              <p className="text-gray-400 text-sm">{userData.email}</p>
              <div className="flex items-center mt-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-[#fbbf24]/20 text-[#fbbf24]`}>
                  {userData.accountType} Account
                </span>
              </div>
            </div>
            <button className="p-2 bg-purple-900/30 rounded-full hover:bg-purple-900/50 transition-colors">
              <Edit size={16} className="text-gray-400" />
            </button>
          </div>
        </motion.div>

        {/* Account Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass border border-[#fbbf24]/20 rounded-xl p-4 mb-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-white">Account Details</h3>

          <div className="space-y-4">
            {/* KYC Status */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Shield size={20} className="text-[#fbbf24] mr-3" />
                <div>
                  <p className="text-sm text-gray-400">KYC Status</p>
                  <div className="flex items-center">
                    <p className={`font-medium ${kycStatusInfo.color}`}>{kycStatusInfo.text}</p>
                    <span className="ml-2">{kycStatusInfo.icon}</span>
                  </div>
                </div>
              </div>
              <Button
                onClick={handleKYCStatusClick}
                className={`px-4 py-2 text-sm font-medium ${kycStatusInfo.buttonColor}`}
              >
                {kycStatusInfo.buttonText}
              </Button>
            </div>

            {/* Full Name */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <User size={20} className="text-[#fbbf24] mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Full Name</p>
                  <p className="font-medium text-white">{userData.fullName}</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Mail size={20} className="text-[#a78bfa] mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Email Address</p>
                  <p className="font-medium text-white">{userData.email}</p>
                </div>
              </div>
            </div>

            {/* Country */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MapPin size={20} className="text-[#ef4444] mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Country</p>
                  <p className="font-medium text-white">{userData.country}</p>
                </div>
              </div>
            </div>

            {/* Account Creation Date */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar size={20} className="text-[#10b981] mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Member Since</p>
                  <p className="font-medium text-white">{userData.accountCreated}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Account Upgrade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass border border-[#fbbf24]/20 rounded-xl p-4 mb-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Crown size={24} className="text-[#fbbf24] mr-3" />
              <div>
                <h3 className="font-semibold text-white">Upgrade Your Account</h3>
                <p className="text-sm text-gray-400">Unlock premium features and higher limits</p>
              </div>
            </div>
            <Button
              onClick={() => setShowUpgradeModal(true)}
              className="bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-semibold px-6"
            >
              Upgrade
            </Button>
          </div>
        </motion.div>

        {/* Security Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass border border-[#fbbf24]/20 rounded-xl p-4 mb-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-white">Security Settings</h3>

          {/* 2FA Status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Lock size={20} className="text-[#10b981] mr-3" />
              <div>
                <p className="font-medium text-white">Two-Factor Authentication</p>
                <p className="text-sm text-gray-400">2FA is enabled</p>
              </div>
            </div>

            <div className="flex items-center">
              <CheckCircle size={20} className="text-[#10b981] mr-2" />
              <button
                onClick={handleToggle2FA}
                disabled
                className="px-4 py-2 rounded-lg text-sm font-medium bg-red-400/20 text-red-400 cursor-not-allowed opacity-60"
                title="2FA is required and cannot be disabled"
              >
                Disable
              </button>
            </div>
          </div>
        </motion.div>

        {/* Referral Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass border border-[#fbbf24]/20 rounded-xl p-4 mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center text-white">
              <Gift size={20} className="text-[#a78bfa] mr-2" />
              Referral Program
            </h3>
            <button
              onClick={() => setShowReferralCode(!showReferralCode)}
              className="text-[#fbbf24] text-sm font-medium hover:text-[#f59e0b]"
            >
              {showReferralCode ? "Hide" : "Show"} Code
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-purple-900/20 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-[#a78bfa]">{userData.totalReferrals}</p>
              <p className="text-xs text-gray-400">Total Referrals</p>
            </div>
            <div className="bg-purple-900/20 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-[#fbbf24]">{userData.referralEarnings}</p>
              <p className="text-xs text-gray-400">Earnings</p>
            </div>
          </div>

          {showReferralCode && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-purple-900/20 rounded-lg p-3"
            >
              <p className="text-sm text-gray-400 mb-2">Your Referral Code:</p>
              <div className="flex items-center justify-between">
                <code className="font-mono text-[#fbbf24] font-medium">{userData.referralCode}</code>
                <button
                  onClick={handleCopyReferralCode}
                  className="flex items-center text-[#fbbf24] text-sm hover:text-[#f59e0b]"
                >
                  <Copy size={14} className="mr-1" />
                  Copy
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* KYC Modal */}
      {showKYCModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="glass border border-[#fbbf24]/30 rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center mb-4">
              <Shield size={24} className="text-[#fbbf24] mr-2" />
              <h2 className="text-2xl font-bold text-white">KYC Verification</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Complete your KYC verification to unlock full account features and higher withdrawal limits.
            </p>

            <div className="space-y-4 mb-6">
              {/* Passport */}
              <div className="bg-purple-900/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white flex items-center">
                    <FileText size={16} className="mr-2 text-[#fbbf24]" />
                    Passport
                  </span>
                  {kycDocuments.passport && (
                    <CheckCircle size={16} className="text-[#10b981]" />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => e.target.files && handleFileUpload("passport", e.target.files[0])}
                  className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-[#fbbf24] file:text-black hover:file:bg-[#f59e0b]"
                />
              </div>

              {/* Driver's License */}
              <div className="bg-purple-900/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white flex items-center">
                    <FileText size={16} className="mr-2 text-[#fbbf24]" />
                    Driver's License
                  </span>
                  {kycDocuments.driverLicense && (
                    <CheckCircle size={16} className="text-[#10b981]" />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => e.target.files && handleFileUpload("driverLicense", e.target.files[0])}
                  className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-[#fbbf24] file:text-black hover:file:bg-[#f59e0b]"
                />
              </div>

              {/* Proof of Address */}
              <div className="bg-purple-900/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white flex items-center">
                    <FileText size={16} className="mr-2 text-[#fbbf24]" />
                    Proof of Address
                  </span>
                  {kycDocuments.proofOfAddress && (
                    <CheckCircle size={16} className="text-[#10b981]" />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => e.target.files && handleFileUpload("proofOfAddress", e.target.files[0])}
                  className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-[#fbbf24] file:text-black hover:file:bg-[#f59e0b]"
                />
              </div>

              {/* Selfie with Document */}
              <div className="bg-purple-900/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white flex items-center">
                    <Camera size={16} className="mr-2 text-[#fbbf24]" />
                    Selfie with Document
                  </span>
                  {kycDocuments.selfie && (
                    <CheckCircle size={16} className="text-[#10b981]" />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  capture="user"
                  onChange={(e) => e.target.files && handleFileUpload("selfie", e.target.files[0])}
                  className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-[#fbbf24] file:text-black hover:file:bg-[#f59e0b]"
                />
              </div>
            </div>

            <div className="flex space-x-3">
              <Button
                onClick={() => setShowKYCModal(false)}
                className="flex-1 bg-transparent border border-[#fbbf24] text-[#fbbf24] hover:bg-[#fbbf24]/10"
              >
                Cancel
              </Button>
              <Button
                onClick={handleKYCSubmit}
                disabled={!kycDocuments.passport || !kycDocuments.driverLicense || !kycDocuments.proofOfAddress || !kycDocuments.selfie}
                className="flex-1 bg-[#fbbf24] hover:bg-[#f59e0b] text-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Upload size={16} className="mr-2" />
                Submit KYC
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="glass border border-[#fbbf24]/30 rounded-xl p-6 max-w-md w-full"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#fbbf24]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown size={32} className="text-[#fbbf24]" />
              </div>

              <h2 className="text-2xl font-bold mb-2 text-white">Account Upgrade</h2>
              <p className="text-gray-300 mb-6">
                You haven't reached the required level to upgrade your account. Continue investing and trading to unlock
                premium features.
              </p>

              <div className="bg-purple-900/20 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-2 text-white">Requirements for Pro Account:</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Minimum $5,000 total investments</li>
                  <li>• Account age: 30+ days</li>
                  <li>• Complete KYC verification</li>
                  <li>• 2FA enabled</li>
                </ul>
              </div>

              <Button
                onClick={() => setShowUpgradeModal(false)}
                className="w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-semibold"
              >
                Close
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Bottom Navigation */}
      <DashboardBottomBar />
    </div>
  )
}