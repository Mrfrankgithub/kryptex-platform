// components/Transactions.jsx
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Transactions = () => {
  
// Deposit names
const depositNames = [
  "James Smith", "Maria Garcia", "Mohammed Ahmed", "Li Wei", "Emma Johnson",
  "Juan Martinez", "Chen Yu", "John Brown", "Sarah Davis", "Michael Wilson",
  "Anna Kowalska", "Robert Taylor", "Elena Ivanova", "Thomas Johnson", "Fatima Ali",
  "Carlos Rodriguez", "Hiroshi Tanaka", "Amina Mohammed", "David Miller", "Sophia Williams",
  "Emily Thompson", "Daniel Moore", "Grace Lee", "Ahmed Hassan", "Isabella Nguyen",
  "William Scott", "Linda Kim", "Omar Abdullah", "Nina Petrova", "Jacob Harris",
  "Mei Lin", "Ethan Clark", "Yara Hussein", "Benjamin Lopez", "Natalie Green",
  "Samuel White", "Zara Khan", "Anthony Young", "Julia Roberts", "Noah Walker",
  "Priya Patel", "Joshua Adams", "Mia Torres", "Andrei Popov", "Charlotte Hall",
  "Liam Robinson", "Victoria Stewart", "Ali Reza", "Olivia Wright", "Matteo Bianchi",
  "Amira Saleh", "Lucas King", "Freya Evans", "Hassan Farouk", "Chloe Lewis",
  "Alexander Hill", "Aya Nakamura", "Elijah Allen", "Alicia Morgan", "Mustafa Syed"
];

// Withdrawal names
const withdrawalNames = [
  "Harper Bennett", "Diego Ramirez", "Layla Brooks", "Simon Foster", "Aria Bell",
  "Nathan Reed", "Mariam Diallo", "Jack Wood", "Sofia Romero", "Leo Russell",
  "Jasmine Clarke", "Ryan Mitchell", "Keisha Grant", "Mason Ward", "Lila Shah",
  "Julian Cooper", "Heidi Schwarz", "Owen Perry", "Elif Demir", "Isaac Powell",
  "Diana Morales", "Tariq Aziz", "Gabriela Vasquez", "Henry Jenkins", "Anaya Singh",
  "Jayden Cox", "Camila Herrera", "Niko Dimitrov", "Bianca Costa", "George Barnes",
  "Tanya Ivanenko", "Logan Ross", "Sana Alvi", "Sebastian Rivera", "Lina Georgiou",
  "Adrian Hughes", "Valeria Mendes", "Miles Warren", "Rania Nasr", "Declan Gray",
  "Ayesha Noor", "Marcus Bellamy", "Talia Cohen", "Enzo Romano", "Noura Youssef",
  "Yusuf Dlamini", "Kaitlyn O'Neill", "Diego Castillo", "Amaya Fernandez", "Roman Kuznetsov",
  "Esther Goldstein", "Malik Mensah", "Ksenia Ivanova", "Jude Maxwell", "Hyejin Park",
  "Paolo Ricci", "Nasir Al-Fulan", "Selina Weber", "Armand Moreau", "Anjali Verma"
];

const cryptocurrencies = ["BTC", "ETH", "USDT", "BNB", "XRP", "ADA", "SOL", "DOT", "DOGE", "SHIB"];

// Use correct name list per type
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
    // Initialize transactions
    setDeposits(generateRandomTransactions(5, "deposit"));
    setWithdrawals(generateRandomTransactions(5, "withdrawal"));

    // Update transactions every 5 seconds
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
      className="border-b border-[#1a213a] hover:bg-[#1a213a]/50"
    >
      <td className="py-3 px-4">{transaction.name}</td>
      <td className={`py-3 px-4 font-medium ${transaction.type === "deposit" ? "text-green-400" : "text-red-400"}`}>
        ${transaction.amount}
      </td>
      <td className="py-3 px-4">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-[#1a213a] flex items-center justify-center mr-2">
            <span className="text-xs font-bold">{transaction.crypto}</span>
          </div>
          {transaction.crypto}
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
        className="bg-[rgba(26,33,58,0.6)] backdrop-blur-md border border-[#00f0ff]/20 rounded-xl overflow-hidden"
      >
        <div className="bg-[#00f0ff] text-black py-4 px-6">
          <h3 className="text-xl font-bold flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.967.744L14.146 7H17a1 1 0 110 2h-2.927l-1.586 8.258a1 1 0 01-.966.742H5.5a1 1 0 010-2h5.64l1.486-7.73A1 1 0 0112 6H9.854l.293-1.256A1 1 0 0112 2z" clipRule="evenodd" />
            </svg>
            Last 5 Deposits
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-[#1a213a]">
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Crypto</th>
              </tr>
            </thead>
            <tbody>
              {deposits.map((transaction, index) => (
                <TableRow key={index} transaction={transaction} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Withdrawals Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-[rgba(26,33,58,0.6)] backdrop-blur-md border border-[#00f0ff]/20 rounded-xl overflow-hidden"
      >
        <div className="bg-[#4ade80] text-black py-4 px-6">
          <h3 className="text-xl font-bold flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
            Last 5 Withdrawals
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-[#1a213a]">
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Crypto</th>
              </tr>
            </thead>
            <tbody>
              {withdrawals.map((transaction, index) => (
                <TableRow key={index} transaction={transaction} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Transactions;