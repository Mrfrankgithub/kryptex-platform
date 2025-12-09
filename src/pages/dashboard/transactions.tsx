// src/pages/dashboard/transactions.tsx
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  ArrowUp, 
  ArrowDown, 
  TrendingUp, 
  Search, 
  Filter,  
  Eye,
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  XCircle
} from "lucide-react"
import DashboardBottomBar from "../../components/DashboardBottomBar"
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import ReceiptModal from "../../components/ReceiptModal"

interface Transaction {
  id: string
  type: "deposit" | "withdrawal" | "profit"
  amount: string
  currency: string
  date: string
  time: string
  status: "completed" | "pending" | "failed"
  paymentMethod: string
  walletAddress?: string
  plan?: string
  transactionId: string
}

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState<string>("all")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null)
  const [showReceipt, setShowReceipt] = useState(false)

  // Mock transactions data
  const transactions: Transaction[] = [
    {
      id: "1",
      type: "deposit",
      amount: "1000.00",
      currency: "USD",
      date: "2024-01-15",
      time: "14:30:45",
      status: "completed",
      paymentMethod: "Bitcoin",
      walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      plan: "STANDARD PLAN",
      transactionId: "TRX78234567"
    },
    {
      id: "2",
      type: "profit",
      amount: "300.00",
      currency: "USD",
      date: "2024-01-16",
      time: "09:15:22",
      status: "completed",
      paymentMethod: "System",
      plan: "STANDARD PLAN",
      transactionId: "TRX78234568"
    },
    {
      id: "3",
      type: "withdrawal",
      amount: "500.00",
      currency: "USD",
      date: "2024-01-17",
      time: "16:45:10",
      status: "pending",
      paymentMethod: "USDT",
      walletAddress: "TQn9Y2khEsLJW1ChVWFMSMeRDow5oREqjK",
      transactionId: "TRX78234569"
    },
    {
      id: "4",
      type: "deposit",
      amount: "2500.00",
      currency: "USD",
      date: "2024-01-18",
      time: "11:20:33",
      status: "completed",
      paymentMethod: "Ethereum",
      walletAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      plan: "VIP PLAN",
      transactionId: "TRX78234570"
    },
    {
      id: "5",
      type: "withdrawal",
      amount: "750.00",
      currency: "USD",
      date: "2024-01-19",
      time: "13:55:18",
      status: "failed",
      paymentMethod: "Bitcoin",
      walletAddress: "bc1qtestaddresskjhgfdsa",
      transactionId: "TRX78234571"
    },
    {
      id: "6",
      type: "profit",
      amount: "150.00",
      currency: "USD",
      date: "2024-01-20",
      time: "08:10:05",
      status: "completed",
      paymentMethod: "System",
      plan: "BASIC PLAN",
      transactionId: "TRX78234572"
    },
    {
      id: "7",
      type: "deposit",
      amount: "500.00",
      currency: "USD",
      date: "2024-01-21",
      time: "19:40:27",
      status: "pending",
      paymentMethod: "Litecoin",
      walletAddress: "LTC1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      plan: "BASIC PLAN",
      transactionId: "TRX78234573"
    },
    {
      id: "8",
      type: "withdrawal",
      amount: "1200.00",
      currency: "USD",
      date: "2024-01-22",
      time: "10:05:44",
      status: "completed",
      paymentMethod: "USDT",
      walletAddress: "TQn9Y2testaddresskjhg",
      transactionId: "TRX78234574"
    }
  ]

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = 
      transaction.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.amount.includes(searchTerm) ||
      transaction.paymentMethod.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesType = filterType === "all" || transaction.type === filterType
    const matchesStatus = filterStatus === "all" || transaction.status === filterStatus
    
    return matchesSearch && matchesType && matchesStatus
  })

  const handleViewReceipt = (transaction: Transaction) => {
    setSelectedTransaction(transaction)
    setShowReceipt(true)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle size={16} className="text-green-400" />
      case "pending":
        return <Clock size={16} className="text-kryptex-gold" />
      case "failed":
        return <XCircle size={16} className="text-red-400" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-400/20 text-green-400"
      case "pending":
        return "bg-kryptex-gold/20 text-kryptex-gold"
      case "failed":
        return "bg-red-400/20 text-red-400"
      default:
        return ""
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "deposit":
        return <ArrowDown size={16} className="text-kryptex-cyan" />
      case "withdrawal":
        return <ArrowUp size={16} className="text-red-400" />
      case "profit":
        return <TrendingUp size={16} className="text-green-400" />
      default:
        return null
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "deposit":
        return "bg-kryptex-cyan/20"
      case "withdrawal":
        return "bg-red-400/20"
      case "profit":
        return "bg-green-400/20"
      default:
        return ""
    }
  }

 
  return (
    <div className="min-h-screen bg-kryptex-dark text-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-kryptex-card/30 to-kryptex-dark/90 p-4 pt-6">
        <h1 className="text-2xl font-bold mb-2 text-white">Transactions</h1>
        <p className="text-kryptex-light text-sm">View and manage all your transactions</p>
      </div>

      <div className="p-4">
        {/* Search and Filter Bar */}
        <div className="glass border border-kryptex-cyan/10 rounded-xl p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-kryptex-light" />
                <Input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by Transaction ID, Amount, or Method"
                  className="pl-10 bg-kryptex-card/20 border-kryptex-card/50 focus:border-kryptex-cyan text-white"
                />
              </div>
            </div>

            {/* Type Filter */}
            <div className="flex gap-2">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="bg-kryptex-card/20 border border-kryptex-card/50 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-kryptex-cyan"
              >
                <option value="all">All Types</option>
                <option value="deposit">Deposits</option>
                <option value="withdrawal">Withdrawals</option>
                <option value="profit">Profits</option>
              </select>

              {/* Status Filter */}
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-kryptex-card/20 border border-kryptex-card/50 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-kryptex-cyan"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>

             
            </div>
          </div>
        </div>

        {/* Transactions Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="glass border border-kryptex-cyan/10 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-kryptex-light text-sm">Total Transactions</p>
                <p className="text-2xl font-bold text-white">{transactions.length}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-kryptex-cyan/20 flex items-center justify-center">
                <DollarSign className="text-kryptex-cyan" size={24} />
              </div>
            </div>
          </div>

          <div className="glass border border-kryptex-cyan/10 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-kryptex-light text-sm">Total Deposited</p>
                <p className="text-2xl font-bold text-white">$4,000.00</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center">
                <ArrowDown className="text-green-400" size={24} />
              </div>
            </div>
          </div>

          <div className="glass border border-kryptex-cyan/10 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-kryptex-light text-sm">Total Withdrawn</p>
                <p className="text-2xl font-bold text-white">$2,450.00</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-red-400/20 flex items-center justify-center">
                <ArrowUp className="text-red-400" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="glass border border-kryptex-cyan/10 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-kryptex-card/50">
                  <th className="text-left p-4 text-kryptex-light font-medium">Transaction ID</th>
                  <th className="text-left p-4 text-kryptex-light font-medium">Type</th>
                  <th className="text-left p-4 text-kryptex-light font-medium">Amount</th>
                  <th className="text-left p-4 text-kryptex-light font-medium">Date & Time</th>
                  <th className="text-left p-4 text-kryptex-light font-medium">Status</th>
                  <th className="text-left p-4 text-kryptex-light font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((transaction) => (
                    <motion.tr
                      key={transaction.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="border-b border-kryptex-card/30 hover:bg-kryptex-card/20 transition-colors"
                    >
                      <td className="p-4">
                        <code className="text-sm text-white font-mono">{transaction.transactionId}</code>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-full ${getTypeColor(transaction.type)} flex items-center justify-center`}>
                            {getTypeIcon(transaction.type)}
                          </div>
                          <span className="text-white capitalize">{transaction.type}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className={`text-lg font-bold ${
                            transaction.type === 'withdrawal' ? 'text-red-400' : 
                            transaction.type === 'profit' ? 'text-green-400' : 'text-white'
                          }`}>
                            {transaction.type === 'withdrawal' ? '-' : '+'}${transaction.amount}
                          </span>
                          <span className="text-kryptex-light">{transaction.currency}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-kryptex-light" />
                          <span className="text-white">{transaction.date}</span>
                          <span className="text-kryptex-light">{transaction.time}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(transaction.status)}
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                            {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <Button
                          onClick={() => handleViewReceipt(transaction)}
                          className="glass border border-kryptex-cyan text-kryptex-cyan hover:bg-kryptex-cyan/10 flex items-center gap-2"
                        >
                          <Eye size={14} />
                          View Receipt
                        </Button>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="p-8 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-kryptex-card/20 rounded-full flex items-center justify-center mb-4">
                          <Search className="text-kryptex-light" size={24} />
                        </div>
                        <p className="text-kryptex-light">No transactions found</p>
                        <p className="text-sm text-kryptex-light/70 mt-1">Try adjusting your search or filters</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <p className="text-kryptex-light text-sm">
            Showing {filteredTransactions.length} of {transactions.length} transactions
          </p>
          <div className="flex gap-2">
            <Button className="glass border border-kryptex-card text-kryptex-light hover:text-white">
              Previous
            </Button>
            <Button className="bg-gradient-purple text-white">
              1
            </Button>
            <Button className="glass border border-kryptex-card text-kryptex-light hover:text-white">
              2
            </Button>
            <Button className="glass border border-kryptex-card text-kryptex-light hover:text-white">
              Next
            </Button>
          </div>
        </div>
      </div>

      {/* Receipt Modal */}
      {selectedTransaction && (
        <ReceiptModal
          isOpen={showReceipt}
          onClose={() => {
            setShowReceipt(false)
            setSelectedTransaction(null)
          }}
          type={selectedTransaction.type === "withdrawal" ? "withdrawal" : "investment"}
          amount={selectedTransaction.amount}
          currency={selectedTransaction.currency}
          transactionId={selectedTransaction.transactionId}
          paymentMethod={selectedTransaction.paymentMethod}
          walletAddress={selectedTransaction.walletAddress}
          plan={selectedTransaction.plan}
          processingTime="1-24 hours"
          transactionDate={`${selectedTransaction.date} ${selectedTransaction.time}`}
        />
      )}

      {/* Bottom Navigation */}
      <DashboardBottomBar />
    </div>
  )
}