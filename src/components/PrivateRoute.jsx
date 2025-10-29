import { useNavigate } from 'react-router';
import { useUserContext } from '../context/UserContext';

const PrivateRoute = ({ component: Component, redirectTo }) => {
  const { userData } = useUserContext();
  const navigate = useNavigate();

  if (userData.username === '') {
    navigate(redirectTo);
  } else {
    return <Component />;
  }
};

export default PrivateRoute;
