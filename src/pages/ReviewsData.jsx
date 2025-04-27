// Reviews.jsx
import React from 'react';
import { reviews } from '../assests/UIDATA';

const StarRating = ({ rating }) => {
    return (
        <div>
            {Array.from({ length: 5 }, (_, i) => (
                <span key={i}>{i < rating ? '⭐' : '☆'}</span>
            ))}
        </div>
    );
};

const Reviews = () => {
    return (
        <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
                <div key={index} className="border rounded-xl p-4 shadow-md bg-white">
                    <div className="flex items-center gap-4 mb-2">
                        <img
                            src={review.photo}
                            alt={review.email}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <div className="font-semibold">{review.email}</div>
                            <StarRating rating={review.rating} />
                        </div>
                    </div>
                    <p className="text-gray-700">{review.summary}</p>
                </div>
            ))}
        </div>
    );
};

export default Reviews;
