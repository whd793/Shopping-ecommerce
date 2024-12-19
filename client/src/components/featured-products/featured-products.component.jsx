// components/featured-products/featured-products.component.jsx
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import ProductCard from '../product-card/product-card.component';
import Spinner from '../spinner/spinner.component';
import {
  FeaturedSection,
  FeaturedTitle,
  ProductsGrid,
  ViewAllButton,
} from './featured-products.styles';

const FeaturedProducts = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getFeaturedProducts = () => {
      setIsLoading(true);
      const allProducts = [];
      Object.values(categoriesMap).forEach((products) => {
        allProducts.push(...products);
      });

      // Get 8 random products
      const randomProducts = allProducts
        .sort(() => 0.5 - Math.random())
        .slice(0, 8);
      setFeaturedProducts(randomProducts);
      setIsLoading(false);
    };

    if (Object.keys(categoriesMap).length > 0) {
      getFeaturedProducts();
    }
  }, [categoriesMap]);

  if (isLoading) {
    return (
      <FeaturedSection>
        <FeaturedTitle>Featured Products</FeaturedTitle>
        <Spinner />
      </FeaturedSection>
    );
  }

  return (
    <FeaturedSection>
      <FeaturedTitle>Featured Products</FeaturedTitle>
      <ProductsGrid>
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
      <ViewAllButton to='/shop'>View All Products</ViewAllButton>
    </FeaturedSection>
  );
};

export default FeaturedProducts;

// // components/featured-products/featured-products.component.jsx
// import { useSelector } from 'react-redux';
// import { selectCategoriesMap } from '../../store/categories/category.selector';
// import ProductCard from '../product-card/product-card.component';
// import {
//   FeaturedSection,
//   FeaturedTitle,
//   ProductsGrid,
//   ViewAllButton,
// } from './featured-products.styles';
// import { useEffect } from 'react';

// const FeaturedProducts = () => {
//   const categoriesMap = useSelector(selectCategoriesMap);

//   // Get 8 products from different categories
//   const getFeaturedProducts = () => {
//     const allProducts = [];
//     Object.values(categoriesMap).forEach((products) => {
//       allProducts.push(...products);
//     });

//     // Get 8 random products
//     return allProducts.sort(() => 0.5 - Math.random()).slice(0, 8);
//   };

//   const featuredProducts = getFeaturedProducts();

//   return (
//     <FeaturedSection>
//       <FeaturedTitle>Featured Products</FeaturedTitle>
//       <ProductsGrid>
//         {featuredProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </ProductsGrid>
//       <ViewAllButton to='/shop'>View All Products</ViewAllButton>
//     </FeaturedSection>
//   );
// };

// export default FeaturedProducts;
