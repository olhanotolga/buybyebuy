import { useCartContext } from '../../context/CartContext';
import { StylesForCartItem, StylesForCheckoutItem } from './styles';
import { displayPrice } from '../../helpers/sanitizeData';
import { CART_ACTION_TYPES } from '../../reducers/cartReducer';


const CartItem = ({title, amount, price, addRemove, idx}) => {
	const { dispatchCart } = useCartContext();

	return (
		<>
			<span className='item-title'>
				{title}
			</span>
			
			<span className='item-price'>
				{displayPrice(price)}&curren;
			</span>

			{addRemove && 
				<span className="item-add material-symbols-outlined"
				onClick={() => dispatchCart({
          type: CART_ACTION_TYPES.ITEM_INCREMENTED,
          payload: idx
        })}>add_circle_outline</span>
			}

			<span className='item-amount'>
				<span className='times'>&times;</span>
				{amount}
			</span>
			
			{addRemove && 
				<span className="item-remove material-symbols-outlined"
				onClick={() => dispatchCart({
          type: CART_ACTION_TYPES.ITEM_DECREMENTED,
          payload: idx
        })}>remove_circle_outline</span>
			}

			<span className='item-sum'>
				{displayPrice(amount * price)}&curren;
			</span>

		</>
	)
}


export const StyledCartItem = ({className, title, amount, price, idx, addRemove}) => {
	return (
		<StylesForCartItem>
			<CartItem
				className={className}
				title={title}
				amount={amount}
				price={price}
				idx={idx}
				addRemove={addRemove}
			/>
		</StylesForCartItem>
	)
}

export const StyledCheckoutItem = ({className, title, amount, price}) => {
	return (
		<StylesForCheckoutItem>
			<CartItem
				className={className}
				title={title}
				amount={amount}
				price={price}/>
		</StylesForCheckoutItem>
	)
}

export default CartItem;
