import { Link, useNavigate } from 'react-router';
import Header from '../Header';
import Footer from '../Footer';
import PrivateRoute from '../PrivateRoute';
import { useCartContext } from '../../context/CartContext';
import { StyledCheckout } from './styles';
import { StyledCheckoutItem } from './CartItem';
import { StyledCheckoutSummaryItem } from './SummaryItem';
import { Button } from '../../styles/globalStyles';
import { displayPrice } from '../../helpers/sanitizeData';
import { calculateSubtotal, calculateShipping } from '../../helpers/cartHelpers';

const Checkout = () => {
  return <PrivateRoute component={CheckoutComponent} redirectTo='/login' />;
};

const CheckoutComponent = () => {
  const { cart } = useCartContext();
  const navigate = useNavigate();

  const subtotal = calculateSubtotal(cart);
  const shipping = calculateShipping(subtotal);
  const total = subtotal + shipping;
  

  const payAndExit = () => {
    navigate('/thankyou');
  };

  return (
    <StyledCheckout>
      <Header
        className='checkout-header'
        title='pay time'
        icon='point_of_sale'
      />
      <section className='checkout-container'>
        <div>
          <h2>Checkout</h2>
          <Link className='link-back' to='/cart'>
            Go back
          </Link>
        </div>
        <h3>Your order</h3>
        <ul className='checkout-items'>
          {cart && cart.length > 0 &&
            (cart).map((item) => {
              return (
                <StyledCheckoutItem
                  key={item.id}
                  className='item'
                  title={item.title}
                  amount={item.qty}
                  price={item.price}
                />
              );
            })}
        </ul>
        <ul className='checkout-summary'>
          <StyledCheckoutSummaryItem
            className='summary-item'
            title='subtotal:'
            price={displayPrice(subtotal)}
          />

          <StyledCheckoutSummaryItem
            className='summary-item'
            title='shipping:'
            price={shipping}
          />

          <StyledCheckoutSummaryItem
            className='summary-item'
            title='total:'
            price={displayPrice(total)}
          />
        </ul>
        <Button onClick={payAndExit}>Pay</Button>
      </section>
      <Footer />
    </StyledCheckout>
  );
};

export default Checkout;
