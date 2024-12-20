// import styled from 'styled-components';

// export const CategoryContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   column-gap: 20px;
//   row-gap: 50px;
// `;

// export const Title = styled.h2`
//   font-size: 38px;
//   margin-bottom: 25px;
//   text-align: center;
// `;

// routes/category/category.styles.jsx
import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

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

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;
