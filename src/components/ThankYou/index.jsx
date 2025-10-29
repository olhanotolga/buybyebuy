import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../styles/globalStyles';
import { useUserContext } from '../../context/UserContext';
import { useProductsContext } from '../../context/ProductsContext';
import Header from '../Header';
import ReplayIcon from './ReplayIcon';
import StyledTY from './styles';

const ThankYou = () => {
  const { resetUser } = useUserContext();
  const { resetCart } = useProductsContext();
  const navigate = useNavigate();

  useEffect(() => {
    resetUser();
    resetCart();
  }, []);

  return (
    <StyledTY>
      <Header className='ty-header' title='Thank you!'>
        <p>You successfully completed a webshop simulation!</p>
        <Button onClick={() => navigate('/')}>
          <span className='startagain'>start again?</span>
          <ReplayIcon />
        </Button>
      </Header>
    </StyledTY>
  );
};

export default ThankYou;
