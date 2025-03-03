import React, { useState, useEffect } from 'react';
import { Shield, Radio, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isBeaconActive, setIsBeaconActive] = useState(false);
  
  useEffect(() => {
    // Simulate beacon activation after page load
    const timer = setTimeout(() => {
      setIsBeaconActive(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Airport Security Using Beacon Technology
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Revolutionizing access control with Bluetooth beacons and Aadhaar-based multi-factor authentication.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a 
                href="#how-it-works" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors shadow-lg inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Shield className="mr-2 h-5 w-5" />
                Learn How It Works
              </motion.a>
              <motion.a 
                href="#applications" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Applications
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <motion.div 
                animate={{  opacity: [0.5, 0.8, 0.5] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-lg blur opacity-75"
              ></motion.div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl">
                <motion.img 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Airport security checkpoint" 
                  className="rounded-lg shadow-md mb-4"
                />
                <div className="flex items-center justify-center space-x-4 py-3 bg-blue-50 rounded-lg">
                  <motion.div
                    animate={{ 
                      scale: isBeaconActive ? [1, 1.2, 1] : 1,
                      opacity: isBeaconActive ? 1 : 0.5
                    }}
                    transition={{ 
                      repeat: isBeaconActive ? Infinity : 0, 
                      duration: 2 
                    }}
                  >
                    <Radio className={`h-8 w-8 ${isBeaconActive ? 'text-blue-600' : 'text-gray-400'}`} />
                  </motion.div>
                  <div className="text-gray-800">
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 }}
                      className="font-semibold"
                    >
                      {isBeaconActive ? 'Beacon Active' : 'Initializing...'}
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 }}
                      className="text-sm text-gray-600"
                    >
                      {isBeaconActive ? 'Secure Authentication Ready' : 'Please wait...'}
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;