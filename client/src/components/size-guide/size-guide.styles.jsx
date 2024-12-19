// components/size-guide/size-guide.styles.jsx
import styled from 'styled-components';

// export const SizeGuideButton = styled.button`
//   background: none;
//   border: none;
//   color: #666;
//   text-decoration: underline;
//   cursor: pointer;
//   padding: 5px 0;
//   font-size: 14px;
//   width: 100px;

//   &:hover {
//     color: #000;
//   }
// `;

export const SizeGuideButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;

  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    color: black;
    border: 1px solid black;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;

  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  color: #666;

  &:hover {
    color: #000;
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const SizeTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    padding: 12px;
    text-align: center;
    border: 1px solid #ddd;
  }

  th {
    background: #f5f5f5;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background: #f9f9f9;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
`;

export const Tab = styled.button`
  padding: 8px 16px;
  border: none;
  background: ${(props) => (props.active ? '#000' : '#f5f5f5')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.active ? '#000' : '#e5e5e5')};
  }
`;
