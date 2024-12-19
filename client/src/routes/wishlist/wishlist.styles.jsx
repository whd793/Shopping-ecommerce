// routes/wishlist/wishlist.styles.jsx
import styled from 'styled-components';

export const WishlistContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const WishlistTitle = styled.h1`
  text-align: center;
  margin: 20px 0;
`;

export const WishlistEmpty = styled.div`
  text-align: center;
  padding: 40px;
  background: #f9f9f9;
  border-radius: 8px;
  margin: 20px 0;

  h2 {
    margin-bottom: 10px;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;
