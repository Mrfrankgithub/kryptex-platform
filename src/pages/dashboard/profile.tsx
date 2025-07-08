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
  Unlock,
  Crown,
  Gift,
  CheckCircle,
  XCircle,
} from "lucide-react"
import DashboardBottomBar from "../../components/DashboardBottomBar"
import Button from "../../components/ui/Button"

export default function ProfilePage() {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)
  const [twoFAEnabled, setTwoFAEnabled] = useState(true); // Always enabled
  const [showReferralCode, setShowReferralCode] = useState(false)

  const handleToggle2FA = () => {
    // 2FA is always enabled, so we don't allow toggling
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

  const handleUpgradeClick = () => {
    setShowUpgradeModal(true)
  }


 

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1a213a] to-[#0a0e17] p-4 pt-6">
        <h1 className="text-2xl font-bold mb-2">Profile</h1>
        <p className="text-gray-400 text-sm">Manage your account settings</p>
      </div>

      <div className="p-4">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-6 mb-6"
        >
          <div className="flex items-center mb-4">
            <div className="relative">
              <img
                src={userData.avatar || "/placeholder.svg"}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-2 border-[#00f0ff]"
              />
              <button className="absolute bottom-0 right-0 w-6 h-6 bg-[#00f0ff] rounded-full flex items-center justify-center">
                <Camera size={12} className="text-black" />
              </button>
            </div>
            <div className="ml-4 flex-1">
              <h2 className="text-xl font-bold">{userData.fullName}</h2>
              <p className="text-gray-400 text-sm">{userData.email}</p>
              <div className="flex items-center mt-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    userData.accountType === "Basic"
                      ? "bg-[#00f0ff]/20 text-[#00f0ff]"
                      : userData.accountType === "Pro"
                        ? "bg-[#4ade80]/20 text-[#4ade80]"
                        : "bg-[#ffd700]/20 text-[#ffd700]"
                  }`}
                >
                  {userData.accountType} Account
                </span>
              </div>
            </div>
            <button className="p-2 bg-[rgba(0,0,0,0.2)] rounded-full">
              <Edit size={16} className="text-gray-400" />
            </button>
          </div>
        </motion.div>

        {/* Account Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-4 mb-6"
        >
          <h3 className="text-lg font-semibold mb-4">Account Details</h3>

          <div className="space-y-4">
            {/* Full Name */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <User size={20} className="text-[#00f0ff] mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Full Name</p>
                  <p className="font-medium">{userData.fullName}</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Mail size={20} className="text-[#4ade80] mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Email Address</p>
                  <p className="font-medium">{userData.email}</p>
                </div>
              </div>
            </div>

            {/* Country */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MapPin size={20} className="text-[#e91e63] mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Country</p>
                  <p className="font-medium">{userData.country}</p>
                </div>
              </div>
            </div>

            {/* User ID */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shield size={20} className="text-[#ffd700] mr-3" />
                <div>
                  <p className="text-sm text-gray-400">User ID</p>
                  <p className="font-medium font-mono text-sm">NOT DISCLOSED</p>
                </div>
              </div>
              
            </div>

          

            {/* Account Creation Date */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar size={20} className="text-[#4ade80] mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Member Since</p>
                  <p className="font-medium">{userData.accountCreated}</p>
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
          className="bg-gradient-to-r from-[#ffd700]/10 to-[#00f0ff]/10 rounded-xl border border-[#ffd700]/20 p-4 mb-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Crown size={24} className="text-[#ffd700] mr-3" />
              <div>
                <h3 className="font-semibold">Upgrade Your Account</h3>
                <p className="text-sm text-gray-400">Unlock premium features and higher limits</p>
              </div>
            </div>
            <Button
              onClick={handleUpgradeClick}
              className="bg-[#ffd700] hover:bg-[#ffd700]/80 text-black font-semibold px-6"
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
      className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-4 mb-6"
    >
      <h3 className="text-lg font-semibold mb-4">Security Settings</h3>

      {/* 2FA Status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Lock size={20} className="text-[#4ade80] mr-3" />
          <div>
            <p className="font-medium">Two-Factor Authentication</p>
            <p className="text-sm text-gray-400">2FA is enabled</p>
          </div>
        </div>

        <div className="flex items-center">
          <CheckCircle size={20} className="text-[#4ade80] mr-2" />
          <button
            onClick={handleToggle2FA}
            disabled // disable the button
            className="px-4 py-2 rounded-lg text-sm font-medium bg-[#e91e63]/20 text-[#e91e63] cursor-not-allowed opacity-60"
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
          className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-4 mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Gift size={20} className="text-[#4ade80] mr-2" />
              Referral Program
            </h3>
            <button
              onClick={() => setShowReferralCode(!showReferralCode)}
              className="text-[#00f0ff] text-sm font-medium"
            >
              {showReferralCode ? "Hide" : "Show"} Code
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-[rgba(0,0,0,0.2)] rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-[#4ade80]">{userData.totalReferrals}</p>
              <p className="text-xs text-gray-400">Total Referrals</p>
            </div>
            <div className="bg-[rgba(0,0,0,0.2)] rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-[#ffd700]">{userData.referralEarnings}</p>
              <p className="text-xs text-gray-400">Earnings</p>
            </div>
          </div>

          {showReferralCode && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-[rgba(0,0,0,0.2)] rounded-lg p-3"
            >
              <p className="text-sm text-gray-400 mb-2">Your Referral Code:</p>
              <div className="flex items-center justify-between">
                <code className="font-mono text-[#00f0ff] font-medium">{userData.referralCode}</code>
                <button
                  onClick={handleCopyReferralCode}
                  className="flex items-center text-[#00f0ff] text-sm hover:text-[#00d4e6]"
                >
                  <Copy size={14} className="mr-1" />
                  Copy
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-[rgba(26,33,58,0.9)] backdrop-blur-md rounded-xl border border-[#00f0ff]/20 p-6 max-w-md w-full"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ffd700]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown size={32} className="text-[#ffd700]" />
              </div>

              <h2 className="text-2xl font-bold mb-2">Account Upgrade</h2>
              <p className="text-gray-400 mb-6">
                You haven't reached the required level to upgrade your account. Continue investing and trading to unlock
                premium features.
              </p>

              <div className="bg-[rgba(0,0,0,0.2)] rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-2">Requirements for Pro Account:</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Minimum $5,000 total investments</li>
                  <li>• Account age: 30+ days</li>
                  <li>• Complete KYC verification</li>
                  <li>• 2FA enabled</li>
                </ul>
              </div>

              <div className="flex space-x-3">
                <Button
                  onClick={() => setShowUpgradeModal(false)}
                  className="flex-1 bg-transparent border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10"
                >
                  Close
                </Button>
                
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Bottom Navigation */}
      <DashboardBottomBar />
    </div>
  )
}
