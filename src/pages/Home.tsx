import React from 'react';
import Navbar from '../components/sections/Navbar';
import Hero from '../components/sections/Hero';
import Partners from '../components/sections/Partners';
import Disciplines from '../components/sections/Disciplines';
import Vision from '../components/sections/Vision';
import Events from '../components/sections/Events';
import Nodes from '../components/sections/Nodes';
import Community from '../components/sections/Community';
import Footer from '../components/sections/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white font-['Inter'] selection:bg-[#14F195] selection:text-black overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Partners />
        <Events />
        <Nodes />
        <Disciplines />
        <Vision />
        <Community />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
