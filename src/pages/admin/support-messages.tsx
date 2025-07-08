"use client"

import React, { useState, useMemo } from "react"
import { Search, Trash2 } from "lucide-react"
import AdminSidebar from "../../components/AdminSidebar"

const initialTickets = [
  {
    id: 1,
    name: "Alex Thompson",
    email: "alex.thompson@email.com",
    subject: "Account Issue",
    status: "Open",
    date: "2024-07-01",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    subject: "Payment Not Received",
    status: "Pending",
    date: "2024-07-02",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    subject: "Login Problem",
    status: "Closed",
    date: "2024-07-03",
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    email: "emma.rodriguez@email.com",
    subject: "Verification Failed",
    status: "Open",
    date: "2024-07-05",
  },
]

export default function SupportPage() {
  const [tickets, setTickets] = useState(initialTickets)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTickets = useMemo(() => {
    if (!searchTerm) return tickets
    return tickets.filter(
      (ticket) =>
        ticket.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.subject.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [tickets, searchTerm])

  const handleDeleteTicket = (ticketId) => {
    if (confirm("Are you sure you want to delete this ticket?")) {
      setTickets((prev) => prev.filter((ticket) => ticket.id !== ticketId))
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
            <h1 className="text-3xl font-bold text-white pl-10">Support Tickets</h1>
            <p className="text-gray-400 mt-1">View and manage user support requests.</p>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email or subject..."
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filteredTickets.map((ticket) => (
                  <tr key={ticket.id} className="hover:bg-white/5 transition">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">{ticket.name}</div>
                      <div className="text-sm text-gray-400">{ticket.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300">{ticket.subject}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`text-sm font-medium ${
                          ticket.status === "Open"
                            ? "text-yellow-400"
                            : ticket.status === "Closed"
                            ? "text-red-400"
                            : "text-blue-400"
                        }`}
                      >
                        {ticket.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-400">{ticket.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        onClick={() => handleDeleteTicket(ticket.id)}
                        className="p-2 rounded-md hover:bg-[#e91e63]/30 text-[#e91e63] transition-colors"
                        title="Delete Ticket"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredTickets.length === 0 && (
              <div className="text-center py-10 text-gray-400">No tickets found.</div>
            )}
          </div>

          {/* Summary */}
          <div className="mt-6 bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/20 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-400">Total Tickets</div>
                <div className="text-xl font-bold text-[#00f0ff]">{tickets.length}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Open Tickets</div>
                <div className="text-xl font-bold text-[#facc15]">
                  {tickets.filter((t) => t.status === "Open").length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
