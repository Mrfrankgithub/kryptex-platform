"use client"

import { motion } from "framer-motion"
import { Check, Clock, Copy, QrCode } from "lucide-react"
import Button from "./ui/Button"

interface ReceiptModalProps {
  isOpen: boolean
  onClose: () => void
  type: "investment" | "withdrawal"
  amount: string
  currency: string
  transactionId: string
  paymentMethod: string
  walletAddress?: string
  plan?: string
  expectedProfit?: string
  totalReturn?: string
  processingTime?: string
  transactionDate?: string
}

export default function ReceiptModal({
  isOpen,
  onClose,
  type,
  amount,
  currency,
  transactionId,
  paymentMethod,
  walletAddress,
  plan,
  expectedProfit,
  totalReturn,
  processingTime,
  transactionDate = new Date().toLocaleString()
}: ReceiptModalProps) {
  if (!isOpen) return null

  const formattedId = transactionId || `TRX${Date.now().toString().slice(-8).toUpperCase()}`

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        className="glass border border-kryptex-cyan/30 rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={36} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            {type === "investment" ? "Investment Submitted!" : "Withdrawal Requested!"}
          </h2>
          <p className="text-kryptex-light">
            Your transaction is pending verification
          </p>
        </div>

        {/* Receipt Card */}
        <div className="glass border border-kryptex-cyan/20 rounded-xl p-5 mb-6">
          {/* Company Logo */}
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-purple text-white px-6 py-3 rounded-xl font-bold text-xl">
              FutureGains<span className="text-kryptex-gold">.net</span>
            </div>
          </div>

          {/* Transaction ID */}
          <div className="flex items-center justify-between mb-4 p-3 bg-kryptex-card/30 rounded-lg">
            <span className="text-kryptex-light text-sm">Transaction ID</span>
            <div className="flex items-center gap-2">
              <code className="text-white font-mono text-sm">{formattedId}</code>
              <button 
                onClick={() => handleCopy(formattedId)}
                className="text-kryptex-cyan hover:text-kryptex-green transition-colors"
              >
                <Copy size={14} />
              </button>
            </div>
          </div>

          {/* Transaction Details */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-kryptex-light">Type</span>
              <span className="text-white font-medium capitalize">{type}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-kryptex-light">Amount</span>
              <span className="text-2xl font-bold text-white">{amount} {currency}</span>
            </div>

            {type === "investment" && plan && (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-kryptex-light">Investment Plan</span>
                  <span className="text-kryptex-cyan font-medium">{plan}</span>
                </div>
                {expectedProfit && (
                  <div className="flex justify-between items-center">
                    <span className="text-kryptex-light">Expected Profit</span>
                    <span className="text-green-400 font-medium">{expectedProfit} {currency}</span>
                  </div>
                )}
                {totalReturn && (
                  <div className="flex justify-between items-center">
                    <span className="text-kryptex-light">Total Return</span>
                    <span className="text-kryptex-gold font-bold">{totalReturn} {currency}</span>
                  </div>
                )}
              </>
            )}

            <div className="flex justify-between items-center">
              <span className="text-kryptex-light">Payment Method</span>
              <span className="text-white font-medium">{paymentMethod}</span>
            </div>

            {walletAddress && (
              <div className="mt-4">
                <span className="text-kryptex-light text-sm block mb-2">Wallet Address</span>
                <div className="flex items-center gap-2 p-3 bg-kryptex-card/30 rounded-lg">
                  <code className="text-white text-xs font-mono flex-1 truncate">{walletAddress}</code>
                  <button 
                    onClick={() => handleCopy(walletAddress)}
                    className="text-kryptex-cyan hover:text-kryptex-green transition-colors"
                  >
                    <Copy size={14} />
                  </button>
                </div>
              </div>
            )}

            <div className="flex justify-between items-center">
              <span className="text-kryptex-light">Date & Time</span>
              <span className="text-white font-medium">{transactionDate}</span>
            </div>

            {/* Status Badge */}
            <div className="flex items-center justify-center gap-2 p-4 bg-kryptex-gold/10 rounded-lg mt-6">
              <Clock className="text-kryptex-gold" size={20} />
              <span className="text-kryptex-gold font-bold">Awaiting Approval by Admin</span>
            </div>
          </div>

          {/* QR Code Placeholder */}
          <div className="mt-6 p-4 bg-white/5 rounded-lg flex flex-col items-center">
            <div className="w-32 h-32 bg-gradient-to-br from-kryptex-cyan/10 to-kryptex-card/30 rounded-lg flex items-center justify-center mb-3">
              <QrCode size={64} className="text-kryptex-cyan/50" />
            </div>
            <p className="text-xs text-kryptex-light text-center">
              Scan this QR to verify transaction on blockchain
            </p>
          </div>
        </div>

        {/* Estimated Processing */}
        {processingTime && (
          <div className="glass border border-kryptex-green/20 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-3">
              <Clock className="text-kryptex-green" size={20} />
              <div>
                <h4 className="text-white font-medium">Estimated Processing Time</h4>
                <p className="text-sm text-kryptex-light">{processingTime}</p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={onClose}
            className="w-full bg-gradient-purple hover:bg-gradient-to-r hover:from-kryptex-cyan hover:to-kryptex-green text-white font-semibold py-3"
          >
            View Transaction History
          </Button>
          <Button
            onClick={() => window.print()}
            className="w-full glass border border-kryptex-cyan text-kryptex-cyan hover:bg-kryptex-cyan/10 font-semibold py-3"
          >
            Download Receipt
          </Button>
          <button
            onClick={onClose}
            className="w-full text-kryptex-light hover:text-white text-sm py-2 transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  )
}