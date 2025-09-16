import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../styles/globalStyles';
import MyContext from '../../context/MyContext';
import Header from '../Header';
import ReplayIcon from './ReplayIcon';
import StyledTY from './styles';

const ThankYou = () => {
  const { reset } = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    reset();
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
