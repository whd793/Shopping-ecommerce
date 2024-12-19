// components/recently-viewed/recently-viewed.styles.jsx
import styled from 'styled-components';

export const RecentlyViewedContainer = styled.div`
  padding: 20px;
  margin: 40px 0;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
`;

export const ProductsScroll = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(250px, 1fr);
  gap: 20px;
  overflow-x: auto;
  padding: 10px 0;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
`;
