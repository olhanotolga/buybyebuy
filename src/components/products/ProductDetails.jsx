import React, { useContext, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Link, useHistory} from 'react-router-dom';
import '../../assets/css/products/ProductDetails.css';
import MyContext from '../../context/MyContext';

const ProductDetails = () => {
	const history = useHistory();
	const {title, description, image, price, idx} = history.location.state;

	const {qty, cart, setCart, setQty, displayPrice, userData} = useContext(MyContext);

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

	useEffect(() => {
		setQty(
			cart && Object.values(cart).reduce((acc, item) => acc + item.qty, 0)
		)
	}, [cart, setQty])

	return (
		<main className='product-details-page'>
			<Header
				className='product-header'
				title='Products'
				icon='shopping_cart'>
					<Link to={{
						pathname: '/cart'
					}}>
					{qty}
					</Link>
				</Header>
			
			<section className='product-page-info'>
				<img className='product-image' src={image} alt={title}/>
				<h2 className='product-title'>{title}</h2>
				<p className='product-description'>
					{description}
				</p>
				<div className='product-btns'>
					<button className='back' onClick={() => history.goBack()}>Back</button>
					<button
					className='buy'
					onClick={() => addNewItem()}>
						<span>Buy</span> 
						<span className='price'>{displayPrice(price)}&curren;</span>
					</button>
				</div>
			</section>
			<Footer className='product-footer' />
		</main>
	)
}

export default ProductDetails;
