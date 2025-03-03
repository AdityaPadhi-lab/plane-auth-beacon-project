import React from 'react';
import { Smartphone, Shield, Fingerprint, MapPin, Building, Lock, Users, Landmark, Train, Ticket, Award, Radio } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Applications from './components/Applications';
import Stats from './components/Stats';
import BeaconSimulator from './components/BeaconSimulator';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      
      {/* Interactive Demo Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Try It Yourself</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our authentication process with this interactive demo.
            </p>
          </div>
          <BeaconSimulator />
        </div>
      </section>
      
      <Applications />
      <Stats />
      <Testimonials />
      <FAQ />
      
      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interested in implementing our beacon-based security system? Contact us today.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default App;