import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import UserProvider from '../context/UserContext';
import ProductsProvider from '../context/ProductsContext';
import Router from '../Routes';
import ErrorBoundary from '../ErrorBoundary';

const BuyByeBuy = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <ProductsProvider>
            <Router />
          </ProductsProvider>
        </UserProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default BuyByeBuy;
