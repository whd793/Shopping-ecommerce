// import {
//   BaseButton,
//   GoogleSignInButton,
//   InvertedButton,
// } from './button.styles';

// export const BUTTON_TYPE_CLASSES = {
//   base: 'base',
//   google: 'google-sign-in',
//   inverted: 'inverted',
// };

// const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
//   ({
//     [BUTTON_TYPE_CLASSES.base]: BaseButton,
//     [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
//     [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
//   }[buttonType]);

// const Button = ({ children, buttonType, ...otherProps }) => {
//   const CustomButton = getButton(buttonType);
//   return <CustomButton {...otherProps}>{children}</CustomButton>;
// };

// export default Button;

// import styled from 'styled-components';

// export const BaseButton = styled.button`
//   min-width: 165px;
//   width: auto;
//   height: 50px;
//   letter-spacing: 0.5px;
//   line-height: 50px;
//   padding: 0 35px 0 35px;
//   font-size: 15px;
//   background-color: black;
//   color: white;
//   text-transform: uppercase;
//   font-family: 'Open Sans Condensed';
//   font-weight: bolder;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;

//   &:hover {
//     background-color: white;
//     color: black;
//     border: 1px solid black;
//   }
// `;

// export const GoogleSignInButton = styled(BaseButton)`
//   background-color: #4285f4;
//   color: white;

//   &:hover {
//     background-color: #357ae8;
//     border: none;
//   }
// `;

// export const InvertedButton = styled(BaseButton)`
//   background-color: white;
//   color: black;
//   border: 1px solid black;

//   &:hover {
//     background-color: black;
//     color: white;
//     border: none;
//   }
// `;

// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import { selectCartItems } from '../../store/cart/cart.selector';
// import Button from '../button/button.component';
// import CartItem from '../cart-item/cart-item.component';

// import {
//   CartDropdownContainer,
//   EmptyMessage,
//   CartItems,
// } from './cart-dropdown.styles';

// const CartDropdown = () => {
//   const cartItems = useSelector(selectCartItems);
//   const navigate = useNavigate();

//   const goToCheckoutHandler = () => {
//     navigate('/checkout');
//   };

//   return (
//     <CartDropdownContainer>
//       <CartItems>
//         {cartItems.length ? (
//           cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
//         ) : (
//           <EmptyMessage>Your cart is empty</EmptyMessage>
//         )}
//       </CartItems>
//       <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
//     </CartDropdownContainer>
//   );
// };

// export default CartDropdown;

// import styled from 'styled-components';

// import {
//   BaseButton,
//   GoogleSignInButton,
//   InvertedButton,
// } from '../button/button.styles';

// export const CartDropdownContainer = styled.div`
//   position: absolute;
//   width: 240px;
//   height: 340px;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border: 1px solid black;
//   background-color: white;
//   top: 90px;
//   right: 40px;
//   z-index: 5;

//   ${BaseButton},
//   ${GoogleSignInButton},
//   ${InvertedButton} {
//     margin-top: auto;
//   }
// `;

// export const EmptyMessage = styled.span`
//   font-size: 18px;
//   margin: 50px auto;
// `;

// export const CartItems = styled.div`
//   height: 240px;
//   display: flex;
//   flex-direction: column;
//   overflow: scroll;
// `;

// import { useDispatch, useSelector } from 'react-redux';

// import {
//   selectCartCount,
//   selectIsCartOpen,
// } from '../../store/cart/cart.selector';
// import { setIsCartOpen } from '../../store/cart/cart.reducer';
// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// import { CartIconContainer, ItemCount } from './cart-icon.styles';

// const CartIcon = () => {
//   const dispatch = useDispatch();
//   const isCartOpen = useSelector(selectIsCartOpen);
//   const cartCount = useSelector(selectCartCount);

//   const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

//   return (
//     <CartIconContainer onClick={toggleIsCartOpen}>
//       <ShoppingIcon className='shopping-icon' />
//       <ItemCount>{cartCount}</ItemCount>
//     </CartIconContainer>
//   );
// };

// export default CartIcon;

// import styled from 'styled-components';

// export const CartIconContainer = styled.div`
//   width: 45px;
//   height: 45px;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;

//   svg {
//     width: 24px;
//     height: 24px;
//   }
// `;

// export const ItemCount = styled.span`
//   position: absolute;
//   font-size: 10px;
//   font-weight: bold;
//   bottom: 12px;
// `;

// import { CartItemContainer, ItemDetails } from './cart-item.styles';

// const CartItem = ({ cartItem }) => {
//   const { name, imageUrl, price, quantity } = cartItem;
//   return (
//     <CartItemContainer>
//       <img src={imageUrl} alt={`${name}`} />
//       <ItemDetails>
//         <span>{name}</span>
//         <span>
//           {quantity} x ${price}
//         </span>
//       </ItemDetails>
//     </CartItemContainer>
//   );
// };

// export default CartItem;

// import styled from 'styled-components';

// export const CartItemContainer = styled.div`
//   width: 100%;
//   display: flex;
//   height: 80px;
//   margin-bottom: 15px;

//   img {
//     width: 30%;
//   }
// `;

// export const ItemDetails = styled.div`
//   width: 70%;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   padding: 10px 20px;

//   span {
//     font-size: 16px;
//   }
// `;

// import './category-item.styles.scss';

