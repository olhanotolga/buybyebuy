import React from 'react';
import {useHistory} from 'react-router-dom';
import Header from '../Header';
// import '../../assets/css/NotFound.css';
import Styled404 from './styles';

const NotFound = () => {

	const history = useHistory();

	return (
		<Styled404>
			<Header title='404' />

			<section className='btns404'>
				<button onClick={() => history.goBack()}>Go back</button>
				<button onClick={() => history.push('/')}>Go home</button>
			</section>

		</Styled404>
	)
}

export default NotFound;
