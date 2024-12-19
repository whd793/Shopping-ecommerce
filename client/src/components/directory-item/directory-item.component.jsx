import { useNavigate } from 'react-router-dom';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';

// const DirectoryItemContainer = styled.div`
//   flex: 1 1 calc(33.33% - 20px);
//   margin: 10px;
//   border-radius: 8px;
//   overflow: hidden;
//   box-shadow: var(--card-shadow);
//   cursor: pointer;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//   }
// `;

// const BackgroundImage = styled.div`
//   width: 100%;
//   height: 200px;
//   background-size: cover;
//   background-position: center;
// `;

// const Body = styled.div`
//   padding: 20px;
//   text-align: center;

//   h2 {
//     font-size: 1.5rem;
//     color: var(--primary-color);
//     margin-bottom: 10px;
//   }

//   p {
//     font-size: 1rem;
//     color: var(--text-color);
//   }
// `;

// const DirectoryItem = ({ category }) => {
//   const navigate = useNavigate();

//   return (
//     <DirectoryItemContainer onClick={() => navigate(category.route)}>
//       <BackgroundImage
//         style={{ backgroundImage: `url(${category.imageUrl})` }}
//       />
//       <Body>
//         <h2>{category.title}</h2>
//         <p>Shop Now</p>
//       </Body>
//     </DirectoryItemContainer>
//   );
// };

// export default DirectoryItem;
