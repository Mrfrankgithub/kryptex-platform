import type React from "react"
import { cn } from "../../lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full px-3 py-2 bg-[rgba(26,33,58,0.8)] border border-[#00f0ff]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00f0ff] focus:border-transparent transition-all duration-200",
        className,
      )}
      {...props}
    />
  )
}
