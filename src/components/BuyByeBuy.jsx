import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import data from '../data/products.json';
import UserProvider from '../context/UserContext';
import CartProvider from '../context/CartContext';
import Router from '../Routes';
import ErrorBoundary from '../ErrorBoundary';

const BuyByeBuy = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <CartProvider>
            <Router products={data.products} />
          </CartProvider>
        </UserProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default BuyByeBuy;
