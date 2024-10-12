import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/action/user";
import { motion } from "framer-motion";
import PasswordIcon from '../assets/lock-solid.svg';
import EmailIcon from '../assets/email.svg';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(login(loginEmail, loginPassword));

    if (response.success) {
      navigate("/menu");
    } else {
      toast.error(response.message || "Login failed", {
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
      <Navbar />
      <motion.div 
        className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="w-full max-w-md p-10 space-y-8 bg-white shadow-2xl rounded-3xl backdrop-blur-md"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <h2 className="text-4xl font-extrabold text-center text-gray-900">Welcome Back</h2>
          <p className="text-center text-gray-500">Login to access your account</p>
          
          <form onSubmit={loginSubmit} className="space-y-6">
            {/* Email Input */}
            <motion.div 
              className="flex items-center border-b-2 border-gray-300 py-2 focus-within:border-blue-500"
              whileHover={{ scale: 1.05 }}
            >
              <img src={EmailIcon} alt="email" className="w-6 h-6 mr-3" />
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </motion.div>

            {/* Password Input */}
            <motion.div 
              className="flex items-center border-b-2 border-gray-300 py-2 focus-within:border-blue-500"
              whileHover={{ scale: 1.05 }}
            >
              <img src={PasswordIcon} alt="password" className="w-6 h-6 mr-3" />
              <input
                type="password"
                placeholder="Enter your password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </motion.div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <Link to="/password/forgot" className="text-sm text-indigo-500 hover:text-indigo-700">
                Forgot your password?
              </Link>
            </div>

            {/* Submit Button */}
            <motion.input
              type="submit"
              value="Login"
              className="w-full px-5 py-3 text-black font-semibold bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-500 hover:to-pink-400 rounded-full transition duration-300"
              whileHover={{ scale: 1.02 }}
            />
          </form>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-500">
              Dont have an account?{" "}
              <Link to="/register" className="text-indigo-500 hover:text-indigo-700 font-semibold">
                Register
              </Link>
            </p>
          </div>
        </motion.div>
      </motion.div>
      
      <ToastContainer position="top-right" />

      <Footer />
    </>
  );
};

export default Login;