// const CategoryItem = ({ category }) => {
//   const { imageUrl, title } = category;
//   return (
//     <div className='category-container'>
//       <div
//         className='background-image'
//         style={{
//           backgroundImage: `url(${imageUrl})`,
//         }}
//       />
//       <div className='category-body-container'>
//         <h2>{title}</h2>
//         <p>Shop Now</p>
//       </div>
//     </div>
//   );
// };

// export default CategoryItem;

// .category-container {
//   min-width: 30%;
//   height: 240px;
//   flex: 1 1 auto;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid black;
//   margin: 0 7.5px 15px;
//   overflow: hidden;

//   &:hover {
//     cursor: pointer;

//     & .background-image {
//       transform: scale(1.1);
//       transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
//     }

//     & .category-body-container {
//       opacity: 0.9;
//     }
//   }

//   &.large {
//     height: 380px;
//   }

//   &:first-child {
//     margin-right: 7.5px;
//   }

//   &:last-child {
//     margin-left: 7.5px;
//   }

//   .background-image {
//     width: 100%;
//     height: 100%;
//     background-size: cover;
//     background-position: center;
//   }

//   .category-body-container {
//     height: 90px;
//     padding: 0 25px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     border: 1px solid black;
//     background-color: white;
//     opacity: 0.7;
//     position: absolute;

//     h2 {
//       font-weight: bold;
//       margin: 0 6px 0;
//       font-size: 22px;
//       color: #4a4a4a;
//     }

//     p {
//       font-weight: lighter;
//       font-size: 16px;
//     }
//   }
// }

// import ProductCard from '../product-card/product-card.component';

// import {
//   CategoryPreviewContainer,
//   Title,
//   Preview,
// } from './category-preview.styles';

// const CategoryPreview = ({ title, products }) => {
//   return (
//     <CategoryPreviewContainer>
//       <h2>
//         <Title to={title}>{title.toUpperCase()}</Title>
//       </h2>
//       <Preview>
//         {products
//           .filter((_, idx) => idx < 4)
//           .map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//       </Preview>
//     </CategoryPreviewContainer>
//   );
// };

// export default CategoryPreview;

// import styled from 'styled-components';

// import { Link } from 'react-router-dom';

// export const CategoryPreviewContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 30px;
// `;

// export const Title = styled(Link)`
//   font-size: 28px;
//   margin-bottom: 25px;
//   cursor: pointer;
// `;

// export const Preview = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   column-gap: 20px;
// `;

// import './CategoryItem.styles.scss';

// const CategoryItem = ({ category }) => (
//   <div className='category-section'>
//     <div className='category-header'>
//       <h2>{category.title}</h2>
//       <button className='view-more-btn'>View More</button>
//     </div>
//     <div className='items-scroll-container'>
//       {category.items.map((item) => (
//         <div key={item.id} className='item-card'>
//           <img src={item.imageUrl} alt={item.name} />
//           <h3>{item.name}</h3>
//           <p>${item.price.toFixed(2)}</p>
//           <button className='add-to-cart-btn'>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default CategoryItem;

// .category-section {
//   margin-bottom: 40px;
// }

// .category-header {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 20px;
// }

// .category-header h2 {
//   font-size: 1.8rem;
//   color: var(--primary-color);
// }

// .items-scroll-container {
//   display: flex;
//   overflow-x: auto;
//   gap: 20px;
//   padding: 10px 0;
//   -webkit-overflow-scrolling: touch;
//   scrollbar-width: none;
//   -ms-overflow-style: none;
// }

// .items-scroll-container::-webkit-scrollbar {
//   display: none;
// }

// .item-card {
//   flex: 0 0 auto;
//   width: 200px;
//   background-color: white;
//   border-radius: 8px;
//   overflow: hidden;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease;
// }

// .item-card:hover {
//   transform: translateY(-5px);
// }

// .item-card img {
//   width: 100%;
//   height: 150px;
//   object-fit: cover;
// }

// .item-card h3 {
//   font-size: 1rem;
//   margin: 10px;
// }

// .item-card p {
//   font-size: 1.1rem;
//   font-weight: bold;
//   color: var(--secondary-color);
//   margin: 10px;
// }

// .add-to-cart-btn {
//   background-color: var(--primary-color);
//   color: white;
//   border: none;
//   padding: 8px 16px;
//   font-size: 0.9rem;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   border-radius: 4px;
//   margin: 10px;
//   width: calc(100% - 20px);
// }

// .add-to-cart-btn:hover {
//   background-color: #3476c5;
// }

// .view-more-btn {
//   background-color: transparent;
//   color: var(--primary-color);
//   border: 2px solid var(--primary-color);
//   padding: 8px 16px;
//   font-size: 0.9rem;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   border-radius: 4px;
// }

// .view-more-btn:hover {
//   background-color: var(--primary-color);
//   color: white;
// }

// import { useDispatch } from 'react-redux';

// import {
//   clearItemFromCart,
//   addItemToCart,
//   removeItemFromCart,
// } from '../../store/cart/cart.reducer';

// import {
//   CheckoutItemContainer,
//   ImageContainer,
//   BaseSpan,
//   Quantity,
//   Arrow,
//   Value,
//   RemoveButton,
// } from './checkout-item.styles';

