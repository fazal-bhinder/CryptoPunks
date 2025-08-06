'use client';
import { motion } from 'framer-motion';
import TransactionCard from './TransactionCard';


interface Props {
  className?: string;
  transactionData: { punk: string; action: string; amount: string; id: number }[];
  currentTransactionIndex: number;
  setCurrentTransactionIndex: React.Dispatch<React.SetStateAction<number>>;
}

const RecentTransactions = ({ className = '', transactionData, currentTransactionIndex, setCurrentTransactionIndex }: Props) => {
  const next = () =>
    setCurrentTransactionIndex((p) => (p + 1) % Math.max(1, transactionData.length - 2));
  const prev = () =>
    setCurrentTransactionIndex((p) => (p - 1 + Math.max(1, transactionData.length - 2)) % Math.max(1, transactionData.length - 2));

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true }} 
      className={`py-16 max-w-6xl mx-auto px-6 bg-black ${className}`}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-4xl font-bold">Recent Transactions</h2>
        <button className="text-sm underline">View all</button>
      </div>
      <p className="text-sm opacity-50 mb-8">Updated moments ago</p>
      <div className="relative overflow-hidden">
        <motion.div className="flex space-x-6" animate={{ x: -currentTransactionIndex * 200 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
          {transactionData.map((t, i) => <TransactionCard key={i} {...t} />)}
        </motion.div>
        <div className="flex justify-between mt-8">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={prev} className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black">←</motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={next} className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black">→</motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default RecentTransactions;