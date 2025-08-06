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
                href="https://x.com/damnfazal" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="https://github.com/fazal-bhinder" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2, rotate: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
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
                <motion.a
                  href="https://x.com/damnfazal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-xl transition-colors duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://github.com/fazal-bhinder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-xl transition-colors duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;