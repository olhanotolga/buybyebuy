import React, {useRef, useEffect, useContext, useState} from 'react';
import {Redirect} from 'react-router-dom';
import Header from '../Header';
import MyContext from '../../context/MyContext';

const Registration = () => {
	const [pwMatch, setPwMatch] = useState('');
	const [confirmPW, setConfirmPW] = useState('');

	const {users, setUsers, userData, setUserData} = useContext(MyContext);

	const focusField = useRef();

	useEffect(() => {
		focusField.current.focus();
	}, []);

	const handleInputChange = (e) => {
		setUserData({...userData, [e.target.name]: e.target.value});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (userData.password === confirmPW) {
			setPwMatch('match');
			setUsers({...users, [userData.username]: userData.password})
		} else {
			setUserData({username: '', password: ''});
			setConfirmPW('');
			setPwMatch('miss');
		}
	}
	
	if (pwMatch === 'match') {
		return	<Redirect to={{
			pathname: '/products'
		}} />
	}

	return (
		<main className='registration-page'>
			<Header className='registration-header' title='Be a friend!' />
			
			<form className='registration-form'
			onSubmit={(e) => handleSubmit(e)}>

				{pwMatch === 'miss' && <p className='failure-message'>Passwords don't match. try again.</p>}

				<label htmlFor="usernameRegist">
						Username
				</label>
				<input
					type="text"
					name="username"
					id="usernameRegist"
					placeholder='username'
					value={userData.username}
					onChange={handleInputChange}
					ref={focusField}/>
				<label htmlFor="passwordRegist">
						Password
				</label>
				<input
					type="password"
					name="password"
					id="passwordRegist"
					placeholder='password'
					value={userData.password}
					onChange={handleInputChange}/>
				<label htmlFor="confirmPassword">
						Password again
				</label>
				<input
					type="password"
					name="confirmPW"
					id="confirmPassword"
					placeholder='password again'
					value={confirmPW}
					onChange={(e) => setConfirmPW(e.target.value)}/>
				<button>Sign up</button>
			</form>
		</main>
	)
}

export default Registration;
