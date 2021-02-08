import React, {useContext} from 'react';
import MyContext from '../../context/MyContext';

const CartItem = ({className, title, amount, price, addRemove, idx}) => {
	const {cart, setCart, displayPrice} = useContext(MyContext);


	const addNewItem = () => {
		if (cart[idx]) {
			const newItem = {title: title, qty: cart[idx].qty + 1, price: price};
			setCart(prev => ({...prev,
				[idx]: newItem}));
		} else {
			const newItem = {title: title, qty: 1, price: price};
			setCart(prev => ({...prev,
				[idx]: newItem}));
		}
	}
	const removeItem = () => {
		if (cart[idx] && cart[idx].qty > 1) {
			const update = {...cart[idx], qty: cart[idx].qty - 1}
			setCart(prev => ({...prev, [idx]: update}))
		} else if (cart[idx] && cart[idx].qty === 1) {
			const newCart = {...cart};
			delete newCart[idx];
			setCart(newCart)
		}
	}

	return (
		<li className={className}>
			<span className='item-title'>
				{title}
			</span>
			
			<span className='item-price'>
				{displayPrice(price)}&curren;
			</span>

			<span className='item-amount'>
				<span className='times'>&times;</span>
				{amount}
			</span>
			
			{addRemove && 
			<div className='item-add-remove'>
				<span className="material-icons"
				onClick={() => addNewItem()}>add_circle_outline</span>
				<span className="material-icons"
				onClick={() => removeItem()}>remove_circle_outline</span>
			</div>}

			<span className='item-sum'>
				{displayPrice(amount * price)}&curren;
			</span>

		</li>
	)
}

export default CartItem;
