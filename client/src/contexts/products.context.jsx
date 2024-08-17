import { createContext, useState, useEffect } from 'react';

import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from '../utils/firebase/firebase.utils';

import SHOP_DATA from '../shop-data.js';
export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(SHOP_DATA); // Should log the array

    addCollectionAndDocuments('categories', SHOP_DATA);
    // console.log(categoryMap);
  }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
