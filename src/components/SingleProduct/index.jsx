import React, { useContext } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Link, useHistory} from 'react-router-dom';
import MyContext from '../../context/MyContext';
import StyledProductPage from './styles';
import { Button } from '../../styles/globalStyles';
import Styled404 from '../NotFound/styles';

const ProductDetails = (props) => {
	
	const {products, qty, cart, setCart, displayPrice, userData} = useContext(MyContext);

	const history = useHistory();

	const displayedProduct = products.find(product => product.title[0] === props.match.params.product);
	
	if (products.length === 0) return (<Styled404/>)

	// The product is defined either by URL params or by the item clicked on the Products page:
	
	let title, description, image, price, idx;
	
	if (history.location.state) {
		title = history.location.state.title;
		description = history.location.state.description;
		image = history.location.state.image;
		price = history.location.state.price;
		idx = history.location.state.idx;
	} else {
		title = displayedProduct.title[0];
		description = displayedProduct.description[0];
		image = displayedProduct.image[0];
		price = displayedProduct.price[0];
		idx = displayedProduct.id;
	}
	
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

	return (
		<StyledProductPage>
			<Header
				className='product-header'
				title='Products'
				icon='shopping_cart'>
					{userData.username !== '' &&
						<Link to={{
							pathname: '/cart'
						}}>
							{qty}
						</Link>
					}
				</Header>
			
			<section className='product-page-info'>
				<img className='product-image' src={image} alt={title}/>
				<h2 className='product-title'>{title}</h2>
				<p className='product-description'>
					{description}
				</p>
				<div className='product-btns'>
					<Button className='back' onClick={() => history.goBack()}>Back</Button>
					<Button
					className='buy'
					onClick={() => addNewItem()}>
						<span>Buy</span> 
						<span className='price'>{displayPrice(price)}&curren;</span>
					</Button>
				</div>
			</section>
			<Footer className='product-footer' />
		</StyledProductPage>
	)
}

export default ProductDetails;
