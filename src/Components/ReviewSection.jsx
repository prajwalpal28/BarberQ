import React, { useState } from "react";
import reviews from "../Data/Reviews";

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current slide
  const itemsPerPage = 2; // Number of review cards per page

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(reviews.length / itemsPerPage) - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(reviews.length / itemsPerPage) - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-10 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Customer Reviews
        </h2>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${Math.ceil(reviews.length / itemsPerPage) * 100}%`,
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-1/2 px-3" // Ensures two cards per page
              >
                <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <h3 className="text-xl font-semibold text-gray-700">
                    {review.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{review.date}</p>
                  <p className="text-gray-700 mb-4">{review.review}</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`w-5 h-5 ${
                          index < review.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
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
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePrev}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full shadow-md focus:outline-none"
            >
              &#8592; {/* Left Arrow */}
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full shadow-md focus:outline-none"
            >
              &#8594; {/* Right Arrow */}
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4">
            {Array.from({
              length: Math.ceil(reviews.length / itemsPerPage),
            }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
