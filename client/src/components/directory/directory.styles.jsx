// import styled from 'styled-components';

// export const DirectoryContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `;

// components/directory/directory.styles.jsx
import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px 0;
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  margin: 40px 0 20px;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: black;
  }
`;
