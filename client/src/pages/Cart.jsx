import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import Navbar from "../components/Navbar";
import CartItems from "../components/CartItems";
import Footer from "../components/Footer";
import { Scrollbars } from "react-custom-scrollbars-2";
import { motion } from "framer-motion";
import { toast } from "react-toastify"; // Import toast for notifications
import "../components/cloth.css";

const Cart = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const cartItemsFromRedux = useSelector((state) => state.cart.cart || []); // Get cart items from Redux store
  const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || []; // Get cart items from local storage
  const cartItems = cartItemsFromRedux.length > 0 ? cartItemsFromRedux : cartItemsFromLocalStorage; // Use Redux cart items or local storage if Redux is empty
  const isLoggedIn = useSelector((state) => state.userAuth.user.isActive); 

  // Calculate total price
  const totalPrice = cartItems.length
    ? cartItems.reduce((total, item) => total + item.qty * item.price, 0)
    : 0;

  const handleCheckout = () => {
    if (!isLoggedIn) {
      toast.info("Please log in to proceed to checkout.", {
        position: "TOP_RIGHT",
        autoClose: 3000, 
      });
      navigate("/login"); 
    } else {
      alert("Proceeding to checkout...");
    }
  };

  return (
    <>
      <Navbar />

      <motion.div 
        className="flex flex-col max-w-3xl mx-auto space-y-4 p-5 sm:p-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold">Your Cart</h2>
          <p className="mt-2 text-sm font-medium text-gray-700">
            Add your items to the cart and place your order.
          </p>
        </div>

        {/* Cart Items */}
        <div className="relative w-full">
          <Scrollbars style={{ height: 350 }}>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItems
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                  rating={item.rating}
                  qty={item.qty}
                />
              ))
            ) : (
              <h1 className="flex justify-center text-3xl font-bold">
                Your cart is empty!
              </h1>
            )}
          </Scrollbars>
        </div>

        <div className="px-4 md:px-8">
          {/* Total Price */}
          <div className="space-y-1 text-right md:my-2">
            <p className="text-lg">
              Total amount:
              <span className="font-bold text-yellow-600"> ₹{totalPrice.toFixed(2)}</span>
            </p>
          </div>
          <motion.button
            className="w-full mt-4 bg-yellow-500 text-black p-2 rounded-md shadow-md hover:bg-yellow-600 transition duration-300 btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCheckout} // Call handleCheckout on button click
            disabled={cartItems.length === 0}
          >
            Checkout
          </motion.button>
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default Cart;
