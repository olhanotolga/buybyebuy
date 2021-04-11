import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import MyContext from '../context/MyContext';

const PrivateRoute = ({path, component, redirectTo}) => {
	const { userData } = useContext(MyContext);

	return userData.username !== '' ? (
		<Route path={path} component={component}/>
	) : (
		<Redirect to={redirectTo}/>
	)
}

export default PrivateRoute;