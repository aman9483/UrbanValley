import React from "react";
import { Star, User, MessageCircle } from "lucide-react"; // Import feedback icons

const Feedback = () => {
  const feedbacks = [
    {
      name: "Alice Johnson",
      feedback: "The clothing options are fantastic! I love the variety.",
      rating: 5,
    },
    {
      name: "Bob Smith",
      feedback: "Great service and fast delivery! Highly recommend.",
      rating: 4,
    },
    {
      name: "Carolyn Brown",
      feedback: "The quality of the clothes is excellent. Will shop again!",
      rating: 5,
    },
    
  ];

  return (
    <div className="px-4 py-5 mx-auto max-w-7xl lg:px-10">
      <div className="text-center">
      <span className="flex items-center justify-center lg:w-full lg:h[100vw] lg:my-14">
               <h1 className="text-2xl font-bold lg:text-5xl">
                  Our <span className="font-serif text-yellow">Happy</span>{" "}
                  Customers
               </h1>
            </span>
       
      </div>
      <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-5 border border-gray-300 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-3">
              <User className="text-yellow-500 h-6 w-6" />
              <h3 className="ml-2 font-semibold">{feedback.name}</h3>
            </div>
            <p className="text-gray-700">{feedback.feedback}</p>
            <div className="flex mt-2">
              {Array.from({ length: feedback.rating }, (_, i) => (
                <Star key={i} className="text-yellow-500 h-5 w-5" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
