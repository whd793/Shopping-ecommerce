import { useDispatch, useSelector } from 'react-redux';
import { useToast } from '../../contexts/toast.context';

import { addItemToCart } from '../../store/cart/cart.reducer';
import { selectWishlistItems } from '../../store/wishlist/wishlist.selector';
import {
  addToWishlist,
  removeFromWishlist,
} from '../../store/wishlist/wishlist.reducer';
import { Heart, ShoppingCart, Eye } from 'lucide-react';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Spinner from '../spinner/spinner.component';
import {
  ProductCartContainer,
  ProductImage,
  Footer,
  Name,
  Price,
  WishlistButton,
  ButtonsContainer,
  ActionButton,
  ViewButton,
} from './product-card.styles';

import ProductReview from '../product-review/product-review.component';

const ProductCard = ({ product }) => {
  const { showToast } = useToast();

  // const { name, price, imageUrl } = product;
  const { id, name, price, imageUrl } = product;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wishlistItems = useSelector(selectWishlistItems);
  const isInWishlist = wishlistItems.find((item) => item.id === product.id);

  const toggleWishlist = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking wishlist button
    if (isInWishlist) {
      dispatch(removeFromWishlist(product));
      showToast('Removed from wishlist', 'wishlist');
    } else {
      dispatch(addToWishlist(product));
      showToast('Added to wishlist', 'wishlist');
    }
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  // const [showReviews, setShowReviews] = useState(false);

  // const addProductToCart = () => dispatch(addItemToCart(product));

  const addProductToCart = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking the add to cart button
    dispatch(addItemToCart(product));
    showToast('Added to cart', 'cart');
  };

  const handleView = () => {
    navigate(`/product/${id}`);
  };

  return (
    // <ProductCartContainer>
    <ProductCartContainer onClick={() => navigate(`/product/${id}`)}>
      {/* <WishlistButton onClick={toggleWishlist} isInWishlist={isInWishlist}>
        <Heart
          fill={isInWishlist ? 'red' : 'none'}
          stroke={isInWishlist ? 'red' : 'black'}
        />
      </WishlistButton> */}
      <ButtonsContainer>
        <ActionButton onClick={toggleWishlist} title='Add to Wishlist'>
          <Heart
            size={20}
            fill={isInWishlist ? 'red' : 'none'}
            stroke={isInWishlist ? 'red' : 'black'}
          />
        </ActionButton>
        <ActionButton onClick={addProductToCart} title='Add to Cart'>
          <ShoppingCart size={20} />
        </ActionButton>
      </ButtonsContainer>

      {!imageLoaded && <Spinner />}
      <ProductImage
        src={imageUrl}
        alt={`${name}`}
        loading='lazy'
        onLoad={() => setImageLoaded(true)}
        className={imageLoaded ? 'loaded' : ''}
      />
      {/* <img src={imageUrl} alt={`${name}`} /> */}
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      {/* <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button> */}
      <ViewButton onClick={handleView}>
        <Eye size={20} />
        View Details
      </ViewButton>
      {/* <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={() => setShowReviews(!showReviews)}
      >
        Show Reviews
      </Button> */}

      {/* {showReviews && <ProductReview productId={product.id} />} */}
    </ProductCartContainer>
  );
};

export default ProductCard;
