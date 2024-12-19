// components/toast/toast.component.jsx
import { useEffect } from 'react';
import { CheckCircle, X, AlertCircle, ShoppingCart, Heart } from 'lucide-react';
import {
  ToastContainer,
  ToastContent,
  ToastIcon,
  ToastMessage,
  CloseButton,
} from './toast.styles';

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const getIcon = () => {
    switch (type) {
      case 'cart':
        return <ShoppingCart size={20} />;
      case 'wishlist':
        return <Heart size={20} />;
      case 'success':
        return <CheckCircle size={20} />;
      case 'error':
        return <AlertCircle size={20} />;
      default:
        return null;
    }
  };

  return (
    <ToastContainer type={type}>
      <ToastContent>
        <ToastIcon>{getIcon()}</ToastIcon>
        <ToastMessage>{message}</ToastMessage>
        <CloseButton onClick={onClose}>
          <X size={18} />
        </CloseButton>
      </ToastContent>
    </ToastContainer>
  );
};

export default Toast;
