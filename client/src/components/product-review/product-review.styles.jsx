// components/product-review/product-review.styles.jsx
import styled from 'styled-components';

export const ReviewContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-top: 1px solid #eee;
`;

export const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const ReviewInput = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 100px;
  resize: vertical;
`;

export const RatingSelect = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ReviewItem = styled.div`
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
  background-color: #fafafa;

  small {
    display: block;
    margin-top: 8px;
    color: #666;
  }
`;

// // components/product-review/product-review.styles.jsx
// import styled from 'styled-components';

// export const ReviewContainer = styled.div`
//   margin-top: 20px;
//   padding: 20px;
//   border-top: 1px solid #eee;
// `;

// export const ReviewForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   margin-bottom: 20px;
// `;

// export const ReviewInput = styled.textarea`
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   min-height: 100px;
//   resize: vertical;
// `;

// export const RatingSelect = styled.select`
//   padding: 8px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// export const ReviewList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
// `;

// export const ReviewItem = styled.div`
//   padding: 15px;
//   border: 1px solid #eee;
//   border-radius: 4px;
// `;
