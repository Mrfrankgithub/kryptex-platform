"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Users, DollarSign, TrendingUp, ArrowDownCircle, ArrowUpCircle, MessageSquare } from "lucide-react"
import AdminSidebar from "../../components/AdminSidebar"
import { useNavigate } from "react-router-dom"

// A reusable component for the main statistic cards
const StatCard = ({ icon, title, value, change, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-5"
  >
    <div className="flex items-center justify-between mb-4">
      <div className={`w-12 h-12 bg-${color}-500/20 rounded-lg flex items-center justify-center`}>
        {icon}
      </div>
      {change && <span className={`text-xs text-${color}-400 bg-${color}-500/20 px-2 py-1 rounded-full`}>{change}</span>}
    </div>
    <h3 className="text-2xl font-bold mb-1">{value}</h3>
    <p className="text-gray-400 text-sm">{title}</p>
  </motion.div>
);

// A reusable component for the pending action buttons
const QuickActionButton = ({ title, value, description, buttonText, color, path, delay }) => {
    const navigate = useNavigate();
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className={`bg-[rgba(26,33,58,0.6)] rounded-xl border border-${color}-500/20 p-5 flex flex-col`}
        >
            <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{title}</h3>
                <span className={`text-2xl font-bold text-${color}-400`}>{value}</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>
            <button 
                onClick={() => navigate(path)}
                className={`w-full bg-${color}-500/20 text-${color}-400 py-2.5 px-4 rounded-lg hover:bg-${color}-500/30 transition-colors text-sm font-semibold`}
            >
                {buttonText}
            </button>
        </motion.div>
    );
};


export default function AdminDashboardPage() {
  const [stats] = useState({
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

      {/* Main content area - notice the "ml-16" class is removed */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1 pl-10">Admin Dashboard</h1>
          <p className="text-gray-400">Welcome back, here's an overview of your platform.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          <StatCard 
            icon={<Users size={24} className="text-green-400" />}
            title="Total Users"
            value={stats.totalUsers.toLocaleString()}
            change="+12%"
            color="green"
            delay={0}
          />
          <StatCard 
            icon={<DollarSign size={24} className="text-cyan-400" />}
            title="Total Deposits"
            value={`$${(stats.totalDeposits / 1000000).toFixed(1)}M`}
            change="+8%"
            color="cyan"
            delay={0.1}
          />
          <StatCard 
            icon={<TrendingUp size={24} className="text-pink-400" />}
            title="Total Withdrawals"
            value={`$${(stats.totalWithdrawals / 1000000).toFixed(1)}M`}
            change="+15%"
            color="pink"
            delay={0.2}
          />
        </div>

        {/* Pending Actions */}
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Pending Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <QuickActionButton
                    title="Pending Deposits"
                    value={stats.pendingDeposits}
                    description="Deposits awaiting your approval."
                    buttonText="Review Deposits"
                    color="yellow"
                    path="/admin/approve-deposits"
                    delay={0.3}
                />
                <QuickActionButton
                    title="Pending Withdrawals"
                    value={stats.pendingWithdrawals}
                    description="Withdrawals awaiting your approval."
                    buttonText="Review Withdrawals"
                    color="pink"
                    path="/admin/approve-withdrawals"
                    delay={0.4}
                />
                 <QuickActionButton
                    title="Support Messages"
                    value={stats.supportMessages}
                    description="Unread messages from users."
                    buttonText="View Messages"
                    color="cyan"
                    path="/admin/support-messages"
                    delay={0.5}
                />
            </div>
        </div>
      </main>
    </div>
  )
}