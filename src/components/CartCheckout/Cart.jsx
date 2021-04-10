import React, { useContext, useEffect } from 'react';
import {useHistory, Link} from 'react-router-dom';
import Header from '../Header';
import CartItem from './CartItem';
import SummaryItem from './SummaryItem';
import Footer from '../Footer';
import { StyledCart } from './styles';
import MyContext from '../../context/MyContext';

const Cart = () => {
	const {cart, setSubtotal, subtotal, setQty, setShipping} = useContext(MyContext);

	const history = useHistory();

	useEffect(() => {
		if (cart) {
			const quant = Object.entries(cart).reduce((acc, item) => {
				return acc + Number(item[1].qty)}, 0)
			setQty(quant);

			const subt = Object.entries(cart).reduce((acc, item) => {
				return acc + Number(item[1].price) * Number(item[1].qty)}, 0)
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
	}, [subtotal, setShipping])
	

	return (
		<StyledCart>
			<Header
				className='cart-header'
				title='products'
				icon='shopping_cart' />

			<section className='cart-container'>
				<div>
					<h2>Your cart</h2>
					<Link className='link-back' to='/products'>Go Back</Link>
				</div>
				<ul>
					{cart && Object.entries(cart).map(item => {
						return <CartItem key={item[0]}
						className='item'
						title={item[1].title}
						amount={item[1].qty}
						price={item[1].price}
						idx={item[0]}
						addRemove='true' />
					}) }

					<SummaryItem
						className='item subtotal'
						title='subtotal:'
						price={subtotal} />
				</ul>
				<button
				onClick={() => history.push('/checkout')}
				>Checkout</button>
			</section>

			<Footer />
		</StyledCart>
	)
}

export default Cart;
