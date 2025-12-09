"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Shield, Users, Award, CheckCircle, Sparkles, Globe, BarChart3, Lock } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../components/ui/Button"
import TestimonialCarousel from "../components/TestimonialCarousel"
import Transactions from "../components/Transactions"
import ServicesSection from "../components/ServicesSection"
import DashboardShowcase from "../components/DashboardShowcase"
import CryptoChartsSection from "../components/CryptoChartsSection"

export default function HomePage() {
    const stats = [
        { number: "31K+", label: "Active Investors", icon: <Users className="w-4 h-4" /> },
        { number: "97.5%", label: "Success Rate", icon: <TrendingUp className="w-4 h-4" /> },
        { number: "$2.2B+", label: "Total Managed", icon: <BarChart3 className="w-4 h-4" /> },
        { number: "24/7", label: "Global Support", icon: <Globe className="w-4 h-4" /> },
    ]

    const features = [
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Secure Investment",
            description: "Bank-level security with multi-layer encryption and institutional-grade protection",
            gradient: "from-kryptex-cyan to-kryptex-green"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "High Returns",
            description: "Consistent 15-25% monthly returns with proven investment strategies",
            gradient: "from-kryptex-gold to-kryptex-cyan"
        },
        {
            icon: <Lock className="w-8 h-8" />,
            title: "Regulated Platform",
            description: "Fully licensed and compliant with international financial regulations",
            gradient: "from-kryptex-green to-kryptex-gold"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Proven Excellence",
            description: "25+ years of consistent profitable returns for our investors",
            gradient: "from-kryptex-cyan to-kryptex-gold"
        },
    ]

    
    /* FIX: Added overflow-x-hidden to the main container to ensure the root element prevents horizontal overflow */
    return (
        <div className="min-h-screen bg-kryptex-dark text-white overflow-x-hidden">
            {/* Hero Section - Professional Centered Design */}
            {/* The absolute elements within this section are contained by overflow-hidden */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full px-4 pt-20">
                {/* Animated background */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Main gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-kryptex-dark via-kryptex-card/30 to-kryptex-dark" />
                    
                    {/* Animated gradient orbs - these are the elements most likely to cause overflow, but are now contained by the inner overflow-hidden div */}
                    <motion.div
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -50, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-kryptex-cyan/10 via-transparent to-kryptex-gold/10 blur-3xl"
                    />
                    
                    <motion.div
                        animate={{
                            x: [0, -80, 0],
                            y: [0, 60, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 0.5
                        }}
                        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-kryptex-gold/5 via-transparent to-kryptex-cyan/5 blur-3xl"
                    />
                    
                    {/* Grid pattern */}
                    <div 
                        className="absolute inset-0 opacity-[0.015]"
                        style={{
                            backgroundImage: `linear-gradient(to right, #8A3FFC 1px, transparent 1px),
                                              linear-gradient(to bottom, #8A3FFC 1px, transparent 1px)`,
                            backgroundSize: '60px 60px'
                        }}
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-6xl mx-auto">
                    <div className="text-center">
                        {/* Trust badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex flex-wrap gap-3 justify-center items-center mb-8"
                        >
                            <div className="glass px-4 py-2 rounded-full border border-kryptex-cyan/20 flex items-center gap-2">
                                <Sparkles className="w-3 h-3 text-kryptex-cyan" />
                                <span className="text-sm text-kryptex-cyan font-medium">SEC-REGISTERED</span>
                            </div>
                            <div className="glass px-4 py-2 rounded-full border border-kryptex-gold/20 flex items-center gap-2">
                                <Shield className="w-3 h-3 text-kryptex-gold" />
                                <span className="text-sm text-kryptex-gold font-medium">FULLY LICENSED</span>
                            </div>
                            <div className="glass px-4 py-2 rounded-full border border-kryptex-green/20 flex items-center gap-2">
                                <Award className="w-3 h-3 text-kryptex-green" />
                                <span className="text-sm text-kryptex-green font-medium">AWARD-WINNING</span>
                            </div>
                        </motion.div>

                        {/* Main heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                        >
                            <span className="text-white">Elevate Your</span>
                            <div className="mt-2">
                                <span className="bg-gradient-to-r from-kryptex-cyan via-kryptex-gold to-kryptex-cyan bg-clip-text text-transparent animate-gradient-x">
                                    Financial Future
                                </span>
                            </div>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-kryptex-light max-w-3xl mx-auto mb-10 font-light"
                        >
                            Institutional-grade cryptocurrency investment management for sophisticated investors seeking exceptional returns with managed risk.
                        </motion.p>

                        
                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                        >
                            <Link to="/register">
                                <Button className="group bg-gradient-to-r from-kryptex-cyan to-kryptex-green hover:from-kryptex-green hover:to-kryptex-cyan text-white font-semibold px-5 py-3 text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-kryptex-cyan/30 hover:scale-105">
                                    <span className="flex items-center gap-2">
                                        Begin Your Journey
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </span>
                                </Button>
                            </Link>
                            <Link to="/investment-plans">
                                <Button
                                    variant="outline"
                                    className="border-2 border-kryptex-gold text-kryptex-gold hover:bg-kryptex-gold hover:text-black px-5 py-3 text-lg rounded-xl bg-transparent transition-all duration-300 hover:shadow-lg hover:shadow-kryptex-gold/20"
                                >
                                    Login Account
                                </Button>
                            </Link>
                        </motion.div>

                        
                    </div>
                </div>

                
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4 relative">
                <div className="absolute inset-0 bg-gradient-radial-purple opacity-50" />
                <div className="max-w-6xl mx-auto relative">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass border border-kryptex-cyan/10 rounded-xl p-6 text-center"
                            >
                                <div className="inline-block p-3 rounded-lg bg-gradient-to-r from-kryptex-cyan/10 to-kryptex-gold/10 mb-4">
                                    <div className="text-kryptex-cyan">
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                                <div className="text-kryptex-light font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 relative">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block mb-4">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                                Institutional <span className="text-kryptex-cyan">Excellence</span>
                            </h2>
                                                     <div className="w-12 h-1 bg-gradient-to-r from-kryptex-cyan to-kryptex-gold mx-auto mb-4"></div>
                        </div>
                        <p className="text-xl text-kryptex-light max-w-3xl mx-auto">
                            Professional investment management combining cutting-edge technology with proven financial expertise
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group"
                            >
                                <div className={`h-full bg-gradient-to-br ${feature.gradient}/10 from-10% to-90% border border-${feature.gradient.split('-')[1]}/20 rounded-2xl p-6 transition-all duration-300 hover:border-${feature.gradient.split('-')[1]}/40 hover:shadow-xl hover:shadow-${feature.gradient.split('-')[1]}/10`}>
                                    <div className="mb-6">
                                        <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${feature.gradient} bg-opacity-10`}>
                                            <div className="text-white">
                                                {feature.icon}
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-kryptex-cyan group-hover:to-kryptex-gold">
                                        {feature.title}
                                    </h3>
                                    <p className="text-kryptex-light">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <ServicesSection />

            <DashboardShowcase /> 

            {/* Crypto Charts Section */}
            <CryptoChartsSection />

            {/* Testimonials Section */}
            <section className="py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-kryptex-card/20 via-transparent to-kryptex-dark/30" />
                <div className="max-w-6xl mx-auto relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block mb-4">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                                Trusted by <span className="text-kryptex-gold">Investors</span>
                            </h2>
                          <div className="w-12 h-1 bg-gradient-to-r from-kryptex-gold to-kryptex-cyan mx-auto mb-4"></div>

                        </div>
                        <p className="text-xl text-kryptex-light max-w-3xl mx-auto">
                            Hear from our global community of successful investors who trust us with their financial future
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
                        <div className="inline-block mb-4">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                                Real-time <span className="text-kryptex-cyan">Activity</span>
                            </h2>
                            <div className="w-12 h-1 bg-gradient-to-r from-kryptex-cyan to-kryptex-green mx-auto mb-4"></div>                          
                        </div>
                        <p className="text-xl text-kryptex-light max-w-3xl mx-auto">
                            Transparent live tracking of investment activity across our platform
                        </p>
                    </motion.div>

                    <Transactions />
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-4 relative">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            rotate: 360
                        }}
                        transition={{
                            duration: 120,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-kryptex-cyan/5 via-transparent to-kryptex-gold/5"
                    />
                </div>
                
                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8 }}
                        /* FIX: Changed p-12 to responsive padding: p-6 sm:p-12 */
                        className="glass border border-kryptex-cyan/20 rounded-3xl p-6 sm:p-12 text-center"
                    >
                        <div className="inline-block p-4 rounded-2xl bg-gradient-to-r from-kryptex-cyan/10 to-kryptex-gold/10 mb-8">
                            <Sparkles className="w-12 h-12 text-kryptex-cyan" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Ready for <span className="bg-gradient-to-r from-kryptex-cyan via-kryptex-gold to-kryptex-cyan bg-clip-text text-transparent animate-gradient-x">Exceptional Returns</span>?
                        </h2>
                        <p className="text-xl text-kryptex-light mb-10 max-w-2xl mx-auto">
                            Join thousands of sophisticated investors who have transformed their financial future with Future Gains
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/register">
                                <Button className="bg-gradient-to-r from-kryptex-cyan to-kryptex-green hover:from-kryptex-green hover:to-kryptex-cyan text-white font-semibold px-10 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-kryptex-cyan/30 hover:scale-105">
                                    Start Investing Today
                                    <ArrowRight className="ml-2 w-6 h-6" />
                                </Button>
                            </Link>
                            <Link to="/about">
                                <Button
                                    variant="outline"
                                    className="border-2 border-kryptex-gold text-kryptex-gold hover:bg-kryptex-gold hover:text-black px-8 py-4 text-lg rounded-xl bg-transparent"
                                >
                                    Learn About Us
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}