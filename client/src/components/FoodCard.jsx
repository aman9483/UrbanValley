// FoodCard.js
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai"; // Import cart icon
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import { motion } from "framer-motion"; // Import Framer Motion

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); // State to manage loading

  const handleAddToCart = () => {
    setLoading(true);
    dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
    handleToast(name);
    setTimeout(() => setLoading(false), 1000); // Simulate loading time
  };

  return (
    <div className="font-bold w-[300px] bg-white p-5 flex flex-col rounded-2xl gap-2 shadow-lg transition-transform duration-300 transform hover:scale-105 min-h-[450px]">
      <img
        src={img}
        alt={name}
        className="w-full h-[350px] object-cover rounded-lg mb-2 transition-transform duration-300 transform hover:scale-110" // Increased image height
      />
      <div className="flex justify-between text-sm">
        <h2 className="text-lg font-semibold">{name}</h2>
        <span className="text-lg text-yellow-500">₹{price}</span>
      </div>
      <p className="text-sm font-normal text-gray-700">{desc.slice(0, 40)}...</p>
      <div className="flex justify-between items-center">
        <span className="flex items-center justify-center text-yellow-500">
          <AiFillStar className="mr-1" /> {rating}
        </span>

        {/* Add to Cart and Buy Now */}
        <div className="flex gap-2">
          {loading ? (
            <motion.div
              className="loader w-6 h-6 rounded-full border-4 border-t-transparent border-yellow-500 animate-spin"
              // Add your loader styling here
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          ) : (
            <>
              <button
                onClick={handleAddToCart}
                className="p-1 text-sm text-white rounded-lg bg-yellow-500 hover:bg-yellow-600 transition duration-300 flex items-center"
              >
                <AiOutlineShoppingCart className="mr-1" /> Add to cart
              </button>
              <button
                onClick={() => {
                  handleToast(name); // Replace with actual buy now logic
                }}
                className="p-1 text-sm text-black rounded-lg bg-green-500 hover:bg-green-600 transition duration-300"
              >
                Buy Now
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