// const CheckoutItem = ({ cartItem }) => {
//   const { name, imageUrl, price, quantity } = cartItem;
//   const dispatch = useDispatch();

//   const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
//   const addItemHandler = () => dispatch(addItemToCart(cartItem));
//   const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

//   return (
//     <CheckoutItemContainer>
//       <ImageContainer>
//         <img src={imageUrl} alt={`${name}`} />
//       </ImageContainer>
//       <BaseSpan> {name} </BaseSpan>
//       <Quantity>
//         <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
//         <Value>{quantity}</Value>
//         <Arrow onClick={addItemHandler}>&#10095;</Arrow>
//       </Quantity>
//       <BaseSpan> {price}</BaseSpan>
//       <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
//     </CheckoutItemContainer>
//   );
// };

// export default CheckoutItem;

// import styled from 'styled-components';

// export const CheckoutItemContainer = styled.div`
//   width: 100%;
//   display: flex;
//   min-height: 100px;
//   border-bottom: 1px solid darkgrey;
//   padding: 15px 0;
//   font-size: 20px;
//   align-items: center;
// `;

// export const ImageContainer = styled.div`
//   width: 23%;
//   padding-right: 15px;

//   img {
//     width: 100%;
//     height: 100%;
//   }
// `;

// export const BaseSpan = styled.span`
//   width: 23%;
// `;

// export const Quantity = styled(BaseSpan)`
//   display: flex;
// `;

// export const Arrow = styled.div`
//   cursor: pointer;
// `;

// export const Value = styled.span`
//   margin: 0 10px;
// `;

// export const RemoveButton = styled.div`
//   padding-left: 12px;
//   cursor: pointer;
// `;

// import DirectoryItem from '../directory-item/directory-item.component';

// import { DirectoryContainer } from './directory.styles';
// const categories = [
//   {
//     id: 1,
//     title: 'hats',
//     imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
//     route: 'shop/hats',
//   },
//   {
//     id: 2,
//     title: 'jackets',
//     imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
//     route: 'shop/jackets',
//   },
//   {
//     id: 3,
//     title: 'sneakers',
//     imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
//     route: 'shop/sneakers',
//   },
//   {
//     id: 4,
//     title: 'womens',
//     imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
//     route: 'shop/womens',
//   },
//   {
//     id: 5,
//     title: 'mens',
//     imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
//     route: 'shop/mens',
//   },
// ];

// const Directory = () => {
//   return (
//     <DirectoryContainer>
//       {categories.map((category) => (
//         <DirectoryItem key={category.id} category={category} />
//       ))}
//     </DirectoryContainer>
//   );
// };

// export default Directory;

// import styled from 'styled-components';

// export const DirectoryContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `;

// import { useNavigate } from 'react-router-dom';
// import {
//   BackgroundImage,
//   Body,
//   DirectoryItemContainer,
// } from './directory-item.styles';

// const DirectoryItem = ({ category }) => {
//   const { imageUrl, title, route } = category;
//   const navigate = useNavigate();

//   const onNavigateHandler = () => navigate(route);
//   return (
//     <DirectoryItemContainer onClick={onNavigateHandler}>
//       <BackgroundImage imageUrl={imageUrl} />
//       <Body>
//         <h2>{title}</h2>
//         <p>Shop Now</p>
//       </Body>
//     </DirectoryItemContainer>
//   );
// };

// export default DirectoryItem;

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

// import { FormInputLabel, Input, Group } from './form-input.styles';

// const FormInput = ({ label, ...otherProps }) => {
//   return (
//     <Group>
//       <Input {...otherProps} />
//       {label && (
//         <FormInputLabel shrink={otherProps.value.length}>
//           {label}
//         </FormInputLabel>
//       )}
//     </Group>
//   );
// };

// export default FormInput;

// import styled, { css } from 'styled-components';

// const subColor = 'grey';
// const mainColor = 'black';

// const shrinkLabelStyles = css`
//   top: -14px;
//   font-size: 12px;
//   color: ${mainColor};
// `;

// export const FormInputLabel = styled.label`
//   color: ${subColor};
//   font-size: 16px;
//   font-weight: normal;
//   position: absolute;
//   pointer-events: none;
//   left: 5px;
//   top: 10px;
//   transition: 300ms ease all;
//   ${({ shrink }) => shrink && shrinkLabelStyles};
// `;

// export const Input = styled.input`
//   background: none;
//   background-color: white;
//   color: ${subColor};
//   font-size: 18px;
//   padding: 10px 10px 10px 5px;
//   display: block;
//   width: 100%;
//   border: none;
//   border-radius: 0;
//   border-bottom: 1px solid ${subColor};
//   margin: 25px 0;

//   &:focus {
//     outline: none;
//   }

//   &:focus ~ ${FormInputLabel} {
//     ${shrinkLabelStyles};
//   }
// `;

// export const Group = styled.div`
//   position: relative;
//   margin: 45px 0;

//   input[type='password'] {
//     letter-spacing: 0.3em;
//   }
// `;

// import { useDispatch } from 'react-redux';

// import { addItemToCart } from '../../store/cart/cart.reducer';

// import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

// import {
//   ProductCartContainer,
//   Footer,
//   Name,
//   Price,
// } from './product-card.styles';

// const ProductCard = ({ product }) => {
//   const { name, price, imageUrl } = product;
//   const dispatch = useDispatch();

