"use client";
import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="py-12 border-t border-gray-800"
  >
    <div className="max-w-6xl mx-auto px-6">
      {/* Desktop Layout */}
      <div className="hidden md:flex justify-between items-center">
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
              boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Buy a Punk
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)",
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
            href="https://x.com/damnfazal"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.2,
              rotate: 10,
              y: -3,
            }}
            whileTap={{ scale: 0.9 }}
            className="hover:opacity-75 transition-all duration-300 cursor-pointer text-white"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://github.com/fazal-bhinder/CryptoPunks"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.2,
              rotate: -10,
              y: -3,
            }}
            whileTap={{ scale: 0.9 }}
            className="hover:opacity-75 transition-all duration-300 cursor-pointer text-white"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-6">
        {/* Logo Section Mobile */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.div
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
              className="font-bold text-lg group-hover:text-blue-400 transition-colors duration-300"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              CryptoPunks
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Buttons Section Mobile */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col space-y-4"
        >
          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white text-black py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
          >
            Buy a Punk
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 20px rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full border-2 border-white py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            View Full Collection
          </motion.button>
        </motion.div>

        {/* Social Icons Section Mobile */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center space-x-8 text-3xl pt-4 border-t border-gray-800"
        >
          <motion.a
            href="https://x.com/damnfazal"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.3,
              rotate: 10,
              y: -5,
            }}
            whileTap={{ scale: 0.9 }}
            className="hover:opacity-75 transition-all duration-300 cursor-pointer text-white"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://github.com/fazal-bhinder/CryptoPunks"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.3,
              rotate: -10,
              y: -5,
            }}
            whileTap={{ scale: 0.9 }}
            className="hover:opacity-75 transition-all duration-300 cursor-pointer text-white"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
