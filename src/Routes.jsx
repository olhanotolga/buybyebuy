import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
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

const Router = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Registration/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='thankyou' element={<ThankYou/>}/>
        <Route path='products'>
          <Route index element={<Products/>}/>
          <Route path=':product' element={<ProductDetails/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
        <Route path='404' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);


export default Router;
