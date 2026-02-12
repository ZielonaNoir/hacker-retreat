import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from '../ui/TiltCard';

// Icons
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.163 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YouTubeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
)

const teamMembers = [
  {
    name: 'Luo',
    title: (
      <>
        Founder<br />
        PKU Visual Research Center and UCCA Curator
      </>
    ),
    avatar: '/Luo Founder PKU Visual Research Center and UCCA Curator.jpg',
    socials: [
        { name: 'X', url: 'https://x.com/cypherwander', icon: <XIcon /> },
        { name: 'Instagram', url: 'https://www.instagram.com/cypherhippie/', icon: <InstagramIcon /> }
    ]
  },
  {
    name: 'Unai',
    title: 'New Sector Research, AI, Fintech & Tokenization',
    avatar: '/Unai.jpeg',
    socials: [
        { name: 'X', url: 'https://x.com/unaiyang', icon: <XIcon /> }
    ]
  },
  {
    name: 'Leon',
    title: (
        <>
            Founder of <a href="https://multifire.org" target="_blank" rel="noopener noreferrer" className="hover:text-white underline decoration-white/30 transition-colors">MultiFIRE Club</a><br/>
            Former Silicon Valley engineer and investor
        </>
    ),
    avatar: '/Leon.jpeg',
    socials: [
        { name: 'YouTube', url: 'https://www.youtube.com/@multifireclub', icon: <YouTubeIcon /> }
    ]
  },
   {
    name: 'Sakya Lee',
    title: 'Electronic Music Producer & Healing Practitioner',
    avatar: '/SakyaLee.jpeg',
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
    socials: [
      { name: 'Instagram', url: 'https://instagram.com/kuanfuweimu', icon: <InstagramIcon /> }
    ]
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
            >
              <TiltCard className="h-full group relative bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-white/30">
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
                  <div className="text-sm text-gray-400 text-center font-light leading-relaxed min-h-12">
                    {member.title}
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-3 justify-center min-h-6">
                    {member.socials && member.socials.map((social, sIndex) => (
                      <a 
                          key={sIndex}
                          href={social.url}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-gray-500 hover:text-white transition-colors cursor-pointer p-1"
                          title={social.name}
                          onPointerDown={(e) => e.stopPropagation()}
                      >
                          {social.icon}
                          <span className="text-[10px] uppercase tracking-wider font-medium hidden group-hover:block transition-all">
                              {social.name}
                          </span>
                      </a>
                    ))}
                 </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
