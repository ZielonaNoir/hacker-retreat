import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import MagneticButton from '../ui/MagneticButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Residencies', href: '#residencies' },
    { name: 'Research', href: '#research' },
    { name: 'Nodes', href: '#nodes' },
    { name: 'About', href: '#about' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled || mobileMenuOpen
          ? 'bg-transparent border-transparent py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center h-full">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-2 relative z-50">
            <img src="/logo.png" alt="WebPsy Labs" className="h-12 md:h-14 w-auto object-contain" />
          </Link>

          {/* Center: Menu Items (Desktop) */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 backdrop-blur-sm border border-white/5">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors px-4 py-2 rounded-full hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton 
              href="https://t.me/+hcJ97ZnmLVZhNDQ1" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-5 py-2.5 bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors rounded-full"
            >
              Connect
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-50 p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6 text-2xl font-medium">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="mt-8">
              <a 
                href="https://t.me/+hcJ97ZnmLVZhNDQ1" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 bg-white text-black text-lg font-bold hover:bg-gray-200 transition-colors rounded-full"
              >
                Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}