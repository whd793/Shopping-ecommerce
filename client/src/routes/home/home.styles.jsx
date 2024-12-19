// routes/home/home.styles.jsx
import styled from 'styled-components';

export const HomeContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const HeroBanner = styled.div`
  height: 500px;
  margin: 20px 0 40px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background-image: url('https://images.unsplash.com/photo-1441986300917-64674bd600d8');
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
  color: white;
  max-width: 600px;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  p {
    font-size: 18px;
    margin-bottom: 30px;
    line-height: 1.6;
  }
`;

export const ShopNowButton = styled.button`
  padding: 15px 40px;
  background: white;
  color: black;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

// // Components for additional sections
// export const NewsletterContainer = styled.section`
//   background: #f8f8f8;
//   padding: 60px 20px;
//   margin: 40px 0;
//   border-radius: 12px;
// `;

// export const NewsletterContent = styled.div`
//   max-width: 600px;
//   margin: 0 auto;
//   text-align: center;

//   h2 {
//     font-size: 32px;
//     margin-bottom: 15px;
//   }

//   p {
//     color: #666;
//     margin-bottom: 25px;
//   }
// `;

// export const NewsletterForm = styled.form`
//   display: flex;
//   gap: 10px;

//   input {
//     flex: 1;
//     padding: 15px;
//     border: 1px solid #ddd;
//     border-radius: 30px;
//     font-size: 16px;
//   }

//   button {
//     padding: 15px 30px;
//     background: black;
//     color: white;
//     border: none;
//     border-radius: 30px;
//     cursor: pointer;
//     transition: all 0.3s ease;

//     &:hover {
//       background: #333;
//     }
//   }
// `;

// export const BenefitsContainer = styled.section`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 30px;
//   margin: 60px 0;
// `;

// export const BenefitItem = styled.div`
//   text-align: center;
//   padding: 30px;

//   svg {
//     width: 40px;
//     height: 40px;
//     margin-bottom: 15px;
//     color: #333;
//   }

//   h3 {
//     font-size: 20px;
//     margin-bottom: 10px;
//   }

//   p {
//     color: #666;
//   }
// `;

// routes/home/home.styles.jsx
// ... existing imports and styles

export const NewsletterContainer = styled.section`
  background: #f8f8f8;
  padding: 60px 20px;
  margin: 40px 0;
  border-radius: 12px;
`;

export const NewsletterContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 32px;
    margin-bottom: 15px;
  }

  p {
    color: #666;
    margin-bottom: 25px;
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  gap: 10px;

  input {
    flex: 1;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 30px;
    font-size: 16px;
  }

  button {
    padding: 15px 30px;
    background: black;
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #333;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BenefitsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 60px 0;
`;

export const BenefitItem = styled.div`
  text-align: center;
  padding: 30px;

  svg {
    margin-bottom: 15px;
    color: #333;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    color: #666;
  }
`;
