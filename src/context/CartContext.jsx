import { createContext, useContext, useReducer } from 'react';
import { CART_ACTION_TYPES, cartReducer } from '../reducers/cartReducer';

const CartContext = createContext(null);

export function useCartContext() {
  return useContext(CartContext);
}

function getInitialCartState() {
  const lsCart = localStorage.getItem('bbb-cart');
  return lsCart ? JSON.parse(lsCart) : []
}

function CartProvider({ children }) {

  // shopping cart
  const [cartState, dispatchCart] = useReducer(
      cartReducer,
      [],
      // getInitialCartState
    );

  // FUNCTIONS

  function resetCart() {
    dispatchCart({
      type: CART_ACTION_TYPES.CART_RESET
    })
  };

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
