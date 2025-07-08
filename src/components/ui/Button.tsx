"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  children: React.ReactNode
}

export default function Button({ className, variant = "default", children, ...props }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    default: "bg-[#00f0ff] text-black hover:bg-[#00d4e6] focus:ring-[#00f0ff]",
    outline:
      "border border-[#00f0ff] text-[#00f0ff] bg-transparent hover:bg-[#00f0ff] hover:text-black focus:ring-[#00f0ff]",
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}
