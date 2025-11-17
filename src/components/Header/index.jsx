import { useEffect } from 'react';
import StyledHeader from './styles';
import { useCartContext } from '../../context/CartContext';

const Header = ({ className, title, subtitle, icon, children }) => {
  const { setQty, cart } = useCartContext();

  useEffect(() => {
    setQty(
      cart && Object.values(cart).reduce((acc, item) => acc + item.qty, 0)
    );
  }, [cart, setQty]);

  return (
    <StyledHeader className={`page-header ${className}`}>
      <h1>{title}</h1>

      {subtitle && <h2>{subtitle}</h2>}

      {icon && <span className='material-symbols-outlined'>{icon}</span>}

      {children && children}
    </StyledHeader>
  );
};

export default Header;
