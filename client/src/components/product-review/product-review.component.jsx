// components/product-review/product-review.component.jsx
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { addReviewToProduct } from '../../utils/firebase/firebase.utils';

const ProductReview = ({ productId }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const currentUser = useSelector(selectCurrentUser);

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    try {
      await addReviewToProduct(productId, {
        userId: currentUser.id,
        userName: currentUser.displayName,
        rating,
        comment,
        date: new Date(),
      });
      setRating(5);
      setComment('');
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <form onSubmit={handleSubmitReview}>
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num} Stars
          </option>
        ))}
      </select>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder='Write your review...'
        required
      />
      <button type='submit'>Submit Review</button>
    </form>
  );
};

export default ProductReview;
