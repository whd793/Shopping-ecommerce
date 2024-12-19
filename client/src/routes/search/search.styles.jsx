// routes/search/search.styles.jsx
import styled from 'styled-components';

export const SearchResults = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SearchTitle = styled.h2`
  text-align: center;
  margin: 20px 0;
`;
