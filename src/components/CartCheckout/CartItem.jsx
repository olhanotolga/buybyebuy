import React, {useContext} from 'react';
import MyContext from '../../context/MyContext';
import {StylesForCartItem, StylesForCheckoutItem} from './styles';


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
		<>
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

		</>
	)
}


export const StyledCartItem = ({className, title, amount, price, idx, addRemove}) => {
	return (
		<StylesForCartItem>
			<CartItem
				className={className}
				title={title}
				amount={amount}
				price={price}
				idx={idx}
				addRemove={addRemove}
			/>
		</StylesForCartItem>
	)
}

export const StyledCheckoutItem = ({className, title, amount, price}) => {
	return (
		<StylesForCheckoutItem>
			<CartItem
				className={className}
				title={title}
				amount={amount}
				price={price}/>
		</StylesForCheckoutItem>
	)
}

export default CartItem;
