import React, { useContext } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Link, useHistory} from 'react-router-dom';
import MyContext from '../../context/MyContext';
import StyledProductPage from './styles';
import { Button } from '../../styles/globalStyles';
import { displayPrice } from '../../helpers/sanitizeData';
import { addNewItem } from '../../helpers/cartHelpers';


const ProductDetails = (props) => {
	
	const {products, qty, cart, setCart, userData} = useContext(MyContext);

	const history = useHistory();

	const displayedProduct = products.find(product => product.title[0] === props.match.params.product);
	
	if (products.length === 0) return null;

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
					onClick={() => addNewItem(userData, cart, setCart, idx, title, price)}>
						<span>Buy</span> 
						<span className='price'>{displayPrice(price)}&curren;</span>
					</Button>
				</div>
			</section>
			<Footer/>
		</StyledProductPage>
	)
}

export default ProductDetails;
