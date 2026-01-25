import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    title: 'Hacker Retreat',
    date: 'Jan 2026',
    location: 'Chiang Mai',
    imageUrl: '/Hacker%20Retreat.jpg',
    type: 'FLAGSHIP',
    link: 'https://docs.google.com/document/d/1GQg0WEFjF26Cabh00cjHjzFB93dSnulfJyrJaHDZ38M/mobilebasic'
  },
  {
    title: 'CypherRave',
    date: 'Coming Soon',
    location: 'Global',
    imageUrl: '/Cypherave.png',
    type: 'COMING SOON',
    link: 'https://luma.com/user/webpsy'
  },
  {
    title: 'Solarpunk Retreat',
    date: 'TBD',
    location: 'TBD',
    imageUrl: '/SolarPunk.png',
    type: 'RETREAT',
    link: 'https://www.notion.so/webpsy/SolarArk-Retreat-fd9381fba3c64f38a279e1ac14cdb71a'
  }
];

export default function Events() {
  return (
    <section className="py-24 bg-black px-6 border-t border-white/5" id="residencies">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">
              Residencies
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Experimental gatherings for builders and creators across disciplines.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.a
              key={index}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer bg-[#111] border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${event.imageUrl})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                   <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-wider border border-white/20">
                     {event.type}
                   </span>
                </div>
                
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white/90 text-sm font-bold uppercase tracking-widest mb-3">
                    {event.date} • {event.location}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6 group-hover:scale-105 transition-transform origin-left">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-sm font-bold uppercase tracking-widest">Learn More</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                       <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
