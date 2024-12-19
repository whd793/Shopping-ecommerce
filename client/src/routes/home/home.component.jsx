// routes/home/home.component.jsx
import { useNavigate } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import {
  HomeContainer,
  HeroBanner,
  HeroContent,
  ShopNowButton,
  NewsletterContainer,
  NewsletterContent,
  NewsletterForm,
  BenefitItem,
  BenefitsContainer,
} from './home.styles';
import { SectionTitle } from '../../components/directory/directory.styles';
// import { TruckIcon } from 'lucide-react';

import { Truck, RefreshCw, Shield } from 'lucide-react'; // Replace previous icon imports
import { Outlet } from 'react-router-dom';
import FeaturedProducts from '../../components/featured-products/featured-products.component';

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <HeroBanner>
        <HeroContent>
          <h1>New Collection 2024</h1>
          <p>
            Discover the latest trends and express your unique style with our
            new arrivals. Quality meets comfort in every piece.
          </p>
          <ShopNowButton onClick={() => navigate('/shop')}>
            Shop Now
          </ShopNowButton>
        </HeroContent>
      </HeroBanner>

      <SectionTitle>Shop By Category</SectionTitle>
      <Directory />

      {/* Add Featured Products Section */}
      <FeaturedProducts />

      {/* Add Newsletter Section */}
      <Newsletter />

      {/* Add Benefits Section */}
      <Benefits />

      <Outlet />
    </HomeContainer>
  );
};

// Create new components for additional sections
// const FeaturedProducts = () => (
//   <section>
//     <SectionTitle>Featured Products</SectionTitle>
//     {/* Add your featured products component here */}
//   </section>
// );

const Newsletter = () => (
  <NewsletterContainer>
    <NewsletterContent>
      <h2>Subscribe to our Newsletter</h2>
      <p>Get updates on new arrivals and special offers</p>
      <NewsletterForm>
        <input type='email' placeholder='Your email address' />
        <button type='submit'>Subscribe</button>
      </NewsletterForm>
    </NewsletterContent>
  </NewsletterContainer>
);

const Benefits = () => (
  <BenefitsContainer>
    <BenefitItem>
      <Truck />
      <h3>Free Shipping</h3>
      <p>On orders over $50</p>
    </BenefitItem>
    <BenefitItem>
      <RefreshCw />
      <h3>Easy Returns</h3>
      <p>30-day return policy</p>
    </BenefitItem>
    <BenefitItem>
      <Shield />
      <h3>Secure Payment</h3>
      <p>100% secure checkout</p>
    </BenefitItem>
  </BenefitsContainer>
);

// import { Outlet } from 'react-router-dom';

// // import Directory from '../../components/directory/directory.component';

// import { useNavigate } from 'react-router-dom';
// import Directory from '../../components/directory/directory.component';
// import {
//   HomeContainer,
//   HeroBanner,
//   HeroContent,
//   ShopNowButton,
// } from './home.styles';

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <Directory />
//       <Outlet />
//     </div>
//   );
// };

export default Home;
