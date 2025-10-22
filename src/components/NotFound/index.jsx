import { useNavigate } from 'react-router';
import { Button } from '../../styles/globalStyles';
import Header from '../Header';
import Styled404 from './styles';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Styled404>
      <Header title='404' />

      <section className='btns404'>
        <Button onClick={() => navigate(-1)}>Go back</Button>
        <Button onClick={() => navigate('/')}>Go home</Button>
      </section>
    </Styled404>
  );
};

export default NotFound;
