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
      buttonColor: "bg-kryptex-cyan hover:bg-kryptex-green text-white",
    },
    pending: {
      text: "KYC Pending",
      color: "text-kryptex-gold",
      bgColor: "bg-kryptex-gold/20",
      icon: <AlertCircle size={16} className="text-kryptex-gold" />,
      buttonText: "View Status",
      buttonColor: "bg-kryptex-gold hover:bg-kryptex-gold/80 text-black",
    },
    verified: {
      text: "KYC Verified",
      color: "text-green-400",
      bgColor: "bg-green-400/20",
      icon: <Verified size={16} className="text-green-400" />,
      buttonText: "View Status",
      buttonColor: "bg-green-400 hover:bg-green-500 text-white",
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
      <div className="bg-gradient-to-r from-kryptex-card/30 to-kryptex-dark/90 p-4 pt-6">
        <div className="flex items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Profile</h1>
            <p className="text-kryptex-light text-sm">Manage your account settings</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass border border-kryptex-cyan/20 rounded-xl p-6 mb-6"
        >
          <div className="flex items-center mb-4">
            <div className="relative">
              <img
                src={userData.avatar || "/placeholder.svg"}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-2 border-kryptex-cyan"
              />
              <button className="absolute bottom-0 right-0 w-6 h-6 bg-kryptex-cyan rounded-full flex items-center justify-center">
                <Camera size={12} className="text-white" />
              </button>
            </div>
            <div className="ml-4 flex-1">
              <h2 className="text-xl font-bold text-white">{userData.fullName}</h2>
              <p className="text-kryptex-light text-sm">{userData.email}</p>
              <div className="flex items-center mt-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-kryptex-cyan/20 text-kryptex-cyan`}>
                  {userData.accountType} Account
                </span>
              </div>
            </div>
            <button className="p-2 bg-kryptex-card/30 rounded-full hover:bg-kryptex-card/50 transition-colors">
              <Edit size={16} className="text-kryptex-light" />
            </button>
          </div>
        </motion.div>

        {/* Account Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass border border-kryptex-cyan/20 rounded-xl p-4 mb-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-white">Account Details</h3>

          <div className="space-y-4">
            {/* KYC Status */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Shield size={20} className="text-kryptex-cyan mr-3" />
                <div>
                  <p className="text-sm text-kryptex-light">KYC Status</p>
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
                <User size={20} className="text-kryptex-cyan mr-3" />
                <div>
                  <p className="text-sm text-kryptex-light">Full Name</p>
                  <p className="font-medium text-white">{userData.fullName}</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Mail size={20} className="text-kryptex-green mr-3" />
                <div>
                  <p className="text-sm text-kryptex-light">Email Address</p>
                  <p className="font-medium text-white">{userData.email}</p>
                </div>
              </div>
            </div>

            {/* Country */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MapPin size={20} className="text-red-400 mr-3" />
                <div>
                  <p className="text-sm text-kryptex-light">Country</p>
                  <p className="font-medium text-white">{userData.country}</p>
                </div>
              </div>
            </div>

            {/* Account Creation Date */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar size={20} className="text-green-400 mr-3" />
                <div>
                  <p className="text-sm text-kryptex-light">Member Since</p>
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
          className="glass border border-kryptex-cyan/20 rounded-xl p-4 mb-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Crown size={24} className="text-kryptex-gold mr-3" />
              <div>
                <h3 className="font-semibold text-white">Upgrade Your Account</h3>
                <p className="text-sm text-kryptex-light">Unlock premium features and higher limits</p>
              </div>
            </div>
            <Button
              onClick={() => setShowUpgradeModal(true)}
              className="bg-gradient-gold hover:bg-gradient-to-r hover:from-kryptex-gold hover:to-yellow-500 text-black font-semibold px-6"
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
          className="glass border border-kryptex-cyan/20 rounded-xl p-4 mb-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-white">Security Settings</h3>

          {/* 2FA Status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Lock size={20} className="text-green-400 mr-3" />
              <div>
                <p className="font-medium text-white">Two-Factor Authentication</p>
                <p className="text-sm text-kryptex-light">2FA is enabled</p>
              </div>
            </div>

            <div className="flex items-center">
              <CheckCircle size={20} className="text-green-400 mr-2" />
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
          className="glass border border-kryptex-cyan/20 rounded-xl p-4 mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center text-white">
              <Gift size={20} className="text-kryptex-green mr-2" />
              Referral Program
            </h3>
            <button
              onClick={() => setShowReferralCode(!showReferralCode)}
              className="text-kryptex-cyan text-sm font-medium hover:text-kryptex-green"
            >
              {showReferralCode ? "Hide" : "Show"} Code
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-kryptex-card/20 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-kryptex-cyan">{userData.totalReferrals}</p>
              <p className="text-xs text-kryptex-light">Total Referrals</p>
            </div>
            <div className="bg-kryptex-card/20 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-kryptex-gold">{userData.referralEarnings}</p>
              <p className="text-xs text-kryptex-light">Earnings</p>
            </div>
          </div>

          {showReferralCode && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-kryptex-card/20 rounded-lg p-3"
            >
              <p className="text-sm text-kryptex-light mb-2">Your Referral Code:</p>
              <div className="flex items-center justify-between">
                <code className="font-mono text-kryptex-cyan font-medium">{userData.referralCode}</code>
                <button
                  onClick={handleCopyReferralCode}
                  className="flex items-center text-kryptex-cyan text-sm hover:text-kryptex-green"
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
            className="glass border border-kryptex-cyan/30 rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center mb-4">
              <Shield size={24} className="text-kryptex-cyan mr-2" />
              <h2 className="text-2xl font-bold text-white">KYC Verification</h2>
            </div>

            <p className="text-kryptex-light mb-6">
              Complete your KYC verification to unlock full account features and higher withdrawal limits.
            </p>

            <div className="space-y-4 mb-6">
              {/* Passport */}
              <div className="bg-kryptex-card/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white flex items-center">
                    <FileText size={16} className="mr-2 text-kryptex-cyan" />
                    Passport
                  </span>
                  {kycDocuments.passport && (
                    <CheckCircle size={16} className="text-green-400" />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => e.target.files && handleFileUpload("passport", e.target.files[0])}
                  className="w-full text-sm text-kryptex-light file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-kryptex-cyan file:text-white hover:file:bg-kryptex-green"
                />
              </div>

              {/* Driver's License */}
              <div className="bg-kryptex-card/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white flex items-center">
                    <FileText size={16} className="mr-2 text-kryptex-cyan" />
                    Driver's License
                  </span>
                  {kycDocuments.driverLicense && (
                    <CheckCircle size={16} className="text-green-400" />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => e.target.files && handleFileUpload("driverLicense", e.target.files[0])}
                  className="w-full text-sm text-kryptex-light file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-kryptex-cyan file:text-white hover:file:bg-kryptex-green"
                />
              </div>

              {/* Proof of Address */}
              <div className="bg-kryptex-card/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white flex items-center">
                    <FileText size={16} className="mr-2 text-kryptex-cyan" />
                    Proof of Address
                  </span>
                  {kycDocuments.proofOfAddress && (
                    <CheckCircle size={16} className="text-green-400" />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => e.target.files && handleFileUpload("proofOfAddress", e.target.files[0])}
                  className="w-full text-sm text-kryptex-light file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-kryptex-cyan file:text-white hover:file:bg-kryptex-green"
                />
              </div>

              {/* Selfie with Document */}
              <div className="bg-kryptex-card/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white flex items-center">
                    <Camera size={16} className="mr-2 text-kryptex-cyan" />
                    Selfie with Document
                  </span>
                  {kycDocuments.selfie && (
                    <CheckCircle size={16} className="text-green-400" />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  capture="user"
                  onChange={(e) => e.target.files && handleFileUpload("selfie", e.target.files[0])}
                  className="w-full text-sm text-kryptex-light file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-kryptex-cyan file:text-white hover:file:bg-kryptex-green"
                />
              </div>
            </div>

            <div className="flex space-x-3">
              <Button
                onClick={() => setShowKYCModal(false)}
                className="flex-1 bg-transparent border border-kryptex-cyan text-kryptex-cyan hover:bg-kryptex-cyan/10"
              >
                Cancel
              </Button>
              <Button
                onClick={handleKYCSubmit}
                disabled={!kycDocuments.passport || !kycDocuments.driverLicense || !kycDocuments.proofOfAddress || !kycDocuments.selfie}
                className="flex-1 bg-kryptex-cyan hover:bg-kryptex-green text-white disabled:opacity-50 disabled:cursor-not-allowed"
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
            className="glass border border-kryptex-cyan/30 rounded-xl p-6 max-w-md w-full"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-kryptex-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown size={32} className="text-kryptex-gold" />
              </div>

              <h2 className="text-2xl font-bold mb-2 text-white">Account Upgrade</h2>
              <p className="text-kryptex-light mb-6">
                You haven't reached the required level to upgrade your account. Continue investing and trading to unlock
                premium features.
              </p>

              <div className="bg-kryptex-card/20 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-2 text-white">Requirements for Pro Account:</h3>
                <ul className="text-sm text-kryptex-light space-y-1">
                  <li>• Minimum $5,000 total investments</li>
                  <li>• Account age: 30+ days</li>
                  <li>• Complete KYC verification</li>
                  <li>• 2FA enabled</li>
                </ul>
              </div>

              <Button
                onClick={() => setShowUpgradeModal(false)}
                className="w-full bg-kryptex-cyan hover:bg-kryptex-green text-white font-semibold"
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