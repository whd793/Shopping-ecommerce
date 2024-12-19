import { useDispatch } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.reducer';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { useState } from 'react';

import Spinner from '../spinner/spinner.component';
import {
  ProductCartContainer,
  ProductImage,
  Footer,
  Name,
  Price,
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const [imageLoaded, setImageLoaded] = useState(false);

  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <ProductCartContainer>
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
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
