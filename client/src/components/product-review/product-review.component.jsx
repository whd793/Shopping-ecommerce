import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import {
  addReviewToProduct,
  getProductReviews,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';

import {
  ReviewContainer,
  ReviewForm,
  ReviewInput,
  RatingSelect,
  ReviewList,
  ReviewItem,
} from './product-review.styles';

const ProductReview = ({ productId }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);
  const currentUser = useSelector(selectCurrentUser);

  //   useEffect(() => {
  //     const loadReviews = async () => {
  //       try {
  //         const productReviews = await getProductReviews(productId);
  //         setReviews(productReviews);
  //       } catch (error) {
  //         console.error('Error loading reviews:', error);
  //       }
  //     };

  //     loadReviews();
  //   }, [productId]);

  useEffect(() => {
    if (productId) {
      const loadReviews = async () => {
        try {
          const productReviews = await getProductReviews(productId);
          setReviews(productReviews);
        } catch (error) {
          console.error('Error loading reviews:', error);
        }
      };

      loadReviews();
    }
  }, [productId]);

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      alert('Please sign in to leave a review');
      return;
    }

    try {
      const reviewData = {
        userId: currentUser.uid, // Make sure this exists
        userName: currentUser.displayName || 'Anonymous',
        rating,
        comment,
        // Don't set createdAt here, it's set in the addReviewToProduct function
      };

      console.log('Submitting review with data:', reviewData); // Debug log

      await addReviewToProduct(productId, reviewData);

      // Reload reviews after submitting
      const updatedReviews = await getProductReviews(productId);
      setReviews(updatedReviews);

      // Reset form
      setRating(5);
      setComment('');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Error submitting review. Please try again.');
    }
  };

  return (
    <ReviewContainer>
      <ReviewForm onSubmit={handleSubmitReview}>
        <RatingSelect
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} Stars
            </option>
          ))}
        </RatingSelect>
        <ReviewInput
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='Write your review...'
          required
        />
        <Button type='submit'>Submit Review</Button>
      </ReviewForm>

      <ReviewList>
        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first to review!</p>
        ) : (
          reviews.map((review) => (
            <ReviewItem key={review.id}>
              <div>Rating: {'⭐'.repeat(review.rating)}</div>
              <div>{review.comment}</div>
              {/* <small>
                By {review.userName} on{' '}
                {new Date(review.createdAt.seconds * 1000).toLocaleDateString()}
              </small> */}
              <small>
                By {review.userName} on{' '}
                {review.createdAt?.toDate().toLocaleDateString()}
              </small>
            </ReviewItem>
          ))
        )}
      </ReviewList>
    </ReviewContainer>
  );
};

export default ProductReview;
