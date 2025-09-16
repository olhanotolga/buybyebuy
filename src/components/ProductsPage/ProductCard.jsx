import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import MyContext from '../../context/MyContext';
import { StyledProductCard } from './styles';
import { displayPrice } from '../../helpers/sanitizeData';
import { addNewItem, removeItem } from '../../helpers/cartHelpers';

const ProductCard = ({ idx, title, info, price, image, description }) => {
  const { cart, setCart, userData } = useContext(MyContext);

  return (
    <StyledProductCard className='product-card'>
      <img className='product-card-image' src={image} alt={title} />
      <h2 className='product-card-title'>{title}</h2>
      <NavLink
        className='product-card-clickable'
        to={`${title}`}
        state={{
          title,
          price,
          image,
          description,
          idx,
        }}
      >
        {info} &amp; more...
      </NavLink>
      <span className='product-card-price'>{displayPrice(price)}&curren;</span>
      <div className='product-card-add-remove'>
        <span
          className='material-icons'
          onClick={() => addNewItem(userData, cart, setCart, idx, title, price)}
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
    </StyledProductCard>
  );
};

export default ProductCard;
