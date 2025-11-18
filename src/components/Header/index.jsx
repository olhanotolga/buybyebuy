import StyledHeader from './styles';

const Header = ({ className, title, subtitle, icon, children }) => {
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
