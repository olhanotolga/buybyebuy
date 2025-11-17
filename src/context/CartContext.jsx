import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function useCartContext() {
  return useContext(CartContext);
}

function CartProvider({ children }) {
  // shopping cart
  const [cart, setCart] = useState({});
  const [qty, setQty] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);

  // FUNCTIONS

  const resetCart = () => {
    setCart({});
    setQty(0);
    setSubtotal(0);
    setShipping(0);
    setTotal(0);
  };

  return (
    <CartContext
      value={{
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
        resetCart,
      }}
    >
      {children}
    </CartContext>
  );
}

export default CartProvider;
