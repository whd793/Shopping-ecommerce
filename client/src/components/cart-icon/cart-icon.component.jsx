import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';

import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.reducer';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = memo(() => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = useCallback(() => {
    dispatch(setIsCartOpen(!isCartOpen));
  }, [dispatch, isCartOpen]);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
});

// const CartIcon = () => {
//   const dispatch = useDispatch();
//   const isCartOpen = useSelector(selectIsCartOpen);
//   const cartCount = useSelector(selectCartCount);

//   const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

//   return (
//     <CartIconContainer onClick={toggleIsCartOpen}>
//       <ShoppingIcon className='shopping-icon' />
//       <ItemCount>{cartCount}</ItemCount>
//     </CartIconContainer>
//   );
// };

export default CartIcon;
