import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useUserContext } from '../../context/UserContext';
import { useProductsContext } from '../../context/ProductsContext';
import StyledFooter from './styles';
import { displayGreeting } from '../../helpers/greet';

const Footer = ({ className }) => {
  const navigate = useNavigate();
  const { userData, resetUser } = useUserContext();
  const { resetCart } = useProductsContext();

  const [address, setAddress] = useState('');

  useEffect(() => {
    const currGreeting = displayGreeting();
    setAddress(currGreeting);
  }, []);

  const logOut = () => {
    if (userData.username !== '') {
      resetUser();
      resetCart();
    }
  };
  const logIn = () => {
    if (userData.username === '') {
      navigate('/login');
    }
  };

  return (
    <StyledFooter
      className={className}
    >
      <span>
        {userData.username ? address + userData.username : 'not logged in'}
      </span>
        <button onClick={userData.username !== '' ? logOut : logIn} className='material-symbols-outlined logout-login-icon'>
        {userData.username !== '' ? 'logout' : 'login'}
      </button>
    </StyledFooter>
  );
};

export default Footer;
