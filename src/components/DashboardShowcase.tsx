"use client";

import { motion } from "framer-motion";
import { CheckCircle, Shield, TrendingUp, Globe, Lock, Zap } from "lucide-react";

const DashboardShowcase = () => {
  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Real-time Analytics",
      description: "Live portfolio tracking with advanced charting and performance metrics"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Secure Dashboard",
      description: "Military-grade encryption and multi-factor authentication"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Performance Insights",
      description: "AI-powered insights to optimize your investment strategy"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global Access",
      description: "Access your portfolio from anywhere, on any device"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-kryptex-card to-kryptex-dark">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-kryptex-card border border-kryptex-cyan/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-kryptex-cyan rounded-full mr-2 animate-pulse"></div>
              <span className="text-kryptex-cyan font-medium text-sm">DASHBOARD PREVIEW</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Professional <span className="text-kryptex-cyan">Dashboard</span>
            </h2>
            
            <p className="text-xl text-kryptex-light mb-8">
              Experience our cutting-edge dashboard designed for serious investors. Monitor your portfolio, track performance, and make informed decisions with institutional-grade tools.
            </p>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-kryptex-card border border-kryptex-cyan/20 rounded-xl p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-kryptex-card border border-kryptex-cyan/20 flex items-center justify-center flex-shrink-0">
                      <div className="text-kryptex-cyan">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-kryptex-light">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-kryptex-green" />
                <span className="text-kryptex-light">Real-time profit/loss tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-kryptex-green" />
                <span className="text-kryptex-light">Advanced charting with technical indicators</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-kryptex-green" />
                <span className="text-kryptex-light">Customizable portfolio views</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main dashboard container */}
            <div className="relative rounded-2xl overflow-hidden border border-kryptex-cyan/20 shadow-2xl">
              {/* Dashboard top bar */}
              <div className="bg-kryptex-card p-4 border-b border-kryptex-cyan/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-kryptex-cyan"></div>
                    <div className="w-3 h-3 rounded-full bg-kryptex-gold"></div>
                    <div className="w-3 h-3 rounded-full bg-kryptex-green"></div>
                  </div>
                  <div className="text-sm text-kryptex-light font-medium">Future Gains Dashboard</div>
                  <div className="text-xs text-kryptex-light">Live</div>
                </div>
              </div>
              
              {/* Dashboard content */}
              <div className="bg-kryptex-dark p-6">
                {/* Portfolio summary */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-sm text-kryptex-light">Total Portfolio Value</div>
                      <div className="text-3xl font-bold text-white">$124,857.42</div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-kryptex-green/20 border border-kryptex-green/30">
                      <span className="text-kryptex-green text-sm font-medium">+18.4%</span>
                    </div>
                  </div>
                  
                  {/* Mini charts */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: "BTC", value: "$42,186", change: "+2.3%", color: "from-orange-500 to-amber-500" },
                      { label: "ETH", value: "$2,847", change: "+1.8%", color: "from-purple-500 to-violet-500" },
                      { label: "SOL", value: "$102", change: "+5.2%", color: "from-cyan-500 to-teal-500" },
                      { label: "ADA", value: "$0.48", change: "-0.8%", color: "from-blue-500 to-indigo-500" }
                    ].map((asset, idx) => (
                      <div key={idx} className="bg-kryptex-card border border-kryptex-cyan/10 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <div className="text-white font-medium">{asset.label}</div>
                          <div className={`text-xs px-2 py-1 rounded ${asset.change.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                            {asset.change}
                          </div>
                        </div>
                        <div className="text-lg font-bold text-white">{asset.value}</div>
                        <div className={`h-1 mt-2 rounded-full bg-gradient-to-r ${asset.color}`}></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity feed */}
                <div>
                  <div className="text-sm font-medium text-white mb-3">Recent Activity</div>
                  <div className="space-y-3">
                    {[
                      { type: "Deposit", amount: "+$5,000", time: "2 min ago", status: "Completed" },
                      { type: "Investment", amount: "-$2,500", time: "1 hour ago", status: "Active" },
                      { type: "Profit", amount: "+$423", time: "4 hours ago", status: "Credited" }
                    ].map((activity, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-kryptex-card border border-kryptex-cyan/10">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            activity.type === 'Deposit' ? 'bg-green-500/20' :
                            activity.type === 'Investment' ? 'bg-blue-500/20' :
                            'bg-amber-500/20'
                          }`}>
                            <div className={`text-sm ${
                              activity.type === 'Deposit' ? 'text-green-400' :
                              activity.type === 'Investment' ? 'text-blue-400' :
                              'text-amber-400'
                            }`}>
                              {activity.type === 'Deposit' ? '↑' :
                               activity.type === 'Investment' ? '→' : '★'}
                            </div>
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">{activity.type}</div>
                            <div className="text-xs text-kryptex-light">{activity.time}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-medium ${
                            activity.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'
                          }`}>{activity.amount}</div>
                          <div className="text-xs text-kryptex-light">{activity.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;