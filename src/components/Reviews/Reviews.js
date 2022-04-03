import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews([]);

    return (
        <div>
            <h3 className='m-5'>Reviews</h3>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
            {
                reviews.map((review) => <Review
                key = {review._id}
                review = {review}
                ></Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;