import React, {useContext} from 'react';
import MyContext from '../../context/MyContext';
import { StyledSummaryItem } from './styles';

const SummaryItem = ({className, title, price}) => {

	const {displayPrice} = useContext(MyContext);
	
	return (
		<li	className={className}>
			<span className='summary-item-title'>{title}</span>
			<span className='summary-item-price'>{displayPrice(price)}&curren;</span>
		</li>
	)
}

export default SummaryItem;
