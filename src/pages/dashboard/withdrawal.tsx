"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUp, Check, Copy, AlertCircle, Wallet, Bitcoin, CreditCard, Coins, DollarSign } from "lucide-react"
import DashboardBottomBar from "../../components/DashboardBottomBar"
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import ReceiptModal from "../../components/ReceiptModal"

export default function WithdrawalPage() {
  const [amount, setAmount] = useState("")
  const [withdrawalMethod, setWithdrawalMethod] = useState<string | null>(null)
  const [walletAddress, setWalletAddress] = useState("")
  const [step, setStep] = useState(1)
  const [showReceipt, setShowReceipt] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  const availableBalance = 12450.8

  const withdrawalMethods = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      icon: <Bitcoin size={24} />,
      processingTime: "1-24 hours",
      symbol: "BTC",
    },
    {
      id: "ethereum",
      name: "Ethereum",
      icon: <Wallet size={24} />,
      processingTime: "1-24 hours",
      symbol: "ETH",
    },
    {
      id: "usdt",
      name: "USDT (Tether)",
      icon: <Coins size={24} />,
      processingTime: "1-6 hours",
      symbol: "USDT",
    },
    {
      id: "litecoin",
      name: "Litecoin",
      icon: <DollarSign size={24} />,
      processingTime: "1-12 hours",
      symbol: "LTC",
    },
    {
      id: "bank",
      name: "Bank Transfer",
      icon: <CreditCard size={24} />,
      processingTime: "3-5 business days",
      disabled: true,
    },
  ]

  const recentWithdrawals = [
    {
      id: "w1",
      amount: "$500.00",
      date: "2023-07-02",
      status: "completed",
      address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      method: "Bitcoin",
    },
    {
      id: "w2",
      amount: "$1,200.00",
      date: "2023-06-25",
      status: "completed",
      address: "TQn9Y2khEsLJW1ChVWFMSMeRDow5oREqjK",
      method: "USDT",
    },
    {
      id: "w3",
      amount: "$300.00",
      date: "2023-06-18",
      status: "completed",
      address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      method: "Ethereum",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (step === 1) {
      setStep(2)
    } else {
      // Show receipt modal instead of alert
      setShowReceipt(true)
      // Don't reset form yet, let user see the receipt first
    }
  }

  const handleMaxAmount = () => {
    setAmount(availableBalance.toString())
  }

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address)
    setCopied(address)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleReceiptClose = () => {
    setShowReceipt(false)
    // Reset form after receipt is closed
    setAmount("")
    setWithdrawalMethod(null)
    setWalletAddress("")
    setStep(1)
  }

  const selectedMethod = withdrawalMethods.find((m) => m.id === withdrawalMethod)

  return (
    <div className="min-h-screen bg-kryptex-dark text-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-kryptex-card/30 to-kryptex-dark/90 p-4 pt-6">
        <h1 className="text-2xl font-bold mb-2 text-white">Withdraw</h1>
        <p className="text-kryptex-light text-sm">Withdraw your funds securely</p>
      </div>

      <div className="p-4">
        {/* Available Balance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass border border-kryptex-cyan/10 rounded-xl p-4 mb-6 hover-glow"
        >
          <div className="flex justify-between items-center">
            <span className="text-kryptex-light">Available Balance</span>
            <span className="text-lg font-bold text-white">${availableBalance.toFixed(2)}</span>
          </div>
          <div className="mt-2 text-xs text-kryptex-light">
            Note: Minimum withdrawal amount is $10.00
          </div>
        </motion.div>

        {/* Withdrawal Form */}
        <form onSubmit={handleSubmit} className="mb-6">
          {step === 1 ? (
            <>
              {/* Step 1: Amount and Method */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Withdrawal Amount</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="pr-16 bg-kryptex-card/20 border-kryptex-card/50 focus:border-kryptex-cyan text-white"
                      required
                      min="10"
                      max={availableBalance.toString()}
                    />
                    <button
                      type="button"
                      onClick={handleMaxAmount}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs bg-kryptex-cyan text-white px-2 py-1 rounded hover:bg-kryptex-green"
                    >
                      MAX
                    </button>
                  </div>
                  <div className="flex justify-between text-xs mt-1 text-kryptex-light">
                    <span>Min: $10.00</span>
                    <span>Max: ${availableBalance.toFixed(2)}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Withdrawal Method</label>
                  <div className="space-y-3">
                    {withdrawalMethods.map((method) => (
                      <div
                        key={method.id}
                        className={`glass border ${
                          withdrawalMethod === method.id ? "border-kryptex-cyan" : "border-kryptex-cyan/10"
                        } rounded-xl p-4 ${method.disabled ? "opacity-50" : "cursor-pointer hover-glow"}`}
                        onClick={() => !method.disabled && setWithdrawalMethod(method.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div
                              className={`w-10 h-10 rounded-full bg-kryptex-card/30 flex items-center justify-center mr-3`}
                            >
                              {method.icon}
                            </div>
                            <div>
                              <div className="font-medium text-white">{method.name}</div>
                              <div className="text-xs text-kryptex-light">Processing time: {method.processingTime}</div>
                            </div>
                          </div>

                          <div
                            className={`w-5 h-5 rounded-full border ${
                              withdrawalMethod === method.id ? "border-0 bg-kryptex-cyan" : "border-kryptex-light/50"
                            } flex items-center justify-center`}
                          >
                            {withdrawalMethod === method.id && <Check size={12} className="text-white" />}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={!amount || !withdrawalMethod || Number(amount) > availableBalance || Number(amount) < 10}
                  className="w-full bg-gradient-purple hover:bg-gradient-to-r hover:from-kryptex-cyan hover:to-kryptex-green text-white mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </Button>
              </div>
            </>
          ) : (
            <>
              {/* Step 2: Wallet Address */}
              <div className="space-y-4">
                <div className="flex items-center mb-2">
                  <ArrowUp size={16} className="text-kryptex-cyan mr-2" />
                  <h2 className="text-lg font-semibold text-white">Withdrawal Details</h2>
                </div>

                <div className="glass border border-kryptex-cyan/10 rounded-xl p-4 mb-4">
                  <div className="flex justify-between mb-2 text-kryptex-light">
                    <span>Amount:</span>
                    <span className="text-white">${Number(amount).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2 text-kryptex-light">
                    <span>Method:</span>
                    <span className="text-white">{selectedMethod?.name}</span>
                  </div>
                  <div className="flex justify-between text-kryptex-light">
                    <span>Processing Time:</span>
                    <span className="text-kryptex-cyan">{selectedMethod?.processingTime}</span>
                  </div>
                  <div className="flex justify-between text-kryptex-light mt-2">
                    <span>Fee:</span>
                    <span className="text-green-400">$0.00</span>
                  </div>
                  <div className="flex justify-between font-medium mt-2 pt-2 border-t border-kryptex-card/30">
                    <span className="text-white">You will receive:</span>
                    <span className="text-kryptex-gold">${Number(amount).toFixed(2)}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    {withdrawalMethod === "bank" ? "Bank Account Details" : "Wallet Address"}
                  </label>
                  <Input
                    type="text"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    placeholder={withdrawalMethod === "bank" ? "Enter bank details" : "Enter wallet address"}
                    className="bg-kryptex-card/20 border-kryptex-card/50 focus:border-kryptex-cyan text-white"
                    required
                  />
                </div>

                <div className="flex items-start p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                  <AlertCircle size={16} className="text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-kryptex-light">
                    Please double-check your {withdrawalMethod === "bank" ? "bank details" : "wallet address"} before
                    submitting. We cannot recover funds sent to incorrect addresses.
                  </p>
                </div>

                <div className="flex space-x-3">
                  <Button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 glass border border-kryptex-cyan text-kryptex-cyan hover:bg-kryptex-cyan/10 hover:text-white"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={!walletAddress}
                    className="flex-1 bg-gradient-purple hover:bg-gradient-to-r hover:from-kryptex-cyan hover:to-kryptex-green text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirm Withdrawal
                  </Button>
                </div>
              </div>
            </>
          )}
        </form>

        {/* Recent Withdrawals */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Recent Withdrawals</h2>

          {recentWithdrawals.length > 0 ? (
            <div className="space-y-3">
              {recentWithdrawals.map((withdrawal) => (
                <motion.div
                  key={withdrawal.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="glass border border-kryptex-cyan/10 rounded-xl p-4 flex items-center hover-glow"
                >
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                    <ArrowUp size={20} className="text-red-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-medium text-white">Withdrawal</span>
                      <span className="font-semibold text-red-400">-{withdrawal.amount}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-kryptex-light">
                        {withdrawal.method} • {withdrawal.date}
                      </span>
                      <span
                        className={`${
                          withdrawal.status === "completed" ? "text-green-400" : "text-kryptex-gold"
                        } capitalize`}
                      >
                        {withdrawal.status}
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-kryptex-light mt-1">
                      <span className="truncate w-32">{withdrawal.address}</span>
                      <button
                        onClick={() => handleCopyAddress(withdrawal.address)}
                        className="ml-1 cursor-pointer hover:text-kryptex-cyan"
                      >
                        {copied === withdrawal.address ? (
                          <span className="text-green-400 text-xs">Copied!</span>
                        ) : (
                          <Copy size={12} />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="glass border border-kryptex-cyan/10 rounded-xl p-6 text-center">
              <p className="text-kryptex-light">No recent withdrawals</p>
            </div>
          )}
        </div>
      </div>

      {/* Receipt Modal */}
      <ReceiptModal
        isOpen={showReceipt}
        onClose={handleReceiptClose}
        type="withdrawal"
        amount={amount}
        currency="USD"
        transactionId=""
        paymentMethod={selectedMethod?.name || ""}
        walletAddress={walletAddress}
        processingTime={selectedMethod?.processingTime}
      />

      {/* Bottom Navigation */}
      <DashboardBottomBar />
    </div>
  )
}