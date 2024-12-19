import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';
import Home from './routes/home/home.component';
// import Navigation from './routes/navigation/navigation.component';
// import Authentication from './routes/authentication/authentication.component';
// import Shop from './routes/shop/shop.component';
// import Checkout from './routes/checkout/checkout.component';
import { setCurrentUser } from './store/user/user.reducer';

import Spinner from './components/spinner/spinner.component';
import { Suspense, lazy } from 'react';

const Shop = lazy(() => import('./routes/shop/shop.component'));
const Navigation = lazy(() =>
  import('./routes/navigation/navigation.component')
);
const Authentication = lazy(() =>
  import('./routes/authentication/authentication.component')
);
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));

const Search = lazy(() => import('./routes/search/search.component'));
const Product = lazy(() => import('./routes/product/product.component'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const pickedUser =
        user && (({ accessToken, email }) => ({ accessToken, email }))(user);

      console.log(setCurrentUser(pickedUser));
      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='search' element={<Search />} />
          <Route path='product/:id' element={<Product />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
