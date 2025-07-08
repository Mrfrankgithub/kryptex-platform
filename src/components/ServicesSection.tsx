// components/ServicesSection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Professional Trading",
      description: "Access advanced trading tools, real-time data, and expert insights to maximize your trading profits across all markets.",
      image: "/crypto1.jpg",
      features: ["Forex & Stocks", "Crypto Pairs", "Leverage Options", "Algorithmic Trading"],
      color: "from-[#00f0ff] to-[#00b4cc]"
    },
    {
      title: "Smart Investments",
      description: "Diversify your portfolio with our expertly managed investment plans across multiple asset classes.",
      image: "/smart.jpg",
      features: ["Cryptocurrency", "Stocks & ETFs", "Real Estate", "Commodities"],
      color: "from-[#4ade80] to-[#2ecc71]"
    },
    {
      title: "Asset-Backed Loans",
      description: "Get instant liquidity without selling your assets. Use your crypto or stocks as collateral for low-interest loans.",
      image: "/loan.jpg",
      features: ["Crypto Collateral", "Stock Collateral", "Competitive Rates", "Instant Approval"],
      color: "from-[#00f0ff] to-[#2ecc71]"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0a0e17] to-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-[#1a213a] rounded-full px-6 py-2 mb-4">
            <div className="w-2 h-2 bg-[#00f0ff] rounded-full mr-2 animate-pulse"></div>
            <span className="text-[#00f0ff] font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Comprehensive <span className="text-[#00f0ff]">Financial Solutions</span>
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
              className="bg-[rgba(26,33,58,0.6)] backdrop-blur-md border border-[#00f0ff]/20 rounded-2xl overflow-hidden hover:border-[#00f0ff]/40 transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-r ${service.color} flex items-center justify-center p-4`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-100 h-28 object-contain mx-auto"
                  />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-[#00f0ff]">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#00f0ff] mr-2"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <button className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    index === 0 ? "bg-[#00f0ff] hover:bg-[#00b4cc] text-black" :
                    index === 1 ? "bg-[#4ade80] hover:bg-[#2ecc71] text-black" :
                    "bg-[#00f0ff] hover:bg-[#4ade80] text-black"
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