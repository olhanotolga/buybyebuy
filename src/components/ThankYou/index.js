import React from 'react';
import {useHistory} from 'react-router-dom';
import Header from '../Header';
import ReplayIcon from '../ReplayIcon';
import StyledTY from './styles';

const ThankYou = () => {
	const history = useHistory();

	return (
		<StyledTY>
			<Header
				className='ty-header'
				title='Thank you!'>
				<p>You successfully passed a webshop simulation!</p>
				<button onClick={() => history.push('/')}>
					<span className='startagain'>start again?</span>
					<ReplayIcon />
				</button>
			</Header>
		</StyledTY>
	)
}

export default ThankYou;
