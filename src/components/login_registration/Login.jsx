import React, {useState, useContext, useRef, useEffect} from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import Header from '../Header';
import MyContext from '../../context/MyContext';
import '../../assets/css/login_registration/LoginRegister.css';

const Login = () => {
	const history = useHistory();

	const [loggedIn, setLoggedIn] = useState('');

	const {users, userData, setUserData} = useContext(MyContext);

	const focusField = useRef();

	useEffect(() => {
		focusField.current.focus();
	}, [])

	const handleInputChange = (e) => {
		setUserData({...userData, [e.target.name]: e.target.value});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(users[userData.username]);
		if (users[userData.username] === userData.password) {
			console.log('logged in!');
			setLoggedIn('success');
		} else {
			setUserData({username: '', password: ''});
			setLoggedIn('failure');
		}
	}
	
	if (loggedIn === 'success') {
		return	<Redirect to={{
			pathname: '/products'
		}} />
	}

	return (
		<main className='login-page'>
			<Header className='login-header' title='Have we met?' />

			
			<form className='login-form'
			onSubmit={(e) => handleSubmit(e)}>
				{loggedIn === 'failure' && <p className='failure-message'>Login failed. try again.</p>}

				<label htmlFor="usernameLogin">
						Username
				</label>
				<input
					type="text"
					name="username"
					placeholder='username'
					id="usernameLogin"
					value={userData.username}
					onChange={handleInputChange}
					ref={focusField}
					/>
				<label htmlFor="passwordLogin">
						Password
				</label>
				<input
					type="password"
					name="password"
					placeholder='password'
					id="passwordLogin"
					value={userData.password}
					onChange={handleInputChange}
					/>
				<button>Log in</button>
			</form>
			<p onClick={() => history.push('/register') }>Or sign up</p>
		</main>
	)
}

export default Login;
