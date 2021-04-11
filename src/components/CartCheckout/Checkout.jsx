import React, {useContext, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import MyContext from '../../context/MyContext';
import { StyledCheckout } from './styles';
import { StyledCheckoutItem } from './CartItem';
import { StyledCheckoutSummaryItem } from './SummaryItem';
import { Button } from '../../styles/globalStyles';
import { displayPrice } from '../../helpers/sanitizeData';


const Checkout = () => {
	const {cart, subtotal, shipping, total, setTotal, reset} = useContext(MyContext);

	const history = useHistory();

	useEffect(() => {
		setTotal(subtotal + shipping);
	}, [setTotal, subtotal, shipping])

	const payAndExit = () => {
		history.push('/thankyou');
		reset();
	}

	return (
		<StyledCheckout>
			<Header
				className='checkout-header'
				title='pay time'
				icon='point_of_sale' />
			<section className="checkout-container">
				<div>
					<h2>Checkout</h2>
					<Link className='link-back' to='/cart'>Go back</Link>
				</div>
				<h3>Your order</h3>
				<ul className='checkout-items'>
					{cart && Object.entries(cart).map(item => {
						return <StyledCheckoutItem key={item[0]}
						className='item'
						title={item[1].title}
						amount={item[1].qty}
						price={item[1].price}/>
					}) }
				</ul>
				<ul className='checkout-summary'>
					<StyledCheckoutSummaryItem
						className='summary-item'
						title='subtotal:'
						price={displayPrice(subtotal)} />

					<StyledCheckoutSummaryItem
						className='summary-item'
						title='shipping:'
						price={shipping} />

					<StyledCheckoutSummaryItem
						className='summary-item'
						title='total:'
						price={displayPrice(total)} />
				</ul>
				<Button onClick={payAndExit}>Pay</Button>
			</section>
			<Footer />
		</StyledCheckout>
	)
}

export default Checkout;
