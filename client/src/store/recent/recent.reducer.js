// store/recent/recent.reducer.js
import { createSlice } from '@reduxjs/toolkit';

const recentSlice = createSlice({
  name: 'recent',
  initialState: {
    viewedProducts: [],
  },
  reducers: {
    addToRecentlyViewed: (state, action) => {
      const product = action.payload;
      state.viewedProducts = [
        product,
        ...state.viewedProducts.filter((p) => p.id !== product.id),
      ].slice(0, 5); // Keep only last 5 viewed
    },
  },
});

export const { addToRecentlyViewed } = recentSlice.actions;
export default recentSlice.reducer;
