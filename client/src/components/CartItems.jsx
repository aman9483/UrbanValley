import React from "react";
import { useDispatch } from "react-redux";
import { Trash } from "lucide-react";
import { AiFillStar } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";

import {
   removeFromCart,
   incrementQty,
   decrementQty,
} from "../redux/slices/CartSlice";

const CartItems = ({ id, img, name, price, rating, qty }) => {
   const dispatch = useDispatch();

   return (
      <div>
         <ul
            id={id}
            className="flex flex-col px-4 scale-90 shadow-md lg:pr-6 lg:scale-100 lg:px-6 rounded-2xl">
            <li className="flex flex-col py-3 sm:flex-row sm:justify-between ">
               <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                     className="flex-shrink-0 object-contain w-20 h-20 rounded outline-none dark:border-transparent sm:h-32 sm:w-32 "
                     src={img}
                     alt=""
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                     <div className="flex justify-between w-full space-x-2 ">
                        <div className="space-y-1">
                           <h3 className="font-semibold leading-snug lg:text-lg sm:pr-8">
                              {name}
                           </h3>
                        </div>
                        <div className="text-right">
                           <p className="font-semibold lg:text-lg text-yellow">
                              ₹{price}
                           </p>
                        </div>
                     </div>
                     <div className="flex items-center font-bold ">
                        <AiFillStar className="mr-1 text-base text-yellow lg:text-lg" />
                        {rating}
                     </div>

                     {/* Remove from Cart */}
                     <div className="flex justify-between text-sm ">
                        <button
                           onClick={() =>
                              dispatch(
                                 removeFromCart({ id, img, name, price, qty })
                              )
                           }
                           type="button"
                           className="flex items-center px-2 py-1 pl-0 space-x-2">
                           <Trash size={16} />
                           <span>Remove</span>
                        </button>

                        {/* Decrement item qty  */}
                        <span className="flex items-center gap-2 ">
                           <span className="px-1 py-1 rounded-full shadow-xl cursor-pointer bg-yellow">
                              <FaMinus
                                 onClick={() =>
                                    qty > 1
                                       ? dispatch(decrementQty({ id }))
                                       : (qty = 0)
                                 }
                              />
                           </span>

                           {/* Increment item qty  */}
                           <span className="font-semibold ">{qty}</span>
                           <span className="px-1 py-1 rounded-full shadow-xl cursor-pointer bg-yellow">
                              <FaPlus
                                 onClick={() =>
                                    qty >= 1
                                       ? dispatch(incrementQty({ id }))
                                       : (qty = 0)
                                 }
                              />
                           </span>
                        </span>
                     </div>
                  </div>
               </div>
            </li>
         </ul>
      </div>
   );
};

export default CartItems;
