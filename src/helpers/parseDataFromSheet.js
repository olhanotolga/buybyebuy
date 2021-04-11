// function to parse data fetched from the spreadsheet:
export const parseData = (data) => {
	return data.map(product => {
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
}