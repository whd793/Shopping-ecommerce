// routes/navigation/navigation.styles.jsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding: 0 20px;
  position: relative;
  background: white;
  z-index: 1000;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 120px;
  padding: 15px;
  display: flex;
  align-items: center;
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  color: black;
  z-index: 1002;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

// export const NavLinks = styled.div`
//   width: 50%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   gap: 20px;

//   @media screen and (max-width: 768px) {
//     position: fixed;
//     top: 0;
//     right: ${({ $isOpen }) => ($isOpen ? '0' : '-300px')};
//     width: 300px;
//     height: 100vh;
//     flex-direction: column;
//     justify-content: flex-start;
//     background-color: white;
//     padding: 100px 40px;
//     transition: right 0.3s ease-in-out;
//     z-index: 1001;
//     box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
//   }
// `;

export const SearchWrapper = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
  }
`;

// Update NavLinks style to include SearchWrapper
export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ $isOpen }) => ($isOpen ? '0' : '-300px')};
    width: 300px;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    background-color: white;
    padding: 100px 20px;
    transition: right 0.3s ease-in-out;
    z-index: 1001;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  font-weight: bold;

  &:hover {
    color: #666;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: left;
    padding: 20px 0;
    font-size: 18px;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }
  }
`;

// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// export const NavigationContainer = styled.div`
//   height: 70px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 25px;
// `;

// // export const LogoContainer = styled(Link)`
// //   height: 100%;
// //   width: 70px;
// //   padding: 25px;
// // `;

// export const LogoContainer = styled(Link)`
//   height: 100%;
//   width: 120px;
//   padding: 15px;
//   display: flex;
//   align-items: center;
// `;

// export const NavLinks = styled.div`
//   width: 50%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;

// export const NavLink = styled(Link)`
//   padding: 10px 15px;
//   cursor: pointer;
// `;
