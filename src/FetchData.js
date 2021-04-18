import {useContext, useEffect} from 'react';
import MyContext from './context/MyContext';
import { parseData } from './helpers/parseDataFromSheet';

const FetchData = () => {
	const context = useContext(MyContext);
	const {setProducts} = context;
	
	useEffect(() => {
		const URI = process.env.REACT_APP_URI;

		const fetchProducts = async () => {
			try {
				const response = await fetch(URI);
				const results = await response.json();

				const retrievedProducts = results.feed.entry;
				const parsedProducts = parseData(retrievedProducts);
				
				if (parsedProducts.length === 0) return <h1>NOT LOADED</h1>

				setProducts(parsedProducts);
			} catch(err) {
				console.log(err);
			}
		}
		fetchProducts();
		
	}, [setProducts])

	return null;
}

export default FetchData;
