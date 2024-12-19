// routes/wishlist/wishlist.component.jsx
import { useSelector } from 'react-redux';
import { selectWishlistItems } from '../../store/wishlist/wishlist.selector';
import ProductCard from '../../components/product-card/product-card.component';
import {
  WishlistContainer,
  WishlistTitle,
  WishlistEmpty,
  ProductsGrid,
} from './wishlist.styles';

const Wishlist = () => {
  const wishlistItems = useSelector(selectWishlistItems);

  return (
    <WishlistContainer>
      <WishlistTitle>My Wishlist</WishlistTitle>
      {wishlistItems.length === 0 ? (
        <WishlistEmpty>
          <h2>Your wishlist is empty</h2>
          <p>Save items you love by clicking the heart icon on any product.</p>
        </WishlistEmpty>
      ) : (
        <ProductsGrid>
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      )}
    </WishlistContainer>
  );
};

export default Wishlist;
