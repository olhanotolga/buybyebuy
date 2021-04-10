import React, {useContext} from 'react';
import MyContext from '../../context/MyContext';
import {StylesForCartSummaryItem, StylesForCheckoutSummaryItem} from './styles';

const SummaryItem = ({className, title, price}) => {

	const {displayPrice} = useContext(MyContext);
	
	return (
		<>
			<span className='summary-item-title'>{title}</span>
			<span className='summary-item-price'>{displayPrice(price)}&curren;</span>
		</>
	)
}


export const StyledCartSummaryItem = ({className, title, price}) => {
	return (
		<StylesForCartSummaryItem>
			<SummaryItem
				className={className}
				title={title}
				price={price}
			/>
		</StylesForCartSummaryItem>
	)
}

export const StyledCheckoutSummaryItem = ({className, title, price}) => {
	return (
		<StylesForCheckoutSummaryItem>
			<SummaryItem
				className={className}
				title={title}
				price={price}/>
		</StylesForCheckoutSummaryItem>
	)
}

