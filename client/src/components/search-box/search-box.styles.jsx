// components/search-box/search-box.styles.jsx
import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;
  width: 300px;
  margin: 0 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  min-width: 120px;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;
