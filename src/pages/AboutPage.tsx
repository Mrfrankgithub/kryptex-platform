"use client"

import { motion } from "framer-motion"
import { Users, Target, Award, Globe } from "lucide-react"
import PageHeader from "../components/PageHeader"

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-kryptex-cyan" />,
      title: "Our Mission",
      description: "To democratize cryptocurrency investment and make it accessible to everyone worldwide.",
    },
    {
      icon: <Users className="w-8 h-8 text-kryptex-green" />,
      title: "Our Team",
      description: "Expert traders and developers with over 50 years of combined experience in finance and technology.",
    },
    {
      icon: <Award className="w-8 h-8 text-kryptex-cyan" />,
      title: "Our Achievement",
      description: "Consistently delivering 15-25% monthly returns with a 98.5% success rate since 2019.",
    },
    {
      icon: <Globe className="w-8 h-8 text-kryptex-green" />,
      title: "Global Reach",
      description: "Serving over 50,000 investors across 120+ countries with 24/7 multilingual support.",
    },
  ]

  const team = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Former Goldman Sachs trader with 15+ years in cryptocurrency markets",
    },
    {
      name: "Sarah Kim",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Blockchain expert and former Google engineer specializing in fintech",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Trading",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Quantitative analyst with proven track record in algorithmic trading",
    },
  ]

  return (
    <div className="min-h-screen bg-kryptex-dark text-foreground">
      <PageHeader
        title="About Kryptex"
        subtitle="Leading cryptocurrency investment platform helping investors achieve financial freedom through strategic crypto trading"
        breadcrumb="About"
      />

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="text-kryptex-green">Core Values</span>
            </h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-kryptex-card backdrop-blur-sm border border-border/20 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-kryptex-cyan/30"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Meet Our <span className="text-kryptex-cyan">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-400">Industry veterans dedicated to your investment success</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-kryptex-card backdrop-blur-sm border border-border/20 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-kryptex-cyan/30"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-kryptex-cyan/30"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                <p className="text-kryptex-cyan mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section with Background */}
      <section 
        className="py-20 px-4 relative"
        style={{
          backgroundImage: "url('/aboutbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-kryptex-dark/90 backdrop-blur-sm"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 lg:text-left text-center"
          >
            <div className="inline-block bg-kryptex-card backdrop-blur-sm px-6 py-3 rounded-full border border-kryptex-cyan/20 mb-6">
              <span className="text-kryptex-cyan text-sm font-medium">OUR JOURNEY</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
              Our <span className="text-kryptex-green">Story</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Kryptex was born from a simple vision: to make cryptocurrency investment accessible, profitable, and
                secure for everyone. Our founders, having witnessed the explosive growth of digital assets, recognized
                the need for a platform that could bridge the gap between traditional finance and the crypto revolution.
              </p>
              <p>
                Starting with just three team members and a shared passion for blockchain technology, we've grown into a
                global platform serving over 50,000 investors worldwide. Our success is built on transparency,
                innovation, and an unwavering commitment to our clients' financial growth.
              </p>
              <p>
                Today, Kryptex stands as a testament to what's possible when cutting-edge technology meets financial
                expertise. We continue to evolve, always staying ahead of market trends and regulatory changes to ensure
                our investors have the best possible experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}