//   const addProductToCart = () => dispatch(addItemToCart(product));

//   return (
//     <ProductCartContainer>
//       <img src={imageUrl} alt={`${name}`} />
//       <Footer>
//         <Name>{name}</Name>
//         <Price>{price}</Price>
//       </Footer>
//       <Button
//         buttonType={BUTTON_TYPE_CLASSES.inverted}
//         onClick={addProductToCart}
//       >
//         Add to card
//       </Button>
//     </ProductCartContainer>
//   );
// };

// export default ProductCard;

// import styled from 'styled-components';

// export const ProductCartContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   height: 350px;
//   align-items: center;
//   position: relative;

//   img {
//     width: 100%;
//     height: 95%;
//     object-fit: cover;
//     margin-bottom: 5px;
//   }

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

// import { useState } from 'react';

// import FormInput from '../form-input/form-input.component';
// import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

// import {
//   signInAuthUserWithEmailAndPassword,
//   signInWithGooglePopup,
// } from '../../utils/firebase/firebase.utils';

// import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';

// const defaultFormFields = {
//   email: '',
//   password: '',
// };

// const SignInForm = () => {
//   const [formFields, setFormFields] = useState(defaultFormFields);
//   const { email, password } = formFields;

//   const resetFormFields = () => {
//     setFormFields(defaultFormFields);
//   };

//   const signInWithGoogle = async () => {
//     await signInWithGooglePopup();
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       await signInAuthUserWithEmailAndPassword(email, password);
//       resetFormFields();
//     } catch (error) {
//       console.log('user sign in failed', error);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormFields({ ...formFields, [name]: value });
//   };

//   return (
//     <SignInContainer>
//       <h2>Already have an account?</h2>
//       <span>Sign in with your email and password</span>
//       <form onSubmit={handleSubmit}>
//         <FormInput
//           label='Email'
//           type='email'
//           required
//           onChange={handleChange}
//           name='email'
//           value={email}
//         />

//         <FormInput
//           label='Password'
//           type='password'
//           required
//           onChange={handleChange}
//           name='password'
//           value={password}
//         />
//         <ButtonsContainer>
//           <Button type='submit'>Sign In</Button>
//           <Button
//             buttonType={BUTTON_TYPE_CLASSES.google}
//             type='button'
//             onClick={signInWithGoogle}
//           >
//             Sign In With Google
//           </Button>
//         </ButtonsContainer>
//       </form>
//     </SignInContainer>
//   );
// };

// export default SignInForm;

// import styled from 'styled-components';

// export const SignInContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 380px;

//   h2 {
//     margin: 10px 0;
//   }
// `;

// export const ButtonsContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// import { useState } from 'react';

// import FormInput from '../form-input/form-input.component';
// import Button from '../button/button.component';

// import {
//   createAuthUserWithEmailAndPassword,
//   createUserDocumentFromAuth,
// } from '../../utils/firebase/firebase.utils';

// import { SignUpContainer } from './sign-up-form.styles';

// const defaultFormFields = {
//   displayName: '',
//   email: '',
//   password: '',
//   confirmPassword: '',
// };

// const SignUpForm = () => {
//   const [formFields, setFormFields] = useState(defaultFormFields);
//   const { displayName, email, password, confirmPassword } = formFields;

//   const resetFormFields = () => {
//     setFormFields(defaultFormFields);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (password !== confirmPassword) {
//       alert('passwords do not match');
//       return;
//     }

//     try {
//       const { user } = await createAuthUserWithEmailAndPassword(
//         email,
//         password
//       );

//       await createUserDocumentFromAuth(user, { displayName });
//       resetFormFields();
//     } catch (error) {
//       if (error.code === 'auth/email-already-in-use') {
//         alert('Cannot create user, email already in use');
//       } else {
//         console.log('user creation encountered an error', error);
//       }
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormFields({ ...formFields, [name]: value });
//   };

//   return (
//     <SignUpContainer>
//       <h2>Don't have an account?</h2>
//       <span>Sign up with your email and password</span>
//       <form onSubmit={handleSubmit}>
//         <FormInput
//           label='Display Name'
//           type='text'
//           required
//           onChange={handleChange}
//           name='displayName'
//           value={displayName}
//         />

//         <FormInput
//           label='Email'
//           type='email'
//           required
//           onChange={handleChange}
//           name='email'
//           value={email}
//         />

//         <FormInput
//           label='Password'
//           type='password'
//           required
//           onChange={handleChange}
//           name='password'
//           value={password}
//         />

//         <FormInput
//           label='Confirm Password'
//           type='password'
//           required
//           onChange={handleChange}
//           name='confirmPassword'
//           value={confirmPassword}
//         />
//         <Button type='submit'>Sign Up</Button>
//       </form>
//     </SignUpContainer>
//   );
// };

// export default SignUpForm;

// import styled from 'styled-components';

// export const SignUpContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 380px;

//   h2 {
//     margin: 10px 0;
//   }
// `;

// import { createContext, useState, useEffect } from 'react';

// const addCartItem = (cartItems, productToAdd) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );

//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// const removeCartItem = (cartItems, cartItemToRemove) => {
//   // find the cart item to remove
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === cartItemToRemove.id
//   );

//   // check if quantity is equal to 1, if it is remove that item from the cart
//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
//   }

