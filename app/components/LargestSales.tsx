"use client";
import { motion } from "framer-motion";
import SaleCard from "./SaleCard";

interface LargestSalesProps {
  salesData: { punk: string; price: string; date: string; id: number }[];
  currentSaleIndex: number;
  setCurrentSaleIndex: React.Dispatch<React.SetStateAction<number>>;
}

const LargestSales = ({
  salesData,
  currentSaleIndex,
  setCurrentSaleIndex,
}: LargestSalesProps) => {
  const next = () =>
    setCurrentSaleIndex((p) => (p + 1) % Math.max(1, salesData.length - 2));
  const prev = () =>
    setCurrentSaleIndex(
      (p) =>
        (p - 1 + Math.max(1, salesData.length - 2)) %
        Math.max(1, salesData.length - 2),
    );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-16 max-w-6xl mx-auto px-6"
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold">Largest Sales</h2>
        <button className="text-sm underline">View all</button>
      </div>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex space-x-6"
          animate={{ x: -currentSaleIndex * 200 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {salesData.map((s, i) => (
            <SaleCard key={i} {...s} />
          ))}
        </motion.div>
        <div className="flex justify-between mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black"
          >
            ←
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black"
          >
            →
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default LargestSales;
