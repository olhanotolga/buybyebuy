import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';

const MyProvider = (props) => {
	// products-related data
	const [products, setProducts] = useState([]);

	// user-related data
	const [users, setUsers] = useState({
		'admin': 'iamtheboss',
		'olhanotolga': 'bestpassword'
	})

	const [userData, setUserData] = useState({username: '', password: ''});

	// gtreeting messages:

	const greetings = ['hey', 'welcome', 'hey', 'whazzup', 'howdy', 'what\'s up', 'yo'];

	// shopping cart
	const [cart, setCart] = useState({});
	const [qty, setQty] = useState(0);
	const [subtotal, setSubtotal] = useState(0);
	const [shipping, setShipping] = useState(0);
	const [total, setTotal] = useState(0);


	useEffect(() => {
		setQty(
			cart && Object.values(cart).reduce((acc, item) => acc + item.qty, 0)
		)
	}, [cart, setQty])

	// FUNCTIONS

	const displayPrice = (num) => {
		let currentNum = Array.isArray(num) ? num[0] : num;

		currentNum = typeof(currentNum) === 'number' ? currentNum.toString(10) : currentNum;

		switch (true) {
			case currentNum.endsWith('000000000'):
				return currentNum.replace(/000000000$/, 'B');
			case currentNum.endsWith('000000'):
				return currentNum.replace(/000000$/, 'M');
			case currentNum.endsWith('000'):
				return currentNum.replace(/000$/, 'K');
			default:
				return Number(currentNum).toFixed(2);
		}
	}

	const displayGreeting = (array) => {
		const len = array.length;
		const random = Math.floor(Math.random() * len);
		const currGreeting = array[random][0].toUpperCase() + array[random].slice(1) + ', ';
		return currGreeting;
	}

	const reset = () => {
		setCart({});
		setQty(0);
		setSubtotal(0);
		setShipping(0);
		setTotal(0);
		setUserData({username: '', password: ''});
	}

	return (
		<MyContext.Provider value={{
			products, setProducts,
			users, setUsers,
			userData, setUserData,
			cart, setCart,
			qty, setQty,
			greetings, displayGreeting,
			subtotal, setSubtotal,
			shipping, setShipping,
			total, setTotal,
			displayPrice,
			reset
		}}>
			{props.children}
		</MyContext.Provider>
	)
}

export default MyProvider;