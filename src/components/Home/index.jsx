import React from 'react';
import {Link} from 'react-router';
import LoginIcon from '../LoginRegistration/LoginIcon';
import Header from '../Header';
import StyledHome from './styles';

const Home = () => {
	return (
		<StyledHome>
			<Header
				className='homepage-header'
				title='Buybyebuy'
				subtitle='Shop away!'>
				<Link to='/login'>
					<LoginIcon />
				</Link>
			</Header>
		</StyledHome>
	)
}

export default Home;
