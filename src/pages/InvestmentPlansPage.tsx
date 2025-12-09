"use client"

import { motion } from "framer-motion"
import { Check, Star, Clock, DollarSign, Headphones, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../components/ui/Button"
import PageHeader from "../components/PageHeader"

export default function InvestmentPlansPage() {
  const plans = [
    {
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
      popular: false,
      color: "border-kryptex-cyan/40",
      bgColor: "bg-gradient-to-br from-kryptex-card/30 to-kryptex-dark/30",
      gradient: "from-kryptex-cyan to-kryptex-green",
      badgeColor: "bg-gradient-to-r from-kryptex-cyan to-kryptex-green",
    },
    {
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
      popular: true,
      color: "border-kryptex-gold/60",
      bgColor: "bg-gradient-to-br from-kryptex-card/50 to-kryptex-dark/50",
      gradient: "from-kryptex-gold to-kryptex-cyan",
      badgeColor: "bg-gradient-to-r from-kryptex-gold to-kryptex-cyan",
    },
    {
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
      popular: false,
      color: "border-kryptex-green/40",
      bgColor: "bg-gradient-to-br from-kryptex-card/30 to-kryptex-dark/30",
      gradient: "from-kryptex-green to-kryptex-cyan",
      badgeColor: "bg-gradient-to-r from-kryptex-green to-kryptex-cyan",
    },
    {
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
      popular: false,
      color: "border-kryptex-gold/60",
      bgColor: "bg-gradient-to-br from-kryptex-card/50 to-kryptex-dark/50",
      gradient: "from-kryptex-cyan to-kryptex-gold",
      badgeColor: "bg-gradient-to-r from-kryptex-cyan to-kryptex-gold",
    },
  ]

  return (
    <div className="min-h-screen bg-kryptex-dark text-white">
      <PageHeader
        title="Investment Plans"
        subtitle="Choose the perfect investment plan that matches your financial goals"
        breadcrumb="Plans"
      />

      {/* Investment Plans Header */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-kryptex-card border border-kryptex-cyan/20 rounded-full px-6 py-2 mb-4">
              <div className="w-2 h-2 bg-kryptex-cyan rounded-full mr-2 animate-pulse inline-block"></div>
              <span className="text-kryptex-cyan font-medium">OUR PLANS</span>
            </div>
            <p className="text-xl text-kryptex-light max-w-3xl mx-auto">
              Professional investment management with guaranteed returns and secure portfolio growth
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
                className={`relative glass border-2 ${plan.color} rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-kryptex-cyan/10 transition-all duration-300 ${plan.bgColor}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`${plan.badgeColor} text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg shadow-kryptex-cyan/30`}>
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan header with gradient */}
                <div className={`bg-gradient-to-r ${plan.gradient} p-4`}>
                  <div className="text-center mb-2">
                    <div className="text-xl font-bold mb-1 text-white">
                      {plan.name}
                    </div>
                    <div className="text-4xl font-bold text-white">{plan.profit}</div>
                    <div className="text-sm text-white font-medium">profit + Your capital</div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-center text-kryptex-light mb-4">
                    <Clock className="w-5 h-5 mr-2 text-kryptex-cyan" />
                    Withdrawal after {plan.duration}
                  </div>
                  
                  <div className="glass bg-kryptex-card rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-center text-sm mb-2">
                      <DollarSign className="w-4 h-4 mr-2 text-kryptex-gold" />
                      <span className="font-semibold text-white">MIN:</span> 
                      <span className="ml-1 text-kryptex-light">{plan.minDeposit}</span>
                    </div>
                    <div className="flex items-center justify-center text-sm">
                      <DollarSign className="w-4 h-4 mr-2 text-kryptex-gold" />
                      <span className="font-semibold text-white">MAX:</span> 
                      <span className="ml-1 text-kryptex-light">{plan.maxDeposit}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-4 h-4 text-kryptex-green mr-2 flex-shrink-0 mt-1" />
                        <span className="text-kryptex-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/register">
                    <button className={`w-full py-3 font-semibold bg-gradient-to-r ${plan.gradient} text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-kryptex-cyan/30 flex items-center justify-center hover:scale-105`}>
                      Start Investing
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
            <div className="glass border border-kryptex-cyan/20 rounded-2xl p-8 text-center">
              <div className="inline-block bg-gradient-to-r from-kryptex-cyan to-kryptex-green text-white rounded-full p-3 mb-6">
                <Headphones className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">24/7 CUSTOMER SUPPORT</h3>
              <p className="text-kryptex-light mb-6 max-w-2xl mx-auto">
                For any questions, assistance, or investment advice, our professional support team is available around the clock
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/support">
                  <Button className="bg-gradient-to-r from-kryptex-cyan to-kryptex-green hover:from-kryptex-green hover:to-kryptex-cyan text-white px-8 py-3">
                    Contact Support
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-2 border-kryptex-gold text-kryptex-gold hover:bg-kryptex-gold hover:text-black px-8 py-3 bg-transparent"
                >
                  Live Chat
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-kryptex-card/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Frequently Asked <span className="text-kryptex-cyan">Questions</span>
            </h2>
            <p className="text-kryptex-light max-w-3xl mx-auto">
              Find answers to common questions about our investment plans and financial services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How do I start investing with Future Gains?",
                answer: "Simply register an account, choose an investment plan, make a deposit, and our expert team will start managing your investment immediately."
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
                answer: "Profits are calculated based on your investment amount and the daily yield of your selected plan."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass border border-kryptex-cyan/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-kryptex-cyan">{item.question}</h3>
                <p className="text-kryptex-light">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}