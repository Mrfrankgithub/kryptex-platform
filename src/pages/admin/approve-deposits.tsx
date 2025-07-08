"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Search, Check, X, Eye } from "lucide-react"
import AdminSidebar from "../../components/AdminSidebar"
import Button from "../../components/ui/Button"

export default function AdminApproveDepositsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDeposit, setSelectedDeposit] = useState(null)

  const deposits = [
    {
      id: 1,
      userName: "Alex Thompson",
      userEmail: "alex.thompson@email.com",
      amount: 1500.0,
      plan: "STANDARD PLAN",
      paymentMethod: "Bitcoin",
      transactionHash: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      date: "2024-01-08",
      time: "14:30",
      status: "pending",
    },
    {
      id: 2,
      userName: "Sarah Johnson",
      userEmail: "sarah.johnson@email.com",
      amount: 800.0,
      plan: "BASIC PLAN",
      paymentMethod: "USDT",
      transactionHash: "TQn9Y2khEsLJW1ChVWFMSMeRDow5oREqjK",
      date: "2024-01-08",
      time: "11:15",
      status: "approved",
    },
    {
      id: 3,
      userName: "Michael Chen",
      userEmail: "michael.chen@email.com",
      amount: 5000.0,
      plan: "EXTENDED PLAN",
      paymentMethod: "Ethereum",
      transactionHash: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      date: "2024-01-07",
      time: "16:45",
      status: "declined",
    },
  ]

  const filteredDeposits = deposits.filter((deposit) =>
    deposit.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    deposit.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
    deposit.transactionHash.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleApprove = (id) => {
    alert(`Approved deposit with ID: ${id}`)
  }

  const handleDecline = (id) => {
    alert(`Declined deposit with ID: ${id}`)
  }

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white flex">
      <AdminSidebar />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white pl-10">Approve Deposits</h1>
            <p className="text-gray-400 mt-1">Review and manage user deposit requests</p>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, or hash..."
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Plan</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Method</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Date</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filteredDeposits.map((d, index) => (
                  <motion.tr
                    key={d.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-white/5 transition"
                  >
                    <td className="px-6 py-4">
                      <div className="font-medium text-white text-sm">{d.userName}</div>
                      <div className="text-gray-400 text-sm">{d.userEmail}</div>
                    </td>
                    <td className="px-6 py-4 font-bold text-[#00f0ff] text-sm">${d.amount.toFixed(2)}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-2 py-1 bg-[#4ade80]/20 text-[#4ade80] rounded-full text-xs font-medium">{d.plan}</span>
                    </td>
                    <td className="px-6 py-4 text-sm">{d.paymentMethod}</td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          d.status === "pending"
                            ? "bg-[#ffd700]/20 text-[#ffd700]"
                            : d.status === "approved"
                            ? "bg-[#4ade80]/20 text-[#4ade80]"
                            : "bg-[#e91e63]/20 text-[#e91e63]"
                        }`}
                      >
                        {d.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">{d.date}</td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        onClick={() => setSelectedDeposit(d)}
                        className="p-2 rounded-md hover:bg-[#00f0ff]/30 text-[#00f0ff]"
                        title="View"
                      >
                        <Eye size={16} />
                      </button>
                      {d.status === "pending" && (
                        <>
                          <button
                            onClick={() => handleApprove(d.id)}
                            className="p-2 rounded-md hover:bg-[#4ade80]/30 text-[#4ade80]"
                            title="Approve"
                          >
                            <Check size={16} />
                          </button>
                          <button
                            onClick={() => handleDecline(d.id)}
                            className="p-2 rounded-md hover:bg-[#e91e63]/30 text-[#e91e63]"
                            title="Decline"
                          >
                            <X size={16} />
                          </button>
                        </>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>

            {filteredDeposits.length === 0 && (
              <div className="text-center py-10 text-gray-400">No deposit records found.</div>
            )}
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[rgba(26,33,58,0.6)] border border-[#00f0ff]/20 rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-[#ffd700]">
                {deposits.filter((d) => d.status === "pending").length}
              </div>
              <div className="text-gray-400 text-sm">Pending</div>
            </div>
            <div className="bg-[rgba(26,33,58,0.6)] border border-[#00f0ff]/20 rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-[#4ade80]">
                {deposits.filter((d) => d.status === "approved").length}
              </div>
              <div className="text-gray-400 text-sm">Approved</div>
            </div>
            <div className="bg-[rgba(26,33,58,0.6)] border border-[#00f0ff]/20 rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-[#e91e63]">
                {deposits.filter((d) => d.status === "declined").length}
              </div>
              <div className="text-gray-400 text-sm">Declined</div>
            </div>
            <div className="bg-[rgba(26,33,58,0.6)] border border-[#00f0ff]/20 rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-[#00f0ff]">
                $
                {deposits
                  .filter((d) => d.status === "pending")
                  .reduce((acc, d) => acc + d.amount, 0)
                  .toFixed(0)}
              </div>
              <div className="text-gray-400 text-sm">Pending Amount</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
