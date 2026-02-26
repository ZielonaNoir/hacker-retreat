import React from 'react';
import { motion } from 'framer-motion';
import ColorBends from '../ColorBends';
import ScrambleText from '../visuals/ScrambleText';
import MagneticButton from '../ui/MagneticButton';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Title Box with ColorBends Background - full screen */}
        <div className="relative w-screen min-h-screen overflow-hidden p-6 md:p-12">
          {/* ColorBends full background - fills viewport */}
          <div className="absolute inset-0 z-0 min-h-full min-w-full">
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
          <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-12 pt-24 md:pt-32">
            <div className="max-w-4xl md:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block py-1.5 px-4 border border-[#14F195]/30 rounded-full bg-[#14F195]/10 text-[10px] font-bold tracking-widest uppercase text-[#14F195]">
              POWERED BY MYCOFI PROTOCOL
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="font-pixel text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none whitespace-nowrap">
              <ScrambleText text="WebPsy Labs" delay={0.5} />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base text-gray-400 max-w-[75%] font-normal leading-snug mb-10"
          >
            WebPsy Labs is a frontier hacker agency formed by elite builders across <ScrambleText text="AI" delay={1.2} className="text-white" />, <ScrambleText text="Web3" delay={1.4} className="text-white" />, and <ScrambleText text="BioTech" delay={1.6} className="text-white" />, shaping next-generation paradigms for technology, brand, and growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap items-start gap-3"
          >
            <MagneticButton
              href="https://t.me/+hcJ97ZnmLVZhNDQ1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-black font-bold text-sm rounded-full hover:bg-gray-200 transition-colors inline-block text-center"
            >
              Join the Network
            </MagneticButton>
            <MagneticButton
              href="https://webpsy.notion.site/c9bc71b06fe84eff959251a90da955f6?v=74467a5f965248d7b696bd8c2ebb848b&source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 sm:px-8 sm:py-4 border border-white/20 text-white font-bold text-sm rounded-full hover:bg-white/10 transition-colors hover:border-white inline-block text-center"
            >
              View Concept Deck
            </MagneticButton>
            <MagneticButton
              href="https://luma.com/user/webpsy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 sm:px-8 sm:py-4 border border-[#14F195]/50 text-[#14F195] font-bold text-sm rounded-full hover:bg-[#14F195]/10 transition-colors inline-block text-center"
            >
              FinTech Event
            </MagneticButton>
          </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
