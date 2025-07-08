"use client"

import React, { useState, useMemo } from "react"
import { Search, Trash2 } from "lucide-react"
import AdminSidebar from "../../components/AdminSidebar"

const initialMembers = [
  { id: 1, name: "Alex Thompson", email: "alex.thompson@email.com", country: "USA", balance: 12450.80, joinDate: "2023-03-15" },
  { id: 2, name: "Sarah Johnson", email: "sarah.johnson@email.com", country: "Canada", balance: 5680.25, joinDate: "2023-04-22" },
  { id: 3, name: "Michael Chen", email: "michael.chen@email.com", country: "Singapore", balance: 890.50, joinDate: "2023-05-10" },
  { id: 4, name: "Emma Rodriguez", email: "emma.rodriguez@email.com", country: "Spain", balance: 15230.75, joinDate: "2023-06-18" },
  { id: 5, name: "David Wilson", email: "david.wilson@email.com", country: "UK", balance: 0.00, joinDate: "2023-07-02" },
]

export default function MembersPage() {
  const [members, setMembers] = useState(initialMembers)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredMembers = useMemo(() => {
    if (!searchTerm) return members
    return members.filter(
      (member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [members, searchTerm])

  const handleDeleteMember = (memberId) => {
    if (confirm("Are you sure you want to delete this member?")) {
      setMembers((prev) => prev.filter((member) => member.id !== memberId))
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white flex">
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white pl-10">Members</h1>
            <p className="text-gray-400 mt-1">A clean and responsive table of all registered members.</p>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or email..."
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Member</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Country</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Balance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Join Date</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-white/5 transition">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">{member.name}</div>
                      <div className="text-sm text-gray-400">{member.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300">{member.country}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-white">₦{member.balance.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-400">{member.joinDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        onClick={() => handleDeleteMember(member.id)}
                        className="p-2 rounded-md hover:bg-[#e91e63]/30 text-[#e91e63] transition-colors"
                        title="Delete Member"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredMembers.length === 0 && (
              <div className="text-center py-10 text-gray-400">No members found.</div>
            )}
          </div>

          {/* Summary */}
          <div className="mt-6 bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/20 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-400">Total Members</div>
                <div className="text-xl font-bold text-[#00f0ff]">{members.length}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Active Members</div>
                <div className="text-xl font-bold text-[#4ade80]">{members.length}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
