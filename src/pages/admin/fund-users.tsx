"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, DollarSign, Plus, Minus } from "lucide-react"
import AdminSidebar from "../../components/AdminSidebar"
import Input from "../../components/ui/Input"
import Button from "../../components/ui/Button"

export default function AdminFundUsersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [fundingType, setFundingType] = useState("balance")
  const [fundingAmount, setFundingAmount] = useState("")
  const [fundingAction, setFundingAction] = useState("add")

  const users = [
    {
      id: 1,
      name: "Alex Thompson",
      email: "alex.thompson@email.com",
      balance: 12450.8,
      withdrawableBalance: 8750.0,
      totalProfits: 3200.5,
      totalDeposits: 15000.0,
      status: "active",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      balance: 5680.25,
      withdrawableBalance: 4500.0,
      totalProfits: 1180.25,
      totalDeposits: 8000.0,
      status: "active",
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael.chen@email.com",
      balance: 890.5,
      withdrawableBalance: 500.0,
      totalProfits: 390.5,
      totalDeposits: 2000.0,
      status: "suspended",
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      email: "emma.rodriguez@email.com",
      balance: 15230.75,
      withdrawableBalance: 12000.0,
      totalProfits: 5230.75,
      totalDeposits: 20000.0,
      status: "active",
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david.wilson@email.com",
      balance: 0.0,
      withdrawableBalance: 0.0,
      totalProfits: 0.0,
      totalDeposits: 1500.0,
      status: "inactive",
    },
  ]

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  const handleFundUser = (user: any) => {
    setSelectedUser(user)
  }

  const handleSubmitFunding = () => {
    if (!fundingAmount || Number.parseFloat(fundingAmount) <= 0) {
      alert("Please enter a valid amount")
      return
    }

    const amount = Number.parseFloat(fundingAmount)
    const action = fundingAction === "add" ? "Added" : "Deducted"

    alert(
      `${action} $${amount.toFixed(2)} ${fundingAction === "add" ? "to" : "from"} ${selectedUser.name}'s ${fundingType}`,
    )

    setSelectedUser(null)
    setFundingAmount("")
    setFundingType("balance")
    setFundingAction("add")
  }

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white flex">
      <AdminSidebar />

      <div className="flex-1 lg:ml-0 ml-16">
        <div className="p-4 lg:p-6">
          {/* Header */}
          <div className="mb-6 lg:mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold mb-2">Fund Users</h1>
            <p className="text-gray-400">Manage user balances and funds</p>
          </div>

          {/* Search */}
          <div className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-4 lg:p-6 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search users by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 overflow-hidden">
            <div className="overflow-x-auto">
              <div className="min-w-[900px]">
                <table className="w-full">
                  <thead className="bg-[rgba(0,0,0,0.2)]">
                    <tr>
                      <th className="text-left p-3 lg:p-4 font-semibold">User</th>
                      <th className="text-left p-3 lg:p-4 font-semibold">Balance</th>
                      <th className="text-left p-3 lg:p-4 font-semibold">Withdrawable</th>
                      <th className="text-left p-3 lg:p-4 font-semibold">Total Profits</th>
                      <th className="text-left p-3 lg:p-4 font-semibold">Total Deposits</th>
                      <th className="text-left p-3 lg:p-4 font-semibold">Status</th>
                      <th className="text-left p-3 lg:p-4 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user, index) => (
                      <motion.tr
                        key={user.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="border-t border-[#00f0ff]/10 hover:bg-[rgba(0,0,0,0.1)]"
                      >
                        <td className="p-3 lg:p-4">
                          <div>
                            <div className="font-medium text-sm lg:text-base">{user.name}</div>
                            <div className="text-xs lg:text-sm text-gray-400">{user.email}</div>
                          </div>
                        </td>
                        <td className="p-3 lg:p-4">
                          <div className="font-bold text-[#00f0ff] text-sm lg:text-base">
                            ${user.balance.toFixed(2)}
                          </div>
                        </td>
                        <td className="p-3 lg:p-4">
                          <div className="font-bold text-[#4ade80] text-sm lg:text-base">
                            ${user.withdrawableBalance.toFixed(2)}
                          </div>
                        </td>
                        <td className="p-3 lg:p-4">
                          <div className="font-bold text-[#ffd700] text-sm lg:text-base">
                            ${user.totalProfits.toFixed(2)}
                          </div>
                        </td>
                        <td className="p-3 lg:p-4">
                          <div className="font-bold text-[#e91e63] text-sm lg:text-base">
                            ${user.totalDeposits.toFixed(2)}
                          </div>
                        </td>
                        <td className="p-3 lg:p-4">
                          <span
                            className={`px-2 lg:px-3 py-1 rounded-full text-xs font-medium ${
                              user.status === "active"
                                ? "bg-[#4ade80]/20 text-[#4ade80]"
                                : user.status === "suspended"
                                  ? "bg-[#e91e63]/20 text-[#e91e63]"
                                  : "bg-gray-500/20 text-gray-400"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="p-3 lg:p-4">
                          <Button
                            onClick={() => handleFundUser(user)}
                            className="bg-[#00f0ff] hover:bg-[#00d4e6] text-black text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2"
                          >
                            <DollarSign size={14} className="mr-1 lg:mr-2" />
                            Fund User
                          </Button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-6">
            <div className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-3 lg:p-4 text-center">
              <div className="text-xl lg:text-2xl font-bold text-[#00f0ff]">
                ${users.reduce((sum, u) => sum + u.balance, 0).toFixed(0)}
              </div>
              <div className="text-xs lg:text-sm text-gray-400">Total Balance</div>
            </div>
            <div className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-3 lg:p-4 text-center">
              <div className="text-xl lg:text-2xl font-bold text-[#4ade80]">
                ${users.reduce((sum, u) => sum + u.withdrawableBalance, 0).toFixed(0)}
              </div>
              <div className="text-xs lg:text-sm text-gray-400">Total Withdrawable</div>
            </div>
            <div className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-3 lg:p-4 text-center">
              <div className="text-xl lg:text-2xl font-bold text-[#ffd700]">
                ${users.reduce((sum, u) => sum + u.totalProfits, 0).toFixed(0)}
              </div>
              <div className="text-xs lg:text-sm text-gray-400">Total Profits</div>
            </div>
            <div className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-3 lg:p-4 text-center">
              <div className="text-xl lg:text-2xl font-bold text-[#e91e63]">
                ${users.reduce((sum, u) => sum + u.totalDeposits, 0).toFixed(0)}
              </div>
              <div className="text-xs lg:text-sm text-gray-400">Total Deposits</div>
            </div>
          </div>
        </div>
      </div>

      {/* Fund User Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-[rgba(26,33,58,0.9)] backdrop-blur-md rounded-xl border border-[#00f0ff]/20 p-4 lg:p-6 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-4 lg:mb-6">
              <h2 className="text-xl lg:text-2xl font-bold">Fund User</h2>
              <button onClick={() => setSelectedUser(null)} className="text-gray-400 hover:text-white text-2xl">
                ×
              </button>
            </div>

            <div className="space-y-4 mb-4 lg:mb-6">
              <div>
                <label className="text-sm text-gray-400">User:</label>
                <div className="font-medium text-lg">{selectedUser.name}</div>
                <div className="text-sm text-gray-400">{selectedUser.email}</div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-[rgba(0,0,0,0.2)] rounded-lg p-3">
                  <div className="text-gray-400">Current Balance</div>
                  <div className="font-bold text-[#00f0ff]">${selectedUser.balance.toFixed(2)}</div>
                </div>
                <div className="bg-[rgba(0,0,0,0.2)] rounded-lg p-3">
                  <div className="text-gray-400">Withdrawable</div>
                  <div className="font-bold text-[#4ade80]">${selectedUser.withdrawableBalance.toFixed(2)}</div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Action:</label>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setFundingAction("add")}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      fundingAction === "add"
                        ? "bg-[#4ade80] text-black"
                        : "bg-[rgba(0,0,0,0.2)] text-gray-400 hover:text-white"
                    }`}
                  >
                    <Plus size={16} className="inline mr-1" />
                    Add Funds
                  </button>
                  <button
                    onClick={() => setFundingAction("deduct")}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      fundingAction === "deduct"
                        ? "bg-[#e91e63] text-white"
                        : "bg-[rgba(0,0,0,0.2)] text-gray-400 hover:text-white"
                    }`}
                  >
                    <Minus size={16} className="inline mr-1" />
                    Deduct Funds
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Fund Type:</label>
                <select
                  value={fundingType}
                  onChange={(e) => setFundingType(e.target.value)}
                  className="w-full px-3 py-2 bg-[rgba(0,0,0,0.2)] border border-[#00f0ff]/30 rounded-lg text-white focus:outline-none focus:border-[#00f0ff]"
                >
                  <option value="balance">Balance</option>
                  <option value="withdrawableBalance">Withdrawable Balance</option>
                  <option value="totalProfits">Total Profits</option>
                  <option value="totalDeposits">Total Deposits</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Amount ($):</label>
                <Input
                  type="number"
                  value={fundingAmount}
                  onChange={(e) => setFundingAmount(e.target.value)}
                  placeholder="Enter amount"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <Button
                onClick={() => setSelectedUser(null)}
                className="flex-1 bg-transparent border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmitFunding}
                className={`flex-1 ${
                  fundingAction === "add"
                    ? "bg-[#4ade80] hover:bg-[#3bc470] text-black"
                    : "bg-[#e91e63] hover:bg-[#d91e63] text-white"
                }`}
              >
                {fundingAction === "add" ? "Add Funds" : "Deduct Funds"}
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
