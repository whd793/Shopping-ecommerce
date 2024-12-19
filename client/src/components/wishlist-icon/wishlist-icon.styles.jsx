// components/wishlist-icon/wishlist-icon.styles.jsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WishlistIconContainer = styled(Link)`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: black;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
  right: 8px;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
