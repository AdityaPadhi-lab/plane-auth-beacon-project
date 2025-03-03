import React, { useState, useEffect } from 'react';
import { Radio, Smartphone, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const BeaconSimulator = () => {
  const [step, setStep] = useState(0);
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');
  const [isBeaconActive, setIsBeaconActive] = useState(false);

  // Simulate beacon activation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBeaconActive(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Validate Aadhaar number (simple validation for demo)
  const validateAadhaar = (value: string) => {
    return /^\d{12}$/.test(value);
  };

  // Handle Aadhaar submission
  const handleAadhaarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateAadhaar(aadhaarNumber)) {
      setError('Please enter a valid 12-digit Aadhaar number');
      return;
    }
    
    setError('');
    setStep(1);
    
    // Auto-generate OTP for demo
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log('Generated OTP:', generatedOtp);
  };

  // Handle OTP verification
  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }
    
    setError('');
    setStep(2);
    
    // Simulate fingerprint verification
    setTimeout(() => {
      setIsVerified(true);
      setStep(3);
    }, 2000);
  };

  // Reset the simulator
  const resetSimulator = () => {
    setStep(0);
    setAadhaarNumber('');
    setOtp('');
    setIsVerified(false);
    setError('');
    setIsBeaconActive(false);
    
    // Reactivate beacon after reset
    setTimeout(() => {
      setIsBeaconActive(true);
    }, 2000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Interactive Demo</h3>
        <p className="text-gray-600">Experience the authentication process</p>
      </div>
      
      {/* Beacon Status */}
      <div className="flex items-center justify-center space-x-4 py-3 bg-blue-50 rounded-lg mb-6">
        <motion.div
          animate={{ scale: isBeaconActive ? [1, 1.2, 1] : 1 }}
          transition={{ repeat: isBeaconActive ? Infinity : 0, duration: 2 }}
        >
          <Radio className={`h-8 w-8 ${isBeaconActive ? 'text-blue-600' : 'text-gray-400'}`} />
        </motion.div>
        <div className="text-gray-800">
          <p className="font-semibold">
            {isBeaconActive ? 'Beacon Active' : 'Beacon Inactive'}
          </p>
          <p className="text-sm text-gray-600">
            {isBeaconActive ? 'Authentication Ready' : 'Waiting for beacon...'}
          </p>
        </div>
      </div>
      
      {/* Step Indicators */}
      <div className="flex justify-between mb-8">
        {[0, 1, 2, 3].map((index) => (
          <div key={index} className="flex flex-col items-center">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step > index 
                  ? 'bg-green-500 text-white' 
                  : step === index 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
              }`}
            >
              {step > index ? <Check size={16} /> : index + 1}
            </div>
            <span className="text-xs mt-1 text-gray-500">
              {index === 0 ? 'Aadhaar' : 
               index === 1 ? 'OTP' : 
               index === 2 ? 'Biometric' : 'Complete'}
            </span>
          </div>
        ))}
      </div>
      
      {/* Error Message */}
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 flex items-center">
          <X size={16} className="mr-2" />
          {error}
        </div>
      )}
      
      {/* Step 0: Aadhaar Entry */}
      {step === 0 && isBeaconActive && (
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleAadhaarSubmit}
        >
          <div className="mb-4">
            <label htmlFor="aadhaar" className="block text-sm font-medium text-gray-700 mb-1">
              Enter Aadhaar Number
            </label>
            <input
              type="text"
              id="aadhaar"
              value={aadhaarNumber}
              onChange={(e) => setAadhaarNumber(e.target.value.replace(/\D/g, '').slice(0, 12))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="12-digit Aadhaar number"
              maxLength={12}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
          >
            Continue
          </button>
        </motion.form>
      )}
      
      {/* Step 1: OTP Verification */}
      {step === 1 && (
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleOtpSubmit}
        >
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                Enter OTP
              </label>
              <span className="text-xs text-blue-600">Sent to linked mobile</span>
            </div>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="6-digit OTP"
              maxLength={6}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
          >
            Verify OTP
          </button>
        </motion.form>
      )}
      
      {/* Step 2: Fingerprint Verification */}
      {step === 2 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-6">
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mx-auto w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center"
            >
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Smartphone size={48} className="text-blue-600" />
              </motion.div>
            </motion.div>
            <p className="mt-4 text-gray-700">
              Please place your finger on the scanner
            </p>
            <p className="text-sm text-gray-500">
              Verifying biometric data...
            </p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
              className="bg-blue-600 h-2 rounded-full"
            />
          </div>
        </motion.div>
      )}
      
      {/* Step 3: Verification Complete */}
      {step === 3 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4"
          >
            <Check size={40} className="text-green-600" />
          </motion.div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Verification Successful
          </h3>
          <p className="text-gray-600 mb-6">
            You have been authenticated successfully
          </p>
          <button
            onClick={resetSimulator}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
          >
            Try Again
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default BeaconSimulator;