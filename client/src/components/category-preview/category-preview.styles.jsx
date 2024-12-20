// import styled from 'styled-components';

// import { Link } from 'react-router-dom';

// export const CategoryPreviewContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 30px;
// `;

// export const Title = styled(Link)`
//   font-size: 28px;
//   margin-bottom: 25px;
//   cursor: pointer;
// `;

// export const Preview = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   column-gap: 20px;
// `;

// components/category-preview/category-preview.styles.jsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
  }
`;
