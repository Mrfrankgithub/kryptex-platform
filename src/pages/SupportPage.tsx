"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, MessageCircle, Send, User } from "lucide-react"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import PageHeader from "../components/PageHeader"

export default function SupportPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Support form submitted:", formData)
    alert("Thank you for contacting us! We'll get back to you soon.")
    setFormData({ fullName: "", email: "", message: "" })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-kryptex-cyan" />,
      title: "Email Support",
      info: "support@cryptoglobtrade.com",
      description: "Get help via email within 24 hours",
    },
    {
      icon: <Phone className="w-6 h-6 text-kryptex-green" />,
      title: "Phone Support",
      info: "+1 (555) 123-4567",
      description: "Call us for immediate assistance",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-kryptex-cyan" />,
      title: "Live Chat",
      info: "Available 24/7",
      description: "Chat with our support team instantly",
    },
    {
      icon: <MapPin className="w-6 h-6 text-kryptex-cyan" />,
      title: "Office Location",
      info: "1 Old Street Yard, London UK EC1Y 8AF",
      description: "Visit our headquarters",
    },
  ]

  return (
    <div className="min-h-screen bg-kryptex-dark text-foreground">
      <PageHeader
        title="Contact Support"
        subtitle="Get help from our expert support team. We're here to assist you 24/7"
        breadcrumb="Support"
      />

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-kryptex-card backdrop-blur-sm rounded-2xl p-8 border border-border/20">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="pl-10 bg-kryptex-dark border-border/40 text-gray-300 focus:border-kryptex-cyan"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pl-10 bg-kryptex-dark border-border/40 text-gray-300 focus:border-kryptex-cyan"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-3 py-2 bg-kryptex-dark border border-border/40 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-kryptex-cyan focus:border-transparent transition-all duration-200 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-kryptex-cyan hover:bg-kryptex-cyan/90 text-black font-semibold py-3 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <p className="text-gray-400 mb-8">
                  Our support team is available 24/7 to help you with any questions or concerns you may have.
                </p>
              </div>

              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-kryptex-card backdrop-blur-sm border border-border/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-kryptex-cyan/30"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{contact.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{contact.title}</h4>
                      <p className="text-kryptex-cyan font-medium mb-1">{contact.info}</p>
                      <p className="text-sm text-gray-400">{contact.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 px-4 bg-kryptex-dark">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-kryptex-card/60 backdrop-blur-sm px-6 py-3 rounded-full border border-kryptex-cyan/20 mb-6">
              <span className="text-kryptex-cyan text-sm font-medium">NEED HELP?</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Frequently Asked <span className="text-kryptex-cyan">Questions</span>
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              Quick answers to common questions. Can't find what you're looking for? Contact us directly.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long does it take to process withdrawals?",
                answer: "Withdrawals are processed according to your chosen plan duration (24 hours to 1 week).",
              },
              {
                question: "What is the minimum investment amount?",
                answer: "The minimum investment starts at $50 for our Basic Plan.",
              },
              {
                question: "Is my investment secure?",
                answer: "Yes, we use bank-level security with multi-layer encryption to protect all investments.",
              },
              {
                question: "How do I contact customer support?",
                answer: "You can reach us via email, phone, live chat, or by filling out the contact form above.",
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major cryptocurrencies, credit cards, and bank transfers.",
              },
              {
                question: "Can I change my investment plan?",
                answer: "Yes, you can upgrade your plan at any time from your account dashboard.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-kryptex-card backdrop-blur-sm border border-border/20 rounded-xl p-6 hover:border-kryptex-cyan/30 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4">
                    <div className="w-6 h-6 rounded-full bg-kryptex-cyan/10 flex items-center justify-center">
                      <span className="text-kryptex-cyan font-bold text-sm">?</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                      {faq.question}
                    </h4>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-6">Still have questions?</p>
            <Button className="bg-kryptex-cyan hover:bg-kryptex-cyan/90 text-black font-semibold py-3 px-8 transition-all duration-300">
              Contact Support Directly
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}