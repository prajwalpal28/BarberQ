import React from "react";
import reviews from "../data/reviews";

const ReviewSection = () => {
  return (
    <section className="py-12 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
        <p className="text-gray-400 mb-8">
          Hear from our incredible customers who are building at lightning speed.
        </p>
      </div>

      {/* Review Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-800 p-6 rounded-xl shadow-md">
            {/* Star Rating */}
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < review.rating ? "text-yellow-400" : "text-gray-600"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.435 8.167 1.184-5.917 5.76 1.396 8.133-7.314-3.847-7.314 3.847 1.396-8.133-5.917-5.76 8.167-1.184z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-300 mb-4">"{review.review}"</p>

            {/* Reviewer Info */}
            <div className="flex items-center gap-4">
              <img
                src={`https://i.pravatar.cc/50?img=${review.id}`} // Placeholder for profile images
                alt={review.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="text-sm font-semibold">{review.name}</h3>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
