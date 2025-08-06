/** @file Footer.tsx */
'use client';
import { motion } from 'framer-motion';

const Footer = () => (
  <motion.footer 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    viewport={{ once: true }} 
    className="py-12 border-t border-gray-800"
  >
    <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
      {/* Logo Section */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className="flex items-center space-x-2 cursor-pointer group"
      >
        <motion.div 
          className="w-8 h-8 bg-white rounded flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300"
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-4 h-4 bg-black rounded-sm" />
        </motion.div>
        <motion.span 
          className="font-bold group-hover:text-blue-400 transition-colors duration-300"
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
        >
          CryptoPunks
        </motion.span>
      </motion.div>

      {/* Buttons Section */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex space-x-6"
      >
        <motion.button 
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)"
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
        >
          Buy a Punk
        </motion.button>
        <motion.button 
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)"
          }}
          whileTap={{ scale: 0.95 }}
          className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
        >
          View Full Collection
        </motion.button>
      </motion.div>

      {/* Social Icons Section */}
      <motion.div 
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex space-x-4 text-2xl"
      >
        <motion.a 
          href="#" 
          whileHover={{ 
            scale: 1.2, 
            rotate: 10,
            y: -3
          }}
          whileTap={{ scale: 0.9 }}
          className="hover:opacity-75 transition-all duration-300 cursor-pointer"
        >
          🐦
        </motion.a>
        <motion.a 
          href="#" 
          whileHover={{ 
            scale: 1.2, 
            rotate: -10,
            y: -3
          }}
          whileTap={{ scale: 0.9 }}
          className="hover:opacity-75 transition-all duration-300 cursor-pointer"
        >
          💬
        </motion.a>
      </motion.div>
    </div>
  </motion.footer>
);

export default Footer;