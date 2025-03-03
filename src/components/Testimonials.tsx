import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajiv Sharma",
      position: "Airport Security Director, Delhi International Airport",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "Implementing BeaconSecure at our airport has reduced passenger wait times by 40% while significantly enhancing our security protocols. The system's ability to verify identity quickly and accurately has been a game-changer for our operations."
    },
    {
      name: "Priya Mehta",
      position: "CTO, Indian Railways",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "The beacon-based authentication system has revolutionized how we manage passenger entry at major railway stations. The integration with Aadhaar provides a level of security and efficiency we couldn't achieve with traditional methods."
    },
    {
      name: "Vikram Patel",
      position: "Head of Security, Tata Consultancy Services",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "Our corporate campus security has been transformed by this technology. The seamless authentication process for employees and visitors has eliminated bottlenecks at entry points while maintaining the highest security standards."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrevious = () => {
    setAutoplay(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from organizations that have implemented our beacon-based security system.
          </p>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-blue-50 rounded-xl p-6 md:p-10 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-blue-300"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-indigo-300"></div>
            </div>
            
            {/* Testimonial Slider */}
            <div className="relative">
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "tween", duration: 0.5 }}
                  className="relative z-10"
                >
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                        <img 
                          src={testimonials[currentIndex].image} 
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                        "{testimonials[currentIndex].quote}"
                      </blockquote>
                      <div>
                        <p className="font-bold text-gray-800">{testimonials[currentIndex].name}</p>
                        <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Buttons */}
              <div className="flex justify-center mt-8 space-x-2">
                <button 
                  onClick={handlePrevious}
                  className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-600" />
                </button>
                <button 
                  onClick={handleNext}
                  className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-6 w-6 text-gray-600" />
                </button>
              </div>
              
              {/* Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setAutoplay(false);
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;