'use client'
import { motion } from 'framer-motion';

const CryptoPunkAvatar = () => {
  return (
    <div className="w-80 h-80 relative">
      <svg viewBox="0 0 24 24" className="w-full h-full" style={{ imageRendering: 'pixelated' }}>
        {/* Head outline */}
        <rect x="6" y="2" width="12" height="2" fill="#000000" />
        <rect x="4" y="4" width="2" height="4" fill="#000000" />
        <rect x="18" y="4" width="2" height="4" fill="#000000" />
        <rect x="4" y="8" width="2" height="6" fill="#000000" />
        <rect x="18" y="8" width="2" height="6" fill="#000000" />
        <rect x="6" y="14" width="12" height="2" fill="#000000" />
        <rect x="8" y="16" width="8" height="2" fill="#000000" />
        
        {/* Face */}
        <rect x="6" y="4" width="12" height="10" fill="#D2B48C" />
        <rect x="8" y="14" width="8" height="2" fill="#D2B48C" />
        
        {/* Hair */}
        <rect x="6" y="2" width="12" height="2" fill="#8B4513" />
        <rect x="4" y="4" width="2" height="2" fill="#8B4513" />
        <rect x="18" y="4" width="2" height="2" fill="#8B4513" />
        <rect x="6" y="4" width="12" height="2" fill="#8B4513" />
        
        {/* Eyes */}
        <rect x="8" y="7" width="2" height="2" fill="#87CEEB" />
        <rect x="14" y="7" width="2" height="2" fill="#87CEEB" />
        
        {/* Nose */}
        <rect x="11" y="9" width="2" height="1" fill="#000000" />
        
        {/* Mouth */}
        <rect x="10" y="11" width="4" height="1" fill="#000000" />
        
        {/* Earring */}
        <rect x="16" y="8" width="1" height="1" fill="#FFD700" />
        <rect x="16" y="9" width="1" height="2" fill="#C0C0C0" />
      </svg>
    </div>
  );
};

const steps = [
  { 
    number: '1', 
    icon: '🦊', 
    title: 'Download and install MetaMask', 
    description: 'Download and install a Chrome browser plugin called MetaMask. This will allow websites (that you authorise) access to your Ethereum account.',
    button: 'Download MetaMask'
  },
  { 
    number: '2', 
    icon: '⟠', 
    title: 'Buy some Ethereum', 
    description: 'If you made a new account, buy some Ethereum. The MetaMask plugin has a button that will allow you to buy Ether from Coinbase.'
  },
  { 
    number: '3', 
    icon: '💳', 
    title: 'Start bidding, buying and selling', 
    description: 'Once you have the plugin installed, this website will recognise it and add buttons that allow you to bid on, buy and sell punks directly in the interface.'
  },
];

const HowToGetPunk = () => (
  <motion.section 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    viewport={{ once: true }} 
    className="bg-black py-16 px-6"
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left side - Title and Avatar */}
        <div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl ml-10 font-bold mb-8 font-serif text-white"
          >
            How do I get a punk?
          </motion.h2>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex justify-center"
          >
            <CryptoPunkAvatar />
          </motion.div>
        </div>

        {/* Right side - Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-8 bottom-0 w-px bg-gray-700" />
          
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex items-start space-x-6"
              >
                {/* Step number circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 rounded-full border-2 border-gray-700 bg-black flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0 mt-2">
                  <div className="text-4xl">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  {step.button && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full border border-gray-600 transition-all duration-300"
                    >
                      {step.button}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default HowToGetPunk;