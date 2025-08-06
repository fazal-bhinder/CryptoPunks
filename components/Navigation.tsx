'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if navbar should be visible
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      // Set scrolled state
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -100 
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed w-full top-0 z-50 px-4 pt-4"
    >
     <div 
        className={`max-w-5xl mx-auto transition-all duration-500 ${
          isScrolled 
            ? 'bg-black backdrop-blur-xl border border-white/2 shadow-2xl shadow-black/20 rounded-2xl' 
            : 'bg-black backdrop-blur-lg border border-white/10 rounded-2xl'
        }`}
      >

        <div className="flex items-center justify-between px-6 lg:px-8 py-4">
        {/* Logo */}
        <motion.div 
          className="flex items-center group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <div className="relative">
            <motion.div 
              className="w-9 h-9 bg-gradient-to-br from-white via-gray-200 to-gray-400 rounded-xl flex items-center justify-center shadow-lg"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-4 h-4 bg-black rounded-sm transform rotate-12" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <motion.span 
            className="ml-3 font-bold text-xl text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            CryptoPunks
          </motion.span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center space-x-8 mr-8">
            {['About', 'Collection', 'FAQs'].map((item, i) => (
              <motion.a
                key={item} 
                href="#"
                className="relative text-white/80 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200 group"
                whileHover={{ y: -1 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-white/0 via-white/60 to-white/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Connect Wallet Button */}
            <motion.button
              className="relative bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm tracking-wide overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <span className="relative z-10">Connect Wallet</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pl-4 border-l border-white/10">
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                🐦
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2, rotate: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                💬
              </motion.a>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
            <motion.div 
              animate={{ 
                rotate: mobileMenuOpen ? 45 : 0, 
                y: mobileMenuOpen ? 8 : 0,
                width: mobileMenuOpen ? '100%' : '100%'
              }} 
              className="h-0.5 bg-white rounded-full origin-center transition-all duration-300" 
            />
            <motion.div 
              animate={{ opacity: mobileMenuOpen ? 0 : 1, scale: mobileMenuOpen ? 0 : 1 }} 
              className="h-0.5 bg-white rounded-full"
              transition={{ duration: 0.2 }}
            />
            <motion.div 
              animate={{ 
                rotate: mobileMenuOpen ? -45 : 0, 
                y: mobileMenuOpen ? -8 : 0,
                width: mobileMenuOpen ? '100%' : '75%'
              }} 
              className="h-0.5 bg-white rounded-full self-end transition-all duration-300" 
            />
          </div>
        </motion.button>
      </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black/98 backdrop-blur-sm border-t border-white/10"
          >
            <div className="px-6 py-8 space-y-6">
              {['About', 'Collection', 'FAQs'].map((item, i) => (
                <motion.a 
                  key={item} 
                  href="#" 
                  className="block text-white/80 hover:text-white text-lg font-medium tracking-wide transition-colors duration-200"
                  initial={{ opacity: 0, x: -30 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item}
                </motion.a>
              ))}
              
              <motion.button 
                className="w-full bg-white text-black font-semibold py-4 rounded-2xl text-center tracking-wide mt-8 hover:bg-gray-100 transition-colors duration-200"
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4, duration: 0.3 }}
                whileTap={{ scale: 0.98 }}
              >
                Connect Wallet
              </motion.button>
              
              <div className="flex justify-center space-x-4 pt-6 border-t border-white/10">
                {['🐦', '💬'].map((icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-xl transition-colors duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: i === 0 ? 10 : -10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;