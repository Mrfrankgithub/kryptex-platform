"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUp, ArrowDown, TrendingUp, Wallet, DollarSign, RefreshCw, LogOut, TrendingDown, Plus, Minus } from "lucide-react"
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

  const handleDeposit = () => {
    navigate("/dashboard/invest")
  }

  const handleWithdraw = () => {
    navigate("/dashboard/withdrawal")
  }

  const stats = [
    {
      title: "Total Balance",
      value: "$12,450.80",
      icon: <Wallet className="text-kryptex-cyan" size={24} />,
      change: "+5.3%",
      isPositive: true,
    },
    {
      title: "Total Deposits",
      value: "$8,750.00",
      icon: <ArrowDown className="text-kryptex-green" size={24} />,
      change: "+0.0%",
      isPositive: true,
    },
    {
      title: "Total Withdrawals",
      value: "$2,340.50",
      icon: <ArrowUp className="text-kryptex-gold" size={24} />,
      change: "+0.0%",
      isPositive: true,
    },
    {
      title: "Total Profit",
      value: "$6,041.30",
      icon: <TrendingUp className="text-green-400" size={24} />,
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
      <div className="bg-gradient-to-br from-kryptex-dark/90 to-kryptex-card/50 p-4 pt-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <p className="text-kryptex-light text-sm">Welcome back, Alexander</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button 
              className="p-2 glass border border-kryptex-cyan/20 rounded-full hover:bg-kryptex-cyan/10 transition-colors" 
              onClick={() => setIsLoading(true)}
              title="Refresh"
            >
              <RefreshCw size={20} className="text-kryptex-cyan" />
            </button>
            <button
              className="p-2 glass border border-red-400/20 rounded-full hover:bg-red-400/10 transition-colors"
              onClick={handleLogout}
              title="Logout"
            >
              <LogOut size={20} className="text-red-400" />
            </button>
          </div>
        </div>

        {/* Main Balance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass border border-kryptex-cyan/30 rounded-xl p-5 mb-6"
        >
          <div className="flex justify-between items-center mb-3">
            <div>
              <div className="text-kryptex-light text-sm mb-1">Available Balance</div>
              <div className="text-4xl font-bold mb-2 text-white">
                {isLoading ? <div className="h-10 bg-kryptex-card/50 rounded animate-pulse w-40"></div> : "$12,450.80"}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-kryptex-light">Updated 2 mins ago</span>
                <span className="text-xs text-green-400 bg-green-400/20 px-3 py-1 rounded-full flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +5.3% this week
                </span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-purple flex items-center justify-center">
              <DollarSign className="text-white" size={24} />
            </div>
          </div>

          {/* Deposit and Withdraw Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleDeposit}
              className="flex-1 bg-gradient-purple hover:bg-gradient-to-r hover:from-kryptex-cyan hover:to-kryptex-green text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <Plus size={20} />
              Deposit
            </button>
            <button
              onClick={handleWithdraw}
              className="flex-1 glass border border-kryptex-gold text-kryptex-gold hover:bg-kryptex-gold/10 font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <Minus size={20} />
              Withdraw
            </button>
          </div>
        </motion.div>

        {/* Live Crypto Marquee */}
        <div className="mb-6 overflow-hidden">
          <div className="glass border border-kryptex-cyan/20 rounded-xl p-3">
            <div className="flex items-center mb-2">
              <TrendingUp className="w-4 h-4 text-kryptex-cyan mr-2" />
              <span className="text-sm text-kryptex-light">Live Crypto Prices</span>
            </div>
            <div className="relative overflow-hidden">
              <div className="flex space-x-8 animate-marquee whitespace-nowrap">
                {cryptoPrices.map((crypto, index) => (
                  <div key={index} className="inline-flex items-center space-x-3 px-4">
                    <div className="w-8 h-8 rounded-full bg-kryptex-card/80 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{crypto.symbol}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">${crypto.price}</div>
                      <div className={`text-xs flex items-center ${crypto.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {crypto.isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                        {crypto.change}%
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {cryptoPrices.map((crypto, index) => (
                  <div key={`dup-${index}`} className="inline-flex items-center space-x-3 px-4">
                    <div className="w-8 h-8 rounded-full bg-kryptex-card/80 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{crypto.symbol}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">${crypto.price}</div>
                      <div className={`text-xs flex items-center ${crypto.isPositive ? 'text-green-400' : 'text-red-400'}`}>
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
        <div className="flex border-b border-kryptex-card/50 mb-6">
          {["overview", "investments", "transactions"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-medium capitalize transition-colors ${
                activeTab === tab
                  ? "text-kryptex-cyan border-b-2 border-kryptex-cyan"
                  : "text-kryptex-light hover:text-white"
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
            className="glass border border-kryptex-card/50 rounded-xl p-4 hover-glow"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs text-kryptex-light">{stat.title}</span>
              {stat.icon}
            </div>
            <div className="text-xl font-bold mb-1 text-white">
              {isLoading ? <div className="h-6 bg-kryptex-card/50 rounded animate-pulse w-20"></div> : stat.value}
            </div>
            <div className={`text-xs flex items-center ${
              stat.isPositive ? "text-green-400" : "text-red-400"
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
            <button className="text-xs text-kryptex-cyan hover:text-kryptex-green font-medium">View All →</button>
          </div>

          {isLoading ? (
            <div className="space-y-3">
              <div className="h-24 bg-kryptex-card/50 rounded-xl animate-pulse"></div>
              <div className="h-24 bg-kryptex-card/50 rounded-xl animate-pulse"></div>
            </div>
          ) : (
            <div className="space-y-4">
              {activeInvestments.map((investment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass border border-kryptex-card/50 rounded-xl p-4 hover-glow"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium text-kryptex-cyan">{investment.plan}</span>
                    <span className="text-xs bg-green-400/20 text-green-400 px-3 py-1 rounded-full font-medium">
                      {investment.profit} Profit
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mb-3">
                    <div>
                      <div className="text-kryptex-light">Invested</div>
                      <div className="text-white">{investment.invested}</div>
                    </div>
                    <div>
                      <div className="text-kryptex-light">Expected Returns</div>
                      <div className="text-green-400 font-medium">{investment.returns}</div>
                    </div>
                  </div>
                  <div className="w-full bg-kryptex-card/30 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-purple h-2 rounded-full transition-all duration-500"
                      style={{ width: `${investment.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-kryptex-light">Progress: {investment.progress}%</span>
                    <span className="text-kryptex-cyan">{investment.timeLeft}</span>
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
            <button className="text-xs text-kryptex-cyan hover:text-kryptex-green font-medium">View All →</button>
          </div>

          {isLoading ? (
            <div className="space-y-3">
              <div className="h-16 bg-kryptex-card/50 rounded-xl animate-pulse"></div>
              <div className="h-16 bg-kryptex-card/50 rounded-xl animate-pulse"></div>
              <div className="h-16 bg-kryptex-card/50 rounded-xl animate-pulse"></div>
            </div>
          ) : (
            <div className="space-y-3">
              {recentTransactions.map((transaction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass border border-kryptex-card/50 rounded-xl p-4 flex items-center hover-glow"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      transaction.type === "deposit"
                        ? "bg-kryptex-cyan/20"
                        : transaction.type === "withdrawal"
                          ? "bg-red-400/20"
                          : "bg-green-400/20"
                    }`}
                  >
                    {transaction.type === "deposit" && <ArrowDown size={20} className="text-kryptex-cyan" />}
                    {transaction.type === "withdrawal" && <ArrowUp size={20} className="text-red-400" />}
                    {transaction.type === "profit" && <TrendingUp size={20} className="text-green-400" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <span className="font-medium capitalize text-white">{transaction.type}</span>
                        <span className="text-xs text-kryptex-light ml-2">{transaction.crypto}</span>
                      </div>
                      <span
                        className={`font-semibold ${
                          transaction.type === "deposit"
                            ? "text-kryptex-cyan"
                            : transaction.type === "withdrawal"
                              ? "text-red-400"
                              : "text-green-400"
                        }`}
                      >
                        {transaction.type === "withdrawal" ? "-" : "+"}
                        {transaction.amount}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-kryptex-light">
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