import React from "react";
import { ShoppingBag, Heart, Truck, Filter } from "lucide-react"; // Update to relevant icons

const Features = () => {
   return (
      <div className="px-4 py-5 mx-auto my-10 max-w-7xl sm:px-6 lg:px-8">
         <div className="max-w-xl mx-auto text-center">
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
               Fashion Hub helps you find
               <span className="font-serif text-yellow"> Trendy </span>
               Clothing
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
               Discover your style and elevate your wardrobe with Fashion Hub. 
               We're not just helping you find trendy clothing; we're making 
               your shopping experience seamless and enjoyable. Join us for a 
               fashionable journey like no other.
            </p>
         </div>
         <div className="grid grid-cols-1 p-4 mt-12 mb-6 text-center shadow-xl gap-y-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 rounded-2xl bg-gray">
            <div>
               <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full">
                  <ShoppingBag className="text-gray-700 h-9 w-9" />
               </div>
               <h3 className="mt-8 text-lg font-semibold text-black">
                  Quality Products
               </h3>
               <p className="mt-4 text-sm text-gray-600">
                  Shop confidently with our high-quality clothing that stands out 
                  in both style and comfort.
               </p>
            </div>
            <div>
               <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full">
                  <Heart className="text-gray-700 h-9 w-9" />
               </div>
               <h3 className="mt-8 text-lg font-semibold text-black">
                  Personalized Style
               </h3>
               <p className="mt-4 text-sm text-gray-600">
                  Explore a wide range of styles tailored to your taste and preference.
               </p>
            </div>
            <div>
               <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full">
                  <Truck className="text-gray-700 h-9 w-9" />
               </div>
               <h3 className="mt-8 text-lg font-semibold text-black">
                  Fast Delivery
               </h3>
               <p className="mt-4 text-sm text-gray-600">
                  Get your favorite outfits delivered quickly to your doorstep. 
                  We value your time and style.
               </p>
            </div>
            <div>
               <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full">
                  <Filter className="text-gray-700 h-9 w-9" />
               </div>
               <h3 className="mt-8 text-lg font-semibold text-black">
                  Filter Your Style
               </h3>
               <p className="mt-4 text-sm text-gray-600">
                  Customize your shopping experience with our advanced filtering 
                  options to find exactly what you need.
               </p>
            </div>
         </div>
      </div>
   );
};

export default Features;
