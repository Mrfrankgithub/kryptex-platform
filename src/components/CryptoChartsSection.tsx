// components/CryptoChartsSection.jsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CryptoChartsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [timeframe, setTimeframe] = useState("1d");
  const [isLoading, setIsLoading] = useState(true);
  
  const cryptocurrencies = [
    { symbol: "BTC", name: "Bitcoin", price: 51423.78, change: 2.34 },
    { symbol: "ETH", name: "Ethereum", price: 2987.56, change: 1.78 },
    { symbol: "BNB", name: "Binance Coin", price: 382.91, change: -0.56 },
    { symbol: "SOL", name: "Solana", price: 102.45, change: 5.23 },
    { symbol: "XRP", name: "Ripple", price: 0.5423, change: 0.89 },
    { symbol: "ADA", name: "Cardano", price: 0.4876, change: -1.23 },
  ];

  const timeframes = [
    { id: "1h", label: "1H" },
    { id: "1d", label: "1D" },
    { id: "1w", label: "1W" },
    { id: "1m", label: "1M" },
    { id: "3m", label: "3M" },
    { id: "1y", label: "1Y" },
  ];

  // Simulate chart data
  const generateChartData = () => {
    const data = [];
    let value = 100;
    for (let i = 0; i < 50; i++) {
      value += (Math.random() - 0.5) * 10;
      data.push(value);
    }
    return data;
  };

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Simulate loading chart data
    setIsLoading(true);
    const timer = setTimeout(() => {
      setChartData(generateChartData());
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [activeTab, timeframe]);

  // Get min and max for chart scaling
  const minVal = Math.min(...chartData);
  const maxVal = Math.max(...chartData);
  const range = maxVal - minVal;

  return (
    <section className="py-20 px-4 bg-[#0a0e17]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="inline-flex items-center bg-[#1a213a] rounded-full px-6 py-2 mb-4">
                <div className="w-2 h-2 bg-[#00f0ff] rounded-full mr-2 animate-pulse"></div>
                <span className="text-[#00f0ff] font-medium">Market Overview</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
                Real-time <span className="text-[#00f0ff]">Crypto Charts</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl">
                Professional trading charts with advanced technical indicators
              </p>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {timeframes.map((tf) => (
                <button
                  key={tf.id}
                  onClick={() => setTimeframe(tf.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    timeframe === tf.id
                      ? "bg-[#00f0ff] text-black"
                      : "bg-[#1a213a] hover:bg-[#00f0ff]/20"
                  }`}
                >
                  {tf.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Crypto List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[rgba(26,33,58,0.6)] backdrop-blur-md border border-[#00f0ff]/20 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-4">Top Cryptocurrencies</h3>
            <div className="space-y-4">
              {cryptocurrencies.map((crypto, index) => (
                <motion.div
                  key={crypto.symbol}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all ${
                    activeTab === index
                      ? "bg-[#00f0ff]/10 border border-[#00f0ff]/30"
                      : "bg-[#1a213a]/50 hover:bg-[#1a213a]"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1a213a] flex items-center justify-center mr-4">
                      <span className="font-bold">{crypto.symbol}</span>
                    </div>
                    <div>
                      <div className="font-medium">{crypto.name}</div>
                      <div className="text-sm text-gray-400">${crypto.price.toLocaleString()}</div>
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      crypto.change >= 0
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {crypto.change >= 0 ? "+" : ""}
                    {crypto.change}%
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Main Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-[rgba(26,33,58,0.6)] backdrop-blur-md border border-[#00f0ff]/20 rounded-xl overflow-hidden"
          >
            <div className="p-6 border-b border-[#1a213a]">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#1a213a] flex items-center justify-center mr-4">
                    <span className="font-bold">
                      {cryptocurrencies[activeTab]?.symbol}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {cryptocurrencies[activeTab]?.name}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-xl mr-2">
                        ${cryptocurrencies[activeTab]?.price.toLocaleString()}
                      </span>
                      <span
                        className={`px-2 py-1 rounded text-sm ${
                          cryptocurrencies[activeTab]?.change >= 0
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {cryptocurrencies[activeTab]?.change >= 0 ? "+" : ""}
                        {cryptocurrencies[activeTab]?.change}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-[#1a213a] rounded-lg hover:bg-[#00f0ff]/20 transition-colors">
                    Indicators
                  </button>
                  <button className="px-4 py-2 bg-[#1a213a] rounded-lg hover:bg-[#00f0ff]/20 transition-colors">
                    Drawing
                  </button>
                  <button className="px-4 py-2 bg-[#00f0ff] text-black rounded-lg font-medium">
                    Trade
                  </button>
                </div>
              </div>
              
              <div className="flex gap-4 overflow-x-auto pb-2">
                {["Line", "Candlestick", "Heikin Ashi", "Area", "Baseline"].map((type, i) => (
                  <button
                    key={i}
                    className={`px-3 py-1 rounded text-sm ${
                      i === 0
                        ? "bg-[#00f0ff] text-black"
                        : "bg-[#1a213a] hover:bg-[#00f0ff]/20"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Chart Container */}
            <div className="h-[400px] p-4 relative">
              {isLoading ? (
                <div className="h-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00f0ff]"></div>
                </div>
              ) : (
                <>
                  <div className="absolute top-4 left-4 right-4 bottom-4 flex flex-col">
                    {/* Y-axis labels */}
                    <div className="flex-1 flex flex-col justify-between pr-2 text-xs text-gray-500">
                      {[maxVal, minVal + range * 0.75, minVal + range * 0.5, minVal + range * 0.25, minVal].map((val, i) => (
                        <div key={i}>{val.toFixed(1)}</div>
                      ))}
                    </div>
                    
                    {/* Chart area */}
                    <div className="flex-1 relative ml-8">
                      <div className="absolute inset-0 grid grid-cols-5 grid-rows-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="border-r border-[#1a213a]"></div>
                        ))}
                      </div>
                      
                      {/* Chart line */}
                      <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <motion.path
                          d={`M0,${100 - ((chartData[0] - minVal) / range * 100)} ${chartData.map((val, i) => `L${i * (100 / (chartData.length - 1))},${100 - ((val - minVal) / range * 100)}`).join(" ")}`}
                          fill="none"
                          stroke="#00f0ff"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1 }}
                        />
                        
                        {/* Gradient area */}
                        <defs>
                          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d={`M0,${100 - ((chartData[0] - minVal) / range * 100)} ${chartData.map((val, i) => `L${i * (100 / (chartData.length - 1))},${100 - ((val - minVal) / range * 100)}`).join(" ")} L100,100 L0,100 Z`}
                          fill="url(#chartGradient)"
                        />
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </div>
            
            {/* Timeframe footer */}
            <div className="border-t border-[#1a213a] flex">
              {["1m", "5m", "15m", "30m", "1h", "4h", "1d", "1w"].map((tf, i) => (
                <button
                  key={i}
                  className={`flex-1 py-3 text-center text-sm ${
                    timeframe === tf
                      ? "text-[#00f0ff] border-t-2 border-[#00f0ff]"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                  onClick={() => setTimeframe(tf)}
                >
                  {tf}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CryptoChartsSection;