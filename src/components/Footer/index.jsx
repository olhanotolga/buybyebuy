import React, { useContext, useState, useEffect } from 'react';
import { redirect } from 'react-router';
import MyContext from '../../context/MyContext';
import StyledFooter from './styles';
import { displayGreeting } from '../../helpers/greet';

const Footer = ({ className }) => {
  const { userData, reset } = useContext(MyContext);

  const [address, setAddress] = useState('');

  useEffect(() => {
    const currGreeting = displayGreeting();
    setAddress(currGreeting);
  }, []);

  const logOut = () => {
    if (userData.username !== '') {
      reset();
      redirect('/login');
    }
  };

  return (
    <StyledFooter
      $isLoggedIn={userData.username !== '' ? true : false}
      className={className}
    >
      <span>
        {userData.username ? address + userData.username : 'not logged in'}
      </span>
      <span onClick={logOut} className='material-icons logout-icon'>
        logout
      </span>
    </StyledFooter>
  );
};

export default Footer;
