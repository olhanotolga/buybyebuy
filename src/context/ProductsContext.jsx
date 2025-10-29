import { createContext, useContext, useState } from 'react';
import data from '../data/products.json';

const ProductsContext = createContext(null);

export function useProductsContext() {
  return useContext(ProductsContext);
}

function ProductsProvider({ children }) {
  const [products, setProducts] = useState(() => {
    return data.products;
  });

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
    <ProductsContext
      value={{
        products,
        setProducts,
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
    </ProductsContext>
  );
}

export default ProductsProvider;
