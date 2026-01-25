import React from 'react';
import { motion } from 'framer-motion';

export default function Disciplines() {
  return (
    <section className="py-32 bg-black px-6 md:px-12 relative z-10" id="research">
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight leading-tight">
            Core Disciplines.<br/>
            <span className="text-gray-500">Built for scale.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {/* Card 1 - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-2 bg-[#111] border border-white/10 rounded-3xl p-10 flex flex-col justify-between hover:bg-[#151515] transition-colors group relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="text-[#9945FF]">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
             </div>
             <div>
                <span className="text-[#9945FF] font-mono text-sm mb-4 block">01</span>
                <h3 className="text-3xl font-bold text-white mb-2">Protocol & Full-Stack Engineering</h3>
             </div>
             <p className="text-xl text-gray-400 max-w-md">
               Building robust infrastructure for the decentralized web.
             </p>
          </motion.div>

          {/* Card 2 - Tall */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="row-span-1 lg:row-span-2 bg-[#111] border border-white/10 rounded-3xl p-10 flex flex-col justify-between hover:bg-[#151515] transition-colors group relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#14F195]/5 group-hover:to-[#14F195]/10 transition-colors"></div>
             <div>
                <span className="text-[#14F195] font-mono text-sm mb-4 block">02</span>
                <h3 className="text-3xl font-bold text-white mb-2">Global Growth Strategy</h3>
             </div>
             <p className="text-lg text-gray-400 mt-8">
               Data-driven hacking strategies to scale adoption worldwide.
             </p>
             <div className="mt-8 flex-1 flex items-end justify-center">
                {/* Abstract Chart Graphic */}
                <div className="flex gap-2 items-end h-32">
                    <div className="w-4 bg-gray-800 h-12 rounded-t-sm group-hover:h-16 transition-all duration-500"></div>
                    <div className="w-4 bg-gray-700 h-20 rounded-t-sm group-hover:h-24 transition-all duration-500 delay-75"></div>
                    <div className="w-4 bg-gray-600 h-16 rounded-t-sm group-hover:h-28 transition-all duration-500 delay-100"></div>
                    <div className="w-4 bg-[#14F195] h-24 rounded-t-sm group-hover:h-32 transition-all duration-500 delay-150 shadow-[0_0_15px_rgba(20,241,149,0.5)]"></div>
                </div>
             </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 lg:col-span-2 bg-[#111] border border-white/10 rounded-3xl p-10 flex flex-col justify-between hover:bg-[#151515] transition-colors group"
          >
             <div>
                <span className="text-blue-400 font-mono text-sm mb-4 block">03</span>
                <h3 className="text-3xl font-bold text-white mb-2">Brand, Visual & Motion Design</h3>
             </div>
             <div className="flex justify-between items-end mt-8">
                <p className="text-xl text-gray-400 max-w-sm">
                  Crafting visual identities that resonate across cultures.
                </p>
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                   </svg>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
