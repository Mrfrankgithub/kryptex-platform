"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Shield, Users, Award, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../components/ui/Button"
import TestimonialCarousel from "../components/TestimonialCarousel"
import Transactions from "../components/Transactions"
import ServicesSection from "../components/ServicesSection"
import CryptoChartsSection from "../components/CryptoChartsSection"

export default function HomePage() {
    const stats = [
        { number: "50K+", label: "Active Investors" },
        { number: "98.5%", label: "Success Rate" },
        { number: "$2.5B+", label: "Total Invested" },
        { number: "24/7", label: "Support" },
    ]

    const features = [
        {
            icon: <Shield className="w-8 h-8 text-[#fbbf24]" />,
            title: "Secure Investment",
            description: "Bank-level security with multi-layer encryption",
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-[#a78bfa]" />,
            title: "High Returns",
            description: "Up to 25% monthly returns on your investments",
        },
        {
            icon: <Users className="w-8 h-8 text-[#fbbf24]" />,
            title: "Expert Team",
            description: "Professional traders managing your portfolio",
        },
        {
            icon: <Award className="w-8 h-8 text-[#a78bfa]" />,
            title: "Proven Track Record",
            description: "5+ years of consistent profitable trading",
        },
    ]

    const benefits = [
        "No minimum investment required",
        "24/7 account access",
        "Instant withdrawals",
        "Dedicated account manager",
        "Real-time portfolio tracking",
        "Insurance protection"
    ]

    return (
        <div className="min-h-screen bg-kryptex-dark text-white">
            {/* Hero Section - Professional Design */}
            <section className="relative bg-gradient-to-br from-kryptex-dark via-purple-900/20 to-kryptex-dark min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-amber-900/5"></div>
                
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                
                <div className="relative z-10 container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text Content - Left Side */}
                        <motion.div
                            className="text-center lg:text-left"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Trust Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/30 to-purple-800/30 backdrop-blur-sm border border-[#fbbf24]/20 rounded-full px-5 py-2 mb-8"
                            >
                                <div className="w-2 h-2 bg-[#fbbf24] rounded-full animate-pulse"></div>
                                <span className="text-[#fbbf24] font-medium tracking-wide">SEC-Registered & Fully Licensed</span>
                            </motion.div>

                            {/* Main Heading */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            >
                                #1 <span className="text-[#fbbf24]">Crypto Wealth</span> Management
                                <span className="block text-3xl md:text-4xl lg:text-5xl text-gray-300 mt-4">For Sophisticated Investors</span>
                            </motion.h1>

                            {/* Subtitle */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
                            >
                                Institutional-grade cryptocurrency investment solutions with risk-managed returns and professional portfolio oversight.
                            </motion.p>

                            {/* Benefits List */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10"
                            >
                                {benefits.slice(0, 4).map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-300">
                                        <CheckCircle className="w-4 h-4 text-[#fbbf24]" />
                                        <span className="text-sm md:text-base">{benefit}</span>
                                    </div>
                                ))}
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <Link to="/register">
                                    <Button className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-black font-semibold px-8 py-4 text-lg flex items-center justify-center w-full sm:w-auto hover:shadow-lg hover:shadow-[#fbbf24]/20 transition-all duration-300">
                                        Start Investing Now
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link to="/login">
                                    <Button
                                        variant="outline"
                                        className="border-2 border-[#fbbf24] text-[#fbbf24] hover:bg-[#fbbf24] hover:text-black px-8 py-4 text-lg bg-transparent w-full sm:w-auto hover:shadow-lg hover:shadow-[#fbbf24]/10 transition-all duration-300"
                                    >
                                        Login Account
                                    </Button>
                                </Link>
                            </motion.div>

                            {/* Stats Preview */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6"
                            >
                                {stats.slice(0, 2).map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-2xl font-bold text-[#fbbf24] mb-1"></div>
                                        <div className="text-sm text-gray-400"> </div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Hero Image - Right Side */}
                        <motion.div
                            className="flex justify-center items-center"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        >
                            <div className="relative w-full max-w-lg">
                                {/* Image Container with Professional Border */}
                                <div className="relative overflow-hidden rounded-2xl border border-[#fbbf24]/20 shadow-2xl shadow-[#fbbf24]/5">
                                    <img
                                        src="/cry.png"
                                        alt="Cryptoglobtrade Investment Platform"
                                        className="w-full h-auto object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "/placeholder.svg";
                                        }}
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-kryptex-dark/20 via-transparent to-transparent"></div>
                                </div>
                                
                                {/* Floating Card - Professional Feature */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2, duration: 0.5 }}
                                    className="absolute -bottom-6 right-6 bg-gradient-to-r from-purple-900/80 to-purple-800/80 backdrop-blur-sm border border-[#fbbf24]/20 rounded-xl p-4 max-w-xs shadow-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] flex items-center justify-center">
                                            <TrendingUp className="w-5 h-5 text-black" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">24.8% Average</div>
                                            <div className="text-sm text-gray-300">Monthly Returns</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                         <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6"
                            >
                                {stats.slice(0, 2).map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-2xl font-bold text-[#fbbf24] mb-1"></div>
                                        <div className="text-sm text-gray-400"> </div>
                                    </div>
                                ))}
                            </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-[#fbbf24] mb-2">{stat.number}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Why Choose <span className="text-[#fbbf24]">Cryptoglobtrade</span>?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Experience institutional-grade cryptocurrency investment with our professional platform
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="glass border border-[#fbbf24]/20 rounded-xl p-6 text-center hover:border-[#fbbf24]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#fbbf24]/5"
                            >
                                <div className="mb-4 flex justify-center">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ServicesSection />
            <CryptoChartsSection />

            {/* Testimonials Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-purple-900/10 to-transparent">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            What Our <span className="text-[#a78bfa]">Investors</span> Say
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Hear from our satisfied investors around the globe
                        </p>
                    </motion.div>

                    <TestimonialCarousel />
                </div>
            </section>

            {/* Transactions Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Real-time <span className="text-[#fbbf24]">Transactions</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            See the latest deposits and withdrawals happening on our platform
                        </p>
                    </motion.div>

                    <Transactions />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Ready to Start Your <span className="text-[#fbbf24]">Investment Journey</span>?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join thousands of successful investors and start building your crypto wealth today
                        </p>
                        <Link to="/register">
                            <Button className="bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] hover:from-[#8b5cf6] hover:to-[#7c3aed] text-white font-semibold px-12 py-4 text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-800/20">
                                Get Started Now
                                <ArrowRight className="ml-2 w-6 h-6" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}