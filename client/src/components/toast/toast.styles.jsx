// components/toast/toast.styles.jsx
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${({ type }) =>
    type === 'error'
      ? '#FEE2E2'
      : type === 'cart'
      ? '#E8F5E9'
      : type === 'wishlist'
      ? '#FCE4EC'
      : '#F0F9FF'};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: ${slideIn} 0.3s ease-out;
`;

export const ToastContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ToastIcon = styled.div`
  color: ${({ type }) =>
    type === 'error'
      ? '#DC2626'
      : type === 'cart'
      ? '#2E7D32'
      : type === 'wishlist'
      ? '#C2185B'
      : '#0369A1'};
`;

export const ToastMessage = styled.p`
  margin: 0;
  color: #374151;
  font-size: 14px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;

  &:hover {
    color: #374151;
  }
`;
