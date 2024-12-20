import styled from 'styled-components';

// export const ProductCartContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   height: 350px;
//   align-items: center;
//   position: relative;
//   cursor: pointer;

//   button {
//     width: 80%;
//     opacity: 0.7;
//     position: absolute;
//     top: 255px;
//     display: none;
//   }

//   &:hover {
//     img {
//       opacity: 0.8;
//     }

//     button {
//       opacity: 0.85;
//       display: flex;
//     }
//   }
// `;

// export const ProductImage = styled.img`
//   width: 100%;
//   height: 95%;
//   object-fit: cover;
//   margin-bottom: 5px;
//   opacity: 0;
//   transition: opacity 0.3s ease-in-out;

//   &.loaded {
//     opacity: 1;
//   }

//   &:hover {
//     opacity: 0.8;
//   }

//   @media (max-width: 768px) {
//     height: 250px;
//   }
// `;

// export const Footer = styled.div`
//   width: 100%;
//   height: 5%;
//   display: flex;
//   justify-content: space-between;
//   font-size: 18px;
// `;

// export const Name = styled.span`
//   width: 90%;
//   margin-bottom: 15px;
// `;

// export const Price = styled.span`
//   width: 10%;
// `;

export const WishlistButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.$isCompact ? '280px' : '400px')};
  align-items: center;
  position: relative;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    img {
      transform: scale(1.05);
    }
  }
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 2;
`;

export const ActionButton = styled.button`
  background: white;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: #f8f8f8;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: ${(props) => (props.$isCompact ? '160px' : '280px')};

  object-fit: cover;
  transition: transform 0.3s ease;
`;

export const Footer = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Name = styled.span`
  font-size: 16px;
  color: #333;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const ViewButton = styled.button`
  width: 100%;
  padding: 12px;
  background: black;
  color: white;
  border: none;
  margin-top: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #333;
  }

  svg {
    stroke: white;
  }
`;
