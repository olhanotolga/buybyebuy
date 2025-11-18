import { createContext, useContext, useEffect, useReducer } from 'react';
import { CART_ACTION_TYPES, cartReducer } from '../reducers/cartReducer';

const LS_CART_KEY = 'bbbCart';

const CartContext = createContext(null);

export function useCartContext() {
  return useContext(CartContext);
}

function getInitialCartState() {
  try {
    const lsCart = localStorage.getItem(LS_CART_KEY);
    return lsCart ? JSON.parse(lsCart) : [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

function CartProvider({ children }) {
  const [cartState, dispatchCart] = useReducer(
    cartReducer,
    [],
    getInitialCartState
  );

  useEffect(() => {
    localStorage.setItem(LS_CART_KEY, JSON.stringify(cartState));
  }, [cartState]);

  function resetCart() {
    dispatchCart({
      type: CART_ACTION_TYPES.CART_RESET,
    });
  }

  return (
    <CartContext
      value={{
        cart: cartState,
        dispatchCart,
        resetCart,
      }}
    >
      {children}
    </CartContext>
  );
}

export default CartProvider;
