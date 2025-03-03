import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the beacon-based authentication work?",
      answer: "Our system uses Bluetooth Low Energy (BLE) beacons placed at security checkpoints. When a user approaches, the beacon triggers an authentication request on their smartphone. The user then completes a two-factor authentication process using their Aadhaar number and biometric verification."
    },
    {
      question: "Is the system secure against spoofing or hacking?",
      answer: "Yes, our system employs multiple layers of security. The combination of physical presence (detected by beacons), Aadhaar verification, OTP authentication, and biometric confirmation makes it extremely difficult to compromise. All data transmission is encrypted, and we follow the highest security standards."
    },
    {
      question: "What happens if someone doesn't have a smartphone?",
      answer: "We provide alternative authentication methods for those without smartphones. Security personnel can assist with manual verification using physical ID documents like passports or government-issued IDs. The system is designed to be inclusive while maintaining security standards."
    },
    {
      question: "How is user privacy protected?",
      answer: "We take privacy very seriously. The system only accesses the minimum required information from Aadhaar for verification purposes. No biometric data is stored on our servers - we only verify against the Aadhaar database. All data processing complies with relevant privacy regulations and data protection laws."
    },
    {
      question: "Can the system work offline or in areas with poor connectivity?",
      answer: "The system requires internet connectivity for the initial authentication process. However, we've implemented caching mechanisms for frequent users at specific locations, allowing for faster authentication in areas with intermittent connectivity. For complete offline scenarios, we provide backup verification methods."
    },
    {
      question: "How quickly can the system process large numbers of people?",
      answer: "The entire authentication process typically takes 5-10 seconds per person, significantly faster than traditional manual verification. Our system can handle multiple simultaneous authentications, making it ideal for high-traffic areas like airports and stadiums. The system scales efficiently to accommodate peak usage times."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our beacon-based security system.
          </p>
        </AnimatedSection>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AnimatedSection 
              key={index} 
              className="mb-4"
              delay={index * 0.1}
            >
              <div 
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;