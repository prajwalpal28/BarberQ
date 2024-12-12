// src/components/ReviewSection.jsx
import React from "react";
import reviews from "../Data/Reviews";

const ReviewSection = () => {
  return (
    <section className=" py-10 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-700">{review.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{review.date}</p>
              <p className="text-gray-700 mb-4">{review.review}</p>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${
                      index < review.rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.435 8.167 1.184-5.917 5.76 1.396 8.133-7.314-3.847-7.314 3.847 1.396-8.133-5.917-5.76 8.167-1.184z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
