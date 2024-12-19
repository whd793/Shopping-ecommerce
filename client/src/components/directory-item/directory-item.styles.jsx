// import styled from 'styled-components';

// export const BackgroundImage = styled.div`
//   width: 100%;
//   height: 100%;
//   background-size: cover;
//   background-position: center;
//   background-image: ${({ imageUrl }) => `url(${imageUrl})`};
// `;

// export const Body = styled.div`
//   height: 90px;
//   padding: 0 25px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid black;
//   background-color: white;
//   opacity: 0.7;
//   position: absolute;

//   h2 {
//     font-weight: bold;
//     margin: 0 6px 0;
//     font-size: 22px;
//     color: #4a4a4a;
//     text-transform: uppercase;
//   }

//   p {
//     font-weight: lighter;
//     font-size: 16px;
//   }
// `;

// export const DirectoryItemContainer = styled.div`
//   min-width: 30%;
//   height: 240px;
//   flex: 1 1 auto;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid black;
//   margin: 0 7.5px 15px;
//   overflow: hidden;

//   &:first-child {
//     margin-right: 7.5px;
//   }

//   &:last-child {
//     margin-left: 7.5px;
//   }

//   &:hover {
//     cursor: pointer;

//     ${BackgroundImage} {
//       transform: scale(1.1);
//       transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
//     }

//     ${Body} {
//       opacity: 0.9;
//     }
//   }
// `;

// components/directory-item/directory-item.styles.jsx
import styled from 'styled-components';

export const DirectoryItemContainer = styled.div`
  position: relative;
  height: 380px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  transition: transform 0.6s ease;

  ${DirectoryItemContainer}:hover & {
    transform: scale(1.1);
  }
`;

export const Body = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 25px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  color: white;
  text-align: left;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 0 0 10px;
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
    margin: 0;
    opacity: 0.9;
  }
`;
