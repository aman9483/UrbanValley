import React from 'react';
import { motion } from 'framer-motion';
import {
  FaShippingFast,
  FaMoneyBillWave,
  FaHeadset,
  FaRecycle,
  FaLock,
  FaGift,
} from 'react-icons/fa'; // Import icons

const servicesData = [
  {
    icon: <FaShippingFast size={40} className="text-indigo-500" />,
    title: 'Fast Shipping',
    description: 'Get your orders delivered within 2-3 business days.',
  },
  {
    icon: <FaMoneyBillWave size={40} className="text-green-500" />,
    title: 'Money-Back Guarantee',
    description: '100% money-back guarantee within 30 days of purchase.',
  },
  {
    icon: <FaHeadset size={40} className="text-yellow-500" />,
    title: '24/7 Customer Support',
    description: 'Reach us anytime, day or night, for support.',
  },
  {
    icon: <FaRecycle size={40} className="text-teal-500" />,
    title: 'Sustainable Fashion',
    description: 'Eco-friendly materials and sustainable production methods.',
  },
  {
    icon: <FaLock size={40} className="text-red-500" />,
    title: 'Secure Payments',
    description: 'Your transactions are safe and secure with us.',
  },
  {
    icon: <FaGift size={40} className="text-pink-500" />,
    title: 'Exclusive Offers',
    description: 'Access special discounts and promotions.',
  },
];

const Services = () => {
  return (
    <motion.div 

    initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
    
    
    className="py-16 bg-gray-100"> {/* Grey background */}
       <span className="flex items-center justify-center lg:w-full lg:h[100vw] lg:my-14">
               <h1 className="text-2xl font-bold lg:text-5xl">
                  Our <span className="font-serif text-yellow">Best</span>{" "}
                  Services
               </h1>
            </span>
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Service Icon */}
              <div className="mb-4">{service.icon}</div>
              {/* Service Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              {/* Service Description */}
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
