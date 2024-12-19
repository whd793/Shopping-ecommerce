// components/wishlist-icon/wishlist-icon.component.jsx
import { useDispatch, useSelector } from 'react-redux';
import { selectWishlistItems } from '../../store/wishlist/wishlist.selector';
import { Heart } from 'lucide-react';
import { WishlistIconContainer, ItemCount } from './wishlist-icon.styles';

const WishlistIcon = () => {
  const wishlistItems = useSelector(selectWishlistItems);

  return (
    <WishlistIconContainer to='/wishlist'>
      <Heart />
      {wishlistItems.length > 0 && (
        <ItemCount>{wishlistItems.length}</ItemCount>
      )}
    </WishlistIconContainer>
  );
};

export default WishlistIcon;
