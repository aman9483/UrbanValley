import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai"; // Import cart icon
import { useDispatch, useSelector } from "react-redux"; // Import hooks for Redux
import { addToCart, removeFromCart } from "../redux/slices/cartSlice"; // Ensure this path is correct
import { toast } from 'react-toastify'; // Correct import for toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import './cloth.css'; // Ensure you have the necessary CSS for styling

const FoodCard = ({ id, name, price, desc, img, rating, sizes }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); // State to manage loading
  const [selectedSize, setSelectedSize] = useState(""); // State for selected size
  const [showSizeDropdown, setShowSizeDropdown] = useState(false); // State to manage dropdown visibility

  // Use useSelector to check if the item is in the cart
  const cartItems = useSelector((state) => state.cart.cart);
  const isInCart = cartItems.some((item) => item.id === id); // Check if the item is in the cart

  // Effect to add to cart automatically when size is selected
  useEffect(() => {
    if (selectedSize && !isInCart) {
      handleAddToCart();
    }
  }, [selectedSize]); // Dependency on selectedSize

  const handleAddToCart = async () => {
    if (!selectedSize) {
      toast.warn("Please select a size before adding to cart.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    setLoading(true); // Set loading state to true

    try {
      await dispatch(addToCart({ id, name, price, rating, img, qty: 1, size: selectedSize }));
      toast.success(`${name} successfully added to cart!`, {
        position: toast.POSITION.TOP_RIGHT,
      }); // Show success toast notification
      setShowSizeDropdown(false); // Close dropdown after adding to cart
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add to cart."); // Show error toast notification
    } finally {
      setLoading(false); // Reset loading state
      setSelectedSize(""); // Reset selected size
    }
  };

  const handleRemoveFromCart = async () => {
    setLoading(true); // Set loading state to true

    try {
      await dispatch(removeFromCart({ id }));
      toast.info(`${name} removed from cart!`, {
        position: toast.POSITION.TOP_RIGHT,
      }); // Show info toast notification
    } catch (error) {
      console.error("Error removing from cart:", error);
      toast.error("Failed to remove from cart."); // Show error toast notification
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="font-bold w-[300px] bg-white p-5 flex flex-col rounded-2xl gap-2 shadow-lg transition-transform duration-300 transform hover:scale-105 min-h-[450px]">
      <img
        src={img}
        alt={name}
        className="w-full h-[350px] object-cover rounded-lg mb-2 transition-transform duration-300 transform hover:scale-110"
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

        {/* Size selection dropdown */}
        {showSizeDropdown && (
          <div className="relative">
            {Array.isArray(sizes) && sizes.length > 0 && (
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="p-1 border border-gray-300 rounded bg-white text-gray-700"
              >
                <option value="">Select Size</option>
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            )}
          </div>
        )}

        {/* Add to Cart or Remove from Cart button */}
        <div className="flex gap-2">
          {loading ? (
            <div className="loader w-6 h-6 rounded-full border-4 border-t-transparent border-yellow-500 animate-spin" />
          ) : isInCart ? (
            <button
              onClick={handleRemoveFromCart}
              className="p-1 text-sm text-black bg-red-500 hover:bg-red-600 transition duration-300 flex items-center rounded"
            >
              Remove from cart
            </button>
          ) : (
            <button
              onClick={() => setShowSizeDropdown(!showSizeDropdown)} // Toggle size dropdown on button click
              className="p-1 text-sm text-black bg-yellow-400 hover:bg-yellow-600 transition duration-300 flex items-center rounded"
            >
              <AiOutlineShoppingCart className="mr-1" /> Add to cart
            </button>
          )}
        </div>
      </div>

      {showSizeDropdown && !isInCart && (
        <button
          onClick={handleAddToCart}
          className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Confirm Size and Add to Cart
        </button>
      )}
    </div>
  );
};

// Set default sizes
FoodCard.defaultProps = {
  sizes: ['S', 'M', 'L', 'XL'], // Default sizes
};

export default FoodCard;
