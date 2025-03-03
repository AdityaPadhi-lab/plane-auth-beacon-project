import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Shield, Clock, Users, Building } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-gray-800">
      {prefix}{count}{suffix}
    </div>
  );
};

const Stats = () => {
  const stats = [
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      value: 60,
      suffix: "%",
      label: "Faster Authentication",
      description: "Compared to traditional methods"
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      value: 99.9,
      suffix: "%",
      label: "Security Accuracy",
      description: "Verified through rigorous testing"
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      value: 5,
      suffix: "M+",
      label: "Users Processed",
      description: "Across all implementations"
    },
    {
      icon: <Building className="h-10 w-10 text-blue-600" />,
      value: 50,
      suffix: "+",
      label: "Locations Deployed",
      description: "Including major airports & stations"
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The measurable difference our technology makes in security and efficiency.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md text-center"
              delay={index * 0.1}
            >
              <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <Counter 
                end={stat.value} 
                duration={2000} 
                suffix={stat.suffix} 
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-2 mb-1">{stat.label}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;