//   // return back cartitems with matching cart item with reduced quantity
//   return cartItems.map((cartItem) =>
//     cartItem.id === cartItemToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };

// const clearCartItem = (cartItems, cartItemToClear) =>
//   cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   removeItemFromCart: () => {},
//   clearItemFromCart: () => {},
//   cartCount: 0,
//   cartTotal: 0,
// });

// export const CartProvider = ({ children }) => {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [cartTotal, setCartTotal] = useState(0);

//   useEffect(() => {
//     const newCartCount = cartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity,
//       0
//     );
//     setCartCount(newCartCount);
//   }, [cartItems]);

//   useEffect(() => {
//     const newCartTotal = cartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity * cartItem.price,
//       0
//     );
//     setCartTotal(newCartTotal);
//   }, [cartItems]);

//   const addItemToCart = (productToAdd) => {
//     setCartItems(addCartItem(cartItems, productToAdd));
//   };

//   const removeItemToCart = (cartItemToRemove) => {
//     setCartItems(removeCartItem(cartItems, cartItemToRemove));
//   };

//   const clearItemFromCart = (cartItemToClear) => {
//     setCartItems(clearCartItem(cartItems, cartItemToClear));
//   };

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addItemToCart,
//     removeItemToCart,
//     clearItemFromCart,
//     cartItems,
//     cartCount,
//     cartTotal,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

// import { createContext, useState, useEffect } from 'react';

// import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

// export const CategoriesContext = createContext({
//   categoriesMap: {},
// });

// export const CategoriesProvider = ({ children }) => {
//   const [categoriesMap, setCategoriesMap] = useState({});

//   useEffect(() => {
//     const getCategoriesMap = async () => {
//       const categoryMap = await getCategoriesAndDocuments('categories');
//       setCategoriesMap(categoryMap);
//     };

//     getCategoriesMap();
//   }, []);

//   const value = { categoriesMap };
//   return (
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };

// import { createContext, useState, useEffect } from 'react';

// import {
//   addCollectionAndDocuments,
//   getCategoriesAndDocuments,
// } from '../utils/firebase/firebase.utils';

// import SHOP_DATA from '../shop-data.js';
// export const ProductsContext = createContext({
//   products: [],
// });

// export const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     console.log(SHOP_DATA); // Should log the array

//     addCollectionAndDocuments('categories', SHOP_DATA);
//     // console.log(categoryMap);
//   }, []);

//   const value = { products };
//   return (
//     <ProductsContext.Provider value={value}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };

// import { createContext, useState, useEffect } from 'react';

// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
// } from '../utils/firebase/firebase.utils';

// export const UserContext = createContext({
//   setCurrentUser: () => null,
//   currentUser: null,
// });

// export const UserProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const value = { currentUser, setCurrentUser };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChangedListener((user) => {
//       if (user) {
//         createUserDocumentFromAuth(user);
//       }
//       setCurrentUser(user);
//     });

//     return unsubscribe;
//   }, []);

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };

// // src/routes/
// import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
// import SignInForm from '../../components/sign-in-form/sign-in-form.component';

// import { AuthenticationContainer } from './authentication.styles';

// const Authentication = () => {
//   return (
//     <AuthenticationContainer>
//       <SignInForm />
//       <SignUpForm />
//     </AuthenticationContainer>
//   );
// };

// export default Authentication;

// import styled from 'styled-components';

// export const AuthenticationContainer = styled.div`
//   display: flex;
//   width: 900px;
//   justify-content: space-between;
//   margin: 30px auto;
// `;

// import { Fragment } from 'react';
// import { useSelector } from 'react-redux';

// import { selectCategoriesMap } from '../../store/categories/category.selector';

// import CategoryPreview from '../../components/category-preview/category-preview.component';

// const CategoriesPreview = () => {
//   const categoriesMap = useSelector(selectCategoriesMap);

//   return (
//     <Fragment>
//       {Object.keys(categoriesMap).map((title) => {
//         const products = categoriesMap[title];
//         return (
//           <CategoryPreview key={title} title={title} products={products} />
//         );
//       })}
//     </Fragment>
//   );
// };

// export default CategoriesPreview;

// import { useState, useEffect, Fragment } from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

// import ProductCard from '../../components/product-card/product-card.component';

// import { selectCategoriesMap } from '../../store/categories/category.selector';

// import { CategoryContainer, Title } from './category.styles';

// const Category = () => {
//   const { category } = useParams();
//   const categoriesMap = useSelector(selectCategoriesMap);
//   const [products, setProducts] = useState(categoriesMap[category]);

//   useEffect(() => {
//     setProducts(categoriesMap[category]);
//   }, [category, categoriesMap]);

//   return (
//     <Fragment>
//       <Title>{category.toUpperCase()}</Title>
//       <CategoryContainer>
//         {products &&
//           products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//       </CategoryContainer>
//     </Fragment>
//   );
// };

// export default Category;

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

// import { useSelector } from 'react-redux';

// import {
//   selectCartItems,
//   selectCartTotal,
// } from '../../store/cart/cart.selector';

// import CheckoutItem from '../../components/checkout-item/checkout-item.component';

// import {
//   CheckoutContainer,
//   CheckoutHeader,
//   HeaderBlock,
//   Total,
// } from './checkout.styles';

// const Checkout = () => {
//   const cartItems = useSelector(selectCartItems);
//   const cartTotal = useSelector(selectCartTotal);

