// function to parse data fetched from the spreadsheet:
export const parseData = (data) => {
	return data.map(product => {
		const id = product.title['$t'];
		const content = product.content['$t']; 
		const title = content && content.match(/(?:title: ).+(?=, info:)/)[0].replace('title: ', '');
		const info = content && content.match(/(?:, info: ).+(?=, description:)/)[0].replace(', info: ', '');
		const description = content && content.match(/(?:, description: ).+(?=, price: )/gm)[0].replace(', description: ', '');
		const price = content && content.match(/(?:, price: )[a-zA-Z0-9.]+/)[0].replace(', price: ', '');
		const image = content && content.match(/(?:, image: ).+$/)[0].replace(', image: ', '');
		
		const parsedProduct = {
			id,
			title,
			info,
			description,
			price,
			image
		}
		return parsedProduct;
	})
}

