import React from 'react';
import {useHistory} from 'react-router-dom';

const CartIcon = (props) => {
	const history = useHistory();

	return (
			<span className="material-icons"
			onClick={() => history.push('/cart')}>
					{props.icon}
			</span>
	)
}

export default CartIcon;
