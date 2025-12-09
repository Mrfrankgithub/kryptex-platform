"use client"

import { Home, TrendingUp, CreditCard, User, FileText } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"

export default function DashboardBottomBar() {
  const location = useLocation()

  const navItems = [
    {
      icon: <Home size={20} />,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <TrendingUp size={20} />,
      label: "Invest",
      href: "/dashboard/invest",
    },
    {
      icon: <FileText size={20} />,
      label: "Transactions",
      href: "/dashboard/transactions",
    },
    {
      icon: <CreditCard size={20} />,
      label: "Withdraw",
      href: "/dashboard/withdrawal",
    },
    {
      icon: <User size={20} />,
      label: "Profile",
      href: "/dashboard/profile",
    },
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-kryptex-dark/95 border-t border-kryptex-cyan/20 z-50 backdrop-blur-sm">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.href} 
            className="flex flex-col items-center justify-center w-full h-full"
          >
            <div
              className={`flex flex-col items-center justify-center ${
                isActive(item.href) ? "text-kryptex-cyan" : "text-kryptex-light"
              }`}
            >
              {isActive(item.href) ? (
                <motion.div 
                  initial={{ scale: 0.8 }} 
                  animate={{ scale: 1 }} 
                  className="flex flex-col items-center relative"
                >
                  {item.icon}
                  <span className="text-xs mt-1">{item.label}</span>
                  <motion.div 
                    layoutId="bottomNav" 
                    className="absolute -bottom-4 w-8 h-1 bg-gradient-purple rounded-t-full" 
                  />
                </motion.div>
              ) : (
                <div className="flex flex-col items-center opacity-80 hover:opacity-100 hover:text-white transition-all">
                  {item.icon}
                  <span className="text-xs mt-1">{item.label}</span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}