import React from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Home from './components/Home';
import Login from './components/LoginRegistration/Login';
import Registration from './components/LoginRegistration/Registration';
import Products from './components/ProductsPage/Products';
import ProductDetails from './components/SingleProduct';
import Cart from './components/CartCheckout/Cart';
import Checkout from './components/CartCheckout/Checkout';
import NotFound from './components/NotFound';
import ThankYou from './components/ThankYou';
import PrivateRoute from './components/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, Component: Home },
      { path: 'login', Component: Login },
      { path: 'register', Component: Registration },
      {
        path: 'products',
        children: [
          { index: true, Component: Products },
          { path: ':product', Component: ProductDetails },
        ],
      },
      {
        path: 'cart',
        Component: Cart,
      },
      {
        path: 'checkout',
        Component: Checkout,
      },
      {
        path: 'thankyou',
        Component: ThankYou,
      },
      {
        path: '404',
        Component: NotFound,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);
const Routes = () => (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default Routes;
