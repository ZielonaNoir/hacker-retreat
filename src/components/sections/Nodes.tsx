import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Luo',
    title: 'Founder, PKU Visual Research Center and UCCA Curator',
    avatar: '/Luo Founder PKU Visual Research Center and UCCA Curator.jpg',
  },
  {
    name: 'Chloe',
    title: 'Brand Lead',
    avatar: '/Chloe Brand Lead.jpg',
  },
  {
    name: 'Oddie',
    title: 'Design Director',
    avatar: '/Oddie.jpeg',
  },
  {
    name: 'Kuanfu Weimu',
    title: 'Art Advisor',
    avatar: '/Kuanfu Weimu. Art Advisor Instagram  X @kuanfuweimu.jpg',
    socialLink: 'https://instagram.com/kuanfuweimu',
    socialIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function Nodes() {
  return (
    <section className="py-24 bg-black px-6 border-t border-white/5" id="nodes">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">
            Nodes
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            Core team members building the future together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-white/30 hover:-translate-y-1 ${
                member.socialLink ? 'cursor-pointer' : ''
              }`}
              onClick={() => {
                if (member.socialLink) {
                  window.open(member.socialLink, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              {/* Avatar */}
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/50 transition-all duration-300 group-hover:scale-105">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h4 className="text-xl font-bold text-white text-center tracking-tight">
                  {member.name}
                </h4>

                {/* Title */}
                <p className="text-sm text-gray-400 text-center font-light leading-relaxed min-h-[3rem]">
                  {member.title}
                </p>

                {/* Social Link */}
                {member.socialLink && (
                  <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors mt-2">
                    {member.socialIcon}
                    <span className="text-xs uppercase tracking-wider font-medium">
                      Instagram
                    </span>
                  </div>
                )}
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
