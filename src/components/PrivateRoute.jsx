import React, { useContext } from 'react';
import { useNavigate } from "react-router";
import MyContext from '../context/MyContext';

const PrivateRoute = ({ component: Component, redirectTo }) => {
  const { userData } = useContext(MyContext);
  const navigate = useNavigate();

  if (userData.username === '') {
    navigate(redirectTo)
  } else {
    return <Component/>

  }
  
;
};

export default PrivateRoute;
