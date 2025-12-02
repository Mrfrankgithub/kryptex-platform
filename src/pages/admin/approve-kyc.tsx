// src/pages/admin/approve-kyc.tsx
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Check, X, Eye, FileText, User, Mail, Calendar, Shield } from "lucide-react"
import AdminSidebar from "../../components/AdminSidebar"

export default function AdminApproveKYCPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedKYC, setSelectedKYC] = useState<any>(null)
  const [showModal, setShowModal] = useState(false)

  // Mock KYC data
  const kycRequests = [
    {
      id: 1,
      userName: "Alex Thompson",
      userEmail: "alex.thompson@email.com",
      userId: "USR001",
      country: "United States",
      submittedDate: "2024-01-08",
      submittedTime: "14:30",
      status: "pending",
      documents: {
        idDocument: "https://example.com/id-document.jpg",
        selfie: "https://example.com/selfie.jpg",
        documentType: "Passport",
        documentNumber: "A12345678",
        expiryDate: "2028-12-31"
      }
    },
    {
      id: 2,
      userName: "Sarah Johnson",
      userEmail: "sarah.johnson@email.com",
      userId: "USR002",
      country: "United Kingdom",
      submittedDate: "2024-01-08",
      submittedTime: "11:15",
      status: "pending",
      documents: {
        idDocument: "https://example.com/driver-license.jpg",
        selfie: "https://example.com/selfie2.jpg",
        documentType: "Driver's License",
        documentNumber: "DL78901234",
        expiryDate: "2027-06-30"
      }
    },
    {
      id: 3,
      userName: "Michael Chen",
      userEmail: "michael.chen@email.com",
      userId: "USR003",
      country: "Canada",
      submittedDate: "2024-01-07",
      submittedTime: "16:45",
      status: "approved",
      documents: {
        idDocument: "https://example.com/id-document3.jpg",
        selfie: "https://example.com/selfie3.jpg",
        documentType: "Passport",
        documentNumber: "C98765432",
        expiryDate: "2029-03-15"
      }
    },
    {
      id: 4,
      userName: "Emma Rodriguez",
      userEmail: "emma.rodriguez@email.com",
      userId: "USR004",
      country: "Australia",
      submittedDate: "2024-01-07",
      submittedTime: "09:20",
      status: "declined",
      documents: {
        idDocument: "https://example.com/id-document4.jpg",
        selfie: "https://example.com/selfie4.jpg",
        documentType: "National ID",
        documentNumber: "AU123456",
        expiryDate: "2026-11-30"
      }
    },
    {
      id: 5,
      userName: "David Wilson",
      userEmail: "david.wilson@email.com",
      userId: "USR005",
      country: "Germany",
      submittedDate: "2024-01-06",
      submittedTime: "13:10",
      status: "pending",
      documents: {
        idDocument: "https://example.com/id-document5.jpg",
        selfie: "https://example.com/selfie5.jpg",
        documentType: "Passport",
        documentNumber: "G45678901",
        expiryDate: "2030-08-22"
      }
    },
  ]

  const filteredKYC = kycRequests.filter((kyc) =>
    kyc.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kyc.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kyc.userId.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleApprove = (id: number) => {
    if (confirm(`Approve KYC for user ID: ${id}?`)) {
      alert(`✅ KYC approved for user ID: ${id}`)
      // In real app, you would update the status via API
    }
  }

  const handleDecline = (id: number) => {
    if (confirm(`Decline KYC for user ID: ${id}?`)) {
      alert(`❌ KYC declined for user ID: ${id}`)
      // In real app, you would update the status via API
    }
  }

  const handleViewDocuments = (kyc: any) => {
    setSelectedKYC(kyc)
    setShowModal(true)
  }

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white flex">
      <AdminSidebar />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white pl-10">Approve KYC</h1>
            <p className="text-gray-400 mt-1">Review and manage user KYC verification requests</p>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, or user ID..."
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">User ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Country</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Submitted</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filteredKYC.map((kyc, index) => (
                  <motion.tr
                    key={kyc.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-white/5 transition"
                  >
                    <td className="px-6 py-4">
                      <div className="font-medium text-white text-sm">{kyc.userName}</div>
                      <div className="text-gray-400 text-sm">{kyc.userEmail}</div>
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-gray-300">{kyc.userId}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{kyc.country}</td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          kyc.status === "pending"
                            ? "bg-[#ffd700]/20 text-[#ffd700]"
                            : kyc.status === "approved"
                            ? "bg-[#4ade80]/20 text-[#4ade80]"
                            : "bg-[#e91e63]/20 text-[#e91e63]"
                        }`}
                      >
                        {kyc.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {kyc.submittedDate} <br /> <span className="text-xs">{kyc.submittedTime}</span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        onClick={() => handleViewDocuments(kyc)}
                        className="p-2 rounded-md hover:bg-[#00f0ff]/30 text-[#00f0ff]"
                        title="View Documents"
                      >
                        <Eye size={16} />
                      </button>
                      {kyc.status === "pending" && (
                        <>
                          <button
                            onClick={() => handleApprove(kyc.id)}
                            className="p-2 rounded-md hover:bg-[#4ade80]/30 text-[#4ade80]"
                            title="Approve"
                          >
                            <Check size={16} />
                          </button>
                          <button
                            onClick={() => handleDecline(kyc.id)}
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

            {filteredKYC.length === 0 && (
              <div className="text-center py-10 text-gray-400">No KYC requests found.</div>
            )}
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[rgba(26,33,58,0.6)] border border-[#00f0ff]/20 rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-[#ffd700]">
                {kycRequests.filter((k) => k.status === "pending").length}
              </div>
              <div className="text-gray-400 text-sm">Pending</div>
            </div>
            <div className="bg-[rgba(26,33,58,0.6)] border border-[#00f0ff]/20 rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-[#4ade80]">
                {kycRequests.filter((k) => k.status === "approved").length}
              </div>
              <div className="text-gray-400 text-sm">Approved</div>
            </div>
            <div className="bg-[rgba(26,33,58,0.6)] border border-[#00f0ff]/20 rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-[#e91e63]">
                {kycRequests.filter((k) => k.status === "declined").length}
              </div>
              <div className="text-gray-400 text-sm">Declined</div>
            </div>
            <div className="bg-[rgba(26,33,58,0.6)] border border-[#00f0ff]/20 rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-white">
                {kycRequests.length}
              </div>
              <div className="text-gray-400 text-sm">Total Requests</div>
            </div>
          </div>
        </div>
      </div>

      {/* View Documents Modal */}
      {showModal && selectedKYC && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-[rgba(26,33,58,0.95)] border border-[#00f0ff]/30 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Shield className="text-[#00f0ff] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-white">KYC Documents Review</h2>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            {/* User Information */}
            <div className="mb-6 p-4 bg-white/5 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <User size={18} className="text-[#00f0ff] mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">User Name</p>
                    <p className="font-medium text-white">{selectedKYC.userName}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="text-[#00f0ff] mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium text-white">{selectedKYC.userEmail}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FileText size={18} className="text-[#00f0ff] mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Document Type</p>
                    <p className="font-medium text-white">{selectedKYC.documents.documentType}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar size={18} className="text-[#00f0ff] mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Expiry Date</p>
                    <p className="font-medium text-white">{selectedKYC.documents.expiryDate}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* ID Document */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white flex items-center">
                  <FileText size={18} className="mr-2 text-[#00f0ff]" />
                  ID Document
                </h3>
                <div className="bg-black/30 rounded-lg border border-[#00f0ff]/20 p-4">
                  <img
                    src={selectedKYC.documents.idDocument}
                    alt="ID Document"
                    className="w-full h-64 object-contain rounded-lg mb-3"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/600x400/1a213a/00f0ff?text=ID+Document+Preview"
                    }}
                  />
                  <div className="text-center text-gray-400 text-sm">
                    {selectedKYC.documents.documentType}: {selectedKYC.documents.documentNumber}
                  </div>
                </div>
              </div>

              {/* Selfie */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white flex items-center">
                  <User size={18} className="mr-2 text-[#00f0ff]" />
                  Selfie with Document
                </h3>
                <div className="bg-black/30 rounded-lg border border-[#00f0ff]/20 p-4">
                  <img
                    src={selectedKYC.documents.selfie}
                    alt="Selfie with Document"
                    className="w-full h-64 object-contain rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/600x400/1a213a/00f0ff?text=Selfie+Preview"
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 pt-4 border-t border-[#00f0ff]/20">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2.5 rounded-lg text-sm font-medium bg-transparent border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10 transition-colors"
              >
                Close
              </button>
              {selectedKYC.status === "pending" && (
                <>
                  <button
                    onClick={() => {
                      handleDecline(selectedKYC.id)
                      setShowModal(false)
                    }}
                    className="px-6 py-2.5 rounded-lg text-sm font-medium bg-[#e91e63] hover:bg-[#d81b60] text-white transition-colors"
                  >
                    <X size={16} className="inline mr-2" />
                    Decline KYC
                  </button>
                  <button
                    onClick={() => {
                      handleApprove(selectedKYC.id)
                      setShowModal(false)
                    }}
                    className="px-6 py-2.5 rounded-lg text-sm font-medium bg-[#4ade80] hover:bg-[#3bc471] text-white transition-colors"
                  >
                    <Check size={16} className="inline mr-2" />
                    Approve KYC
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}