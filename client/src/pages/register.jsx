import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/action/user";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import UserIcon from '../assets/user-solid.svg';
import PasswordIcon from '../assets/lock-solid.svg';
import EmailIcon from '../assets/email.svg';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import FoodCard from "../components/ClotingCard";
import Footer from "../components/Footer";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    FullName: "",
    email: "",
    password: "",
  });

  const { FullName, email, password } = user;

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("FullName", FullName);
    myForm.set("email", email);
    myForm.set("password", password);

    const response = await dispatch(register(myForm));

    if (response.success) {
      toast.success("Registration successful! You can now log in.", {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      navigate("/login"); // Navigate to login page on successful registration
    } else {
      toast.error(response.message || "Registration failed", {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };

  return (
    <>

    <Navbar/>
 
      <motion.div 
        className="flex items-center justify-center h-screen bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <h2 className="text-3xl font-extrabold text-center text-gray-800">Create Your Account</h2>
          <p className="text-center text-gray-500">Join us and start your journey!</p>
          
          <form onSubmit={registerSubmit} className="space-y-4">
            {/* Name Input */}
            <motion.div 
              className="flex items-center py-2"
              whileHover={{ scale: 1.05 }}
            >
              <img src={UserIcon} alt="user" className="w-6 h-6 mr-3 text-gray-500" />
              <input
                type="text"
                placeholder="Full Name"
                name="FullName"
                value={FullName}
                onChange={registerDataChange}
                required
                className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div 
              className="flex items-center py-2"
              whileHover={{ scale: 1.05 }}
            >
              <img src={EmailIcon} alt="email" className="w-6 h-6 mr-3 text-gray-500" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={registerDataChange}
                required
                className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200"
              />
            </motion.div>

            {/* Password Input */}
            <motion.div 
              className="flex items-center py-2"
              whileHover={{ scale: 1.05 }}
            >
              <img src={PasswordIcon} alt="password" className="w-6 h-6 mr-3 text-gray-500" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={registerDataChange}
                required
                className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.input
              type="submit"
              value="Register"
              className="w-full px-4 py-2 font-bold text-black bg-blue-600 rounded-lg transition duration-300 hover:bg-blue-500 focus:outline-none cursor-pointer"
              whileHover={{ scale: 1.02 }}
            />
          </form>

          {/* Login Link */}
          <p className="mt-4 text-center text-gray-500">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
        </motion.div>
      </motion.div>
      <ToastContainer position="top-right" />

      <Footer/>
    </>
  );
};

export default Register;
