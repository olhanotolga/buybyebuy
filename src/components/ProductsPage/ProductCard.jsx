import { NavLink } from 'react-router';
import { useUserContext } from '../../context/UserContext';
import { useProductsContext } from '../../context/ProductsContext';
import { StyledProductCard } from './styles';
import { displayPrice } from '../../helpers/sanitizeData';
import { addNewItem, removeItem } from '../../helpers/cartHelpers';

const ProductCard = ({ idx, title, info, price, image }) => {
  const { userData } = useUserContext();
  const { cart, setCart } = useProductsContext();

  return (
    <StyledProductCard className='product-card'>
      <img className='product-card-image' src={image} alt={title} />
      <h2 className='product-card-title'>{title}</h2>
      <NavLink className='product-card-clickable' to={`${title}`}>
        {info} &amp; more...
      </NavLink>
      <span className='product-card-price'>{displayPrice(price)}&curren;</span>
      {userData?.username !== '' && (
        <div className='product-card-add-remove'>
          <span
            className='material-icons'
            onClick={() =>
              addNewItem(userData, cart, setCart, idx, title, price)
            }
          >
            add_circle_outline
          </span>
          <span
            className='material-icons'
            onClick={() => removeItem(userData, cart, setCart, idx)}
          >
            remove_circle_outline
          </span>
        </div>
      )}
    </StyledProductCard>
  );
};

export default ProductCard;
