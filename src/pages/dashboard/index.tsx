"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUp, ArrowDown, TrendingUp, Wallet, DollarSign, RefreshCw, LogOut, TrendingDown } from "lucide-react"
import { useNavigate } from "react-router-dom"
import DashboardBottomBar from "../../components/DashboardBottomBar"

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")
  const navigate = useNavigate()

  // Crypto prices for marquee
  const cryptoPrices = [
    { symbol: "BTC", name: "Bitcoin", price: "51,423.78", change: 2.34, isPositive: true },
    { symbol: "ETH", name: "Ethereum", price: "2,987.56", change: 1.78, isPositive: true },
    { symbol: "BNB", name: "Binance", price: "382.91", change: -0.56, isPositive: false },
    { symbol: "SOL", name: "Solana", price: "102.45", change: 5.23, isPositive: true },
    { symbol: "XRP", name: "Ripple", price: "0.5423", change: 0.89, isPositive: true },
    { symbol: "ADA", name: "Cardano", price: "0.4876", change: -1.23, isPositive: false },
    { symbol: "DOGE", name: "Dogecoin", price: "0.0842", change: 3.45, isPositive: true },
    { symbol: "DOT", name: "Polkadot", price: "7.32", change: -0.12, isPositive: false },
  ]

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("userToken")
      navigate("/login")
    }
  }

  const stats = [
    {
      title: "Total Balance",
      value: "$12,450.80",
      icon: <Wallet className="text-[#fbbf24]" size={24} />,
      change: "+5.3%",
      isPositive: true,
    },
    {
      title: "Total Deposits",
      value: "$8,750.00",
      icon: <ArrowDown className="text-[#a78bfa]" size={24} />,
      change: "+0.0%",
      isPositive: true,
    },
    {
      title: "Total Withdrawals",
      value: "$2,340.50",
      icon: <ArrowUp className="text-[#ef4444]" size={24} />,
      change: "+0.0%",
      isPositive: true,
    },
    {
      title: "Total Profit",
      value: "$6,041.30",
      icon: <TrendingUp className="text-[#10b981]" size={24} />,
      change: "+12.8%",
      isPositive: true,
    },
  ]

  const recentTransactions = [
    {
      type: "deposit",
      plan: "STANDARD PLAN",
      amount: "$1,000.00",
      date: "2024-01-05",
      status: "completed",
      crypto: "BTC",
    },
    {
      type: "profit",
      plan: "STANDARD PLAN",
      amount: "$300.00",
      date: "2024-01-07",
      status: "completed",
      crypto: "ETH",
    },
    {
      type: "withdrawal",
      plan: "",
      amount: "$500.00",
      date: "2024-01-02",
      status: "completed",
      crypto: "USDT",
    },
  ]

  const activeInvestments = [
    {
      plan: "STANDARD PLAN",
      invested: "$1,000.00",
      returns: "$1,300.00",
      progress: 70,
      timeLeft: "2 days left",
      profit: "+30%",
    },
    {
      plan: "BASIC PLAN",
      invested: "$500.00",
      returns: "$600.00",
      progress: 90,
      timeLeft: "6 hours left",
      profit: "+20%",
    },
  ]

  return (
    <div className="min-h-screen bg-kryptex-dark text-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-kryptex-dark to-purple-900/20 p-4 pt-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
           
            <div>
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <p className="text-gray-400 text-sm">Welcome back, Alexander</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button 
              className="p-2 glass border border-[#fbbf24]/20 rounded-full hover:bg-[#fbbf24]/10 transition-colors" 
              onClick={() => setIsLoading(true)}
              title="Refresh"
            >
              <RefreshCw size={20} className="text-[#fbbf24]" />
            </button>
            <button
              className="p-2 glass border border-[#ef4444]/20 rounded-full hover:bg-[#ef4444]/10 transition-colors"
              onClick={handleLogout}
              title="Logout"
            >
              <LogOut size={20} className="text-[#ef4444]" />
            </button>
          </div>
        </div>

        {/* Main Balance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass border border-[#fbbf24]/30 rounded-xl p-5 mb-6"
        >
          <div className="flex justify-between items-center mb-3">
            <div>
              <div className="text-gray-300 text-sm mb-1">Available Balance</div>
              <div className="text-4xl font-bold mb-2 text-white">
                {isLoading ? <div className="h-10 bg-gray-700/50 rounded animate-pulse w-40"></div> : "$12,450.80"}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-400">Updated 2 mins ago</span>
                <span className="text-xs text-[#10b981] bg-[#10b981]/20 px-3 py-1 rounded-full flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +5.3% this week
                </span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#fbbf24] flex items-center justify-center">
              <DollarSign className="text-black" size={24} />
            </div>
          </div>
        </motion.div>

        {/* Live Crypto Marquee */}
        <div className="mb-6 overflow-hidden">
          <div className="glass border border-[#fbbf24]/20 rounded-xl p-3">
            <div className="flex items-center mb-2">
              <TrendingUp className="w-4 h-4 text-[#fbbf24] mr-2" />
              <span className="text-sm text-gray-300">Live Crypto Prices</span>
            </div>
            <div className="relative overflow-hidden">
              <div className="flex space-x-8 animate-marquee whitespace-nowrap">
                {cryptoPrices.map((crypto, index) => (
                  <div key={index} className="inline-flex items-center space-x-3 px-4">
                    <div className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{crypto.symbol}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">${crypto.price}</div>
                      <div className={`text-xs flex items-center ${crypto.isPositive ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                        {crypto.isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                        {crypto.change}%
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {cryptoPrices.map((crypto, index) => (
                  <div key={`dup-${index}`} className="inline-flex items-center space-x-3 px-4">
                    <div className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{crypto.symbol}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">${crypto.price}</div>
                      <div className={`text-xs flex items-center ${crypto.isPositive ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                        {crypto.isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                        {crypto.change}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Tabs */}
        <div className="flex border-b border-purple-900/50 mb-6">
          {["overview", "investments", "transactions"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-medium capitalize transition-colors ${
                activeTab === tab
                  ? "text-[#fbbf24] border-b-2 border-[#fbbf24]"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="p-4 grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass border border-purple-700/30 rounded-xl p-4"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs text-gray-300">{stat.title}</span>
              {stat.icon}
            </div>
            <div className="text-xl font-bold mb-1 text-white">
              {isLoading ? <div className="h-6 bg-gray-700/50 rounded animate-pulse w-20"></div> : stat.value}
            </div>
            <div className={`text-xs flex items-center ${
              stat.isPositive ? "text-[#10b981]" : "text-[#ef4444]"
            }`}>
              {stat.isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
              {stat.change} this month
            </div>
          </motion.div>
        ))}
      </div>

      {/* Active Investments */}
      {activeTab === "overview" || activeTab === "investments" ? (
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-white">Active Investments</h2>
            <button className="text-xs text-[#fbbf24] hover:text-[#f59e0b] font-medium">View All →</button>
          </div>

          {isLoading ? (
            <div className="space-y-3">
              <div className="h-24 bg-gray-800/50 rounded-xl animate-pulse"></div>
              <div className="h-24 bg-gray-800/50 rounded-xl animate-pulse"></div>
            </div>
          ) : (
            <div className="space-y-4">
              {activeInvestments.map((investment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass border border-purple-700/30 rounded-xl p-4"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium text-[#fbbf24]">{investment.plan}</span>
                    <span className="text-xs bg-[#10b981]/20 text-[#10b981] px-3 py-1 rounded-full font-medium">
                      {investment.profit} Profit
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mb-3">
                    <div>
                      <div className="text-gray-400">Invested</div>
                      <div className="text-white">{investment.invested}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Expected Returns</div>
                      <div className="text-[#10b981] font-medium">{investment.returns}</div>
                    </div>
                  </div>
                  <div className="w-full bg-purple-900/30 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-[#fbbf24] to-[#a78bfa] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${investment.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Progress: {investment.progress}%</span>
                    <span className="text-[#fbbf24]">{investment.timeLeft}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      ) : null}

      {/* Recent Transactions */}
      {activeTab === "overview" || activeTab === "transactions" ? (
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-white">Recent Transactions</h2>
            <button className="text-xs text-[#fbbf24] hover:text-[#f59e0b] font-medium">View All →</button>
          </div>

          {isLoading ? (
            <div className="space-y-3">
              <div className="h-16 bg-gray-800/50 rounded-xl animate-pulse"></div>
              <div className="h-16 bg-gray-800/50 rounded-xl animate-pulse"></div>
              <div className="h-16 bg-gray-800/50 rounded-xl animate-pulse"></div>
            </div>
          ) : (
            <div className="space-y-3">
              {recentTransactions.map((transaction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass border border-purple-700/30 rounded-xl p-4 flex items-center"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      transaction.type === "deposit"
                        ? "bg-[#a78bfa]/20"
                        : transaction.type === "withdrawal"
                          ? "bg-[#ef4444]/20"
                          : "bg-[#10b981]/20"
                    }`}
                  >
                    {transaction.type === "deposit" && <ArrowDown size={20} className="text-[#a78bfa]" />}
                    {transaction.type === "withdrawal" && <ArrowUp size={20} className="text-[#ef4444]" />}
                    {transaction.type === "profit" && <TrendingUp size={20} className="text-[#10b981]" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <span className="font-medium capitalize text-white">{transaction.type}</span>
                        <span className="text-xs text-gray-400 ml-2">{transaction.crypto}</span>
                      </div>
                      <span
                        className={`font-semibold ${
                          transaction.type === "deposit"
                            ? "text-[#a78bfa]"
                            : transaction.type === "withdrawal"
                              ? "text-[#ef4444]"
                              : "text-[#10b981]"
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
      ) : null}

      {/* Bottom Navigation */}
      <DashboardBottomBar />
      
      {/* Add CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}