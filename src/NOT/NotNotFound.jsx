import React from 'react';
import {useHistory} from 'react-router-dom';
import Header from '../components/Header';
import '../assets/css/NotFound.css';

const NotFound = () => {

	const history = useHistory();

	return (
		<main className='not-found'>
			<Header className='not-found-header' title='404' />

			<section className='btns404'>
				<button onClick={() => history.goBack()}>Go back</button>
				<button onClick={() => history.push('/')}>Go home</button>
			</section>

		</main>
	)
}

export default NotFound;
