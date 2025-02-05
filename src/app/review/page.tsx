"use client";
import { useState, useEffect } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Subfooter from "@/Components/Subfooter";

export default function ReviewSection() {
  const [reviews, setReviews] = useState<{ name: string; review: string; rating: number }[]>([]);
  const [newName, setNewName] = useState("");
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(0); // Track the selected rating

  // Load reviews from local storage when the component mounts
  useEffect(() => {
    const storedReviews = localStorage.getItem("reviews");
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  // Handle the review submission
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newName.trim() && newReview.trim() && newRating > 0) {
      const updatedReviews = [...reviews, { name: newName, review: newReview, rating: newRating }];
      setReviews(updatedReviews);
      localStorage.setItem("reviews", JSON.stringify(updatedReviews)); // Save reviews to local storage
      setNewName(""); // Clear the name input
      setNewReview(""); // Clear the review input
      setNewRating(0); // Clear the rating input
    }
  };

  return (
    <>
      <Navbar /> {/* Add Navbar here */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#B88E2F] mb-8">Customer Reviews</h2>

          {/* Review Form inside a Card */}
          <div className="max-w-md mx-auto bg-gray-200 p-6 rounded-lg shadow-lg">
            <form onSubmit={handleReviewSubmit}>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md mb-4"
                placeholder="Your Name"
                required
              />
              <textarea
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                className="w-full h-32 p-4 border border-gray-300 rounded-md mb-4"
                placeholder="Share your review..."
                required
              />
              {/* Rating Heading and Star Rating Input */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-black">Rating</span>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewRating(star)}
                      className={`text-2xl ${star <= newRating ? "text-yellow-500" : "text-gray-400"}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#B88E2F] text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
              >
                Submit Review
              </button>
            </form>
          </div>

          {/* Display Reviews */}
          <div className="space-y-6 mt-8">
            {reviews.length === 0 ? (
              <p className="text-center text-gray-600">No reviews yet. Be the first to review!</p>
            ) : (
              reviews.map((review, index) => (
                <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-lg flex">
                  {/* Left Section (Headings) */}
                  <div className="w-1/3 pr-4">
                    <p className="text-lg font-semibold text-black">Name</p>
                    <p className="text-lg font-semibold text-black mt-4">Review</p>
                    <p className="text-lg font-semibold text-black mt-4">Rating</p>
                  </div>

                  {/* Right Section (Content) */}
                  <div className="w-2/3 pl-4">
                    <p className="text-gray-600">{review.name}</p>
                    <p className="text-gray-600 mt-4">{review.review}</p>
                    <div className="flex items-center text-yellow-500 mt-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={`text-2xl ${star <= review.rating ? "text-yellow-500" : "text-gray-400"}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <Subfooter /> {/* Add SubFooter here */}
      <Footer /> {/* Add Footer here */}
    </>
  );
}
