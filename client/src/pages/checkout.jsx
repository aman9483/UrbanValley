import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './form.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BillingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Billing details submitted successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (

    <motion.div
      className="container mx-auto px-4 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >

<Navbar/>


      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white p-10 shadow-lg rounded-xl space-y-8"
      >
        {/* Full Name */}
        <div className="w-full">
          <label className="block text-lg font-medium text-gray-700">
            Full Name
          </label>
          <motion.input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full mt-2 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="John Doe"
            required
            whileFocus={{ scale: 1.05 }}
          />
        </div>

        {/* Email */}
        <div className="w-full">
          <label className="block text-lg font-medium text-gray-700">
            Email Address
          </label>
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full mt-2 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="johndoe@example.com"
            required
            whileFocus={{ scale: 1.05 }}
          />
        </div>

        {/* Phone */}
        <div className="w-full">
          <label className="block text-lg font-medium text-gray-700">
            Phone Number
          </label>
          <motion.input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full mt-2 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="+91 1234567890"
            required
            whileFocus={{ scale: 1.05 }}
          />
        </div>

        {/* Address */}
        <div className="w-full">
          <label className="block text-lg font-medium text-gray-700">
            Address
          </label>
          <motion.textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full mt-2 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="1234, Elm Street"
            rows="3"
            required
            whileFocus={{ scale: 1.05 }}
          />
        </div>

        {/* City & State */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <label className="block text-lg font-medium text-gray-700">
              City
            </label>
            <motion.input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full mt-2 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="City"
              required
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          <div className="w-full">
            <label className="block text-lg font-medium text-gray-700">
              State
            </label>
            <motion.input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full mt-2 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="State"
              required
              whileFocus={{ scale: 1.05 }}
            />
          </div>
        </div>

        {/* Zip Code & Country */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <label className="block text-lg font-medium text-gray-700">
              Pin Code
            </label>
            <motion.input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              className="w-full mt-2 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="123456"
              required
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          <div className="w-full">
            <label className="block text-lg font-medium text-gray-700">
              Country
            </label>
            <motion.input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full mt-2 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="India"
              required
              whileFocus={{ scale: 1.05 }}
            />
          </div>
        </div>

        <motion.button
          type="submit"
          className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300 ease-in-out btn"
          whileHover={{ scale: 1.02 }}
        >
          Continue
        </motion.button>
      </form>

      <Footer/>

      <ToastContainer />
    </motion.div>
  );
};

export default BillingForm;
