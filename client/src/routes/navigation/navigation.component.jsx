// routes/navigation/navigation.component.jsx
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useSelector } from 'react-redux';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import WishlistIcon from '../../components/wishlist-icon/wishlist-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import SearchBox from '../../components/search-box/search-box.component';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  MobileMenuButton,
  SearchWrapper,
  Overlay,
} from './navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>

        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>

        {isMobileMenuOpen && <Overlay onClick={closeMobileMenu} />}

        <NavLinks
          $isOpen={isMobileMenuOpen}
          onClick={(e) => e.stopPropagation()}
        >
          <SearchWrapper>
            <SearchBox />
          </SearchWrapper>
          <NavLink to='/shop' onClick={closeMobileMenu}>
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink
              as='span'
              onClick={() => {
                signOutUser();
                closeMobileMenu();
              }}
            >
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth' onClick={closeMobileMenu}>
              SIGN IN
            </NavLink>
          )}
          <WishlistIcon />
          <CartIcon />
        </NavLinks>

        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

// import { Fragment } from 'react';
// import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import CartIcon from '../../components/cart-icon/cart-icon.component';
// import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

// import { selectCurrentUser } from '../../store/user/user.selector';
// import { selectIsCartOpen } from '../../store/cart/cart.selector';

// import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
// import { signOutUser } from '../../utils/firebase/firebase.utils';

// import SearchBox from '../../components/search-box/search-box.component';
// import WishlistIcon from '../../components/wishlist-icon/wishlist-icon.component';

// import {
//   NavigationContainer,
//   NavLinks,
//   NavLink,
//   LogoContainer,
// } from './navigation.styles';
// import { VelvetLogo } from '../../assets/Velvet-logo';
// const Navigation = () => {
//   const currentUser = useSelector(selectCurrentUser);
//   const isCartOpen = useSelector(selectIsCartOpen);

//   return (
//     <Fragment>
//       <NavigationContainer>
//         <LogoContainer to='/'>
//           <CrwnLogo className='logo' />

//           {/* <VelvetLogo className='logovelvet' /> */}
//         </LogoContainer>
//         <NavLinks>
//           <SearchBox />

//           <NavLink to='/shop'>SHOP</NavLink>
//           <WishlistIcon />

//           {currentUser ? (
//             <NavLink as='span' onClick={signOutUser}>
//               SIGN OUT
//             </NavLink>
//           ) : (
//             <NavLink to='/auth'>SIGN IN</NavLink>
//           )}
//           <CartIcon />
//         </NavLinks>
//         {isCartOpen && <CartDropdown />}
//       </NavigationContainer>
//       <Outlet />
//     </Fragment>
//   );
// };

// export default Navigation;
