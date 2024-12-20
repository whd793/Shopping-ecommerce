// components/recently-viewed/recently-viewed.component.jsx
import { useSelector } from 'react-redux';
import ProductCard from '../product-card/product-card.component';
import {
  RecentlyViewedContainer,
  Title,
  ProductsScroll,
} from './recently-viewed.styles';

const RecentlyViewed = () => {
  const recentlyViewed = useSelector((state) => state.recent.recentlyViewed);

  if (recentlyViewed.length === 0) return null;

  return (
    <RecentlyViewedContainer>
      <Title>Recently Viewed</Title>
      <ProductsScroll>
        {recentlyViewed.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isCompact={true} // Add this prop
          />
        ))}
      </ProductsScroll>
    </RecentlyViewedContainer>
  );
};

export default RecentlyViewed;
// // components/recently-viewed/recently-viewed.component.jsx
// import { useSelector } from 'react-redux';
// import ProductCard from '../product-card/product-card.component';
// import {
//   RecentlyViewedContainer,
//   Title,
//   ProductsScroll,
// } from './recently-viewed.styles';

// const RecentlyViewed = () => {
//   const recentlyViewed = useSelector((state) => state.recent.recentlyViewed);

//   if (recentlyViewed.length === 0) return null;

//   return (
//     <RecentlyViewedContainer>
//       <Title>Recently Viewed</Title>
//       <ProductsScroll>
//         {recentlyViewed.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </ProductsScroll>
//     </RecentlyViewedContainer>
//   );
// };

// export default RecentlyViewed;
