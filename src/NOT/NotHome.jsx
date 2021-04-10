import React from 'react';
import {Link} from 'react-router-dom';
import LoginIcon from '../login_registration/LoginIcon';
import Header from '../Header';
import '../assets/css/Home.css';

const Home = () => {
	return (
		<main className="homepage">
			<Header
				className='homepage-header'
				title='Buybyebuy'
				subtitle='Shop away!'>
				<Link to='/login'>
					<LoginIcon />
				</Link>
			</Header>
		</main>
	)
}

export default Home;
