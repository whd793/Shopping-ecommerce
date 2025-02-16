import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './index.scss';

import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { UserProvider } from './contexts/user.context';
// import { CategoriesProvider } from './contexts/categories.context';
// import { CartProvider } from './contexts/cart.context';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { ToastProvider } from './contexts/toast.context';
import Toast from './components/toast/toast.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastProvider>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
          <div className='homepage'>
            <div className='blob'></div>
            <div className='blob2'></div>
            <App />
          </div>
        </BrowserRouter>
      </ToastProvider>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
