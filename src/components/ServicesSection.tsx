import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Professional Trading",
      description: "Access advanced trading tools, real-time data, and expert insights to maximize your trading profits across all markets.",
      image: "/crypto1.jpg",
      features: ["Forex & Stocks", "Crypto Pairs", "Leverage Options", "Algorithmic Trading"],
      color: "from-[#fbbf24] to-[#f59e0b]"
    },
    {
      title: "Smart Investments",
      description: "Diversify your portfolio with our expertly managed investment plans across multiple asset classes.",
      image: "/smart.jpg",
      features: ["Cryptocurrency", "Stocks & ETFs", "Real Estate", "Commodities"],
      color: "from-[#a78bfa] to-[#8b5cf6]"
    },
    {
      title: "Asset-Backed Loans",
      description: "Get instant liquidity without selling your assets. Use your crypto or stocks as collateral for low-interest loans.",
      image: "/loan.jpg",
      features: ["Crypto Collateral", "Stock Collateral", "Competitive Rates", "Instant Approval"],
      color: "from-[#fbbf24] via-[#a78bfa] to-[#8b5cf6]"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-kryptex-dark to-purple-900/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-purple-900/50 backdrop-blur-sm border border-[#fbbf24]/20 rounded-full px-6 py-2 mb-4">
            <div className="w-2 h-2 bg-[#fbbf24] rounded-full mr-2 animate-pulse"></div>
            <span className="text-[#fbbf24] font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Comprehensive <span className="text-[#fbbf24]">Financial Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            All-in-one platform for trading, investing, and accessing liquidity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass border border-[#fbbf24]/20 rounded-2xl overflow-hidden hover:border-[#fbbf24]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#fbbf24]/10"
            >
              <div className={`h-48 bg-gradient-to-r ${service.color} flex items-center justify-center p-4`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-100 h-28 object-contain mx-auto"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/placeholder.svg";
                    }}
                  />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-[#fbbf24]">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-[#fbbf24] mr-2"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to={`/login`}>
                  <button className={`w-full py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg ${
                    index === 0 ? "bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-black" :
                    index === 1 ? "bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] hover:from-[#8b5cf6] hover:to-[#7c3aed] text-white" :
                    "bg-gradient-to-r from-[#fbbf24] via-[#a78bfa] to-[#8b5cf6] hover:from-[#f59e0b] hover:via-[#8b5cf6] hover:to-[#7c3aed] text-black"
                  }`}>
                    Learn More
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;