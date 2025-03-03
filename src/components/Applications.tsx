import React from 'react';
import { Building, Landmark, Train, Ticket, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Applications = () => {
  const applications = [
    {
      icon: <Landmark className="h-10 w-10 text-blue-600" />,
      title: "Airports",
      description: "Secure passenger authentication at entry gates, reducing wait times while enhancing security.",
      image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Train className="h-10 w-10 text-blue-600" />,
      title: "Railway & Metro Stations",
      description: "Biometric-based ticketing & entry for seamless passenger flow and reduced fraud.",
      image: "https://images.unsplash.com/photo-1581362716668-504605a9bd6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Building className="h-10 w-10 text-blue-600" />,
      title: "Corporate Offices",
      description: "Secure entry using Aadhaar & Bluetooth beacons for employees and visitors.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Landmark className="h-10 w-10 text-blue-600" />,
      title: "Government Buildings",
      description: "Controlled access for officials & employees with highest security standards.",
      image: "https://images.unsplash.com/photo-1523430410476-0185cb1f6ff9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Award className="h-10 w-10 text-blue-600" />,
      title: "Event Security",
      description: "Identity-based access control for VIP events and high-security gatherings.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Ticket className="h-10 w-10 text-blue-600" />,
      title: "Stadiums & Public Venues",
      description: "Ensuring secure entry & preventing unauthorized access at large public gatherings.",
      image: "https://images.unsplash.com/photo-1520342868574-5fa3804e551c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="applications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Where This Can Be Used</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our beacon-based security system has applications across various sectors requiring secure access control.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <AnimatedSection 
              key={index} 
              className="h-full"
              delay={index * 0.1}
            >
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 h-full"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={app.image} 
                    alt={app.title} 
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-bold">{app.title}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className="bg-blue-50 p-2 rounded-full mr-3"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {app.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-800">{app.title}</h3>
                  </div>
                  <p className="text-gray-600">{app.description}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;