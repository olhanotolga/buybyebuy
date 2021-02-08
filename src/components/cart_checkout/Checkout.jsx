import React, {useContext, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import CartItem from './CartItem';
import SummaryItem from './SummaryItem';
import MyContext from '../../context/MyContext';
import '../../assets/css/cart_checkout/Checkout.css';

const Checkout = () => {
	const {cart, subtotal, shipping, total, displayPrice, setTotal, reset} = useContext(MyContext);

	const history = useHistory();

	useEffect(() => {
		setTotal(subtotal + shipping);
	}, [setTotal, subtotal, shipping])

	const payAndExit = () => {
		history.push('/thankyou');
		reset();
	}

	return (
		<main className='checkout-page'>
			<Header
				className='checkout-header'
				title='pay time'
				icon='point_of_sale' />
			<section className="checkout-container">
				<div className='checkout-container-header'>
					<h2>Checkout</h2>
					<Link className='link-back' to='/cart'>Go back</Link>
				</div>
				<h3>Your order</h3>
				<ul className='checkout-items'>
					{cart && Object.entries(cart).map(item => {
						return <CartItem key={item[0]}
						className='item'
						title={item[1].title}
						amount={item[1].qty}
						price={item[1].price}/>
					}) }
				</ul>
				<ul className='checkout-summary'>
					<SummaryItem
						className='summary-item'
						title='subtotal:'
						price={displayPrice(subtotal)} />

					<SummaryItem
						className='summary-item'
						title='shipping:'
						price={shipping} />

					<SummaryItem
						className='summary-item'
						title='total:'
						price={displayPrice(total)} />
				</ul>
				<button onClick={payAndExit}>Pay</button>
			</section>
			<Footer />
		</main>
	)
}

export default Checkout;
