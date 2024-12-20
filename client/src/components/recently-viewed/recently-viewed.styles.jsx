// // components/recently-viewed/recently-viewed.styles.jsx
// import styled from 'styled-components';

// export const RecentlyViewedContainer = styled.div`
//   padding: 20px;
//   margin: 40px 0;
// `;

// export const Title = styled.h2`
//   margin-bottom: 20px;
//   font-size: 24px;
// `;

// export const ProductsScroll = styled.div`
//   display: grid;
//   grid-auto-flow: column;
//   grid-auto-columns: minmax(250px, 1fr);
//   gap: 20px;
//   overflow-x: auto;
//   padding: 10px 0;
//   scroll-behavior: smooth;
//   -webkit-overflow-scrolling: touch;

//   &::-webkit-scrollbar {
//     height: 8px;
//   }

//   &::-webkit-scrollbar-track {
//     background: #f1f1f1;
//     border-radius: 4px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background: #888;
//     border-radius: 4px;
//   }
// `;

// components/recently-viewed/recently-viewed.styles.jsx
import styled from 'styled-components';

export const RecentlyViewedContainer = styled.div`
  padding: 20px;
  margin: 40px 0;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
`;

export const ProductsScroll = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(180px, 200px); // Reduced from 250px
  gap: 15px;
  overflow-x: auto;
  padding: 10px 0;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
`;

// Create a compact version of ProductCard for recently viewed
export const CompactProductCard = styled.div`
  width: 100%;
  height: 260px; // Reduced from original height
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 180px; // Reduced height for image
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 155px;
    display: none;
    font-size: 12px;
    padding: 8px 12px;
  }
`;
