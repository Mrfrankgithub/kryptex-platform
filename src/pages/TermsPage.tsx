"use client"

import { motion } from "framer-motion"
import { ShieldAlert, ShieldCheck, Lock, BarChart2, Users, Award } from "lucide-react"
import PageHeader from "../components/PageHeader"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-kryptex-dark text-foreground">
      <PageHeader
        title="Terms & Conditions"
        subtitle="Rules and regulations governing your use of our platform"
        breadcrumb="Terms"
      />

      {/* Terms Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-kryptex-card backdrop-blur-sm border border-kryptex-cyan/20 rounded-xl p-8 mb-12"
          >
            <div className="flex items-start mb-6">
              <ShieldCheck className="w-10 h-10 text-kryptex-cyan mr-4 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Rules & Agreements</h2>
                <p className="text-gray-400">Please read the following rules carefully before signing in.</p>
              </div>
            </div>
            
            <div className="border border-kryptex-cyan/20 rounded-lg p-5 bg-kryptex-dark/50">
              <p className="text-gray-300 flex items-start">
                <span className="text-kryptex-cyan mr-2">•</span>
                You agree to be of legal age in your country to partake in this program, and in all cases your minimum age must be 18 years.
              </p>
              <p className="text-gray-300 mt-3 flex items-start">
                <span className="text-kryptex-cyan mr-2">•</span>
                Futuregains is not available to the general public and is opened only to qualified members. 
                The use of this site is restricted to our members and to individuals personally invited by them. 
                Every deposit is considered to be a private transaction between Futuregains and its Member.
              </p>
            </div>
          </motion.div>

          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-kryptex-cyan/10 flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-kryptex-cyan">1</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Terms & Conditions</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-kryptex-card backdrop-blur-sm border border-border/20 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-kryptex-cyan mr-3" />
                  <h3 className="text-xl font-semibold text-white">Maturity of Investment</h3>
                </div>
                <p className="text-gray-400">
                  All financial investment options offered on Futuregains have a maturity date, which each client agrees to before purchasing a product.
                </p>
              </div>
              
              <div className="bg-kryptex-card backdrop-blur-sm border border-border/20 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-kryptex-cyan mr-3" />
                  <h3 className="text-xl font-semibold text-white">Confirmation of Investments</h3>
                </div>
                <p className="text-gray-400">
                  All client investment orders accepted on Futuregains are backed-up by a confirmation message, while investment orders rejected receive a rejection message.
                </p>
              </div>
              
              <div className="bg-kryptex-card backdrop-blur-sm border border-border/20 rounded-xl p-6 md:col-span-2">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-kryptex-cyan mr-3" />
                  <h3 className="text-xl font-semibold text-white">Promoting the Platform and Reward</h3>
                </div>
                <p className="text-gray-400">
                  A client can promote the platform on YouTube or any other media with their referral link to get extra 3% commission on every new active downline every month.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-kryptex-cyan/10 flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-kryptex-cyan">2</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Leadership Ranks & Rewards</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-kryptex-dark to-kryptex-card border border-kryptex-cyan/20 rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-kryptex-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <BarChart2 className="w-8 h-8 text-kryptex-cyan" />
                </div>
                <h3 className="text-xl font-bold text-kryptex-cyan mb-3">EXECUTIVE</h3>
                <ul className="space-y-2 text-gray-300 text-left">
                  <li className="flex items-start">
                    <span className="text-kryptex-cyan mr-2">•</span>
                    Active account of $65,000
                  </li>
                  <li className="flex items-start">
                    <span className="text-kryptex-cyan mr-2">•</span>
                    50 active direct/indirect downlines
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-kryptex-dark/50 rounded-lg">
                  <p className="text-kryptex-cyan font-bold">Monthly bonus: $2,000</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-kryptex-dark to-kryptex-card border border-kryptex-cyan/20 rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-kryptex-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <BarChart2 className="w-8 h-8 text-kryptex-cyan" />
                </div>
                <h3 className="text-xl font-bold text-kryptex-cyan mb-3">DIRECTOR</h3>
                <ul className="space-y-2 text-gray-300 text-left">
                  <li className="flex items-start">
                    <span className="text-kryptex-cyan mr-2">•</span>
                    Active account of $100,000
                  </li>
                  <li className="flex items-start">
                    <span className="text-kryptex-cyan mr-2">•</span>
                    30 active direct/indirect downlines
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-kryptex-dark/50 rounded-lg">
                  <p className="text-kryptex-cyan font-bold">Monthly bonus: $3,500</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-kryptex-dark to-kryptex-card border border-kryptex-cyan/20 rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-kryptex-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <BarChart2 className="w-8 h-8 text-kryptex-cyan" />
                </div>
                <h3 className="text-xl font-bold text-kryptex-cyan mb-3">AMBASSADOR</h3>
                <ul className="space-y-2 text-gray-300 text-left">
                  <li className="flex items-start">
                    <span className="text-kryptex-cyan mr-2">•</span>
                    Active account of $150,000+
                  </li>
                  <li className="flex items-start">
                    <span className="text-kryptex-cyan mr-2">•</span>
                    15 active direct/indirect downlines
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-kryptex-dark/50 rounded-lg">
                  <p className="text-kryptex-cyan font-bold">Monthly bonus: $5,000</p>
                  <p className="text-kryptex-green text-sm mt-1">+ Regional representative status</p>
                </div>
              </div>
            </div>
            
            <div className="text-center text-gray-400 italic">
              <p>Clients need to attain a specific level before qualifying for any of the ranks and these ranks come with a monthly bonus.</p>
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-kryptex-cyan/10 flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-kryptex-cyan">3</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Reinvestment of Funds</h2>
            </div>
            
            <div className="bg-kryptex-card backdrop-blur-sm border border-kryptex-cyan/20 rounded-xl p-8">
              <div className="flex items-start mb-4">
                <Award className="w-6 h-6 text-kryptex-cyan mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Unless the client is in the leadership ranks or has a direct or indirect downline of 40 members, 
                  reinvestment cycles are done 3 times in a row and clients should increase their investment according to their initial deposit.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Scam Warning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border border-red-500/40 rounded-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-red-900/50 to-red-800/30 p-6 flex items-center">
              <ShieldAlert className="w-10 h-10 text-red-400 mr-4 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-white">Scam Warning</h2>
                <p className="text-red-300">Fraud Information and Help</p>
              </div>
            </div>
            
            <div className="p-6 bg-kryptex-card">
              <p className="text-gray-300 mb-6">
                Futuregains is dedicated to your security. There have been reports of fraudulent phone calls, 
                emails, or other communications recently, impersonating brokerages and looking to defraud individuals 
                of their funds or extract bank account information. There is never too much information when it comes 
                to the best cybersecurity practices.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-4">Protect Yourself:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span className="text-gray-300">Change your passwords, keep them strong and unique for each account</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span className="text-gray-300">Make sure that all your antivirus and security software is up to date and active</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span className="text-gray-300">Never share your login credentials or two-factor authentication codes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span className="text-gray-300">Verify the authenticity of any communication claiming to be from Futuregains</span>
                </li>
              </ul>
              
              <div className="border-t border-red-500/30 pt-6">
                <p className="text-gray-300 mb-4">
                  If you have any questions about your security, or if you feel like you have received any kind of fraudulent communication, 
                  please contact us using the contact form, or mail us directly at:
                </p>
                {/* <div className="flex items-center">
                  <Mail className="w-5 h-5 text-kryptex-cyan mr-2" />
                  <span className="text-kryptex-cyan font-medium">support@kryptexminingfarm.com</span>
                </div> */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
     
    </div>
  )
}