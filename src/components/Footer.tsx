import React from 'react';
import { Radio, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <motion.div 
              className="flex items-center space-x-2 mb-6"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Radio className="h-6 w-6 text-blue-400" />
              <span className="font-bold text-xl">BeaconSecure</span>
            </motion.div>
            <p className="text-gray-400 mb-6">
              Revolutionizing access control with Bluetooth beacons and Aadhaar-based multi-factor authentication.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3, color: "#1DA1F2" }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3, color: "#0A66C2" }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3, color: "#FFFFFF" }}
              >
                <Github href="https://github.com/AdityaPadhi-lab" className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Features", "How It Works", "Applications", "Privacy Policy", "Terms of Service"].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a 
                    href={item === "Privacy Policy" || item === "Terms of Service" ? "#" : `#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {["Documentation", "API Reference", "Developer Guide", "Case Studies", "Blog"].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                <span className="text-gray-400">ITER BH4 Bhubaneswar</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                whileHover={{ x: 5 }}
              >
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <a href="mailto:info@beaconsecure.com" className="text-gray-400 hover:text-white transition-colors">
                  adityapadhi.edu.05@gmail.com
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center"
                whileHover={{ x: 5 }}
              >
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <a href="tel:+916372930066" className="text-gray-400 hover:text-white transition-colors">
                  +91 6372930066
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            &copy; {currentYear} BeaconSecure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;