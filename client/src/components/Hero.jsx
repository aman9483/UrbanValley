import React from "react";
import { motion } from "framer-motion";
import HeroLogo from "../assets/hero_img.jpg"; // Replace with your image path

const Hero = () => {
  return (
    <div className="relative bg-gray-50 w-full overflow-hidden pb-16">
      {/* Grid Background Animation */}
      <motion.div
        className="absolute grid grid-cols-4 gap-4 w-full h-full top-0 left-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
      >
        {[...Array(12)].map((_, index) => (
          <motion.div
            key={index}
            className="w-20 h-20 bg-indigo-100 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: [0.5, 1.5, 0.5], rotate: [0, 360, 0] }}
            transition={{
              duration: 4,
              delay: index * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>

      {/* Hero Container */}
      <div className="relative flex flex-col-reverse items-center justify-between md:flex-row md:space-x-6 mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-16 z-10">
        
        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-center space-y-6 text-center md:text-left z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="px-4 py-2 bg-black text-white rounded-full inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-sm font-medium">New Season Arrivals</p>
          </motion.div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Elevate Your Style with
            <span className="block font-serif text-indigo-600 mt-2">
              Fashion Avenue
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-700">
            Discover the latest trends and redefine your wardrobe with our
            exclusive collection. Unleash your style with us.
          </p>

          {/* Decorative Section Below Paragraph */}
          <motion.div
            className="mt-8 flex justify-center md:justify-start space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full" />
              <p className="text-sm text-gray-600">Unique Designs</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
              <p className="text-sm text-gray-600">Affordable Prices</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full" />
              <p className="text-sm text-gray-600">Premium Quality</p>
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex justify-center space-x-4 md:justify-start mt-8"
            whileHover={{ scale: 1.05 }}
          >
            <motion.button
              type="button"
              className="px-6 py-3 text-sm font-medium text-black bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full shadow-lg hover:from-pink-600 hover:to-yellow-600 focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Shop Now
            </motion.button>
            <motion.button
              type="button"
              className="px-6 py-3 text-sm font-medium text-black bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 rounded-full shadow-lg hover:from-green-500 hover:to-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 mt-10 md:mt-0 overflow-hidden z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={HeroLogo}
            alt="Fashion Hero"
            className="w-full h-full object-cover rounded-3xl shadow-3xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