//   return (
//     <CheckoutContainer>
//       <CheckoutHeader>
//         <HeaderBlock>
//           <span>Product</span>
//         </HeaderBlock>
//         <HeaderBlock>
//           <span>Description</span>
//         </HeaderBlock>
//         <HeaderBlock>
//           <span>Quantity</span>
//         </HeaderBlock>
//         <HeaderBlock>
//           <span>Price</span>
//         </HeaderBlock>
//         <HeaderBlock>
//           <span>Remove</span>
//         </HeaderBlock>
//       </CheckoutHeader>
//       {cartItems.map((cartItem) => (
//         <CheckoutItem key={cartItem.id} cartItem={cartItem} />
//       ))}
//       <Total>Total: ${cartTotal}</Total>
//     </CheckoutContainer>
//   );
// };

// export default Checkout;

// import styled from 'styled-components';

// export const CheckoutContainer = styled.div`
//   width: 55%;
//   min-height: 90vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 50px auto 0;
// `;

// export const CheckoutHeader = styled.div`
//   width: 100%;
//   padding: 10px 0;
//   display: flex;
//   justify-content: space-between;
//   border-bottom: 1px solid darkgrey;
// `;

// export const HeaderBlock = styled.div`
//   text-transform: capitalize;
//   width: 23%;

//   &:last-child {
//     width: 8%;
//   }
// `;

// export const Total = styled.span`
//   margin-top: 30px;
//   margin-left: auto;
//   font-size: 36px;
// `;

// import { Outlet } from 'react-router-dom';

// import Directory from '../../components/directory/directory.component';

// const Home = () => {
//   return (
//     <div>
//       <Directory />
//       <Outlet />
//     </div>
//   );
// };

// export default Home;

// import { Fragment } from 'react';
// import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import CartIcon from '../../components/cart-icon/cart-icon.component';
// import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

// import { selectCurrentUser } from '../../store/user/user.selector';
// import { selectIsCartOpen } from '../../store/cart/cart.selector';

// import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
// import { signOutUser } from '../../utils/firebase/firebase.utils';

// import {
//   NavigationContainer,
//   NavLinks,
//   NavLink,
//   LogoContainer,
// } from './navigation.styles';

// const Navigation = () => {
//   const currentUser = useSelector(selectCurrentUser);
//   const isCartOpen = useSelector(selectIsCartOpen);

//   return (
//     <Fragment>
//       <NavigationContainer>
//         <LogoContainer to='/'>
//           <CrwnLogo className='logo' />
//         </LogoContainer>
//         <NavLinks>
//           <NavLink to='/shop'>SHOP</NavLink>

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

// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// export const NavigationContainer = styled.div`
//   height: 70px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 25px;
// `;

// export const LogoContainer = styled(Link)`
//   height: 100%;
//   width: 70px;
//   padding: 25px;
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

// import { useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// import CategoriesPreview from '../categories-preview/categories-preview.component';
// import Category from '../category/category.component';
// import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
// import { setCategories } from '../../store/categories/category.reducer';

// const Shop = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const getCategoriesMap = async () => {
//       const categoriesArray = await getCategoriesAndDocuments('categories');
//       dispatch(setCategories(categoriesArray));
//     };

//     getCategoriesMap();
//   }, []);

//   return (
//     <Routes>
//       <Route index element={<CategoriesPreview />} />
//       <Route path=':category' element={<Category />} />
//     </Routes>
//   );
// };

// export default Shop;

// // .products-container {
// //   display: grid;
// //   grid-template-columns: repeat(4, 1fr);
// //   column-gap: 10px;
// //   row-gap: 50px;
// // }
// .shop-container {
//   display: flex;
//   flex-direction: column;
// }

// import { createSlice } from '@reduxjs/toolkit';

// const addCartItem = (cartItems, productToAdd) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );

//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// const removeCartItem = (cartItems, cartItemToRemove) => {
//   // find the cart item to remove
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === cartItemToRemove.id
//   );

//   // check if quantity is equal to 1, if it is remove that item from the cart
//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
//   }

//   // return back cartitems with matching cart item with reduced quantity
//   return cartItems.map((cartItem) =>
//     cartItem.id === cartItemToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };

// const clearCartItem = (cartItems, cartItemToClear) =>
//   cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// const CART_INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
// };

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState: CART_INITIAL_STATE,
//   reducers: {
//     setIsCartOpen(state, action) {
//       state.isCartOpen = action.payload;
//     },
//     addItemToCart(state, action) {
//       state.cartItems = addCartItem(state.cartItems, action.payload);
//     },
//     removeItemFromCart(state, action) {
//       state.cartItems = removeCartItem(state.cartItems, action.payload);
//     },
//     clearItemFromCart(state, action) {
//       state.cartItems = clearCartItem(state.cartItems, action.payload);
//     },
//   },
// });

// export const {
//   setIsCartOpen,
//   addItemToCart,
//   removeItemFromCart,
//   clearItemFromCart,
// } = cartSlice.actions;

// export const cartReducer = cartSlice.reducer;

// import { createSelector } from 'reselect';

// const selectCartReducer = (state) => state.cart;

// export const selectIsCartOpen = createSelector(
//   [selectCartReducer],
//   (cart) => cart.isCartOpen
// );

