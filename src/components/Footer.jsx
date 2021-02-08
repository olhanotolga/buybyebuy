import React, {useContext, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import MyContext from '../context/MyContext';
import '../assets/css/Footer.css';

const Footer = ({className}) => {
	const {userData, reset, greetings, displayGreeting} = useContext(MyContext);
	
	const [address, setAddress] = useState('');

	const history = useHistory();

	const logOut = () => {
		if (userData.username) {
			reset();
			history.push('/login');
		}
	}

	useEffect(() => {
		const currGreeting = displayGreeting(greetings);
		setAddress(currGreeting);
	}, [])

	return (
		<footer className={className}>
			<span>{userData.username ? address + userData.username : 'not logged in'}</span>
			<span
				onClick={logOut}
				className="material-icons logout-icon">
					logout
			</span>
		</footer>
	)
}

export default Footer;
