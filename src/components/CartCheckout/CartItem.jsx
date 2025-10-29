import { useUserContext } from '../../context/UserContext';
import { useProductsContext } from '../../context/ProductsContext';
import {StylesForCartItem, StylesForCheckoutItem} from './styles';
import { displayPrice } from '../../helpers/sanitizeData';
import { addNewItem, removeItem } from '../../helpers/cartHelpers';


const CartItem = ({title, amount, price, addRemove, idx}) => {
	const { userData } = useUserContext();
	const { cart, setCart } = useProductsContext();

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
				onClick={() => addNewItem(userData, cart, setCart, idx, title, price)}>add_circle_outline</span>
			}

			<span className='item-amount'>
				<span className='times'>&times;</span>
				{amount}
			</span>
			
			{addRemove && 
				<span className="item-remove material-symbols-outlined"
				onClick={() => removeItem(userData, cart, setCart, idx)}>remove_circle_outline</span>
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
