import React from 'react';
import { motion } from 'framer-motion';

export default function Community() {
  return (
    <section className="py-24 bg-black px-6 border-t border-white/5" id="community">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left: Research / Insights */}
        <div>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl font-medium text-white mb-10 tracking-tight"
          >
            Articles & Insights
          </motion.h2>
          
          <div className="space-y-4">
            {[
              { title: "The Future of Decentralized Coordination", tag: "Protocol" },
              { title: "MycoFi: Biological Metaphors in Finance", tag: "Theory" },
              { title: "Scaling Trust in Trustless Systems", tag: "Security" }
            ].map((item, i) => (
              <motion.a 
                key={i}
                href="#"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.03)' }}
                className="block p-6 border-b border-white/10 transition-colors group"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs text-[#9945FF] uppercase tracking-widest font-bold mb-2 block">{item.tag}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#14F195] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                     </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
          
          <div className="mt-8 pt-4">
             <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-bold">
               View All Research
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
               </svg>
             </a>
          </div>
        </div>

        {/* Right: Community CTA */}
        <div className="flex flex-col justify-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }} 
             className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden group"
          >
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#9945FF]/10 to-[#14F195]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The Mycelial Network
              </h3>
              <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
                Connect with engineers, researchers, and bio-hackers building the solarpunk future.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://t.me/+hcJ97ZnmLVZhNDQ1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-full hover:bg-gray-200 transition-colors"
                >
                  Join Telegram
                </a>
                <a 
                  href="https://x.com/SolarArk_2048" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-wider rounded-full hover:bg-white/10 transition-colors"
                >
                  Follow on X
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
