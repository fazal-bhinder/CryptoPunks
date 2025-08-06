/** @file HeroSection.tsx */
'use client';
import { motion } from 'framer-motion';
import AvatarRow from './AvatarRow';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingElements = Array.from({ length: 6 }, (_, i) => i);
  const punkAvatars = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Floating Elements */}
      {floatingElements.map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/10 rounded-full"
          initial={{
            x: Math.random() * 1200,
            y: Math.random() * 800,
          }}
          animate={{
            x: Math.random() * 1200,
            y: Math.random() * 800,
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center">
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-none"
        >

          <br />
          <span className="relative">
            <span className="bg-gradient-to-r from-white via-white to-gray-100 bg-clip-text text-transparent font-black font-serif tracking-tight">
              CryptoArt
            </span>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-white/20 via-transparent to-white/20 rounded-2xl blur-xl opacity-50"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>
          <br />
          <span className="bg-gradient-to-r font-serif from-gray-200 via-white to-gray-200 bg-clip-text text-transparent">
            movement
          </span>
        </motion.h1>

        {/* Description */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto font-light">
            <span className="text-white/90 font-medium">10,000 unique</span> collectible characters with 
            <span className="text-white/90 font-medium"> proof of ownership</span> stored
          </p>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto font-light mt-2">
            on the <span className="text-white/90 font-medium">Ethereum blockchain</span>.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.button
            className="group relative bg-white text-black px-12 py-4 rounded-full font-bold text-lg tracking-wide overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <span className="relative z-10">Mint Now</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            className="group border-2 border-white/30 text-white px-12 py-4 rounded-full font-semibold text-lg tracking-wide hover:border-white/60 hover:bg-white/5 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Collection
          </motion.button>
        </motion.div>
        <AvatarRow punkAvatars={punkAvatars} />

      </motion.div>
    </section>
  );
};

export default HeroSection;