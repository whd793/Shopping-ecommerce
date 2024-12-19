// routes/product/product.component.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { addItemToCart } from '../../store/cart/cart.reducer';
import Button from '../../components/button/button.component';
import ProductReview from '../../components/product-review/product-review.component';

import { addToRecentlyViewed } from '../../store/recent/recent.reducer';
import RecentlyViewed from '../../components/recently-viewed/recently-viewed.component';
import SizeGuide from '../../components/size-guide/size-guide.component';

import {
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ReviewSection,
  Prod,
} from './product.styles';

const Product = () => {
  const { id } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (product) {
      dispatch(addToRecentlyViewed(product));
    }

    // Find product in categoriesMap
    for (const category of Object.values(categoriesMap)) {
      const foundProduct = category.find((p) => p.id === Number(id));
      if (foundProduct) {
        setProduct(foundProduct);
        break;
      }
    }
  }, [id, categoriesMap, product, dispatch]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <ProductContainer>
      <ProductImage src={product.imageUrl} alt={product.name} />
      <ProductInfo>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>${product.price}</ProductPrice>
        <Button onClick={addProductToCart}>Add to Cart</Button>
        <SizeGuide category={product.category} />
      </ProductInfo>
      <Prod>
        <RecentlyViewed />
      </Prod>
      {/* <ReviewSection>
        <h2>Product Reviews</h2>
        <ProductReview productId={product.id} />
      </ReviewSection> */}
      <ReviewSection>
        <h2>Product Reviews</h2>
        <ProductReview productId={String(product.id)} />{' '}
        {/* Ensure ID is string */}
      </ReviewSection>
    </ProductContainer>
  );
};

export default Product;
