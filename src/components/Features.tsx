import React from 'react';
import { Shield, Fingerprint, Smartphone, Lock, Radio, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from './AnimatedSection';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "Enhanced Security",
      description: "Multi-factor authentication combining OTP and biometric verification for maximum security."
    },
    {
      icon: <Radio className="h-10 w-10 text-blue-600" />,
      title: "BLE Beacons",
      description: "Bluetooth Low Energy beacons trigger location-based authentication processes."
    },
    {
      icon: <Fingerprint className="h-10 w-10 text-blue-600" />,
      title: "Aadhaar Integration",
      description: "Secure identity verification using India's Aadhaar database for reliable authentication."
    },
    {
      icon: <Smartphone className="h-10 w-10 text-blue-600" />,
      title: "Mobile Integration",
      description: "Seamless web and mobile app integration for user-friendly experience."
    },
    {
      icon: <Lock className="h-10 w-10 text-blue-600" />,
      title: "Offline Verification",
      description: "Alternative verification methods for exceptional cases using passport or other ID."
    },
    {
      icon: <MapPin className="h-10 w-10 text-blue-600" />,
      title: "Location Awareness",
      description: "Precise location-based security triggers for specific access points."
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Key Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our beacon-based security system combines cutting-edge technology with robust authentication methods.
          </p>
        </AnimatedSection>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group"
            >
              <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {feature.icon}
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;