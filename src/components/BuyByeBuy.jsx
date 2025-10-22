import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import MyProvider from '../context/MyProvider';
import Router from '../Routes';
import ErrorBoundary from '../ErrorBoundary';

const BuyByeBuy = () => {
  return (
    <ErrorBoundary>
    <MyProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </MyProvider>
    </ErrorBoundary>
  );
};

export default BuyByeBuy;
