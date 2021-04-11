import React, { useEffect, useContext } from 'react';
import StyledHeader from './styles';
import MyContext from '../../context/MyContext';

const Header = ({className, title, subtitle, icon, children}) => {

	const {setQty, cart} = useContext(MyContext);

	useEffect(() => {
		setQty(
			cart && Object.values(cart).reduce((acc, item) => acc + item.qty, 0)
		)
	}, [cart, setQty])

	return (
		<StyledHeader className={`page-header ${className}`}>
			<h1>{title}</h1>

			{subtitle && <h2>{subtitle}</h2>}
			
			{icon && <span className="material-icons">
					{icon}
			</span>}

			{children && children}
		</StyledHeader>
	)
}

export default Header;
