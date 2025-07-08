"use client"




import { motion } from "framer-motion"

import { ArrowRight, TrendingUp, Shield, Users, Award } from "lucide-react"

import { Link } from "react-router-dom"

import { useState, useEffect } from "react"

import Button from "../components/ui/Button"

import Loader from "../components/Loader"

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

            icon: <Shield className="w-8 h-8 text-[#00f0ff]" />,

            title: "Secure Investment",

            description: "Bank-level security with multi-layer encryption",

        },

        {

            icon: <TrendingUp className="w-8 h-8 text-[#4ade80]" />,

            title: "High Returns",

            description: "Up to 25% monthly returns on your investments",

        },

        {

            icon: <Users className="w-8 h-8 text-[#00f0ff]" />,

            title: "Expert Team",

            description: "Professional traders managing your portfolio",

        },

        {

            icon: <Award className="w-8 h-8 text-[#4ade80]" />,

            title: "Proven Track Record",

            description: "5+ years of consistent profitable trading",

        },

    ]




    useEffect(() => {

        // Simulate loading time

        const timer = setTimeout(() => {

            setLoading(false);

        }, 3000);



        return () => clearTimeout(timer);

    }, []);




    return (

        <div className="min-h-screen bg-[#0a0e17] text-white">

            <section className="relative bg-[#0a0e17] text-white min-h-screen flex items-center justify-center overflow-hidden py-24 px-4">

                {/* Background Animations */}

                <div className="absolute inset-0 z-0">

                    {/* Animated Grid */}

                    <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-30">

                        {[...Array(144)].map((_, i) => (

                            <motion.div

                                key={`grid-${i}`}

                                className="border border-[#1a213a]/50"

                                initial={{ opacity: 0 }}

                                animate={{ opacity: 1 }}

                                transition={{ duration: 0.5, delay: i * 0.005 }}

                            />

                        ))}

                    </div>

                    {/* Floating Particles */}

                    {[...Array(20)].map((_, i) => (

                        <motion.div

                            key={`particle-${i}`}

                            className="absolute rounded-full bg-[#00f0ff]"

                            style={{

                                width: Math.random() * 4 + 2,

                                height: Math.random() * 4 + 2,

                                left: `${Math.random() * 100}%`,

                                top: `${Math.random() * 100}%`,

                            }}

                            animate={{

                                y: [0, Math.random() * 40 - 20, 0],

                                x: [0, Math.random() * 40 - 20, 0],

                                scale: [1, 1.2, 1],

                            }}

                            transition={{

                                duration: 5 + Math.random() * 10,

                                repeat: Infinity,

                                ease: "easeInOut",

                            }}

                        />

                    ))}

                </div>




                <div className="relative z-10 container mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">



                        {/* Text Content - Left Side */}

                        <motion.div

                            className="text-center lg:text-left"

                            initial={{ opacity: 0, x: -50 }}

                            animate={{ opacity: 1, x: 0 }}

                            transition={{ duration: 0.8, ease: "easeOut" }}

                        >

                            <motion.div

                                initial={{ opacity: 0, y: 20 }}

                                animate={{ opacity: 1, y: 0 }}

                                transition={{ delay: 0.2, duration: 0.5 }}

                                className="inline-block bg-[#1a213a] rounded-full px-5 py-2 mb-6 border border-[#00f0ff]/30"

                            >

                                <span className="text-[#00f0ff] font-medium tracking-wide">Trusted by 50K+ Investors</span>

                            </motion.div>




                            <motion.h1

                                initial={{ opacity: 0, y: 20 }}

                                animate={{ opacity: 1, y: 0 }}

                                transition={{ delay: 0.4, duration: 0.5 }}

                                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"

                            >

                                Future-Proof Your Wealth With <span className="text-[#00f0ff]">Crypto</span> Investments

                            </motion.h1>




                            <motion.p

                                initial={{ opacity: 0, y: 20 }}

                                animate={{ opacity: 1, y: 0 }}

                                transition={{ delay: 0.6, duration: 0.5 }}

                                className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"

                            >

                                Secure cryptocurrency investment solutions with guaranteed returns and professional portfolio management.

                            </motion.p>




                            <motion.div

                                initial={{ opacity: 0, y: 20 }}

                                animate={{ opacity: 1, y: 0 }}

                                transition={{ delay: 0.8, duration: 0.5 }}

                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"

                            >

                                <Link to="/register">

                                    <Button className="bg-[#00f0ff] hover:bg-[#00d4e6] text-black font-semibold px-8 py-4 text-lg flex items-center justify-center w-full sm:w-auto">

                                        Start Investing Now

                                        <ArrowRight className="ml-2 w-5 h-5" />

                                    </Button>

                                </Link>

                                <Link to="/investment-plans">

                                    <Button

                                        variant="outline"

                                        className="border-2 border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black px-8 py-4 text-lg bg-transparent w-full sm:w-auto"

                                    >

                                        View Plans

                                    </Button>

                                </Link>

                            </motion.div>

                        </motion.div>




                        {/* Image Content - Right Side (Simplified) */}

                        <motion.div

                            className="flex justify-center items-center mt-12 lg:mt-0" // Always flex, with margin-top on mobile

                            initial={{ opacity: 0, scale: 0.8 }}

                            animate={{ opacity: 1, scale: 1 }}

                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}

                        >

                            {/* Simplified Image Container */}

                            <div className="relative w-full max-w-md">

                                <img

                                    src="/hero.jpg" // Path to your image in the public folder

                                    alt="Crypto Investment"

                                    className="w-full h-auto object-cover rounded-2xl shadow-2xl shadow-cyan-500/20" // Kept subtle rounding and shadow

                                />

                            </div>

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

                                <div className="text-3xl md:text-4xl font-bold text-[#00f0ff] mb-2">{stat.number}</div>

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

                        <h2 className="text-3xl md:text-5xl font-bold mb-6">

                            Why Choose <span className="text-[#00f0ff]">Kryptex</span>?

                        </h2>

                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">

                            Experience the future of cryptocurrency investment with our cutting-edge platform

                        </p>

                    </motion.div>



                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {features.map((feature, index) => (

                            <motion.div

                                key={index}

                                initial={{ opacity: 0, y: 30 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                transition={{ duration: 0.6, delay: index * 0.1 }}

                                whileHover={{ scale: 1.05 }}

                                className="bg-[rgba(26,33,58,0.6)] backdrop-blur-md border border-[#00f0ff]/20 rounded-xl p-6 text-center hover:border-[#00f0ff]/40 transition-all duration-300"

                            >

                                <div className="mb-4 flex justify-center">{feature.icon}</div>

                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

                                <p className="text-gray-400">{feature.description}</p>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>




          

            <ServicesSection />



           

            <CryptoChartsSection />



           

            <section className="py-20 px-4 bg-[rgba(26,33,58,0.3)]">

                <div className="max-w-6xl mx-auto">

                    <motion.div

                        initial={{ opacity: 0, y: 30 }}

                        whileInView={{ opacity: 1, y: 0 }}

                        transition={{ duration: 0.8 }}

                        className="text-center mb-16"

                    >

                        <h2 className="text-3xl md:text-5xl font-bold mb-6">

                            What Our <span className="text-[#4ade80]">Investors</span> Say

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

                        <h2 className="text-3xl md:text-5xl font-bold mb-6">

                            Real-time <span className="text-[#00f0ff]">Transactions</span>

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

                        <h2 className="text-3xl md:text-5xl font-bold mb-6">

                            Ready to Start Your <span className="text-[#00f0ff]">Investment Journey</span>?

                        </h2>

                        <p className="text-xl text-gray-300 mb-8">

                            Join thousands of successful investors and start your crypto journey today

                        </p>

                        <Link to="/register">

                            <Button className="bg-[#4ade80] hover:bg-[#3bc470] text-black font-semibold px-12 py-4 text-xl transition-all duration-300 transform hover:scale-105">

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