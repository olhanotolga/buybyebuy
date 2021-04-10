import React, {useContext} from 'react';
import MyContext from '../../context/MyContext';
import {StyledCartItem} from './styles';

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
		<StyledCartItem className={className}>
			<span className='item-title'>
				{title}
			</span>
			
			<span className='item-price'>
				{displayPrice(price)}&curren;
			</span>

			{addRemove && 
				<span className="item-add material-icons"
				onClick={() => addNewItem()}>add_circle_outline</span>
			}

			<span className='item-amount'>
				<span className='times'>&times;</span>
				{amount}
			</span>
			
			{addRemove && 
				<span className="item-remove material-icons"
				onClick={() => removeItem()}>remove_circle_outline</span>
			}

			<span className='item-sum'>
				{displayPrice(amount * price)}&curren;
			</span>

		</StyledCartItem>
	)
}

export default CartItem;
