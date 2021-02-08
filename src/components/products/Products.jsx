import React, { useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import MyContext from '../../context/MyContext';
import ProductCard from './ProductCard';
import Header from '../Header';
import Footer from '../Footer';
import '../../assets/css/products/Products.css';

const Products = () => {

	const context = useContext(MyContext);
	const {parsedProducts, qty, setQty, cart} = context;

	useEffect(() => {
		setQty(
			cart && Object.values(cart).reduce((acc, item) => acc + item.qty, 0)
		)
	}, [cart, setQty])

	return (
		<main className='products-page'>
			<Header
				className='products-header'
				title='Products'
				icon='shopping_cart'>
					<Link to={{
						pathname: '/cart'
					}}>
					{qty}
					</Link>
			</Header>

			<section className='products-display'>
				{parsedProducts && parsedProducts.map(product => {
					return <ProductCard
						key={product.id}
						idx={product.id}
						title={product.title}
						info={product.info}
						price={product.price}
						image={product.image}
						description={product.description}
					/>
				})}
				
			</section>
			<Footer className='products-footer' />
		</main>
	)
}

export default Products;
