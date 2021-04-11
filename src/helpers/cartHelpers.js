export const addNewItem = (userObj, cartObj, cartSetter, itemIndex, itemTitle, itemPrice) => {
	if (userObj.username === '') return;

	if (cartObj[itemIndex]) {
		const newItem = {title: itemTitle, qty: cartObj[itemIndex].qty + 1, price: itemPrice};
		cartSetter(prev => ({...prev,
			[itemIndex]: newItem}));
	} else {
		const newItem = {title: itemTitle, qty: 1, price: itemPrice};
		cartSetter(prev => ({...prev,
			[itemIndex]: newItem}));
	}
}
export const removeItem = (userObj, cartObj, cartSetter, index) => {
	if (userObj.username === '') return;
	
	if (cartObj[index] && cartObj[index].qty > 1) {
		const update = {...cartObj[index], qty: cartObj[index].qty - 1}
		cartSetter(prev => ({...prev, [index]: update}))
	} else if (cartObj[index] && cartObj[index].qty === 1) {
		const newCart = {...cartObj};
		delete newCart[index];
		cartSetter(newCart)
	}
}