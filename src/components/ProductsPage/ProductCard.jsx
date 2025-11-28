import { memo, useMemo } from 'react';
import { NavLink } from 'react-router';
import { useUserContext } from '../../context/UserContext';
import { useCartContext } from '../../context/CartContext';
import { StyledProductCard } from './styles';
import { displayPrice } from '../../helpers/sanitizeData';
import { CART_ACTION_TYPES } from '../../reducers/cartReducer';

const ProductCard = ({ idx, title, info, price, image }) => {
  const { userData } = useUserContext();
  const { cart, dispatchCart } = useCartContext();

  const isInCart = useMemo(() => {
    return Boolean(cart.find((item) => item.id === idx));
  }, [cart]);

  return (
    <StyledProductCard className='product-card'>
      <img
        className='product-card-image'
        alt={title}
        width='900'
        height='506'
        sizes='calc(22rem - 2 * 0.3rem)'
        srcSet={`${image.sources['436']} 1x, ${image.sources['900']} 2x`}
        loading='lazy'
      />
      <h2 className='product-card-title'>{title}</h2>
      <NavLink className='product-card-clickable' to={`${title}`}>
        {info} &amp; more...
      </NavLink>
      <span className='product-card-price'>{displayPrice(price)}&curren;</span>
      {userData?.username !== '' && (
        <div className='product-card-add-remove'>
          <span
            className='material-symbols-outlined'
            onClick={() =>
              isInCart
                ? dispatchCart({
                    type: CART_ACTION_TYPES.ITEM_INCREMENTED,
                    payload: idx,
                  })
                : dispatchCart({
                    type: CART_ACTION_TYPES.ITEM_ADDED,
                    payload: {
                      id: idx,
                      title,
                      qty: 1,
                      price,
                    },
                  })
            }
          >
            add_circle_outline
          </span>

          <span
            className={
              isInCart
                ? 'material-symbols-outlined'
                : 'disabled material-symbols-outlined'
            }
            onClick={() =>
              isInCart &&
              dispatchCart({
                type: CART_ACTION_TYPES.ITEM_DECREMENTED,
                payload: idx,
              })
            }
          >
            remove_circle_outline
          </span>
        </div>
      )}
    </StyledProductCard>
  );
};

export default memo(ProductCard);
