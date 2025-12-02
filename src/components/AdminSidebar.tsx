// src/components/AdminSidebar.tsx
"use client"

import { useState, useEffect } from "react"
import { 
  LayoutDashboard,
  Users,
  MessageSquare,
  Wallet,
  ArrowDownCircle,
  ArrowUpCircle,
  ShieldCheck,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"

export default function AdminSidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", href: "/admin/dashboard" },
    { icon: <Users size={20} />, label: "Members", href: "/admin/members" },
    { icon: <MessageSquare size={20} />, label: "Support Messages", href: "/admin/support-messages" },
    { icon: <Wallet size={20} />, label: "Fund Users", href: "/admin/fund-users" },
    { icon: <ArrowDownCircle size={20} />, label: "Approve Deposits", href: "/admin/approve-deposits" },
    { icon: <ArrowUpCircle size={20} />, label: "Approve Withdrawals", href: "/admin/approve-withdrawals" },
    { icon: <ShieldCheck size={20} />, label: "Approve KYC", href: "/admin/approve-kyc" },
  ]

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("adminToken")
      navigate("/admin/login")
    }
  }

  const isActive = (href: string) => location.pathname === href

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-[60] p-2 bg-[rgba(26,33,58,0.9)] rounded-lg border border-[#00f0ff]/20"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? 
          <X size={20} className="text-[#00f0ff]" /> : 
          <Menu size={20} className="text-[#00f0ff]" />
        }
      </button>

      {/* Sidebar Container */}
      <aside
        className={`
          fixed left-0 top-0 h-full w-64 bg-[rgba(16,22,41,0.95)] backdrop-blur-lg border-r border-[#00f0ff]/20 z-50
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:relative lg:flex-shrink-0
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-[#00f0ff]/20 flex items-center">
            <div className="w-8 h-8 bg-[#00f0ff] rounded-lg flex items-center justify-center mr-3">
              <span className="text-black font-bold text-sm">C</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Cryptoglobtrade</h2>
              <p className="text-xs text-gray-400">Admin Panel</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? "bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/30"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span className="ml-3 text-sm font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-[#00f0ff]/20">
            <button
              onClick={handleLogout}
              className="flex items-center w-full p-3 rounded-lg text-[#e91e63] hover:bg-[#e91e63]/10 transition-all duration-200"
            >
              <LogOut size={20} />
              <span className="ml-3 text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/70 z-40" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}
    </>
  )
}