// export const selectCartItems = createSelector(
//   [selectCartReducer],
//   (cart) => cart.cartItems
// );

// export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
//   cartItems.reduce(
//     (total, cartItem) => total + cartItem.quantity * cartItem.price,
//     0
//   )
// );

// export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
//   cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
// );

// import { createSlice } from '@reduxjs/toolkit';

// export const CATEGORIES_INITIAL_STATE = {
//   categories: [],
// };

// export const categoriesSlice = createSlice({
//   name: 'categories',
//   initialState: CATEGORIES_INITIAL_STATE,
//   reducers: {
//     setCategories(state, action) {
//       state.categories = action.payload;
//     },
//   },
// });

// export const { setCategories } = categoriesSlice.actions;

// export const categoriesReducer = categoriesSlice.reducer;

// import { createSelector } from 'reselect';

// const selectCategoryReducer = (state) => state.categories;

// export const selectCategories = createSelector(
//   [selectCategoryReducer],
//   (categoriesSlice) => categoriesSlice.categories
// );

// export const selectCategoriesMap = createSelector(
//   [selectCategories],
//   (categories) =>
//     categories.reduce((acc, category) => {
//       const { title, items } = category;
//       acc[title.toLowerCase()] = items;
//       return acc;
//     }, {})
// );

// import { createSlice } from '@reduxjs/toolkit';

// const INITIAL_STATE = {
//   currentUser: null,
//   test: { a: 1 },
// };

// export const userSlice = createSlice({
//   name: 'user',
//   initialState: INITIAL_STATE,
//   reducers: {
//     setCurrentUser(state, action) {
//       state.currentUser = action.payload;
//     },
//   },
// });

// export const { setCurrentUser } = userSlice.actions;

// export const userReducer = userSlice.reducer;

// export const selectCurrentUser = (state) => state.user.currentUser;

// import { combineReducers } from '@reduxjs/toolkit';

// import { userReducer } from './user/user.reducer';
// import { categoriesReducer } from './categories/category.reducer';
// import { cartReducer } from './cart/cart.reducer';

// export const rootReducer = combineReducers({
//   user: userReducer,
//   categories: categoriesReducer,
//   cart: cartReducer,
// });

// // import { compose, createStore, applyMiddleware } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
// // import { persistStore, persistReducer } from 'redux-persist';
// // import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';

// import { rootReducer } from './root-reducer';

// const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
//   Boolean
// );

// // const composeEnhancer =
// //   (process.env.NODE_ENV !== 'production' &&
// //     window &&
// //     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
// //   compose;

// // const persistConfig = {
// //   key: 'root',
// //   storage,
// //   blacklist: ['user'],
// // };

// // const persistedReducer = persistReducer(persistConfig, rootReducer);

// // const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(middleWares),
// });

// // export const persistor = persistStore(store);

// // src/utils/firebase/
// import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   signInWithRedirect,
//   signInWithPopup,
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from 'firebase/auth';
// import {
//   getFirestore,
//   doc,
//   getDoc,
//   setDoc,
//   collection,
//   writeBatch,
//   query,
//   getDocs,
// } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDDU4V-_QV3M8GyhC9SVieRTDM4dbiT0Yk',
//   authDomain: 'crwn-clothing-db-98d4d.firebaseapp.com',
//   projectId: 'crwn-clothing-db-98d4d',
//   storageBucket: 'crwn-clothing-db-98d4d.appspot.com',
//   messagingSenderId: '626766232035',
//   appId: '1:626766232035:web:506621582dab103a4d08d6',
// };

// const firebaseApp = initializeApp(firebaseConfig);

// const googleProvider = new GoogleAuthProvider();

// googleProvider.setCustomParameters({
//   prompt: 'select_account',
// });

// export const auth = getAuth();
// export const signInWithGooglePopup = () =>
//   signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

// export const db = getFirestore();

// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd,
//   field
// ) => {
//   const collectionRef = collection(db, collectionKey);
//   const batch = writeBatch(db);

//   objectsToAdd.forEach((object) => {
//     const docRef = doc(collectionRef, object.title.toLowerCase());
//     batch.set(docRef, object);
//   });

//   await batch.commit();
//   console.log('done');
// };

// export const getCategoriesAndDocuments = async () => {
//   const collectionRef = collection(db, 'categories');
//   const q = query(collectionRef);

//   const querySnapshot = await getDocs(q);
//   return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
// };

// export const createUserDocumentFromAuth = async (
//   userAuth,
//   additionalInformation = {}
// ) => {
//   if (!userAuth) return;

//   const userDocRef = doc(db, 'users', userAuth.uid);

//   const userSnapshot = await getDoc(userDocRef);

//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//         ...additionalInformation,
//       });
//     } catch (error) {
//       console.log('error creating the user', error.message);
//     }
//   }

//   return userDocRef;
// };

// export const createAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   return await createUserWithEmailAndPassword(auth, email, password);
// };

// export const signInAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   return await signInWithEmailAndPassword(auth, email, password);
// };

// export const signOutUser = async () => await signOut(auth);

// export const onAuthStateChangedListener = (callback) =>
//   onAuthStateChanged(auth, callback);

// export const createAction = (type, payload) => ({ type, payload });

// // app.js
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { Routes, Route } from 'react-router-dom';

// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
// } from './utils/firebase/firebase.utils';
// import Home from './routes/home/home.component';
// import Navigation from './routes/navigation/navigation.component';
// import Authentication from './routes/authentication/authentication.component';
// import Shop from './routes/shop/shop.component';
// import Checkout from './routes/checkout/checkout.component';
// import { setCurrentUser } from './store/user/user.reducer';

// const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChangedListener((user) => {
//       if (user) {
//         createUserDocumentFromAuth(user);
//       }
//       const pickedUser =
//         user && (({ accessToken, email }) => ({ accessToken, email }))(user);

//       console.log(setCurrentUser(pickedUser));
//       dispatch(setCurrentUser(pickedUser));
//     });

//     return unsubscribe;
//   }, []);

//   return (
//     <Routes>
//       <Route path='/' element={<Navigation />}>
//         <Route index element={<Home />} />
//         <Route path='shop/*' element={<Shop />} />
//         <Route path='auth' element={<Authentication />} />
//         <Route path='checkout' element={<Checkout />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;

// // app.css
// .homepage {
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 20px;
// }

// .header {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px 0;
//   border-bottom: 1px solid #eee;
// }

// .header h1 {
//   font-size: 2rem;
//   color: var(--primary-color);
// }

// .main-nav ul {
//   display: flex;
//   list-style-type: none;
// }

// .main-nav ul li {
//   margin-left: 20px;
// }

// .main-nav ul li a {
//   text-decoration: none;
//   color: var(--text-color);
//   font-weight: 500;
//   transition: color 0.3s ease;
// }

// .main-nav ul li a:hover {
//   color: var(--primary-color);
// }

// .hamburger-menu {
//   display: none;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 30px;
//   height: 25px;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
// }

// .hamburger-menu span {
//   width: 30px;
//   height: 3px;
//   background-color: var(--text-color);
//   transition: all 0.3s linear;
// }

// .hero {
//   background-image: url('https://example.com/hero-image.jpg');
//   background-size: cover;
//   background-position: center;
//   height: 400px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   color: white;
//   margin-bottom: 40px;
// }

// .hero-content {
//   background-color: rgba(0, 0, 0, 0.6);
//   padding: 30px;
//   border-radius: 8px;
// }

// .hero h2 {
//   font-size: 2.5rem;
//   margin-bottom: 10px;
// }

// .cta-button {
//   background-color: var(--secondary-color);
//   color: white;
//   border: none;
//   padding: 12px 24px;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   border-radius: 4px;
//   margin-top: 20px;
// }

// .cta-button:hover {
//   background-color: #e67e22;
// }

// footer {
//   text-align: center;
//   margin-top: 40px;
//   padding: 20px 0;
//   border-top: 1px solid #eee;
// }

// @media (max-width: 768px) {
//   .header {
//     flex-wrap: wrap;
//   }

//   .hamburger-menu {
//     display: flex;
//   }

//   .main-nav {
//     position: fixed;
//     top: 0;
//     left: -100%;
//     width: 250px;
//     height: 100vh;
//     background-color: white;
//     padding: 20px;
//     transition: left 0.3s ease;
//     z-index: 1000;
//   }

//   .main-nav.open {
//     left: 0;
//   }

//   .main-nav ul {
//     flex-direction: column;
//   }

//   .main-nav ul li {
//     margin-left: 0;
//     margin-bottom: 20px;
//   }

//   .hero {
//     height: 300px;
//   }

//   .hero h2 {
//     font-size: 2rem;
//   }

//   .item-card {
//     width: 160px;
//   }
// }

// /* HomePage.css */

// /* ... (previous styles remain the same) */

// .hamburger-menu {
//   display: none;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 30px;
//   height: 25px;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   z-index: 1001;
// }

// .hamburger-menu span {
//   width: 30px;
//   height: 3px;
//   background-color: var(--text-color);
//   transition: all 0.3s linear;
// }

// .close-menu {
//   display: none;
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background: transparent;
//   border: none;
//   font-size: 24px;
//   cursor: pointer;
//   color: var(--text-color);
// }

// .overlay {
//   display: none;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 999;
// }

// @media (max-width: 768px) {
//   .header {
//     flex-wrap: wrap;
//   }

//   .hamburger-menu {
//     display: flex;
//   }

//   .main-nav {
//     position: fixed;
//     top: 0;
//     left: -100%;
//     width: 250px;
//     height: 100vh;
//     background-color: white;
//     padding: 50px 20px 20px;
//     transition: left 0.3s ease;
//     z-index: 1000;
//   }

//   .main-nav.open {
//     left: 0;
//   }

//   .close-menu {
//     display: block;
//   }

//   .main-nav ul {
//     flex-direction: column;
//   }

//   .main-nav ul li {
//     margin-left: 0;
//     margin-bottom: 20px;
//   }

//   .overlay {
//     display: block;
//   }

//   /* ... (other mobile styles remain the same) */
// }

// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import './index.css';
// import './index.scss';

// import App from './App';
// // import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
// // import { UserProvider } from './contexts/user.context';
// // import { CategoriesProvider } from './contexts/categories.context';
// // import { CartProvider } from './contexts/cart.context';
// import { Provider } from 'react-redux';
// import { store, persistor } from './store/store';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       {/* <PersistGate loading={null} persistor={persistor}> */}
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//       {/* </PersistGate> */}
//     </Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
