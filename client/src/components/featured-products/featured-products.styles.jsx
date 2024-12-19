// components/featured-products/featured-products.styles.jsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FeaturedSection = styled.section`
  padding: 60px 0;
  margin: 40px 0;
`;

export const FeaturedTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 40px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: black;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

export const ViewAllButton = styled(Link)`
  display: block;
  width: fit-content;
  margin: 0 auto;
  padding: 15px 40px;
  background: black;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;
