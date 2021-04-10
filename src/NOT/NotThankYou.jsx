import React from 'react';
import {useHistory} from 'react-router-dom';
import Header from '../components/Header';
import ReplayIcon from '../components/ReplayIcon';
import '../assets/css/ThankYou.css';

const ThankYou = () => {
	const history = useHistory();

	return (
		<main className="ty-page">
			<Header
				className='ty-header'
				title='Thank you!'>
				<p>You successfully passed a webshop simulation!</p>
				<button onClick={() => history.push('/')}>
					<span className='startagain'>start again?</span>
					<ReplayIcon />
				</button>
			</Header>
		</main>
	)
}

export default ThankYou;
