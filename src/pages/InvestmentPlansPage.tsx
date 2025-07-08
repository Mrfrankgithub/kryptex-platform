"use client"

import { motion } from "framer-motion"
import { Check, Star, Clock, DollarSign, Headphones, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../components/ui/Button"
import PageHeader from "../components/PageHeader"

export default function InvestmentPlansPage() {
  const plans = [
    {
      name: "BASIC PLAN",
      profit: "20%",
      duration: "24 hours",
      minDeposit: "$50",
      maxDeposit: "$499",
      referralCommission: "5%",
      features: [
        "20% profit + Your capital",
        "Withdrawal after 24 hours",
        "Minimum deposit $50",
        "Maximum deposit $499",
        "24/7 system monitoring",
        "5% Referral Commission",
      ],
      popular: false,
      color: "border-[#00f0ff]/40",
      bgColor: "bg-gradient-to-br from-[#0a0e17] to-[#1a213a]",
      gradient: "from-[#00f0ff] to-[#00f0ff]",
    },
    {
      name: "STANDARD PLAN",
      profit: "30%",
      duration: "48 hours",
      minDeposit: "$500",
      maxDeposit: "$2,999",
      referralCommission: "7%",
      features: [
        "30% profit + Your capital",
        "Withdrawal after 48 hours",
        "Minimum deposit $500",
        "Maximum deposit $2,999",
        "24/7 system monitoring",
        "7% Referral Commission",
      ],
      popular: true,
      color: "border-[#4ade80]/60",
      bgColor: "bg-gradient-to-br from-[#0a0e17] to-[#1a213a]",
      gradient: "from-[#4ade80] to-[#4ade80]",
    },
    {
      name: "EXTENDED PLAN",
      profit: "40%",
      duration: "72 hours",
      minDeposit: "$3,000",
      maxDeposit: "$9,999",
      referralCommission: "12%",
      features: [
        "40% profit + Your capital",
        "Withdrawal after 72 hours",
        "Minimum deposit $3,000",
        "Maximum deposit $9,999",
        "24/7 system monitoring",
        "12% Referral Commission",
      ],
      popular: false,
       color: "border-[#00f0ff]/40",
      bgColor: "bg-gradient-to-br from-[#0a0e17] to-[#1a213a]",
      gradient: "from-[#00f0ff] to-[#00f0ff]",
    },
    {
      name: "VIP PLAN",
      profit: "50%",
      duration: "1 week",
      minDeposit: "$10,000",
      maxDeposit: "Unlimited",
      referralCommission: "15%",
      features: [
        "50% profit + Your capital",
        "Withdrawal after 1 week",
        "Minimum deposit $10,000",
        "Maximum deposit Unlimited",
        "24/7 system monitoring",
        "15% Referral Commission",
      ],
      popular: false,
     color: "border-[#4ade80]/60",
      bgColor: "bg-gradient-to-br from-[#0a0e17] to-[#1a213a]",
      gradient: "from-[#4ade80] to-[#4ade80]",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white">
      <PageHeader
        title="Investment Plans"
        subtitle="Choose the perfect mining plan that matches your investment goals"
        breadcrumb="Plans"
      />

      {/* Mining Plans Header */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-[#1a213a] rounded-full px-6 py-2 mb-4">
              <div className="w-2 h-2 bg-[#00f0ff] rounded-full mr-2 animate-pulse inline-block"></div>
             ⭐ <span className="text-[#00f0ff] font-medium">Our Plans</span> ⭐
            </div>
            {/* <h2 className="text-3xl md:text-5xl font-bold mb-4">
              ⭐ <span className="text-[#00f0ff]">MINING PLANS</span> 
            </h2> */}
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional cryptocurrency mining with guaranteed returns and secure investments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative glass-card border-2 ${plan.color} rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    {/* <div className="bg-gradient-to-r from-[#4ade80] to-[#2ecc71] text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg shadow-[#4ade80]/30">
                      <Star className="w-4 h-4 mt-3" />
                      Most Popular
                    </div> */}
                  </div>
                )}

                {/* Plan header with gradient */}
                <div className={`bg-gradient-to-r ${plan.gradient} p-4`}>
                  <div className="text-center mb-2">
                    <div className="text-xl font-bold mb-1">
                      {plan.name}
                    </div>
                    <div className="text-4xl font-bold text-black">{plan.profit}</div>
                    <div className="text-sm text-black font-medium">profit + Your capital</div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-center text-gray-300 mb-4">
                    <Clock className="w-5 h-5 mr-2 text-[#00f0ff]" />
                    Withdrawal after {plan.duration}
                  </div>
                  
                  <div className="glass bg-[#1a213a] rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-center text-sm mb-2">
                      <DollarSign className="w-4 h-4 mr-2 text-[#00f0ff]" />
                      <span className="font-semibold">MIN:</span> {plan.minDeposit}
                    </div>
                    <div className="flex items-center justify-center text-sm">
                      <DollarSign className="w-4 h-4 mr-2 text-[#00f0ff]" />
                      <span className="font-semibold">MAX:</span> {plan.maxDeposit}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-4 h-4 text-[#4ade80] mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/register">
                    <button className="w-full py-3 font-semibold bg-gradient-to-r from-[#00f0ff] to-[#00d4e6] text-black rounded-lg transition-all duration-300 hover:shadow-glow flex items-center justify-center">
                      Start Mining
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card border border-[#00f0ff]/20 rounded-2xl p-8 text-center">
              <div className="inline-block bg-gradient-to-r from-[#00f0ff] to-[#00d4e6] text-black rounded-full p-3 mb-6">
                <Headphones className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">LIVE CHAT SUPPORT SYSTEM</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                FOR ANY COMPLAINT OR ASSISTANCE PLEASE CONTACT OUR 24/7 SUPPORT TEAM
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/support">
                  <Button className="bg-gradient-to-r from-[#4ade80] to-[#3bc470] hover:from-[#3bc470] hover:to-[#2eae60] text-black px-8 py-3">
                    Contact Support
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-2 border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black px-8 py-3 bg-transparent"
                >
                  Live Chat
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-[#1a213a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-[#00f0ff]">Questions</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our investment plans and mining process
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How do I start mining with Kryptex?",
                answer: "Simply register an account, choose a mining plan, make a deposit, and our system will start mining for you immediately."
              },
              {
                question: "When can I withdraw my profits?",
                answer: "Withdrawal times vary by plan. Basic plan allows withdrawals after 24 hours, while VIP plan requires 1 week before withdrawal."
              },
              {
                question: "Is there a fee for deposits or withdrawals?",
                answer: "We charge a small network fee for cryptocurrency withdrawals. Deposits are completely free."
              },
              {
                question: "How are profits calculated?",
                answer: "Profits are calculated based on your investment amount and the daily mining yield of your selected plan."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card border border-[#00f0ff]/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#00f0ff]">{item.question}</h3>
                <p className="text-gray-300">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}