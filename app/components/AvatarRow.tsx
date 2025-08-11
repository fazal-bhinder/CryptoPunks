"use client";
import { motion } from "framer-motion";
import PunkAvatar from "./PunkAvatar";

interface AvatarRowProps {
  punkAvatars: number[];
}

const AvatarRow = ({ punkAvatars }: AvatarRowProps) => {
  const extendedAvatars = [...punkAvatars, ...punkAvatars, ...punkAvatars];

  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 left-1/5 w-64 h-64 bg-white/2 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 py-24">
        {/* Infinite Scrolling Avatar Row */}
        <div className="relative w-full overflow-hidden mb-24">
          {/* Gradient Masks for Fade Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Scrolling Container */}
          <motion.div
            className="flex space-x-6"
            animate={{
              x: [0, -((120 + 24) * punkAvatars.length)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{ width: "max-content" }}
          >
            {extendedAvatars.map((id, index) => (
              <motion.div
                key={`${id}-${index}`}
                className="flex-shrink-0"
                whileHover={{ scale: 1.1, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <PunkAvatar id={id} size="w-24 h-24 md:w-28 md:h-28" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AvatarRow;
