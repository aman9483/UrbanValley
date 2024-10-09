import React from "react";
import { Star } from "lucide-react"; // Import feedback icons

const FeedbackCard = ({ name, image, feedback, rating }) => {
  return (
    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-4">
        <img
          alt={name}
          src={image}
          className="size-14 rounded-full object-cover"
        />
        <div>
          <div className="flex justify-center gap-0.5 text-green-500">
            {Array.from({ length: rating }, (_, index) => (
              <Star key={index} className="size-5" />
            ))}
          </div>
          <p className="mt-0.5 text-lg font-medium text-gray-900">{name}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{feedback}</p>
    </blockquote>
  );
};

const Feedback = () => {
  const feedbacks = [
    {
      name: "Paul Starr",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      feedback: "Amazing service! I had a great experience and would highly recommend it to others.",
      rating: 5,
    },
    {
      name: "John Doe",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      feedback: "Amazing service! I had a great experience and would highly recommend it to others.",
      rating: 4,
    },
    {
      name: "Jane Smith",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      feedback: "The product quality is top-notch. Very satisfied with my purchase!",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Read trusted reviews from our customers
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {feedbacks.map((feedbackData, index) => (
            <FeedbackCard key={index} {...feedbackData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
