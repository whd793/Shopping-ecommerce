import { useDispatch } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.reducer';

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
} from './product-card.styles';

import ProductReview from '../product-review/product-review.component';

const ProductCard = ({ product }) => {
  // const { name, price, imageUrl } = product;
  const { id, name, price, imageUrl } = product;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [imageLoaded, setImageLoaded] = useState(false);

  // const [showReviews, setShowReviews] = useState(false);

  // const addProductToCart = () => dispatch(addItemToCart(product));

  const addProductToCart = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking the add to cart button
    dispatch(addItemToCart(product));
  };

  return (
    // <ProductCartContainer>
    <ProductCartContainer onClick={() => navigate(`/product/${id}`)}>
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
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
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
