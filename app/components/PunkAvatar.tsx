'use client';
import { motion } from 'framer-motion';

interface PunkAvatarProps {
  id: number;
  size?: string;
}

const avatarData = {
  1: { bg: 'from-purple-600 to-purple-800', features: 'mohawk-green', skin: 'dark', accent: 'purple' },
  2: { bg: 'from-blue-500 to-blue-700', features: 'cap-blue', skin: 'light', accent: 'blue' },
  3: { bg: 'from-gray-600 to-gray-800', features: 'beanie-orange', skin: 'medium', accent: 'gray' },
  4: { bg: 'from-red-600 to-red-800', features: 'pipe', skin: 'dark', accent: 'red' },
  5: { bg: 'from-orange-600 to-orange-800', features: 'headband', skin: 'medium', accent: 'orange' },
  6: { bg: 'from-purple-700 to-purple-900', features: 'hoodie', skin: 'dark', accent: 'purple' },
  7: { bg: 'from-indigo-600 to-indigo-800', features: 'glasses-yellow', skin: 'light', accent: 'indigo' },
  8: { bg: 'from-slate-700 to-slate-900', features: 'cap-black', skin: 'light', accent: 'slate' },
};

const PunkAvatar = ({ id, size = 'w-16 h-16' }: PunkAvatarProps) => {
  const punk = avatarData[id as keyof typeof avatarData] || avatarData[1];

  const getAccentColor = (accent: string) => {
    const colors = {
      purple: '#8B5CF6',
      blue: '#3B82F6', 
      gray: '#6B7280',
      red: '#EF4444',
      orange: '#F97316',
      indigo: '#6366F1',
      slate: '#64748B'
    };
    return colors[accent as keyof typeof colors] || colors.purple;
  };

  return (
    <motion.div
      className={`relative ${size} rounded-2xl cursor-pointer group overflow-hidden`}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${punk.bg} opacity-90`} />
      
      {/* Animated Border */}
      <motion.div 
        className="absolute inset-0 rounded-2xl opacity-60"
        style={{
          background: `linear-gradient(45deg, ${getAccentColor(punk.accent)}40, transparent, ${getAccentColor(punk.accent)}40)`,
          backgroundSize: '300% 300%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Inner Container */}
      <div className="relative w-full h-full bg-gradient-to-br from-black/20 via-transparent to-black/40 rounded-2xl flex items-center justify-center">
        {/* Pixel Art Avatar */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-3/4 h-3/4 drop-shadow-lg"
          style={{ imageRendering: 'pixelated' }}
        >
          {/* Head/Face */}
          <rect 
            x="7" y="5" width="10" height="10" 
            fill={punk.skin === 'light' ? '#F5DEB3' : punk.skin === 'medium' ? '#D2B48C' : '#8B4513'}
            rx="1"
          />
          
          {/* Eyes */}
          <rect x="9" y="8" width="1.5" height="1.5" fill="#000" rx="0.2" />
          <rect x="13.5" y="8" width="1.5" height="1.5" fill="#000" rx="0.2" />
          
          {/* Eye Highlights */}
          <rect x="9.2" y="8.2" width="0.6" height="0.6" fill="#fff" rx="0.3" />
          <rect x="13.7" y="8.2" width="0.6" height="0.6" fill="#fff" rx="0.3" />
          
          {/* Nose */}
          <rect 
            x="11" y="10.5" width="2" height="1" 
            fill={punk.skin === 'light' ? '#DEB887' : punk.skin === 'medium' ? '#CD853F' : '#654321'}
            rx="0.5"
          />
          
          {/* Mouth */}
          <rect x="10" y="12.5" width="4" height="1" fill="#000" rx="0.5" />
          
          {/* Hair/Hat Feature */}
          <rect x="6" y="3" width="12" height="4" fill={getAccentColor(punk.accent)} rx="2" />
          
          {/* Accessories based on features */}
          {punk.features.includes('glasses') && (
            <>
              <rect x="8" y="7.5" width="3" height="2.5" fill="none" stroke="#FFD700" strokeWidth="0.3" rx="0.5" />
              <rect x="13" y="7.5" width="3" height="2.5" fill="none" stroke="#FFD700" strokeWidth="0.3" rx="0.5" />
              <rect x="11" y="8.7" width="2" height="0.3" fill="#FFD700" />
            </>
          )}
        </svg>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(circle at center, ${getAccentColor(punk.accent)}20, transparent 70%)`,
          }}
        />
      </div>

      {/* Corner Accent */}
      <div 
        className="absolute top-2 right-2 w-2 h-2 rounded-full opacity-60"
        style={{ backgroundColor: getAccentColor(punk.accent) }}
      />
    </motion.div>
  );
};

export default PunkAvatar;