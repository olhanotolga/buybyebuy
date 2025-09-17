import React from 'react';
import MyProvider from '../context/MyProvider';
import FetchData from '../FetchData';
import Router from '../Routes';

const BuyByeBuy = () => {
	return (
		<MyProvider>
			<FetchData />
			<Router />
		</MyProvider>
	)
}

export default BuyByeBuy;
