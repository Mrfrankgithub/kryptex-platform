"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Users, DollarSign, TrendingUp } from "lucide-react"
import AdminSidebar from "../../components/AdminSidebar"

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    totalUsers: 1247,
    totalDeposits: 2450000,
    totalWithdrawals: 1890000,
    pendingDeposits: 15,
    pendingWithdrawals: 8,
    supportMessages: 23,
  })



  return (
    <div className="min-h-screen bg-[#0a0e17] text-white flex">
      <AdminSidebar />

      <div className="flex-1 lg:ml-0 ml-16">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-gray-400">Welcome to the Kryptex admin panel</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#4ade80]/20 rounded-lg flex items-center justify-center">
                  <Users size={24} className="text-[#4ade80]" />
                </div>
                <span className="text-xs text-[#4ade80] bg-[#4ade80]/20 px-2 py-1 rounded-full">+12%</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{stats.totalUsers.toLocaleString()}</h3>
              <p className="text-gray-400 text-sm">Total Users</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#00f0ff]/20 rounded-lg flex items-center justify-center">
                  <DollarSign size={24} className="text-[#00f0ff]" />
                </div>
                <span className="text-xs text-[#4ade80] bg-[#4ade80]/20 px-2 py-1 rounded-full">+8%</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">${(stats.totalDeposits / 1000000).toFixed(1)}M</h3>
              <p className="text-gray-400 text-sm">Total Deposits</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#e91e63]/20 rounded-lg flex items-center justify-center">
                  <TrendingUp size={24} className="text-[#e91e63]" />
                </div>
                <span className="text-xs text-[#4ade80] bg-[#4ade80]/20 px-2 py-1 rounded-full">+15%</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">${(stats.totalWithdrawals / 1000000).toFixed(1)}M</h3>
              <p className="text-gray-400 text-sm">Total Withdrawals</p>
            </motion.div>
          </div>

          {/* Pending Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#ffd700]/20 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Pending Deposits</h3>
                <span className="text-2xl font-bold text-[#ffd700]">{stats.pendingDeposits}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Deposits awaiting approval</p>
              <button className="w-full bg-[#ffd700]/20 text-[#ffd700] py-2 px-4 rounded-lg hover:bg-[#ffd700]/30 transition-colors">
                Review Deposits
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#e91e63]/20 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Pending Withdrawals</h3>
                <span className="text-2xl font-bold text-[#e91e63]">{stats.pendingWithdrawals}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Withdrawals awaiting approval</p>
              <button className="w-full bg-[#e91e63]/20 text-[#e91e63] py-2 px-4 rounded-lg hover:bg-[#e91e63]/30 transition-colors">
                Review Withdrawals
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/20 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Support Messages</h3>
                <span className="text-2xl font-bold text-[#00f0ff]">{stats.supportMessages}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Unread support messages</p>
              <button className="w-full bg-[#00f0ff]/20 text-[#00f0ff] py-2 px-4 rounded-lg hover:bg-[#00f0ff]/30 transition-colors">
                View Messages
              </button>
            </motion.div>
          </div>

         
        </div>
      </div>
    </div>
  )
}
