"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const Transactions = () => {
  
  const depositNames = [
    "James Smith", "Maria Garcia", "Mohammed Ahmed", "Li Wei", "Emma Johnson",
    "Juan Martinez", "Chen Yu", "John Brown", "Sarah Davis", "Michael Wilson",
  ];

  const withdrawalNames = [
    "Harper Bennett", "Diego Ramirez", "Layla Brooks", "Simon Foster", "Aria Bell",
    "Nathan Reed", "Mariam Diallo", "Jack Wood", "Sofia Romero", "Leo Russell",
  ];

  const cryptocurrencies = ["BTC", "ETH", "USDT", "BNB", "XRP", "ADA", "SOL", "DOT", "DOGE", "SHIB"];

  const generateRandomTransactions = (count, type) => {
    const names = type === "deposit" ? depositNames : withdrawalNames;

    return Array.from({ length: count }, () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const amount = (Math.random() * 4000 + 1000).toFixed(2);
      const crypto = cryptocurrencies[Math.floor(Math.random() * cryptocurrencies.length)];
      return { name, amount, crypto, type };
    });
  };

  const [deposits, setDeposits] = useState([]);
  const [withdrawals, setWithdrawals] = useState([]);

  useEffect(() => {
    setDeposits(generateRandomTransactions(5, "deposit"));
    setWithdrawals(generateRandomTransactions(5, "withdrawal"));

    const interval = setInterval(() => {
      setDeposits(generateRandomTransactions(5, "deposit"));
      setWithdrawals(generateRandomTransactions(5, "withdrawal"));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const TableRow = ({ transaction, index }) => (
    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="border-b border-kryptex-cyan/10 hover:bg-kryptex-card/50 transition-colors duration-200"
    >
      <td className="py-3 px-4 text-kryptex-light">{transaction.name}</td>
      <td className={`py-3 px-4 font-medium ${
        transaction.type === "deposit" 
          ? "text-green-400" 
          : "text-red-400"
      }`}>
        ${transaction.amount}
      </td>
      <td className="py-3 px-4">
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
            transaction.crypto === "BTC" ? "bg-orange-500/20" :
            transaction.crypto === "ETH" ? "bg-blue-500/20" :
            transaction.crypto === "USDT" ? "bg-green-500/20" :
            "bg-purple-500/20"
          }`}>
            <span className={`text-xs font-bold ${
              transaction.crypto === "BTC" ? "text-orange-400" :
              transaction.crypto === "ETH" ? "text-blue-400" :
              transaction.crypto === "USDT" ? "text-green-400" :
              "text-purple-400"
            }`}>{transaction.crypto.charAt(0)}</span>
          </div>
          <span className="text-kryptex-light">{transaction.crypto}</span>
        </div>
      </td>
      <td className="py-3 px-4">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
          transaction.type === "deposit" 
            ? "bg-green-500/20" 
            : "bg-red-500/20"
        }`}>
          {transaction.type === "deposit" ? (
            <TrendingUp className="w-4 h-4 text-green-400" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-400" />
          )}
        </div>
      </td>
    </motion.tr>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
      {/* Deposits Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass border border-kryptex-cyan/20 rounded-xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-kryptex-cyan to-kryptex-gold py-4 px-6">
          <h3 className="text-xl font-bold text-white flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Recent Deposits
          </h3>
          <p className="text-white/80 text-sm mt-1">Live incoming investments</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-kryptex-cyan/10">
                <th className="py-3 px-4 text-left text-kryptex-light font-medium">Investor</th>
                <th className="py-3 px-4 text-left text-kryptex-light font-medium">Amount</th>
                <th className="py-3 px-4 text-left text-kryptex-light font-medium">Asset</th>
                <th className="py-3 px-4 text-left text-kryptex-light font-medium">Type</th>
              </tr>
            </thead>
            <tbody>
              {deposits.map((transaction, index) => (
                <TableRow key={index} transaction={transaction} index={index} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="py-3 px-6 bg-gradient-to-r from-green-500/10 to-transparent border-t border-green-500/20">
          <div className="flex justify-between items-center">
            <span className="text-kryptex-light text-sm">Total Deposits</span>
            <span className="text-green-400 font-bold">
              ${deposits.reduce((sum, t) => sum + parseFloat(t.amount), 0).toFixed(2)}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Withdrawals Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass border border-kryptex-green/20 rounded-xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-kryptex-green to-kryptex-cyan py-4 px-6">
          <h3 className="text-xl font-bold text-white flex items-center">
            <TrendingDown className="h-5 w-5 mr-2" />
            Recent Withdrawals
          </h3>
          <p className="text-white/80 text-sm mt-1">Live profit withdrawals</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-kryptex-cyan/10">
                <th className="py-3 px-4 text-left text-kryptex-light font-medium">Investor</th>
                <th className="py-3 px-4 text-left text-kryptex-light font-medium">Amount</th>
                <th className="py-3 px-4 text-left text-kryptex-light font-medium">Asset</th>
                <th className="py-3 px-4 text-left text-kryptex-light font-medium">Type</th>
              </tr>
            </thead>
            <tbody>
              {withdrawals.map((transaction, index) => (
                <TableRow key={index} transaction={transaction} index={index} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="py-3 px-6 bg-gradient-to-r from-red-500/10 to-transparent border-t border-red-500/20">
          <div className="flex justify-between items-center">
            <span className="text-kryptex-light text-sm">Total Withdrawals</span>
            <span className="text-red-400 font-bold">
              ${withdrawals.reduce((sum, t) => sum + parseFloat(t.amount), 0).toFixed(2)}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Transactions;