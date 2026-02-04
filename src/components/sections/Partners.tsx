import React from 'react';

export default function Partners() {
  // Helper function to generate logo path
  const getLogoPath = (name: string) => {
    // Convert name to logo filename (lowercase, replace spaces with hyphens)
    const logoName = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    return `/logos/${logoName}.svg`; // Default to SVG, fallback to PNG if needed
  };

  // Partner data from link.md specification
  // Strategic Partners (high-priority, placed first)
  // Media Partners (follows strategic)
  const partners = [
    // Strategic Partners
    { name: 'HashKey Group', url: 'https://group.hashkey.com', logo: '/hashkey.jpg' },
    { name: 'EthStorage', url: 'https://eth-store.w3eth.io', logo: '/EthStorage.png' },
    { name: '4seas', url: 'https://4seas.xyz', logo: '/4seas.webp' },
    { name: 'LXDAO', url: 'http://lxdao.io', logo: '/LXDAO.webp' },
    { name: 'Yellow Incubator', url: 'https://www.yellowincubator.com', logo: '/yellow.webp' },
    // Media Partners
    { name: 'Odaily', url: 'https://www.odaily.news/en', logo: '/ODAILY.webp' },
    { name: 'PANews', url: 'http://panewslab.com/en', logo: '/PANews.webp' },
    { name: 'TechFlow', url: 'https://www.techflowpost.com', logo: '/TechFlow.webp' },
    { name: 'ChainCatcher', url: 'http://chaincatcher.com/en', logo: '/Chaincatcher.webp' }
  ];

  return (
    <div className="w-full bg-black py-16 border-y border-white/5 overflow-hidden relative z-20" id="partners">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-8">
         <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Powering the ecosystem</p>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden group mask-linear-gradient">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-20 pl-6">
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex flex-col items-center justify-center gap-4 select-none min-w-[200px]"
            >
              {/* Logo */}
              <div className="h-16 w-auto flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-auto object-contain max-w-[180px]"
                  onError={(e) => {
                    // Fallback to PNG if SVG doesn't exist
                    const target = e.target as HTMLImageElement;
                    const pngPath = partner.logo.replace('.svg', '.png');
                    if (target.src !== pngPath) {
                      target.src = pngPath;
                    } else {
                      // If PNG also fails, hide the image
                      target.style.display = 'none';
                    }
                  }}
                />
              </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
      </div>
      
      <style>{`
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}
