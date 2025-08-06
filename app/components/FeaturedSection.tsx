'use client';
import { motion } from 'framer-motion';

const FeaturedSection = () => {
  const articles = [
    {
      title: "Mashable",
      description: "This ethereum-based project could change how we think about digital art",
      id: 1
    },
    {
      title: "Mashable", 
      description: "CryptoKitties, CryptoPunks and the birth of a cottage industry",
      id: 2
    },
    {
      title: "Mashable",
      description: "'Obviously, we had no idea it was going to get here,' say the guys who made the first NFT",
      id: 3
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="max-w-7xl mx-auto px-6"
    >
      {/* Section Title */}
      <motion.div variants={itemVariants} className="text-center mb-20">
        <div className="inline-flex items-center mb-6">
        </div>
        <h2 className="text-3xl md:text-6xl font-bold">
          <span className="bg-gradient-to-r font-serif from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Featured in
          </span>
        </h2>
      </motion.div>

      {/* Articles Grid */}
      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            variants={itemVariants}
            className="group cursor-pointer"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative bg-gradient-to-br from-white/5 via-white/2 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full group-hover:border-white/20 group-hover:bg-white/8 transition-all duration-500 overflow-hidden">
              {/* Background Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Publisher Badge */}
                <motion.div 
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  <h3 className="text-white font-bold text-sm tracking-wide">
                    {article.title}
                  </h3>
                </motion.div>
                
                {/* Description */}
                <p className="text-white/80 text-lg leading-relaxed mb-8 font-light">
                  {article.description}
                </p>
                
                {/* Read More Link */}
                <motion.div
                  className="group/link flex items-center text-white/70 hover:text-white transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm font-semibold tracking-wide mr-3">Read article</span>
                  <motion.div
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-white/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.svg
                      width="14"
                      height="14" 
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      whileHover={{ x: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </motion.svg>
                  </motion.div>
                </motion.div>
              </div>

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FeaturedSection;