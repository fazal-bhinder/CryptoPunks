"use client";
import { motion } from "framer-motion";
import PunkAvatar from "./PunkAvatar";

const MeetThePunks = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="py-16 max-w-6xl mx-auto px-6"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-5xl font-bold mb-6">Meet the Punks</h2>
        <p className="text-lg opacity-75 mb-8">
          The CryptoPunks are 24×24 pixel art images, generated algorithmically.
          Rare types like Apes, Zombies, and Aliens exist. Each punk has
          attributes and ownership data visible on its profile.
        </p>
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold"
          >
            Buy a Punk
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black"
          >
            View full collection
          </motion.button>
        </div>
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-slate-600 rounded-2xl p-8"
      >
        <div className="flex justify-between items-start mb-8">
          <div className="text-left space-y-4">
            <p className="bg-slate-500 rounded-lg p-3 text-sm">
              Blue backgrounds: not for sale/no bids
            </p>
            <p className="bg-gray-800 rounded-lg p-3 text-sm">
              Red: listed for sale
            </p>
            <p className="bg-gray-800 rounded-lg p-3 text-sm">
              Purple: has an active bid
            </p>
          </div>
          <PunkAvatar id={4} size="w-32 h-32" />
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export default MeetThePunks;
