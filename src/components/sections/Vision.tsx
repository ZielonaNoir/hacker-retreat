import React from 'react';
import { motion } from 'framer-motion';

export default function Vision() {
  return (
    <section className="py-40 relative bg-black flex items-center justify-center overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-10" 
        style={{
           backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
           backgroundSize: '40px 40px'
        }}>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="md:w-1/2"
           >
              <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[1.1]">
                Cultivating a<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600">
                  Socio-Technical Ecosystem.
                </span>
              </h2>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="md:w-1/2 pt-4"
           >
              <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-8">
                Across these disciplines, we work to cultivate a solarpunk-inspired socio-technical ecosystem—one in which technology, culture, and markets circulate, evolve, and thrive together.
              </p>
              
              <div className="h-px w-full bg-gradient-to-r from-[#14F195] to-transparent mb-8"></div>
              
              <div className="grid grid-cols-2 gap-8">
                 <div>
                    <h4 className="text-white text-4xl font-bold mb-2">10+</h4>
                    <p className="text-gray-500 uppercase text-xs tracking-widest">Projects</p>
                 </div>
                 <div>
                    <h4 className="text-white text-4xl font-bold mb-2">2026</h4>
                    <p className="text-gray-500 uppercase text-xs tracking-widest">Roadmap</p>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
