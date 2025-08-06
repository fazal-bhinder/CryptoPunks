/** @file FAQ.tsx */
'use client';
import { motion } from 'framer-motion';

const faqs = [
  {
    q: 'Where are the images for the punks stored?',
    a: `Initially the images weren't fully on‑chain, but now the contract includes the full
    image and attribute data via clever compression.`,
  },
  {
    q: 'Are the punks an ERC‑721 token?',
    a: `No — CryptoPunks pre‑date the ERC‑721 standard and use a custom contract. They emulate
    balance methods but work per‑ID instead.`,
  },
  {
    q: 'Where does market data come from?',
    a: `All pricing, bids, and sales are loaded from the CryptoPunks Ethereum smart contract
    and associated marketplace front‑end.`,
  },
  {
    q: 'Do you charge fees?',
    a: `No fees beyond Ethereum gas fees. The contract and marketplace logic is open source.`,
  },
];

const FAQ = () => (
  <motion.section 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    viewport={{ once: true }} 
    className="py-16 max-w-6xl mx-auto px-6"
  >
    <motion.h2 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold  mb-12"
    >
      Details and FAQ
    </motion.h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-6 max-w-6xl mx-auto">
      {faqs.map((f, i) => (
        <motion.div
          key={i}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ 
            y: -5, 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          className="border-b border-gray-700 pb-4 cursor-pointer group"
        >
          <motion.h3 
            className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {f.q}
          </motion.h3>
          <motion.p 
            className="text-sm opacity-75 group-hover:opacity-90 transition-opacity duration-300"
            initial={{ opacity: 0.75 }}
            whileHover={{ opacity: 0.9 }}
          >
            {f.a}
          </motion.p>
          
          {/* Animated underline on hover */}
          <motion.div
            className="h-0.5 bg-blue-400 mt-2"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default FAQ;