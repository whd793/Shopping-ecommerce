// store/recent/recent.reducer.js
import { createSlice } from '@reduxjs/toolkit';

const recentSlice = createSlice({
  name: 'recent',
  initialState: {
    recentlyViewed: [],
  },
  reducers: {
    addToRecentlyViewed: (state, action) => {
      // Remove if already exists
      state.recentlyViewed = state.recentlyViewed.filter(
        (item) => item.id !== action.payload.id
      );
      // Add to front of array
      state.recentlyViewed.unshift(action.payload);
      // Keep only last 8 items
      state.recentlyViewed = state.recentlyViewed.slice(0, 8);
    },
  },
});

export const { addToRecentlyViewed } = recentSlice.actions;
export const recentReducer = recentSlice.reducer;

// // store/recent/recent.reducer.js
// import { createSlice } from '@reduxjs/toolkit';

// const recentSlice = createSlice({
//   name: 'recent',
//   initialState: {
//     viewedProducts: [],
//   },
//   reducers: {
//     addToRecentlyViewed: (state, action) => {
//       const product = action.payload;
//       state.viewedProducts = [
//         product,
//         ...state.viewedProducts.filter((p) => p.id !== product.id),
//       ].slice(0, 5); // Keep only last 5 viewed
//     },
//   },
// });

// export const { addToRecentlyViewed } = recentSlice.actions;
// export default recentSlice.reducer;
