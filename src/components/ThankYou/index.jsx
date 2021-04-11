import React from 'react';
import {useHistory} from 'react-router-dom';
import { Button } from '../../styles/globalStyles';
import Header from '../Header';
import ReplayIcon from './ReplayIcon';
import StyledTY from './styles';

const ThankYou = () => {
	const history = useHistory();

	return (
		<StyledTY>
			<Header
				className='ty-header'
				title='Thank you!'>
				<p>You successfully completed a webshop simulation!</p>
				<Button onClick={() => history.push('/')}>
					<span className='startagain'>start again?</span>
					<ReplayIcon />
				</Button>
			</Header>
		</StyledTY>
	)
}

export default ThankYou;
