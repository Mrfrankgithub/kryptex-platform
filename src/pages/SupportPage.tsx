"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, MessageCircle, Send, User, Headphones, Shield, Clock } from "lucide-react"
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
      icon: <Mail className="w-6 h-6 text-kryptex-gold" />,
      title: "Email Support",
      info: "support@futuregains.net",
      description: "Get help via email within 24 hours",
    },
    {
      icon: <Phone className="w-6 h-6 text-kryptex-cyan" />,
      title: "Phone Support",
      info: "+1 (555) 123-4567",
      description: "Call us for immediate assistance",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-kryptex-gold" />,
      title: "Live Chat",
      info: "Available 24/7",
      description: "Chat with our support team instantly",
    },
    {
      icon: <MapPin className="w-6 h-6 text-kryptex-cyan" />,
      title: "Office Location",
      info: "1 Old Street Yard, London UK EC1Y 8AF", // This long string could cause issues
      description: "Visit our headquarters",
    },
  ]

  const supportFeatures = [
    {
      icon: <Clock className="w-5 h-5 text-kryptex-gold" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your queries"
    },
    {
      icon: <Headphones className="w-5 h-5 text-kryptex-cyan" />,
      title: "Expert Team",
      description: "Get help from experienced financial advisors"
    },
    {
      icon: <Shield className="w-5 h-5 text-kryptex-gold" />,
      title: "Secure Communication",
      description: "All communications are encrypted and secure"
    }
  ]

  return (
    // FIX: Added overflow-x-hidden to the main container to prevent horizontal scroll on small screens
    <div className="min-h-screen bg-kryptex-dark text-foreground overflow-x-hidden">
      <PageHeader
        title="Contact Support"
        subtitle="Get help from our expert support team. We're here to assist you 24/7"
        breadcrumb="Support"
      />

      {/* Support Features */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass border border-kryptex-gold/20 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kryptex-gold/10 to-kryptex-cyan/10 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-kryptex-light text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Changed lg:grid-cols-2 to md:grid-cols-2 for better responsiveness on tablets/phones in landscape */}
          <div className="grid md:grid-cols-2 gap-12"> 
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass border border-kryptex-gold/20 rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-kryptex-gold animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-kryptex-light mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-kryptex-light" />
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="pl-10 bg-kryptex-card border-kryptex-gold/20 text-white focus:border-kryptex-gold"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-kryptex-light mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-kryptex-light" />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pl-10 bg-kryptex-card border-kryptex-gold/20 text-white focus:border-kryptex-gold"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-kryptex-light mb-2">Message</label>
                    <textarea
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-3 py-2 bg-kryptex-card border border-kryptex-gold/20 rounded-lg text-white placeholder-kryptex-light focus:outline-none focus:ring-2 focus:ring-kryptex-gold focus:border-transparent transition-all duration-200 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-kryptex-gold to-kryptex-cyan hover:from-kryptex-cyan hover:to-kryptex-gold text-black font-semibold py-3 transition-all duration-300 transform hover:scale-[1.02]"
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
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-kryptex-cyan animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
                </div>
                <p className="text-kryptex-light mb-8">
                  Our professional support team is available 24/7 to help you with any questions or concerns about your investments.
                </p>
              </div>

              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass border border-kryptex-cyan/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-kryptex-gold/30"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-kryptex-cyan/10 to-kryptex-gold/10 flex items-center justify-center">
                        {contact.icon}
                      </div>
                    </div>
                    {/* FIX: Added min-w-0 to the content div to ensure long, non-breaking text (like the address) is forced to wrap within the available space on small screens */}
                    <div className="min-w-0">
                      <h4 className="text-lg font-semibold text-white mb-1">{contact.title}</h4>
                      <p className="text-kryptex-gold font-medium mb-1 break-words">{contact.info}</p>
                      <p className="text-sm text-kryptex-light">{contact.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 px-4 bg-kryptex-card/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[1px] bg-gradient-to-r from-kryptex-gold to-kryptex-cyan"></div>
              <span className="text-kryptex-gold font-medium">FREQUENTLY ASKED QUESTIONS</span>
              <div className="w-8 h-[1px] bg-gradient-to-r from-kryptex-cyan to-kryptex-gold"></div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Common <span className="bg-gradient-to-r from-kryptex-gold to-kryptex-cyan bg-clip-text text-transparent">Questions</span>
            </h3>
            <p className="text-kryptex-light max-w-xl mx-auto">
              Quick answers to common questions. Can't find what you're looking for? Contact us directly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
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
                className="glass border border-kryptex-cyan/20 rounded-xl p-6 hover:border-kryptex-gold/30 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-kryptex-gold/10 to-kryptex-cyan/10 flex items-center justify-center">
                      <span className="text-kryptex-gold font-bold text-sm">Q</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{faq.question}</h4>
                    <p className="text-kryptex-light">{faq.answer}</p>
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
            <p className="text-kryptex-light mb-6">Still have questions? We're here to help!</p>
            <a href="#contact-form">
              <Button className="bg-gradient-to-r from-kryptex-gold to-kryptex-cyan hover:from-kryptex-cyan hover:to-kryptex-gold text-black font-semibold py-3 px-8 transition-all duration-300 hover:scale-105">
                Contact Support Directly
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}