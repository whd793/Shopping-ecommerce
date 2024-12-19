import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';
import { wishlistReducer } from './wishlist/wishlist.reducer'; // Add this
import { recentReducer } from './recent/recent.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  recent: recentReducer,
});
