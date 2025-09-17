import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import MyProvider from '../context/MyProvider';
import Router from '../Routes';

const BuyByeBuy = () => {
  return (
    <MyProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </MyProvider>
  );
};

export default BuyByeBuy;
