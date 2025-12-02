"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, LineChart, CandlestickChart } from "lucide-react";

const CryptoChartsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [timeframe, setTimeframe] = useState("1d");
  const [isLoading, setIsLoading] = useState(true);
  const [chartType, setChartType] = useState("Line");
  
  const cryptocurrencies = [
    { symbol: "BTC", name: "Bitcoin", price: 51423.78, change: 2.34, color: "#f7931a" },
    { symbol: "ETH", name: "Ethereum", price: 2987.56, change: 1.78, color: "#627eea" },
    { symbol: "BNB", name: "Binance Coin", price: 382.91, change: -0.56, color: "#f0b90b" },
    { symbol: "SOL", name: "Solana", price: 102.45, change: 5.23, color: "#00ffa3" },
    { symbol: "XRP", name: "Ripple", price: 0.5423, change: 0.89, color: "#23292f" },
    { symbol: "ADA", name: "Cardano", price: 0.4876, change: -1.23, color: "#0033ad" },
  ];

  const timeframes = [
    { id: "1h", label: "1H" },
    { id: "1d", label: "1D" },
    { id: "1w", label: "1W" },
    { id: "1m", label: "1M" },
    { id: "3m", label: "3M" },
    { id: "1y", label: "1Y" },
  ];

  const chartTypes = [
    { id: "Line", label: "Line", icon: <LineChart className="w-4 h-4" /> },
    { id: "Candlestick", label: "Candlestick", icon: <CandlestickChart className="w-4 h-4" /> },
    { id: "Area", label: "Area" },
    { id: "Heikin Ashi", label: "Heikin Ashi" },
    { id: "Baseline", label: "Baseline" },
  ];

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
    setIsLoading(true);
    const timer = setTimeout(() => {
      setChartData(generateChartData());
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [activeTab, timeframe]);

  const minVal = Math.min(...chartData);
  const maxVal = Math.max(...chartData);
  const range = maxVal - minVal;

  const currentCrypto = cryptocurrencies[activeTab];

  return (
    <section className="py-20 px-4 bg-kryptex-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="inline-flex items-center bg-purple-900/50 backdrop-blur-sm border border-[#fbbf24]/20 rounded-full px-6 py-2 mb-4">
                <div className="w-2 h-2 bg-[#fbbf24] rounded-full mr-2 animate-pulse"></div>
                <span className="text-[#fbbf24] font-medium">Market Overview</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white">
                Real-time <span className="text-[#fbbf24]">Crypto Charts</span>
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
                  className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                    timeframe === tf.id
                      ? "bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-black"
                      : "bg-purple-900/50 hover:bg-[#fbbf24]/20 text-gray-300 border border-purple-700/50"
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
            className="glass border border-[#fbbf24]/20 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-4 text-white">Top Cryptocurrencies</h3>
            <div className="space-y-4">
              {cryptocurrencies.map((crypto, index) => (
                <motion.div
                  key={crypto.symbol}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all ${
                    activeTab === index
                      ? "bg-gradient-to-r from-purple-900/40 to-purple-800/40 border border-[#fbbf24]/30"
                      : "bg-purple-900/20 hover:bg-purple-900/30 border border-transparent"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex items-center">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center mr-4 border border-white/10"
                      style={{ backgroundColor: `${crypto.color}20` }}
                    >
                      <span className="font-bold" style={{ color: crypto.color }}>{crypto.symbol}</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">{crypto.name}</div>
                      <div className="text-sm text-gray-400">${crypto.price.toLocaleString()}</div>
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
                      crypto.change >= 0
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {crypto.change >= 0 ? (
                      <TrendingUp className="w-3 h-3 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 mr-1" />
                    )}
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
            className="lg:col-span-2 glass border border-[#fbbf24]/20 rounded-xl overflow-hidden"
          >
            <div className="p-6 border-b border-purple-900/30">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <div className="flex items-center">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4 border border-white/10"
                    style={{ backgroundColor: `${currentCrypto.color}20` }}
                  >
                    <span className="font-bold text-lg" style={{ color: currentCrypto.color }}>
                      {currentCrypto.symbol}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {currentCrypto.name}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-xl mr-2 text-white">
                        ${currentCrypto.price.toLocaleString()}
                      </span>
                      <span
                        className={`px-2 py-1 rounded text-sm font-medium flex items-center ${
                          currentCrypto.change >= 0
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {currentCrypto.change >= 0 ? (
                          <TrendingUp className="w-3 h-3 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 mr-1" />
                        )}
                        {currentCrypto.change >= 0 ? "+" : ""}
                        {currentCrypto.change}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-purple-900/50 border border-purple-700/50 rounded-lg hover:bg-[#fbbf24]/20 transition-colors text-gray-300">
                    Indicators
                  </button>
                  <button className="px-4 py-2 bg-purple-900/50 border border-purple-700/50 rounded-lg hover:bg-[#fbbf24]/20 transition-colors text-gray-300">
                    Drawing
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-black rounded-lg font-medium hover:shadow-lg hover:shadow-[#fbbf24]/20">
                    Trade
                  </button>
                </div>
              </div>
              
              {/* Chart Type Selection */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {chartTypes.map((type, i) => (
                  <button
                    key={i}
                    onClick={() => setChartType(type.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 whitespace-nowrap ${
                      chartType === type.id
                        ? "bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-black"
                        : "bg-purple-900/50 border border-purple-700/50 text-gray-300 hover:bg-[#fbbf24]/20"
                    }`}
                  >
                    {type.icon && <span>{type.icon}</span>}
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Chart Container */}
            <div className="h-[400px] p-4 relative">
              {isLoading ? (
                <div className="h-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#fbbf24]"></div>
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
                          <div key={i} className="border-r border-purple-900/30"></div>
                        ))}
                      </div>
                      
                      {/* Chart line */}
                      <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <motion.path
                          d={`M0,${100 - ((chartData[0] - minVal) / range * 100)} ${chartData.map((val, i) => `L${i * (100 / (chartData.length - 1))},${100 - ((val - minVal) / range * 100)}`).join(" ")}`}
                          fill="none"
                          stroke="#fbbf24"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1 }}
                        />
                        
                        {/* Gradient area */}
                        <defs>
                          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
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
            <div className="border-t border-purple-900/30 flex overflow-x-auto">
              {["1m", "5m", "15m", "30m", "1h", "4h", "1d", "1w"].map((tf, i) => (
                <button
                  key={i}
                  className={`flex-1 py-3 text-center text-sm font-medium min-w-[60px] ${
                    timeframe === tf
                      ? "text-[#fbbf24] border-t-2 border-[#fbbf24] bg-gradient-to-t from-[#fbbf24]/10 to-transparent"
                      : "text-gray-500 hover:text-gray-300 hover:bg-purple-900/20"
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