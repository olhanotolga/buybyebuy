import { useRef, useEffect, useState, useReducer } from 'react';
import { useNavigate } from 'react-router';
import Header from '../Header';
import { useUserContext } from '../../context/UserContext';
import { signupErrorReducer } from '../../reducers/signupErrorReducer';
import { ACTION_TYPES } from '../../reducers/userReducer';
import { StyledRegistrationPage } from './styles';
import { Button } from '../../styles/globalStyles';

const Registration = () => {
  const { userData, dispatch: dispatchUser } = useUserContext();
  const [currentUser, setCurrentUser] = useState({
    username: '',
    password: '',
    confirmPW: '',
  });
  const [error, dispatchError] = useReducer(signupErrorReducer, '');
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
    if (currentUser.username === '')
      return handleInputError('DISPLAY_EMPTY_UN');
    if (currentUser.password === '')
      return handleInputError('DISPLAY_EMPTY_PW');
    if (currentUser.password !== currentUser.confirmPW)
      return handleInputError('DISPLAY_MISMATCH');
    dispatchError('DISPLAY_NULL');
    dispatchUser({
      type: ACTION_TYPES.SIGNED_UP,
      payload: {
        username: currentUser.username,
        password: currentUser.password,
      },
    });
    navigate('/products');
  };

  return (
    <StyledRegistrationPage>
      <Header className='registration-header' title='Be a friend!' />

      <form className='registration-form' onSubmit={(e) => handleSubmit(e)}>
        {error && <p className='failure-message'>{error}</p>}

        <label htmlFor='usernameRegist'>Username</label>
        <input
          type='text'
          name='username'
          id='usernameRegist'
          placeholder='username'
          required
          value={currentUser.username}
          onChange={handleInputChange}
          ref={focusField}
        />
        <label htmlFor='passwordRegist'>Password</label>
        <input
          type='password'
          name='password'
          id='passwordRegist'
          placeholder='password'
          required
          value={currentUser.password}
          onChange={handleInputChange}
        />
        <label htmlFor='confirmPassword'>Password again</label>
        <input
          type='password'
          name='confirmPW'
          id='confirmPassword'
          placeholder='password again'
          value={currentUser.confirmPW}
          onChange={handleInputChange}
        />
        <Button>Sign up</Button>
      </form>
    </StyledRegistrationPage>
  );
};

export default Registration;
