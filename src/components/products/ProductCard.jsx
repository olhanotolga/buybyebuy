import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import MyContext from '../../context/MyContext';
import '../../assets/css/products/ProductCard.css';

const ProductCard = ({idx, title, info, price, image, description}) => {

	const {cart, setCart, displayPrice, userData} = useContext(MyContext);

	const addNewItem = () => {
		if (userData.username !== '') {
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
	}
	const removeItem = () => {
		if (userData.username !== '') {
			if (cart[idx] && cart[idx].qty > 1) {
				const update = {...cart[idx], qty: cart[idx].qty - 1}
				setCart(prev => ({...prev, [idx]: update}))
			} else if (cart[idx] && cart[idx].qty === 1) {
				const newCart = {...cart};
				delete newCart[idx];
				setCart(newCart)
			}
		}
	}

	return (
		<section className='product-card'>
			<img className='product-card-image' src={image} alt={title}/>
			<h2 className='product-card-title'>{title}</h2>
			<Link className='product-card-clickable' to={{
				pathname: `/products/${title}`,
				state: {
					title,
					price,
					image,
					description,
					idx
				}
			}}>{info} &amp; more...</Link>
			<span className='product-card-price'>{displayPrice(price)}&curren;</span>
			<div className='product-card-add-remove'>
				<span
					className="material-icons"
					onClick={() => addNewItem()}>
						add_circle_outline</span>
				<span
					className="material-icons"
					onClick={() => removeItem()}>
						remove_circle_outline</span>
			</div>
		</section>
	)
}

export default ProductCard;
