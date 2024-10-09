"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useDispatch } from "react-redux"; // Import useDispatch
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast, ToastContainer } from 'react-toastify'; // Import Toast components
import { FaGoogle, FaFacebook } from 'react-icons/fa'; // Import icons
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import {  RegisterUser, LoginUser } from '../redux/action/user'; 

const SignInPage = () => {
   const [isSignIn, setIsSignIn] = useState(true); // State to toggle between SignIn and SignUp
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [FullName, setFullName] = useState(""); // For SignUp
   const dispatch = useDispatch(); // Use dispatch hook
   const navigate = useNavigate(); // Use navigate hook

   const toggleForm = () => {
      setIsSignIn(!isSignIn);
   };

   const handleSignInSuccess = () => {
      toast.success("Successfully signed in!", { position: "top-right" }); // Show success toast
      navigate("/menu"); // Navigate to /menu on successful sign-in
   };

   const handleGoogleLogin = () => {
      toast.info("Google login is currently not implemented.", { position: "top-right" });
   };

   const handleFacebookLogin = () => {
      toast.info("Facebook login is currently not implemented.", { position: "top-right" });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const userData = { email, password, ...(isSignIn ? {} : { FullName }) }; // Include FullName only if signing up

      try {
         if (isSignIn) {
            // Sign in logic
            await dispatch(LoginUser(userData));
            handleSignInSuccess(); 
         } else {
            // Sign up logic
            await dispatch(RegisterUser(userData)); // Dispatch register action
            toast.success("Account created successfully!", { position: "top-right" });
            setIsSignIn(true);
            
         }
      } catch (error) {
         toast.error(error.response?.data?.message || "An error occurred.", { position: "top-right" });
      }
   };

   return (
      <>
         <Navbar />

         <section className="bg-gray-100 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
               <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                  <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md bg-white p-10">
                     <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl mb-6">
                        {isSignIn ? "Sign in" : "Create Account"}
                     </h2>

                     <p className="mt-2 text-sm text-gray-600">
                        {isSignIn ? (
                           <>Don&apos;t have an account?{" "}
                              <button
                                 onClick={toggleForm}
                                 className="font-semibold text-blue-500 transition-all duration-200 hover:underline">
                                 Create a free account
                              </button>
                           </>
                        ) : (
                           <>Already have an account?{" "}
                              <button
                                 onClick={toggleForm}
                                 className="font-semibold text-blue-500 transition-all duration-200 hover:underline">
                                 Sign in
                              </button>
                           </>
                        )}
                     </p>

                     <div className="mt-5">
                        <form onSubmit={handleSubmit} className="space-y-4">
                           {!isSignIn && (
                              <input
                                 type="text"
                                 placeholder="Full Name"
                                 value={FullName}
                                 onChange={(e) => setFullName(e.target.value)}
                                 className="w-full bg-gray-200 p-3 rounded-lg"
                                 required
                              />
                           )}
                           <input
                              type="email"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full bg-gray-200 p-3 rounded-lg"
                              required
                           />
                           <input
                              type="password"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="w-full bg-gray-200 p-3 rounded-lg"
                              required
                           />
                           <button
                              type="submit"
                              className="w-full bg-black text-white rounded-lg p-3 hover:bg-gray-800 transition-all duration-200">
                              {isSignIn ? "Sign In" : "Sign Up"}
                           </button>
                        </form>
                     </div>

                     <div className="flex items-center justify-center mt-4">
                        <div className="w-full " />
                        <span className="absolute bg-white px-4 text-gray-600">or</span>
                     </div>

                     <div className="flex justify-between mt-4">
                        <button 
                           onClick={handleGoogleLogin} 
                           className="flex items-center justify-center w-full bg-black text-white rounded-lg p-3 hover:bg-gray-800 transition-all duration-200 mr-2">
                           <FaGoogle className="mr-2 text-white" />
                           Login with Google
                        </button>
                        <button 
                           onClick={handleFacebookLogin} 
                           className="flex items-center justify-center w-full bg-black text-white rounded-lg p-3 hover:bg-gray-800 transition-all duration-200 ml-2">
                           <FaFacebook className="mr-2 text-white" />
                           Login with Facebook
                        </button>
                     </div>
                  </div>
               </div>
               <div className="w-full h-full">
                  <img
                     className="object-cover w-full h-full mx-auto rounded-md"
                     src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                     alt="Login illustration"
                  />
               </div>
            </div>
         </section>

         <Footer />
         <ToastContainer /> {/* Add ToastContainer for displaying toast messages */}
      </>
   );
};

export default SignInPage;
