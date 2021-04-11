import React from 'react';
import {useHistory} from 'react-router-dom';
import { Button } from '../../styles/globalStyles';
import Header from '../Header';
// import '../../assets/css/NotFound.css';
import Styled404 from './styles';

const NotFound = () => {

	const history = useHistory();

	return (
		<Styled404>
			<Header title='404' />

			<section className='btns404'>
				<Button onClick={() => history.goBack()}>Go back</Button>
				<Button onClick={() => history.push('/')}>Go home</Button>
			</section>

		</Styled404>
	)
}

export default NotFound;
