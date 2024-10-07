import React from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
   return (
      <section className="px-4 py-10 mx-auto max-w-7xl ">
         <div>
            <div className="max-w-3xl mx-auto lg:text-center">
               <h2 className="text-3xl font-bold text-black lg:leading-tight sm:text-4xl lg:text-5xl">
                  Frequently Asked{" "}
                  <span className="font-serif text-yellow">Questions</span>
               </h2>
            </div>
            <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 md:mt-16 md:grid-cols-2">
               <div>
                  <h2 className="text-xl font-semibold text-black">
                     What is your return policy?
                  </h2>
                  <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                     We offer a hassle-free return policy within 30 days of
                     purchase. Items must be in their original condition and
                     packaging for a full refund or exchange.
                  </p>
               </div>
               <div>
                  <h2 className="text-xl font-semibold text-black">
                     Do you offer size guides?
                  </h2>
                  <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                     Yes, we provide a size guide on each product page to help
                     you find the perfect fit. If you’re between sizes, we
                     recommend sizing up for comfort.
                  </p>
               </div>
               <div>
                  <h2 className="text-xl font-semibold text-black">
                     How can I track my order?
                  </h2>
                  <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                     After placing your order, you will receive a confirmation
                     email with a tracking link. You can also track your order
                     on our website under the Order Status section.
                  </p>
               </div>
               <div>
                  <h2 className="text-xl font-semibold text-black">
                     Can I customize my order?
                  </h2>
                  <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                     Yes, we offer customization options for certain items. You
                     can add special instructions during the checkout process.
                     Please check the product description for availability.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default FAQ;
