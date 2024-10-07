"use client";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SignedIn, SignedOut, SignIn, SignUp, useClerk } from '@clerk/clerk-react';
import { toast, ToastContainer } from 'react-toastify'; // Import Toast components
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const SignInPage = () => {
   const [isSignIn, setIsSignIn] = useState(true); // State to toggle between SignIn and SignUp
   const navigate = useNavigate(); // Use navigate hook
   const clerk = useClerk(); // Use Clerk context

   const toggleForm = () => {
      setIsSignIn(!isSignIn);
   };

   useEffect(() => {
      // Redirect if signed in
      if (clerk.user) {
         navigate("/menu");
      }
   }, [clerk.user, navigate]); // Run effect when user state changes

   const handleSignInSuccess = () => {
      toast.success("Successfully signed in!", { position: "top-right" }); // Show success toast
      // Navigate to /menu in the effect
   };

   return (
      <>
         <Navbar />

         <section>
            <div className="grid grid-cols-1 lg:grid-cols-2">
               <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                  <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                     <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                        {isSignIn ? "Sign in" : "Create Account"}
                     </h2>
                     <p className="mt-2 text-sm text-gray-600">
                        {isSignIn ? (
                           <>Don&apos;t have an account?{" "}
                              <button
                                 onClick={toggleForm}
                                 className="font-semibold text-black transition-all duration-200 hover:underline">
                                 Create a free account
                              </button>
                           </>
                        ) : (
                           <>Already have an account?{" "}
                              <button
                                 onClick={toggleForm}
                                 className="font-semibold text-black transition-all duration-200 hover:underline">
                                 Sign in
                              </button>
                           </>
                        )}
                     </p>

                     <SignedIn>
                        <p className="text-green-500">You are signed in!</p>
                     </SignedIn>

                     <SignedOut>
                        <div className="mt-5">
                           {isSignIn ? (
                              <SignIn 
                                 appearance={{
                                    layout: {
                                       logo: <img src="your-logo-url" alt="Logo" className="h-12 mb-4" />, // Optional: Add your logo
                                       title: "Welcome Back!",
                                       primaryButton: {
                                          style: {
                                             backgroundColor: "#2563EB", // Custom background color for the primary button
                                             color: "#fff", // Text color
                                             borderRadius: "8px", // Rounded corners
                                             padding: "12px 16px", // More padding for larger button
                                             fontSize: "1.125rem", // Larger font size
                                          },
                                       },
                                    },
                                    elements: {
                                       formField: {
                                          style: {
                                             border: "1px solid #ddd", // Lighter border for input fields
                                             borderRadius: "8px", // Rounded corners
                                             padding: "15px", // Increased padding for input fields
                                             marginBottom: "12px", // Space between fields
                                          },
                                       },
                                       input: {
                                          style: {
                                             fontSize: "1rem", // Font size for input fields
                                             color: "#333", // Input text color
                                             height: "50px", // Height for a larger input field
                                          },
                                       },
                                       button: {
                                          style: {
                                             fontSize: "1rem", // Font size for buttons
                                             padding: "12px 16px", // Increased padding for buttons
                                          },
                                       },
                                    },
                                 }}
                                 onSignIn={handleSignInSuccess} // Handle sign-in success
                              />
                           ) : (
                              <SignUp
                                 appearance={{
                                    layout: {
                                       logo: <img src="your-logo-url" alt="Logo" className="h-12 mb-4" />, // Optional: Add your logo
                                       title: "Join Us!",
                                       primaryButton: {
                                          style: {
                                             backgroundColor: "#2563EB", // Custom background color for the primary button
                                             color: "#fff", // Text color
                                             borderRadius: "8px", // Rounded corners
                                             padding: "12px 16px", // More padding for larger button
                                             fontSize: "1.125rem", // Larger font size
                                          },
                                       },
                                    },
                                    elements: {
                                       formField: {
                                          style: {
                                             border: "1px solid #ddd", // Lighter border for input fields
                                             borderRadius: "8px", // Rounded corners
                                             padding: "15px", // Increased padding for input fields
                                             marginBottom: "12px", // Space between fields
                                          },
                                       },
                                       input: {
                                          style: {
                                             fontSize: "1rem", // Font size for input fields
                                             color: "#333", // Input text color
                                             height: "50px", // Height for a larger input field
                                          },
                                       },
                                       button: {
                                          style: {
                                             fontSize: "1rem", // Font size for buttons
                                             padding: "12px 16px", // Increased padding for buttons
                                          },
                                       },
                                    },
                                 }}
                              />
                           )}
                        </div>
                     </SignedOut>
                  </div>
               </div>
               <div className="w-full h-full">
                  <img
                     className="object-cover w-full h-full mx-auto rounded-md"
                     src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                     alt=""
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
