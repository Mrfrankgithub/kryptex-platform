"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ChevronDown, ChevronUp, Info, DollarSign, CreditCard, Bitcoin, Wallet, Coins, Copy } from "lucide-react"
import DashboardBottomBar from "../../components/DashboardBottomBar"
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import ReceiptModal from "../../components/ReceiptModal"

export default function InvestPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null)
  const [amount, setAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null)
  const [showReceipt, setShowReceipt] = useState(false)
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

  const plans = [
    {
      id: "basic",
      name: "FIRST PLAN",
      profit: "5%",
      duration: "24 hours",
      minDeposit: 100,
      maxDeposit: 999,
      features: [
        "5% profit + Your capital",
        "Withdrawal after 24 hours",
        "Minimum deposit $100",
        "Maximum deposit $999",
        "24/7 system monitoring",
        "5% Referral Commission",
      ],
      color: "border-kryptex-gold",
    },
    {
      id: "standard",
      name: "ADVANCED PLAN",
      profit: "10%",
      duration: "24 hours",
      minDeposit: 1000,
      maxDeposit: 5000,
      features: [
        "10% profit + Your capital",
        "Withdrawal after 24 hours",
        "Minimum deposit $1,000",
        "Maximum deposit $5,000",
        "24/7 system monitoring",
        "5% Referral Commission",
      ],
      color: "border-kryptex-cyan",
      recommended: true,
    },
    {
      id: "extended",
      name: "PRO PLAN",
      profit: "30%",
      duration: "24 hours",
      minDeposit: 3000,
      maxDeposit: 7000,
      features: [
        "30% profit + Your capital",
        "Withdrawal after 24 hours",
        "Minimum deposit $3,000",
        "Maximum deposit $7,000",
        "24/7 system monitoring",
        "7% Referral Commission",
      ],
      color: "border-kryptex-green",
    },
    {
      id: "vip",
      name: "GOLDEN PLAN",
      profit: "40%",
      duration: "24 hours",
      minDeposit: 8000,
      maxDeposit: "Unlimited",
      features: [
        "40% profit + Your capital",
        "Withdrawal after 24 hours",
        "Minimum deposit $8,000",
        "Maximum deposit Unlimited",
        "24/7 system monitoring",
        "10% Referral Commission",
      ],
      color: "border-kryptex-gold",
    },
  ]

  const paymentMethods = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      icon: <Bitcoin size={24} />,
      address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      symbol: "BTC",
      processingTime: "1-3 network confirmations",
    },
    {
      id: "ethereum",
      name: "Ethereum",
      icon: <Wallet size={24} />,
      address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      symbol: "ETH",
      processingTime: "12 network confirmations",
    },
    {
      id: "usdt",
      name: "USDT (Tether)",
      icon: <Coins size={24} />,
      address: "TQn9Y2khEsLJW1ChVWFMSMeRDow5oREqjK",
      symbol: "USDT",
      processingTime: "30 network confirmations",
    },
    {
      id: "litecoin",
      name: "Litecoin",
      icon: <DollarSign size={24} />,
      address: "LTC1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      symbol: "LTC",
      processingTime: "6 network confirmations",
    },
    {
      id: "card",
      name: "Credit Card",
      icon: <CreditCard size={24} />,
      disabled: true,
    },
  ]

  const togglePlanExpansion = (planId: string) => {
    if (expandedPlan === planId) {
      setExpandedPlan(null)
    } else {
      setExpandedPlan(planId)
    }
  }

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId)
    setExpandedPlan(null)

    // Set default amount based on minimum deposit
    const plan = plans.find((p) => p.id === planId)
    if (plan) {
      setAmount(plan.minDeposit.toString())
    }
  }

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address)
    setCopiedAddress(address)
    setTimeout(() => setCopiedAddress(null), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Show receipt modal instead of alert
    setShowReceipt(true)
  }

  const selectedPlanDetails = plans.find((p) => p.id === selectedPlan)
  const selectedPaymentMethod = paymentMethods.find((p) => p.id === paymentMethod)

  return (
    <div className="min-h-screen bg-kryptex-dark text-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-kryptex-card/30 to-kryptex-dark/90 p-4 pt-6">
        <h1 className="text-2xl font-bold mb-2 text-white">Invest</h1>
        <p className="text-kryptex-light text-sm">Choose a plan and start earning</p>
      </div>

      <div className="p-4">
        {/* Step 1: Choose Plan */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center text-white">
            <span className="w-6 h-6 rounded-full bg-kryptex-cyan text-white flex items-center justify-center text-sm mr-2">
              1
            </span>
            Choose Investment Plan
          </h2>

          <div className="space-y-3">
            {plans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`glass border ${
                  selectedPlan === plan.id ? plan.color : "border-kryptex-cyan/10"
                } rounded-xl overflow-hidden hover-glow`}
              >
                <div
                  className="p-4 flex justify-between items-center cursor-pointer"
                  onClick={() => togglePlanExpansion(plan.id)}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-5 h-5 rounded-full border ${
                        selectedPlan === plan.id ? "border-0 bg-kryptex-cyan" : "border-kryptex-light/50"
                      } flex items-center justify-center mr-3`}
                    >
                      {selectedPlan === plan.id && <Check size={12} className="text-white" />}
                    </div>
                    <div>
                      <div className="font-medium text-white">{plan.name}</div>
                      <div className="text-xs text-kryptex-light">
                        {plan.profit} profit in {plan.duration}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    {plan.recommended && (
                      <span className="text-xs bg-kryptex-cyan/20 text-kryptex-cyan px-2 py-1 rounded-full mr-2">
                        Recommended
                      </span>
                    )}
                    {expandedPlan === plan.id ? (
                      <ChevronUp size={20} className="text-kryptex-light" />
                    ) : (
                      <ChevronDown size={20} className="text-kryptex-light" />
                    )}
                  </div>
                </div>

                {expandedPlan === plan.id && (
                  <div className="px-4 pb-4 pt-1">
                    <div className="p-3 bg-kryptex-card/20 rounded-lg mb-3">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex flex-col">
                          <span className="text-kryptex-light">Min. Deposit</span>
                          <span className="font-medium text-white">${plan.minDeposit}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-kryptex-light">Max. Deposit</span>
                          <span className="font-medium text-white">
                            {plan.maxDeposit >= 1000000 ? "Unlimited" : `$${plan.maxDeposit}`}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-kryptex-light">Duration</span>
                          <span className="font-medium text-white">{plan.duration}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-kryptex-light">Profit</span>
                          <span className="font-medium text-kryptex-cyan">{plan.profit}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-1 mb-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-xs">
                          <Check size={14} className="text-kryptex-cyan mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-kryptex-light">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={() => handlePlanSelect(plan.id)}
                      className={`w-full py-2 ${
                        plan.recommended
                          ? "bg-kryptex-cyan hover:bg-kryptex-green text-white"
                          : "bg-gradient-gold hover:bg-gradient-to-r hover:from-kryptex-gold hover:to-yellow-500 text-black"
                      }`}
                    >
                      Select Plan
                    </Button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Step 2: Enter Amount */}
        {selectedPlan && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mb-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center text-white">
              <span className="w-6 h-6 rounded-full bg-kryptex-cyan text-white flex items-center justify-center text-sm mr-2">
                2
              </span>
              Enter Investment Amount
            </h2>

            <div className="glass border border-kryptex-cyan/10 rounded-xl p-4 hover-glow">
              <div className="relative mb-4">
                <DollarSign size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-kryptex-light" />
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="pl-10 bg-kryptex-card/20 border-kryptex-card/50 focus:border-kryptex-cyan text-white"
                  min={selectedPlanDetails?.minDeposit}
                  max={selectedPlanDetails?.maxDeposit}
                />
              </div>

              <div className="flex justify-between text-xs text-kryptex-light mb-4">
                <span>Min: ${selectedPlanDetails?.minDeposit}</span>
                <span>
                  Max:{" "}
                  {selectedPlanDetails?.maxDeposit >= 1000000 ? "Unlimited" : `$${selectedPlanDetails?.maxDeposit}`}
                </span>
              </div>

              {selectedPlanDetails && Number(amount) >= selectedPlanDetails.minDeposit && (
                <div className="p-3 bg-kryptex-card/20 rounded-lg">
                  <div className="flex justify-between mb-2 text-kryptex-light">
                    <span>Investment Amount:</span>
                    <span className="text-white">${amount}</span>
                  </div>
                  <div className="flex justify-between mb-2 text-kryptex-light">
                    <span>Expected Profit:</span>
                    <span className="text-kryptex-cyan">
                      ${((Number(amount) * Number.parseFloat(selectedPlanDetails.profit)) / 100).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between font-medium text-white">
                    <span>Total Return:</span>
                    <span className="text-kryptex-gold">
                      $
                      {(
                        Number(amount) +
                        (Number(amount) * Number.parseFloat(selectedPlanDetails.profit)) / 100
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Step 3: Payment Method */}
        {selectedPlan && amount && Number(amount) >= (selectedPlanDetails?.minDeposit || 0) && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mb-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center text-white">
              <span className="w-6 h-6 rounded-full bg-kryptex-cyan text-white flex items-center justify-center text-sm mr-2">
                3
              </span>
              Select Payment Method
            </h2>

            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`glass border ${
                    paymentMethod === method.id ? "border-kryptex-cyan" : "border-kryptex-cyan/10"
                  } rounded-xl p-4 ${method.disabled ? "opacity-50" : "cursor-pointer hover-glow"}`}
                  onClick={() => !method.disabled && setPaymentMethod(method.id)}
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
                        <div className="text-xs text-kryptex-light">
                          {method.disabled ? "Coming soon" : "Instant processing"}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-full border ${
                        paymentMethod === method.id ? "border-0 bg-kryptex-cyan" : "border-kryptex-light/50"
                      } flex items-center justify-center`}
                    >
                      {paymentMethod === method.id && <Check size={12} className="text-white" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {paymentMethod && paymentMethod !== "card" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-4 p-4 glass border border-kryptex-cyan/10 rounded-xl"
              >
                <div className="flex items-start mb-4">
                  <Info size={16} className="text-kryptex-cyan mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-kryptex-light">
                    Send exactly <span className="font-medium text-white">${amount}</span> worth of{" "}
                    {selectedPaymentMethod?.name} to the address below. Your investment will be credited once the transaction is confirmed.
                  </p>
                </div>

                <div className="bg-kryptex-card/20 rounded-lg p-3 mb-4">
                  <p className="text-xs text-kryptex-light mb-1">Payment Address:</p>
                  <div className="flex items-center justify-between">
                    <code className="text-xs bg-kryptex-dark/50 p-2 rounded overflow-x-auto flex-1 mr-2 text-gray-300">
                      {selectedPaymentMethod?.address}
                    </code>
                    <button
                      onClick={() => selectedPaymentMethod?.address && handleCopyAddress(selectedPaymentMethod.address)}
                      className="text-kryptex-cyan text-xs whitespace-nowrap hover:text-kryptex-green flex items-center gap-1"
                    >
                      {copiedAddress === selectedPaymentMethod?.address ? (
                        <>Copied!</>
                      ) : (
                        <>
                          <Copy size={12} />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-purple hover:bg-gradient-to-r hover:from-kryptex-cyan hover:to-kryptex-green text-white"
                  >
                    I've Made The Payment
                  </Button>
                </form>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>

      {/* Receipt Modal */}
      <ReceiptModal
        isOpen={showReceipt}
        onClose={() => setShowReceipt(false)}
        type="investment"
        amount={amount}
        currency="USD"
        transactionId=""
        paymentMethod={selectedPaymentMethod?.name || ""}
        walletAddress={selectedPaymentMethod?.address}
        plan={selectedPlanDetails?.name}
        expectedProfit={selectedPlanDetails ? `$${((Number(amount) * Number.parseFloat(selectedPlanDetails.profit)) / 100).toFixed(2)}` : undefined}
        totalReturn={selectedPlanDetails ? `$${(Number(amount) + (Number(amount) * Number.parseFloat(selectedPlanDetails.profit)) / 100).toFixed(2)}` : undefined}
        processingTime={selectedPaymentMethod?.processingTime}
      />

      {/* Bottom Navigation */}
      <DashboardBottomBar />
    </div>
  )
}