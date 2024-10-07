import React from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Error = () => {
   return (
      <>
         <Navbar />

         <div className="flex items-center justify-center px-2 my-12 md:my-24 md:px-0">
            <div className="lg:flex lg:items-center lg:space-x-10">
               <img
                  src="https://illustrations.popsy.co/white/resistance-band.svg"
                  alt="question-mark"
                  className="h-[300px] w-auto"
               />
               <div>
                  <p className="mt-6 text-sm font-semibold text-black">
                     404 error
                  </p>
                  <h1 className="mt-3 text-2xl font-semibold text-yellow md:text-3xl">
                     We can&apos;t find that page
                  </h1>
                  <p className="mt-4 text-gray-500">
                     Sorry, the page you are looking for doesn&apos;t exist or
                     has been moved.
                  </p>
                  <div className="flex items-center mt-6 space-x-3">
                     <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 text-sm font-semibold text-black border border-black rounded-md shadow-sm ">
                        <ArrowLeft size={16} className="mr-2" />
                        Go back
                     </button>
                     <button
                        type="button"
                        className="px-3 py-2 text-sm font-semibold text-black rounded-md shadow-sm bg-yellow hover:bg-black/80 hover:text-white ">
                        Contact us
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
};

export default Error;
