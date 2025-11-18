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
import { calculateSubtotal } from '../../helpers/cartHelpers';

const Cart = () => {
  return <PrivateRoute component={CartComponent} redirectTo='/login' />;
};

const CartComponent = () => {
  const { cart } = useCartContext();

  const navigate = useNavigate();

  const subtotal = calculateSubtotal(cart);

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
          {cart && cart.length > 0 &&
            (cart).map((item) => {
              return (
                <StyledCartItem
                  key={item.id}
                  className='item'
                  title={item.title}
                  amount={item.qty}
                  price={item.price}
                  idx={item.id}
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
