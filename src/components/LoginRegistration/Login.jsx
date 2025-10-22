import { useRef, useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../Header';
import { useUserContext, initialUserState } from '../../context/UserContext';
import { StyledLoginPage } from './styles';
import { loginErrorReducer } from '../../reducers/loginErrorReducer';
import { ACTION_TYPES } from '../../reducers/userReducer';
import { Button } from '../../styles/globalStyles';
import { initialUserState } from '../../data/userState';

const Login = () => {
  const { users, userData, dispatch: dispatchUser } = useUserContext();
  const [currentUser, setCurrentUser] = useState(() => {
    return userData.username && userData.password
      ? userData
      : initialUserState.userData;
  });
  const [error, dispatchError] = useReducer(loginErrorReducer, '');
  const focusField = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    focusField.current.focus();
  }, []);

  const handleInputChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };

  const handleInputError = (dispatcher) => {
    dispatchError(dispatcher);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (users[currentUser.username] === currentUser.password) {
      dispatchError('DISPLAY_NULL');
      dispatchUser({
        type: ACTION_TYPES.LOGGED_IN,
        payload: {
          username: currentUser.username,
        },
      });
      navigate('/products');
    } else if (currentUser.username === '' || currentUser.password === '') {
      handleInputError('DISPLAY_EMPTY');
    } else {
      handleInputError('DISPLAY_MISMATCH');
    }
  };

  const fillGuestUserData = () => {
    const adminUser = {
      username: 'admin',
      password: initialUserState.users['admin'],
    };
    setCurrentUser(adminUser);
  };

  return (
    <StyledLoginPage>
      <Header className='login-header' title='Have we met?' />

      <p onClick={() => fillGuestUserData()}>Use boss account</p>

      <form onSubmit={(e) => handleSubmit(e)}>
        {error && <p className='failure-message'>{error}</p>}

        <label htmlFor='usernameLogin'>Username</label>
        <input
          type='text'
          name='username'
          required
          placeholder='username'
          id='usernameLogin'
          value={currentUser.username}
          onChange={handleInputChange}
          ref={focusField}
        />
        <label htmlFor='passwordLogin'>Password</label>
        <input
          type='password'
          name='password'
          required
          placeholder='password'
          id='passwordLogin'
          value={currentUser.password}
          onChange={handleInputChange}
        />
        <Button>Log in</Button>
      </form>

      <p onClick={() => navigate('/register')}>Or sign up</p>
    </StyledLoginPage>
  );
};

export default Login;
