import React from "react";

const Footer = () => {
   return (
      <div className="relative py-8 overflow-hidden bg-orange-200"> {/* Changed footer background color */}
         <div className="container relative z-10 px-4 mx-auto">
            <div className="flex flex-wrap items-center justify-between -m-8">
               <div className="w-auto p-8">
                  <a href="#">
                     <div className="inline-flex items-center">
                        <span className="ml-4 text-lg font-bold">
                           Urban<span className="text-yellow">Valley</span>
                        </span>
                     </div>
                  </a>
               </div>
               <div className="w-auto p-8">
                  <ul className="flex flex-wrap items-center -m-5">
                     <li className="p-5">
                        <a
                           className="font-medium text-gray-600 hover:text-gray-700"
                           href="#">
                           Privacy Policy
                        </a>
                     </li>
                     <li className="p-5">
                        <a
                           className="font-medium text-gray-600 hover:text-gray-700"
                           href="#">
                           Terms of Service
                        </a>
                     </li>
                     <li className="p-5">
                        <a
                           className="font-medium text-gray-600 hover:text-gray-700"
                           href="#">
                           Return Policy
                        </a>
                     </li>
                     <li className="p-5">
                        <a
                           className="font-medium text-gray-600 hover:text-gray-700"
                           href="#">
                           Contact Us
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="w-auto p-8">
                  <div className="-m-1.5 flex flex-wrap">
                     <div className="w-auto p-1.5">
                        <a href="https://www.facebook.com/yourpage">
                           <div className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full hover:border-gray-400">
                              {/* Facebook Icon */}
                              <svg
                                 width="8"
                                 height="14"
                                 viewBox="0 0 8 14"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z"
                                    fill="#27272A"></path>
                              </svg>
                           </div>
                        </a>
                     </div>
                     <div className="w-auto p-1.5">
                        <a href="https://twitter.com/yourhandle">
                           <div className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full hover:border-gray-400">
                              {/* Twitter Icon */}
                              <svg
                                 width="14"
                                 height="11"
                                 viewBox="0 0 14 11"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z"
                                    fill="#27272A"></path>
                              </svg>
                           </div>
                        </a>
                     </div>
                     <div className="w-auto p-1.5">
                        <a href="https://www.instagram.com/yourhandle/">
                           <div className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full hover:border-gray-400">
                              {/* Instagram Icon */}
                              <svg
                                 width="16"
                                 height="15"
                                 viewBox="0 0 16 15"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M8.00094 0.360001C6.09046 0.360001 5.85022 0.368801 5.09958 0.402241C4.34894 0.437441 3.83766 0.555361 3.38974 0.729601C2.9199 0.906321 2.49433 1.18353 2.14278 1.54184C1.78468 1.89357 1.50751 2.31909 1.33054 2.7888C1.1563 3.23584 1.0375 3.748 1.00318 4.496C0.969738 5.2484 0.960937 5.48776 0.960937 7.40088C0.960937 9.31224 0.969738 9.5516 1.00318 10.3022C1.03838 11.052 1.1563 11.5633 1.33054 12.0112C1.51094 12.4741 1.75118 12.8666 2.14278 13.2582C2.5335 13.6498 2.92598 13.8909 3.38886 14.0704C3.83766 14.2446 4.34806 14.3634 5.09782 14.3978C5.84934 14.4312 6.0887 14.44 8.00094 14.44C9.91318 14.44 10.1517 14.4312 10.9032 14.3978C11.653 14.3634 12.1633 14.2446 12.6121 14.0704C13.075 13.8909 13.4674 13.6498 13.8581 13.2582C14.249 12.8666 14.4893 12.4741 14.6705 12.0112C14.8448 11.5633 14.9637 11.052 14.9989 10.3022C15.0323 9.5516 15.0411 9.31224 15.0411 7.40088C15.0411 5.48776 15.0323 5.2484 14.9989 4.496C14.9646 3.748 14.8469 3.23584 14.6737 2.7888C14.4933 2.31909 14.2139 1.89357 13.8553 1.54184C13.5039 1.18353 13.0782 0.906321 12.6084 0.729601C12.1605 0.555361 11.6492 0.437441 10.8985 0.402241C10.1478 0.368801 9.90754 0.360001 8.00094 0.360001ZM8.00094 1.8078C9.65812 1.8078 11.0656 3.21637 11.0656 4.88788C11.0656 6.55938 9.65812 7.96797 8.00094 7.96797C6.34376 7.96797 4.93628 6.55938 4.93628 4.88788C4.93628 3.21637 6.34376 1.8078 8.00094 1.8078ZM8.00094 3.1869C7.26188 3.1869 6.65548 3.79333 6.65548 4.88788C6.65548 5.98243 7.26188 6.58883 8.00094 6.58883C8.73999 6.58883 9.34639 5.98243 9.34639 4.88788C9.34639 3.79333 8.73999 3.1869 8.00094 3.1869ZM14.7606 3.6916C14.2003 3.6916 13.7197 4.17124 13.7197 4.73153C13.7197 5.29182 14.2003 5.77141 14.7606 5.77141C15.3209 5.77141 15.8015 5.29182 15.8015 4.73153C15.8015 4.17124 15.3209 3.6916 14.7606 3.6916Z"
                                    fill="#27272A"></path>
                              </svg>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="mt-8 text-center">
               <p className="text-sm text-gray-600">
                  © 2024 UrbanValley. All rights reserved.
               </p>
            </div>
         </div>
      </div>
   );
};

export default Footer;
