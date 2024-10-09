import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Info, List } from "lucide-react"; // Icons for menu items
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
   const menuItems = [
      {
         name: "Home",
         href: "/",
         icon: <Home className="w-5 h-5" />, // Home Icon
      },
      {
         name: "About",
         href: "/about",
         icon: <Info className="w-5 h-5" />, // About Icon
      },
      {
         name: "Shop",
         href: "/menu",
         icon: <List className="w-5 h-5" />, // Menu Icon
      },
   ];

   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   const [cartCount, setCartCount] = React.useState(0); 

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <div className="relative w-full px-4 bg-white shadow-sm">
         <div className="flex items-center justify-between py-2 mx-auto max-w-7xl sm:px-6 lg:px-10">
            {/* Brand Logo */}
            <Link to={"/"}>
               <div className="inline-flex items-center space-x-2">
                  <h1 className="text-2xl font-bold lg:text-3xl">
                     Urban<span className="font-serif text-yellow">Valley</span>
                  </h1>
               </div>
            </Link>

            {/* Desktop Menu Items */}
            <div className="items-start hidden grow lg:flex">
               <ul className="inline-flex space-x-8 ml-52">
                  {menuItems.map((item) => (
                     <li key={item.name}>
                        <Link
                           to={item.href}
                           className="flex items-center space-x-2 text-xl font-semibold text-gray-800 transition-all ease-in-out duration-400 hover:text-yellow-500"
                        >
                           {item.icon}
                           <span className="hidden md:inline">{item.name}</span>
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Cart Icon with Counter */}
            <Link to={"/cart"} className="relative mx-4"> {/* Added margin for spacing */}
               <FaShoppingCart className="text-2xl text-gray-800 hover:text-yellow-500 transition duration-300" />
               {cartCount > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 text-xs text-white bg-red-500 rounded-full flex items-center justify-center">
                     {cartCount}
                  </span>
               )}
            </Link>

            {/* User Profile Button or Sign In Button */}
            <div className="hidden lg:block">
               <Link to={"/signIn"}>
                  <button
                     type="button"
                     className="w-full px-3 py-2 text-sm font-semibold text-black rounded-md shadow-sm bg-yellow-500 hover:bg-black/80 hover:text-white transition duration-300"
                  >
                     Sign in
                  </button>
               </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden">
               <Menu onClick={toggleMenu} className="w-6 h-6 cursor-pointer text-gray-800" />
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
               <div className="absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform lg:hidden">
                  <div className="bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
                     <div className="px-5 pt-5 pb-6">
                        <div className="flex items-center justify-between">
                           <button
                              type="button"
                              onClick={toggleMenu}
                              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500"
                           >
                              <span className="sr-only">Close menu</span>
                              <X className="w-6 h-6" aria-hidden="true" />
                           </button>
                        </div>

                        {/* Mobile Menu Links */}
                        <div className="mt-6">
                           <nav className="grid gap-y-4">
                              {menuItems.map((item) => (
                                 <Link
                                    key={item.name}
                                    to={item.href}
                                    className="flex items-center p-3 -m-3 text-sm font-semibold rounded-md hover:bg-gray-50"
                                 >
                                    {item.icon}
                                    <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                 </Link>
                              ))}
                           </nav>
                        </div>

                        {/* Sign In Button for Mobile View */}
                        <div className="mt-4">
                           <Link to={"/signIn"}>
                              <button
                                 type="button"
                                 className="w-full px-3 py-2 text-sm font-semibold text-black rounded-md shadow-sm bg-yellow-500 hover:bg-black/80 hover:text-white transition duration-300"
                              >
                                 Sign in
                              </button>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default Navbar;
