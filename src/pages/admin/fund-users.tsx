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
      `${action} ₦${amount.toFixed(2)} ${fundingAction === "add" ? "to" : "from"} ${selectedUser.name}'s ${fundingType}`
    )

    setSelectedUser(null)
    setFundingAmount("")
    setFundingType("balance")
    setFundingAction("add")
  }

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white flex">
      <AdminSidebar />

      {/* Content Wrapper */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white pl-10">Fund Users</h1>
            <p className="text-gray-400 mt-1">Search and manage user funds from the table below.</p>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search users by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[rgba(26,33,58,0.8)] border border-gray-700 text-white rounded-lg pl-11 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
              />
            </div>
          </div>

          {/* Table */}
          <div className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/20 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Balance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Withdrawable</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Profits</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Deposits</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filteredUsers.map((user, index) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="hover:bg-white/5 transition"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">{user.name}</div>
                      <div className="text-sm text-gray-400">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[#00f0ff] font-semibold">₦{user.balance.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-[#4ade80] font-semibold">₦{user.withdrawableBalance.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-[#ffd700] font-semibold">₦{user.totalProfits.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-[#e91e63] font-semibold">₦{user.totalDeposits.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.status === "active"
                          ? "bg-[#4ade80]/20 text-[#4ade80]"
                          : user.status === "suspended"
                          ? "bg-[#e91e63]/20 text-[#e91e63]"
                          : "bg-gray-500/20 text-gray-400"
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Button
                        onClick={() => handleFundUser(user)}
                        className="bg-[#00f0ff] hover:bg-[#00d4e6] text-black px-4 py-2 text-xs font-semibold"
                      >
                        <DollarSign size={14} className="mr-1" />
                        Fund User
                      </Button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>

            {filteredUsers.length === 0 && (
              <div className="text-center py-10 text-gray-400">No users found.</div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-[rgba(26,33,58,0.9)] border border-[#00f0ff]/20 rounded-xl p-6 w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Fund {selectedUser.name}</h2>
              <button onClick={() => setSelectedUser(null)} className="text-white text-2xl">×</button>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Balance:</span>
                <span className="text-[#00f0ff] font-bold">₦{selectedUser.balance.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Withdrawable:</span>
                <span className="text-[#4ade80] font-bold">₦{selectedUser.withdrawableBalance.toFixed(2)}</span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setFundingAction("add")}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium ${
                    fundingAction === "add" ? "bg-[#4ade80] text-black" : "bg-[rgba(0,0,0,0.2)] text-gray-400"
                  }`}
                >
                  <Plus className="inline mr-1" size={16} /> Add
                </button>
                <button
                  onClick={() => setFundingAction("deduct")}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium ${
                    fundingAction === "deduct" ? "bg-[#e91e63] text-white" : "bg-[rgba(0,0,0,0.2)] text-gray-400"
                  }`}
                >
                  <Minus className="inline mr-1" size={16} /> Deduct
                </button>
              </div>

              <select
                value={fundingType}
                onChange={(e) => setFundingType(e.target.value)}
                className="w-full px-3 py-2 bg-[rgba(0,0,0,0.2)] border border-[#00f0ff]/30 rounded-lg text-white focus:outline-none"
              >
                <option value="balance">Balance</option>
                <option value="withdrawableBalance">Withdrawable</option>
                <option value="totalProfits">Total Profits</option>
                <option value="totalDeposits">Total Deposits</option>
              </select>

              <Input
                type="number"
                placeholder="Enter amount"
                value={fundingAmount}
                onChange={(e) => setFundingAmount(e.target.value)}
                min="0"
              />

              <div className="flex gap-2 mt-4">
                <Button
                  onClick={() => setSelectedUser(null)}
                  className="flex-1 border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmitFunding}
                  className={`flex-1 ${
                    fundingAction === "add"
                      ? "bg-[#4ade80] text-black hover:bg-[#3bc470]"
                      : "bg-[#e91e63] text-white hover:bg-[#d91e63]"
                  }`}
                >
                  {fundingAction === "add" ? "Add Funds" : "Deduct Funds"}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
