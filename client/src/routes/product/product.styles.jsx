// routes/product/product.styles.jsx
import styled from 'styled-components';

export const ProductContainer = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

export const Prod = styled.div`
  width: 100%;
  display: grid;
  overflow-x: scroll;
  grid-column: 1 / -1;
`;
export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProductTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

export const ProductPrice = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ReviewSection = styled.div`
  grid-column: 1 / -1;
  margin-top: 40px;

  h2 {
    margin-bottom: 20px;
  }
`;
