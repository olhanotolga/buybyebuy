import React, {useContext, useRef, useEffect, useReducer} from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import Header from '../Header';
import MyContext from '../../context/MyContext';
import { StyledLoginPage } from './styles';
import { loginErrorReducer } from '../../reducers/loginErrorReducer';
import { Button } from '../../styles/globalStyles';

const Login = () => {
	const {users, userData, setUserData} = useContext(MyContext);
	const [error, dispatchError] = useReducer(loginErrorReducer, '');
	const history = useHistory();
	const focusField = useRef();

	useEffect(() => {
		focusField.current.focus();
	}, [])

	const handleInputChange = (e) => {
		setUserData({...userData, [e.target.name]: e.target.value});
	}

	const handleInputError = (dispatcher) => {
		dispatchError(dispatcher);
		setUserData({username: '', password: ''});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		
		if (users[userData.username] === userData.password) {
			dispatchError('DISPLAY_NULL');
		} else if (userData.username === '' || userData.password === '') {
			handleInputError('DISPLAY_EMPTY')
		} else {
			handleInputError('DISPLAY_MISMATCH')
		}
	}

	const fillGuestUserData = () => {
		setUserData({username: 'admin', password: 'iamtheboss'})
	}
	
	if (!error && error !== '') {
		return	<Redirect to={{
			pathname: '/products'
		}} />
	}

	return (
		<StyledLoginPage>
			<Header className='login-header' title='Have we met?' />

			<p onClick={() => fillGuestUserData() }>Use boss account</p>
			
			<form onSubmit={(e) => handleSubmit(e)}>
				{error && <p className='failure-message'>{error}</p>}

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
				<Button>Log in</Button>
			</form>

			<p onClick={() => history.push('/register') }>Or sign up</p>
			
		</StyledLoginPage>
	)
}

export default Login;
