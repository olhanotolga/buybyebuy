import React from 'react';
import '../assets/css/Header.css';

const Header = ({className, title, subtitle, icon, children}) => {
	return (
		<header className={`page-header ${className}`}>
			<h1>{title}</h1>

			{subtitle && <h2>{subtitle}</h2>}
			
			{icon && <span className="material-icons">
					{icon}
			</span>}

			{children && children}
		</header>
	)
}

export default Header;
