"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUp, ArrowDown, TrendingUp, Wallet, DollarSign, RefreshCw, LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"
import DashboardBottomBar from "../../components/DashboardBottomBar"

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      // Clear any stored user data here
      localStorage.removeItem("userToken")
      // Redirect to login page
      navigate("/login")
    }
  }

  const stats = [
    {
      title: "Total Balance",
      value: "$12,450.80",
      icon: <Wallet className="text-[#00f0ff]" size={24} />,
      change: "+5.3%",
      isPositive: true,
    },
    {
      title: "Total Deposits",
      value: "$8,750.00",
      icon: <ArrowDown className="text-[#4ade80]" size={24} />,
      change: "+0.0%",
      isPositive: true,
    },
    {
      title: "Total Withdrawals",
      value: "$2,340.50",
      icon: <ArrowUp className="text-[#e91e63]" size={24} />,
      change: "+0.0%",
      isPositive: true,
    },
    {
      title: "Total Profit",
      value: "$6,041.30",
      icon: <TrendingUp className="text-[#ffd700]" size={24} />,
      change: "+12.8%",
      isPositive: true,
    },
  ]

  const recentTransactions = [
    {
      type: "deposit",
      plan: "STANDARD PLAN",
      amount: "$1,000.00",
      date: "2023-07-05",
      status: "completed",
    },
    {
      type: "profit",
      plan: "STANDARD PLAN",
      amount: "$300.00",
      date: "2023-07-07",
      status: "completed",
    },
    {
      type: "withdrawal",
      plan: "",
      amount: "$500.00",
      date: "2023-07-02",
      status: "completed",
    },
  ]

  const activeInvestments = [
    {
      plan: "STANDARD PLAN",
      invested: "$1,000.00",
      returns: "$1,300.00",
      progress: 70,
      timeLeft: "2 days left",
    },
    {
      plan: "BASIC PLAN",
      invested: "$500.00",
      returns: "$600.00",
      progress: 90,
      timeLeft: "6 hours left",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1a213a] to-[#0a0e17] p-4 pt-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-400 text-sm">Welcome back, Alex</p>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 bg-[rgba(26,33,58,0.6)] rounded-full" onClick={() => setIsLoading(true)}>
              <RefreshCw size={20} className="text-[#00f0ff]" />
            </button>
            <button
              className="p-2 bg-[rgba(26,33,58,0.6)] rounded-full hover:bg-[#e91e63]/20 transition-colors"
              onClick={handleLogout}
              title="Logout"
            >
              <LogOut size={20} className="text-[#e91e63]" />
            </button>
          </div>
        </div>

        {/* Main Balance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#00f0ff]/20 to-[#4ade80]/20 rounded-xl p-4 mb-4"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-300">Available Balance</span>
            <DollarSign className="text-[#00f0ff]" size={20} />
          </div>
          <div className="text-3xl font-bold mb-2">
            {isLoading ? <div className="h-8 bg-gray-700 rounded animate-pulse w-32"></div> : "$12,450.80"}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">Updated 2 mins ago</span>
            <span className="text-xs text-[#4ade80] bg-[#4ade80]/20 px-2 py-1 rounded-full">+5.3% this week</span>
          </div>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <div className="p-4 grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[rgba(26,33,58,0.6)] rounded-xl p-4 border border-[#00f0ff]/10"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-400">{stat.title}</span>
              {stat.icon}
            </div>
            <div className="text-xl font-bold mb-1">
              {isLoading ? <div className="h-6 bg-gray-700 rounded animate-pulse w-20"></div> : stat.value}
            </div>
            <div className={`text-xs ${stat.isPositive ? "text-[#4ade80]" : "text-[#e91e63]"}`}>
              {stat.change} this month
            </div>
          </motion.div>
        ))}
      </div>

      {/* Active Investments */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Active Investments</h2>
          <button className="text-xs text-[#00f0ff]">View All</button>
        </div>

        {isLoading ? (
          <div className="space-y-3">
            <div className="h-24 bg-gray-800 rounded-xl animate-pulse"></div>
            <div className="h-24 bg-gray-800 rounded-xl animate-pulse"></div>
          </div>
        ) : (
          <div className="space-y-3">
            {activeInvestments.map((investment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-[rgba(26,33,58,0.6)] rounded-xl p-4 border border-[#00f0ff]/10"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-[#00f0ff]">{investment.plan}</span>
                  <span className="text-xs bg-[#4ade80]/20 text-[#4ade80] px-2 py-1 rounded-full">Active</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Invested: {investment.invested}</span>
                  <span className="text-white">Returns: {investment.returns}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
                  <div
                    className="bg-gradient-to-r from-[#00f0ff] to-[#4ade80] h-2 rounded-full"
                    style={{ width: `${investment.progress}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-400 text-right">{investment.timeLeft}</div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Recent Transactions */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <button className="text-xs text-[#00f0ff]">View All</button>
        </div>

        {isLoading ? (
          <div className="space-y-3">
            <div className="h-16 bg-gray-800 rounded-xl animate-pulse"></div>
            <div className="h-16 bg-gray-800 rounded-xl animate-pulse"></div>
            <div className="h-16 bg-gray-800 rounded-xl animate-pulse"></div>
          </div>
        ) : (
          <div className="space-y-3">
            {recentTransactions.map((transaction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-[rgba(26,33,58,0.6)] rounded-xl p-3 border border-[#00f0ff]/10 flex items-center"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    transaction.type === "deposit"
                      ? "bg-[#4ade80]/20"
                      : transaction.type === "withdrawal"
                        ? "bg-[#e91e63]/20"
                        : "bg-[#ffd700]/20"
                  }`}
                >
                  {transaction.type === "deposit" && <ArrowDown size={20} className="text-[#4ade80]" />}
                  {transaction.type === "withdrawal" && <ArrowUp size={20} className="text-[#e91e63]" />}
                  {transaction.type === "profit" && <TrendingUp size={20} className="text-[#ffd700]" />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium capitalize">{transaction.type}</span>
                    <span
                      className={`font-semibold ${
                        transaction.type === "deposit"
                          ? "text-[#4ade80]"
                          : transaction.type === "withdrawal"
                            ? "text-[#e91e63]"
                            : "text-[#ffd700]"
                      }`}
                    >
                      {transaction.type === "withdrawal" ? "-" : "+"}
                      {transaction.amount}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{transaction.plan || "Bank Transfer"}</span>
                    <span>{transaction.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <DashboardBottomBar />
    </div>
  )
}
