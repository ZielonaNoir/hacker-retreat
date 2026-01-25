import React from 'react';
import Navbar from '../components/sections/Navbar';
import Footer from '../components/sections/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white font-['Inter'] selection:bg-[#14F195] selection:text-black overflow-x-hidden">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">About Hacker Retreat</h1>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Hacker Retreat is a collaborative experimental residency for AI builders, Web3 architects, 
                researchers, bio-hackers, and creators. We bring together the brightest minds to explore 
                the frontiers of technology and innovation.
              </p>
              
              <p>
                Our mission is to foster a community where cutting-edge ideas meet real-world implementation, 
                creating solutions that shape the future of technology and society.
              </p>
              
              <h2 className="text-3xl font-semibold mt-12 mb-4 text-white">Our Vision</h2>
              <p>
                We envision a world where technology serves humanity in the most meaningful ways, 
                where innovation is accessible to all, and where the boundaries between disciplines 
                dissolve to create something entirely new.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
