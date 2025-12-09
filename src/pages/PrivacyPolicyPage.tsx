// src/pages/PrivacyPolicyPage.tsx
"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Mail, Building, Banknote, Users, FileText } from "lucide-react"
import PageHeader from "../components/PageHeader"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-kryptex-dark text-foreground">
      <PageHeader
        title="Privacy Policy & Financial Security"
        subtitle="How we protect your information and funds"
        breadcrumb="Privacy Policy"
      />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-kryptex-card backdrop-blur-sm border border-kryptex-cyan/20 rounded-xl p-8 mb-16"
          >
            <div className="flex items-start mb-6">
              <Shield className="w-10 h-10 text-kryptex-cyan mr-4 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Privacy Commitment</h2>
                <p className="text-gray-400">
                  Futuregains is committed to protecting your privacy and ensuring the security of your financial assets.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Privacy Policy Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-kryptex-cyan/10 flex items-center justify-center mr-4">
                <Lock className="w-6 h-6 text-kryptex-cyan" />
              </div>
              <h2 className="text-3xl font-bold text-white">Privacy Policy</h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Information Collection",
                  icon: <FileText className="w-6 h-6 text-kryptex-cyan" />,
                  content: "This Privacy Policy outlines what specific information is gathered on our site, and how that information is used."
                },
                {
                  title: "Data Processing",
                  icon: <Building className="w-6 h-6 text-kryptex-cyan" />,
                  content: "Futuregains (1 Old Street Yard, London UK EC1Y 8AF) has developed this platform. We recognize the importance of the protection of personal data and promise to respect your privacy and process your personal data in a careful and confidential manner."
                },
                {
                  title: "Purpose of Processing",
                  icon: <Users className="w-6 h-6 text-kryptex-cyan" />,
                  content: "We process your data to: reply to your comments/questions, handle product information requests, process job applications, and monitor/improve our services."
                },
                {
                  title: "Data Types",
                  icon: <Lock className="w-6 h-6 text-kryptex-cyan" />,
                  content: "We process contact information, application details for job seekers, and logon information for security purposes. All data is stored in a manner where it cannot be traced back to individuals."
                },
                {
                  title: "Data Access",
                  icon: <Shield className="w-6 h-6 text-kryptex-cyan" />,
                  content: "Only authorized Futuregains personnel have access to your data. We never disclose your information to third parties except as required for verification purposes."
                },
                {
                  title: "Marketing & Cookies",
                  icon: <Mail className="w-6 h-6 text-kryptex-cyan" />,
                  content: "We do not use your data for unsolicited marketing. Our website uses cookies to identify users and monitor platform usage. You can refuse cookies, but this may limit functionality."
                },
                {
                  title: "Data Storage & Security",
                  icon: <Lock className="w-6 h-6 text-kryptex-cyan" />,
                  content: "Data is stored on secure servers in London, UK. We've implemented technical and organizational measures to protect your data from unauthorized access."
                },
                {
                  title: "Your Rights",
                  icon: <Users className="w-6 h-6 text-kryptex-cyan" />,
                  content: "You have the right to access, correct, or delete your data. You can withdraw consent at any time by contacting us at support@Futuregains.com."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-kryptex-card backdrop-blur-sm border border-border/20 rounded-xl p-6"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Financial Security Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-kryptex-green/10 flex items-center justify-center mr-4">
                <Banknote className="w-6 h-6 text-kryptex-green" />
              </div>
              <h2 className="text-3xl font-bold text-white">Financial Security</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-kryptex-dark to-kryptex-card border border-kryptex-green/20 rounded-xl p-8">
                <h3 className="text-xl font-bold text-kryptex-green mb-4">Segregation of Client Funds</h3>
                <p className="text-gray-300 mb-4">
                  In accordance with FCA rules, all client money is kept fully segregated from Futuregains's own assets in an EEA-regulated credit institution. This ensures that clients funds are identifiable and available at all times and cannot be used by Futuregains for any purpose.
                </p>
                <p className="text-gray-300">
                  Under UK insolvency law, client money is protected and therefore unavailable to general creditors of the firm. Futuregains performs daily client money reconciliations in accordance with FCA requirements.
                </p>
              </div>

              <div className="bg-gradient-to-br from-kryptex-dark to-kryptex-card border border-kryptex-green/20 rounded-xl p-8">
                <h3 className="text-xl font-bold text-kryptex-green mb-4">Regulatory Compliance</h3>
                <p className="text-gray-300 mb-4">
                  Futuregains is regulated by the FCA and is required to file individual Client Money Asset Returns (CMAR) on a daily/weekly basis with the regulator. Our client money controls and processes are audited annually by our auditors who report to the FCA.
                </p>
                <p className="text-gray-300">
                  If the bank holding segregated client money goes into liquidation, any losses would be covered by the FSCS up to £85,000 per client. Funds held with European banks are protected up to €100,000 per client under the Deposit Guarantee Scheme.
                </p>
              </div>
            </div>

            {/* Deposit Guarantee Schemes */}
            <div className="bg-kryptex-card backdrop-blur-sm border border-kryptex-green/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-kryptex-green mb-4">Deposit Guarantee Schemes</h3>
              <p className="text-gray-300 mb-4">
                Deposit guarantee schemes (DGS) reimburse a limited amount to compensate depositors whose bank has failed. Under EU rules, deposit guarantee schemes protect depositors' savings by guaranteeing deposits of up to €100,000 per depositor.
              </p>
              <p className="text-gray-300">
                These schemes are organised at the national level, with minimum standards agreed at the EU level. Some Member States have several schemes in place, organised by different banking groups.
              </p>
            </div>
          </motion.div>

          {/* Certificate of Approval */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center border border-kryptex-cyan/30 rounded-xl p-8 bg-kryptex-card"
          >
            <div className="inline-block bg-kryptex-cyan/10 px-6 py-2 rounded-full mb-6">
              <span className="text-kryptex-cyan font-medium">OFFICIAL CERTIFICATION</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Certificate of Regulatory Approval</h3>
            
            <div className="max-w-2xl mx-auto bg-white/5 p-6 rounded-lg border border-kryptex-cyan/20">
              <img 
                src="/certificate.jpeg" 
                alt="Futuregains Regulatory Certificate" 
                className="w-full h-auto rounded-lg border-2 border-kryptex-cyan/30"
              />
              <p className="text-gray-400 mt-4">
                Official regulatory certification demonstrating Futuregains's compliance with financial security standards.
              </p>
            </div>
            
            <div className="mt-8 text-gray-400 max-w-2xl mx-auto">
              <p>
                This certificate verifies that Futuregains meets all regulatory requirements for client fund protection and financial security as mandated by the International Approval and Registration Center (IARC) and European financial regulators.
              </p>
            </div>
          </motion.div>

         
        </div>
      </section>

     
    </div>
  )
}