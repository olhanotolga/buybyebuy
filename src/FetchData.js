import {useContext, useEffect} from 'react';
import MyContext from './context/MyContext';

const FetchData = () => {
	const context = useContext(MyContext);
	const {products, setProducts, setParsedProducts} = context;
	
	useEffect(() => {
		const URI = process.env.REACT_APP_URI;

		const fetchProducts = async () => {
			const response = await fetch(URI);
			const results = await response.json();
			setProducts(results.feed.entry);
		}
		fetchProducts();
		
	}, [setProducts])

	useEffect(() => {
		// parse data fetched from the spreadsheet:

		const modProducts = products.map(product => {
			const id = product.title['$t'];
			const content = product.content['$t']; 
			const title = content && content.match(/(?<=title: ).+(?=, info:)/);
			const info = content && content.match(/(?<=, info: ).+(?=, description:)/);
			const description = content && content.match(/(?<=, description: ).+(?=, price: )/gm);
			const price = content && content.match(/(?<=, price: )[a-zA-Z0-9.]+/);
			const image = content && content.match(/(?<=, image: ).+$/);
			
			return {
				id,
				title,
				info,
				description,
				price,
				image
			}
		})
		setParsedProducts(modProducts);
		
	}, [products, setParsedProducts])
	
	return null;
}

export default FetchData;
