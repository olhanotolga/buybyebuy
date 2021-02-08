import React from 'react';
import MyProvider from '../context/MyProvider';
import FetchData from '../FetchData';
import Routes from '../Routes';

const BuyByeBuy = () => {
	return (
		<MyProvider>
			<FetchData />
			<Routes />
		</MyProvider>
	)
}

export default BuyByeBuy;
