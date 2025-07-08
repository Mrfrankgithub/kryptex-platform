"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUp, Check, Copy, AlertCircle, Wallet, Bitcoin, CreditCard, Coins, DollarSign } from "lucide-react"
import DashboardBottomBar from "../../components/DashboardBottomBar"
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"

export default function WithdrawalPage() {
  const [amount, setAmount] = useState("")
  const [withdrawalMethod, setWithdrawalMethod] = useState<string | null>(null)
  const [walletAddress, setWalletAddress] = useState("")
  const [step, setStep] = useState(1)

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
      // Here you would handle the withdrawal submission
      alert(`Withdrawal submitted!\nAmount: $${amount}\nMethod: ${withdrawalMethod}\nAddress: ${walletAddress}`)

      // Reset form
      setAmount("")
      setWithdrawalMethod(null)
      setWalletAddress("")
      setStep(1)
    }
  }

  const handleMaxAmount = () => {
    setAmount(availableBalance.toString())
  }

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1a213a] to-[#0a0e17] p-4 pt-6">
        <h1 className="text-2xl font-bold mb-2">Withdraw</h1>
        <p className="text-gray-400 text-sm">Withdraw your funds securely</p>
      </div>

      <div className="p-4">
        {/* Available Balance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-4 mb-6"
        >
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Available Balance</span>
            <span className="text-lg font-bold">${availableBalance.toFixed(2)}</span>
          </div>
        </motion.div>

        {/* Withdrawal Form */}
        <form onSubmit={handleSubmit} className="mb-6">
          {step === 1 ? (
            <>
              {/* Step 1: Amount and Method */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Withdrawal Amount</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="pr-16"
                      required
                      min="10"
                      max={availableBalance.toString()}
                    />
                    <button
                      type="button"
                      onClick={handleMaxAmount}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-1 rounded"
                    >
                      MAX
                    </button>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-400">Min: $10.00</span>
                    <span className="text-gray-400">Max: ${availableBalance.toFixed(2)}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Withdrawal Method</label>
                  <div className="space-y-3">
                    {withdrawalMethods.map((method) => (
                      <div
                        key={method.id}
                        className={`bg-[rgba(26,33,58,0.6)] rounded-xl border ${
                          withdrawalMethod === method.id ? "border-[#00f0ff]" : "border-[#00f0ff]/10"
                        } p-4 ${method.disabled ? "opacity-50" : "cursor-pointer"}`}
                        onClick={() => !method.disabled && setWithdrawalMethod(method.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div
                              className={`w-10 h-10 rounded-full bg-[rgba(0,0,0,0.2)] flex items-center justify-center mr-3`}
                            >
                              {method.icon}
                            </div>
                            <div>
                              <div className="font-medium">{method.name}</div>
                              <div className="text-xs text-gray-400">Processing time: {method.processingTime}</div>
                            </div>
                          </div>

                          <div
                            className={`w-5 h-5 rounded-full border ${
                              withdrawalMethod === method.id ? "border-0 bg-[#00f0ff]" : "border-gray-400"
                            } flex items-center justify-center`}
                          >
                            {withdrawalMethod === method.id && <Check size={12} className="text-black" />}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={!amount || !withdrawalMethod || Number(amount) > availableBalance || Number(amount) < 10}
                  className="w-full bg-[#00f0ff] hover:bg-[#00d4e6] text-black mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  <ArrowUp size={16} className="text-[#00f0ff] mr-2" />
                  <h2 className="text-lg font-semibold">Withdrawal Details</h2>
                </div>

                <div className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Amount:</span>
                    <span>${Number(amount).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Method:</span>
                    <span>{withdrawalMethods.find((m) => m.id === withdrawalMethod)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Fee:</span>
                    <span>$0.00</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {withdrawalMethod === "bank" ? "Bank Account Details" : "Wallet Address"}
                  </label>
                  <Input
                    type="text"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    placeholder={withdrawalMethod === "bank" ? "Enter bank details" : "Enter wallet address"}
                    required
                  />
                </div>

                <div className="flex items-start p-3 bg-[#e91e63]/10 rounded-lg">
                  <AlertCircle size={16} className="text-[#e91e63] mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-300">
                    Please double-check your {withdrawalMethod === "bank" ? "bank details" : "wallet address"} before
                    submitting. We cannot recover funds sent to incorrect addresses.
                  </p>
                </div>

                <div className="flex space-x-3">
                  <Button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 bg-transparent border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={!walletAddress}
                    className="flex-1 bg-[#00f0ff] hover:bg-[#00d4e6] text-black disabled:opacity-50 disabled:cursor-not-allowed"
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
          <h2 className="text-lg font-semibold mb-4">Recent Withdrawals</h2>

          {recentWithdrawals.length > 0 ? (
            <div className="space-y-3">
              {recentWithdrawals.map((withdrawal) => (
                <motion.div
                  key={withdrawal.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-4 flex items-center"
                >
                  <div className="w-10 h-10 rounded-full bg-[#e91e63]/20 flex items-center justify-center mr-3">
                    <ArrowUp size={20} className="text-[#e91e63]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-medium">Withdrawal</span>
                      <span className="font-semibold text-[#e91e63]">-{withdrawal.amount}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">
                        {withdrawal.method} • {withdrawal.date}
                      </span>
                      <span
                        className={`${
                          withdrawal.status === "completed" ? "text-[#4ade80]" : "text-[#ffd700]"
                        } capitalize`}
                      >
                        {withdrawal.status}
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-gray-400 mt-1">
                      <span className="truncate w-32">{withdrawal.address}</span>
                      <Copy size={12} className="ml-1 cursor-pointer" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-[rgba(26,33,58,0.6)] rounded-xl border border-[#00f0ff]/10 p-6 text-center">
              <p className="text-gray-400">No recent withdrawals</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <DashboardBottomBar />
    </div>
  )
}
