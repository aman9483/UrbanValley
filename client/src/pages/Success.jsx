import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Success = () => {
   // Success page loading Time
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 3000);
   }, []);
   return (
      <div className="flex items-center justify-center h-screen">
         {loading ? (
            <PropagateLoader color="#ffb703" />
         ) : (
            <div className="text-center ">
               <h1 className="mb-2 text-xl font-semibold text-yellow">
                  Order Successful!
               </h1>
               <p className="text-sm lg:text-lg">
                  Your Order has been Successfully placed
               </p>
            </div>
         )}
      </div>
   );
};

export default Success;
