import React, { useState } from 'react';
import { Smartphone, Radio, Fingerprint, Shield, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from './AnimatedSection';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps = [
    {
      icon: <Radio className="h-8 w-8 text-white" />,
      title: "Beacon Detection",
      description: "User approaches security checkpoint where BLE beacon is installed. The beacon broadcasts a signal that is detected by the user's smartphone."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-white" />,
      title: "Authentication Request",
      description: "User receives a notification on their smartphone with a link to the authentication web app. The app requests Aadhaar number entry."
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "OTP Verification",
      description: "System sends an OTP to the Aadhaar-linked mobile number. User enters the OTP in the app for the first authentication factor."
    },
    {
      icon: <Fingerprint className="h-8 w-8 text-white" />,
      title: "Biometric Verification",
      description: "User provides fingerprint at the security checkpoint. System matches it with Aadhaar database for second authentication factor."
    },
    {
      icon: <Check className="h-8 w-8 text-white" />,
      title: "Access Granted",
      description: "Upon successful verification of both factors, the system grants access to the secure area. The entire process takes seconds to complete."
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our multi-factor authentication system provides seamless yet highly secure access control.
          </p>
        </AnimatedSection>
        
        <div className="relative" ref={ref}>
          {/* Connection Line */}
          <motion.div 
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"
          ></motion.div>
          
          {/* Steps */}
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col md:flex-row items-center"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:order-2 md:pl-16'}`}>
                  <motion.h3 
                    className="text-2xl font-bold text-gray-800 mb-3"
                    animate={activeStep === index ? { color: '#2563EB' } : { color: '#1F2937' }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                <div className={`relative my-6 md:my-0 z-10 ${index % 2 === 0 ? 'md:order-2' : 'md:pr-16'}`}>
                  <motion.div 
                    className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    animate={activeStep === index ? { backgroundColor: '#1E40AF' } : { backgroundColor: '#2563EB' }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.icon}
                  </motion.div>
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-full bg-blue-200 rounded-full opacity-20"
                    animate={{ 
                      scale: activeStep === index ? [1, 1.5, 1] : [1, 1.2, 1],
                      opacity: activeStep === index ? [0.2, 0.4, 0.2] : [0.2, 0.3, 0.2]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: activeStep === index ? 1.5 : 2.5
                    }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;