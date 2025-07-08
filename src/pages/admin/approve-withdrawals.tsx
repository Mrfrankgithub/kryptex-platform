"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Check, X, Eye } from "lucide-react"
import AdminSidebar from "../../components/AdminSidebar"
import Input from "../../components/ui/Input"
import Button from "../../components/ui/Button"

export default function AdminApproveWithdrawalsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedWithdrawal, setSelectedWithdrawal] = useState<any>(null)

  const withdrawals = [
    {
      id: 1,
      userName: "Alex Thompson",
      userEmail: "alex.thompson@email.com",
      amount: 2500.0,
      method: "Bitcoin",
      walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      date: "2024-01-08",
      time: "14:30",
      status: "pending",
      fee: 0.0,
    },
    {
      id: 2,
      userName: "Sarah Johnson",
      userEmail: "sarah.johnson@email.com",
      amount: 1200.0,
      method: "USDT",
      walletAddress: "TQn9Y2khEsLJW1ChVWFMSMeRDow5oREqjK",
      date: "2024-01-08",
      time: "11:15",
      status: "pending",
      fee: 0.0,
    },
    {
      id: 3,
      userName: "Michael Chen",
      userEmail: "michael.chen@email.com",
      amount: 800.0,
      method: "Ethereum",
      walletAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      date: "2024-01-07",
      time: "16:45",
      status: "approved",
      fee: 0.0,
    },
    {
      id: 4,
      userName: "Emma Rodriguez",
      userEmail: "emma.rodriguez@email.com",
      amount: 3500.0,
      method: "Litecoin",
      walletAddress: "LTC1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      date: "2024-01-07",
      time: "09:20",
      status: "declined",
      fee: 0.0,
    },
    {
      id: 5,
      userName: "David Wilson",
      userEmail: "david.wilson@email.com",
      amount: 500.0,
      method: "Bitcoin",
      walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      date: "2024-01-06",
      time: "13:10",
      status: "pending",
      fee: 0.0,
    },
  ]

  const filteredWithdrawals = withdrawals.filter((withdrawal) => {
    const matchesSearch =
      withdrawal.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      withdrawal.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      withdrawal.walletAddress.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || withdrawal.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleApprove = (withdrawalId: number) => {
    if (confirm("Are you sure you want to approve this withdrawal?")) {
      console.log(`Approving withdrawal ${withdrawalId}`)
      // Here you would approve the withdrawal
      alert("Withdrawal approved successfully!")
    }
  }

  const handleDecline = (withdrawalId: number) => {
    if (confirm("Are you sure you want to decline this withdrawal?")) {
      console.log(`Declining withdrawal ${withdrawalId}`)
      // Here you would decline the withdrawal
      alert("Withdrawal declined!")
    }
  }

  const handleViewDetails = (withdrawal: any) => {
    setSelectedWithdrawal(withdrawal)
  }

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white flex">
      <AdminSidebar />

      <div className="flex-1 lg:ml-0 ml-16">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Approve Withdrawals</h1>
            <p className="text-gray-400">Review and approve user withdrawal requests</p>
          </div>

          {/* Filters */}
          <div className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-6 mb-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search by name, email, or wallet address..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 bg-[rgba(0,0,0,0.2)] border border-[#00f0ff]/30 rounded-lg text-white focus:outline-none focus:border-[#00f0ff]"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="declined">Declined</option>
                </select>
              </div>
            </div>
          </div>

          {/* Withdrawals Table */}
          <div className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full" style={{ maxWidth: 500}} scroll={{ x: true }}>
                <thead className="bg-[rgba(0,0,0,0.2)]">
                  <tr>
                    <th className="text-left p-4 font-semibold">User</th>
                    <th className="text-left p-4 font-semibold">Amount</th>
                    <th className="text-left p-4 font-semibold">Method</th>
                    <th className="text-left p-4 font-semibold">Wallet Address</th>
                    <th className="text-left p-4 font-semibold">Status</th>
                    <th className="text-left p-4 font-semibold">Date</th>
                    <th className="text-left p-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredWithdrawals.map((withdrawal, index) => (
                    <motion.tr
                      key={withdrawal.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="border-t border-[#00f0ff]/10 hover:bg-[rgba(0,0,0,0.1)]"
                    >
                      <td className="p-4">
                        <div>
                          <div className="font-medium">{withdrawal.userName}</div>
                          <div className="text-sm text-gray-400">{withdrawal.userEmail}</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-[#e91e63]">${withdrawal.amount.toFixed(2)}</div>
                        <div className="text-xs text-gray-400">Fee: ${withdrawal.fee.toFixed(2)}</div>
                      </td>
                      <td className="p-4">
                        <div className="font-medium">{withdrawal.method}</div>
                      </td>
                      <td className="p-4">
                        <div className="text-xs text-gray-400 font-mono truncate max-w-xs">
                          {withdrawal.walletAddress}
                        </div>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            withdrawal.status === "pending"
                              ? "bg-[#ffd700]/20 text-[#ffd700]"
                              : withdrawal.status === "approved"
                                ? "bg-[#4ade80]/20 text-[#4ade80]"
                                : "bg-[#e91e63]/20 text-[#e91e63]"
                          }`}
                        >
                          {withdrawal.status}
                        </span>
                      </td>
                      <td className="p-4 text-gray-400">
                        <div>{withdrawal.date}</div>
                        <div className="text-xs">{withdrawal.time}</div>
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleViewDetails(withdrawal)}
                            className="p-2 bg-[#00f0ff]/20 rounded-lg hover:bg-[#00f0ff]/30 transition-colors"
                            title="View Details"
                          >
                            <Eye size={16} className="text-[#00f0ff]" />
                          </button>
                          {withdrawal.status === "pending" && (
                            <>
                              <button
                                onClick={() => handleApprove(withdrawal.id)}
                                className="p-2 bg-[#4ade80]/20 rounded-lg hover:bg-[#4ade80]/30 transition-colors"
                                title="Approve"
                              >
                                <Check size={16} className="text-[#4ade80]" />
                              </button>
                              <button
                                onClick={() => handleDecline(withdrawal.id)}
                                className="p-2 bg-[#e91e63]/20 rounded-lg hover:bg-[#e91e63]/30 transition-colors"
                                title="Decline"
                              >
                                <X size={16} className="text-[#e91e63]" />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            <div className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-4 text-center">
              <div className="text-2xl font-bold text-[#ffd700]">
                {withdrawals.filter((w) => w.status === "pending").length}
              </div>
              <div className="text-sm text-gray-400">Pending</div>
            </div>
            <div className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-4 text-center">
              <div className="text-2xl font-bold text-[#4ade80]">
                {withdrawals.filter((w) => w.status === "approved").length}
              </div>
              <div className="text-sm text-gray-400">Approved</div>
            </div>
            <div className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-4 text-center">
              <div className="text-2xl font-bold text-[#e91e63]">
                {withdrawals.filter((w) => w.status === "declined").length}
              </div>
              <div className="text-sm text-gray-400">Declined</div>
            </div>
            <div className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-4 text-center">
              <div className="text-2xl font-bold text-[#e91e63]">
                $
                {withdrawals
                  .filter((w) => w.status === "pending")
                  .reduce((sum, w) => sum + w.amount, 0)
                  .toFixed(0)}
              </div>
              <div className="text-sm text-gray-400">Pending Amount</div>
            </div>
          </div>
        </div>
      </div>

      {/* Withdrawal Details Modal */}
      {selectedWithdrawal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-[rgba(26,33,58,0.9)] backdrop-blur-md rounded-xl border border-[#00f0ff]/20 p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Withdrawal Details</h2>
              <button onClick={() => setSelectedWithdrawal(null)} className="text-gray-400 hover:text-white">
                ×
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400">User:</label>
                  <div className="font-medium">{selectedWithdrawal.userName}</div>
                  <div className="text-sm text-gray-400">{selectedWithdrawal.userEmail}</div>
                </div>
                <div>
                  <label className="text-sm text-gray-400">Amount:</label>
                  <div className="text-2xl font-bold text-[#e91e63]">${selectedWithdrawal.amount.toFixed(2)}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400">Method:</label>
                  <div className="font-medium">{selectedWithdrawal.method}</div>
                </div>
                <div>
                  <label className="text-sm text-gray-400">Fee:</label>
                  <div className="font-medium">${selectedWithdrawal.fee.toFixed(2)}</div>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-400">Wallet Address:</label>
                <div className="bg-[rgba(0,0,0,0.2)] rounded-lg p-3 mt-1 font-mono text-sm break-all">
                  {selectedWithdrawal.walletAddress}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400">Date:</label>
                  <div>
                    {selectedWithdrawal.date} at {selectedWithdrawal.time}
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-400">Status:</label>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      selectedWithdrawal.status === "pending"
                        ? "bg-[#ffd700]/20 text-[#ffd700]"
                        : selectedWithdrawal.status === "approved"
                          ? "bg-[#4ade80]/20 text-[#4ade80]"
                          : "bg-[#e91e63]/20 text-[#e91e63]"
                    }`}
                  >
                    {selectedWithdrawal.status}
                  </span>
                </div>
              </div>
            </div>

            {selectedWithdrawal.status === "pending" && (
              <div className="flex space-x-3">
                <Button
                  onClick={() => {
                    handleDecline(selectedWithdrawal.id)
                    setSelectedWithdrawal(null)
                  }}
                  className="flex-1 bg-[#e91e63] hover:bg-[#d91e63] text-white"
                >
                  Decline Withdrawal
                </Button>
                <Button
                  onClick={() => {
                    handleApprove(selectedWithdrawal.id)
                    setSelectedWithdrawal(null)
                  }}
                  className="flex-1 bg-[#4ade80] hover:bg-[#3bc470] text-black"
                >
                  Approve Withdrawal
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  )
}
