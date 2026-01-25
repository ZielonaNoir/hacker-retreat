import React from 'react';
import Navbar from '../components/sections/Navbar';
import Footer from '../components/sections/Footer';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white font-['Inter'] selection:bg-[#14F195] selection:text-black overflow-x-hidden">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Contact Us</h1>
            
            <div className="space-y-8 text-lg text-gray-300">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h2>
                <p className="mb-6">
                  Have questions about Hacker Retreat? Want to become a sponsor, speaker, or co-builder? 
                  We'd love to hear from you!
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
                  <h3 className="text-xl font-semibold mb-2 text-white">Telegram</h3>
                  <a 
                    href="https://t.me/+hcJ97ZnmLVZhNDQ1" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#14F195] hover:underline"
                  >
                    Join our Telegram community
                  </a>
                </div>
                
                <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
                  <h3 className="text-xl font-semibold mb-2 text-white">Location</h3>
                  <p>Chiang Mai, Thailand</p>
                  <p className="text-gray-400">January-February 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
