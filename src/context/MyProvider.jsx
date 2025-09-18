import React, { useState } from 'react';
import MyContext from './MyContext';
import data from '../data/products.json';

const MyProvider = (props) => {
  // products-related data

  const [products, setProducts] = useState(data.products);

  // user-related data

  const users = {
    admin: 'iamtheboss',
    olhanotolga: 'bestpassword',
  };

  const [userData, setUserData] = useState({ username: '', password: '' });

  // shopping cart

  const [cart, setCart] = useState({});
  const [qty, setQty] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);

  // FUNCTIONS

  const reset = () => {
    setCart({});
    setQty(0);
    setSubtotal(0);
    setShipping(0);
    setTotal(0);
    setUserData({ username: '', password: '' });
  };

  return (
    <MyContext.Provider
      value={{
        products,
        setProducts,
        users,
        userData,
        setUserData,
        cart,
        setCart,
        qty,
        setQty,
        subtotal,
        setSubtotal,
        shipping,
        setShipping,
        total,
        setTotal,
        reset,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
