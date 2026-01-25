import React from 'react';
import { motion } from 'framer-motion';
import ColorBends from '../ColorBends';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Title Box with ColorBends Background */}
        <div className="relative w-screen h-[100vh] overflow-hidden p-8 md:p-12">
          {/* ColorBends Background for Title Box */}
          <div className="absolute inset-0 z-0">
            <ColorBends
              className="w-full h-full"
              rotation={45}
              autoRotate={0.2}
              speed={0.2}
              colors={['#9945FF', '#14F195', '#000000']}
              transparent={false}
              scale={1}
              frequency={1}
              warpStrength={1}
              mouseInfluence={1}
              parallax={0.5}
              noise={0.1}
            />
          </div>
          {/* Content Layer */}
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pt-32">
            <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block py-1.5 px-4 border border-[#14F195]/30 rounded-full bg-[#14F195]/10 text-[10px] font-bold tracking-[0.1em] uppercase text-[#14F195]">
              POWERED BY MYCOFI PROTOCOL
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-5xl font-medium tracking-tighter text-white leading-[1.1] mb-8"
          >
            WebPsy Labs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl font-normal leading-relaxed mb-12"
          >
            WebPsy Labs is a frontier hacker agency formed by elite builders across AI, Web3, and biotechnology, shaping next-generation paradigms for technology, brand, and growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="https://t.me/+hcJ97ZnmLVZhNDQ1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black font-bold text-sm rounded-full hover:bg-gray-200 transition-colors"
            >
              Join the Network
            </a>
            <a
              href="https://www.notion.so/WebPsy-Labs-2b4591d5633980bb87b3ee666e115e6e"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 text-white font-bold text-sm rounded-full hover:bg-white/10 transition-colors hover:border-white"
            >
              View Concept Deck
            </a>
          </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
