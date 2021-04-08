import React, {useRef, useEffect, useContext, useState, useReducer} from 'react';
import {Redirect} from 'react-router-dom';
import Header from '../Header';
import MyContext from '../../context/MyContext';
import { signupErrorReducer } from '../../reducers/signupErrorReducer';


const Registration = () => {
	const {users, setUsers, userData, setUserData} = useContext(MyContext);
	const [error, dispatchError] = useReducer(signupErrorReducer, '');
	const [confirmPW, setConfirmPW] = useState('');
	const focusField = useRef();

	useEffect(() => {
		focusField.current.focus();
	}, []);

	const handleInputChange = (e) => {
		setUserData({...userData, [e.target.name]: e.target.value});
	}
	const handleInputError = (dispatcher) => {
		dispatchError(dispatcher);
		setUserData({username: '', password: ''});
		setConfirmPW('');
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (userData.password !== confirmPW) {
			return handleInputError('DISPLAY_MISMATCH');
		}
		if (userData.password === '') {
			return handleInputError('DISPLAY_EMPTY');
		}
		setUsers({...users, [userData.username]: userData.password});
		dispatchError('DISPLAY_NULL');
	}
	
	if (!error && error !== '') {
		return	<Redirect to={{
			pathname: '/products'
		}} />
	}

	return (
		<main className='registration-page'>
			<Header className='registration-header' title='Be a friend!' />
			
			<form className='registration-form'
			onSubmit={(e) => handleSubmit(e)}>

				{error && <p className='failure-message'>{error}</p>}

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
