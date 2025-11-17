import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router';
import Header from '../Header';
import Footer from '../Footer';
import PrivateRoute from '../PrivateRoute';
import { StyledCart } from './styles';
import { StyledCartItem } from './CartItem';
import { StyledCartSummaryItem } from './SummaryItem';
import { useCartContext } from '../../context/CartContext';
import { Button } from '../../styles/globalStyles';

const Cart = () => {
  return <PrivateRoute component={CartComponent} redirectTo='/login' />;
};

const CartComponent = () => {
  const { cart, setSubtotal, subtotal, setQty, setShipping } =
    useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (cart) {
      const quant = Object.entries(cart).reduce((acc, item) => {
        return acc + Number(item[1].qty);
      }, 0);
      setQty(quant);

      const subt = Object.entries(cart).reduce((acc, item) => {
        return acc + Number(item[1].price) * Number(item[1].qty);
      }, 0);
      setSubtotal(subt);
    }
  }, [cart, setSubtotal, setQty]);

  useEffect(() => {
    switch (true) {
      case subtotal === 0:
        setShipping(0);
        break;
      case subtotal >= 50:
        setShipping(0);
        break;
      default:
        setShipping(20);
    }
  }, [subtotal, setShipping]);

  return (
    <StyledCart>
      <Header className='cart-header' title='your cart' icon='shopping_cart' />

      <section className='cart-container'>
        <div>
          <h2>Your cart</h2>
          <Link className='link-back' to='/products'>
            Go Back
          </Link>
        </div>
        <ul>
          {cart &&
            Object.entries(cart).map((item) => {
              return (
                <StyledCartItem
                  key={item[0]}
                  className='item'
                  title={item[1].title}
                  amount={item[1].qty}
                  price={item[1].price}
                  idx={item[0]}
                  addRemove='true'
                />
              );
            })}

          <StyledCartSummaryItem
            className='item subtotal'
            title='subtotal:'
            price={subtotal}
          />
        </ul>
        <Button onClick={() => navigate('/checkout')}>Checkout</Button>
      </section>

      <Footer />
    </StyledCart>
  );
};

export default Cart;
