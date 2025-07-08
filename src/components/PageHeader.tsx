"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumb?: string
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative pt-20 pb-20 overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-kryptex-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%2300f0ff%22 fillOpacity%3D%220.1%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {title.split(" ").map((word, index) => (
              <span key={index}>
                {index === title.split(" ").length - 1 ? (
                  <span className="text-kryptex-cyan">{word}</span>
                ) : (
                  <span className="text-white">{word} </span>
                )}
              </span>
            ))}
          </h1>

          {subtitle && <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">{subtitle}</p>}

          {breadcrumb && (
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="text-muted-foreground">Home</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-kryptex-cyan">{breadcrumb}</span>
            </div>
          )}
        </motion.div>
      </div>

      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background"
          ></path>
        </svg>
      </div>
    </section>
  )
}