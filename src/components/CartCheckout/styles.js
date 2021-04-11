import styled from 'styled-components';
import { PageMain } from '../../styles/globalStyles';

// CART
export const StyledCart = styled(PageMain)`
	background-color: ${props => props.theme.colors.light};

	header {
		background-color: ${props => props.theme.colors.dark};
		color: ${props => props.theme.colors.contrastThree};
		
		.material-icons {
			color: ${props => props.theme.colors.contrastOne};
		}
	}

	section {
		flex-grow: 1;
		background-color: ${props => props.theme.colors.dark};
		color: ${props => props.theme.colors.light};
		margin: 2rem 1rem;
		padding: 2rem 1rem;
		display: flex;
		flex-direction: column;
		
		div {
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			
			h2 {
				margin-bottom: 2rem;
			}
		}
		
		ul {
			display: flex;
			flex-direction: column;
			flex-grow: 1;
		}

		button {
			color: ${props => props.theme.colors.dark};
			margin-top: 2rem;
			padding: 1rem 2rem;
		}

		.link-back {
			color: inherit;
			text-transform: uppercase;
			text-underline-offset: 0.3rem;
			text-decoration-thickness: 0.15rem;
			padding-bottom: 1rem;
		}

	}
	@media screen and (min-width: 400px) {
		section {
			margin: 2rem;
			padding: 2rem;
		}
	}

`;


// CART: ITEM
export const StylesForCartItem = styled.li`
	display: grid;
	justify-content: space-between;
	text-transform: uppercase;
	padding: 0.5rem;

	border-bottom: 0.15rem solid ${props => props.theme.colors.contrastOne};
	grid-template-rows: auto auto;
	grid-template-columns: auto 3ch auto 1fr;
	gap: 0.5rem;

	.item-title {
		grid-column: 1 / 4;
	}
	.item-price {
		grid-column: 4 / -1;
		color: ${props => props.theme.colors.light};
	}
	.item-add {
		grid-column: 1 / 2;
	}
	.item-remove {
		grid-column: 3 / 4;
	}
	.item-sum {
		grid-column: -2 / -1;
		justify-self: end;
	}
	.item-amount {
		justify-self: center;
	}

	.material-icons {
		color: ${props => props.theme.colors.contrastTwo};
		cursor: pointer;
		&:active {
			transform: scale3d(1.15, 1.15, 1.15);
		}
	}

	.item-amount,
	.item-sum {
		color: ${props => props.theme.colors.contrastThree};
	}

	.times {
		color: ${props => props.theme.colors.darkgrey};
	}

	.item.subtotal {
		grid-template: auto auto / 1fr;
		justify-items: center;
		margin-top: auto;
	}

	@media screen and (min-width: 400px) {
		.item-sum,
		.summary-item-price {
			justify-self: end;
		}
	}

	@media screen and (min-width: 450px) {
		grid-template: auto / 1fr 1fr auto 4ch auto 1fr;
		gap: 0.5rem;

		.item-title,
		.item-price,
		.item-add,
		.item-remove,
		.item-sum {
			grid-column: span 1;
		}
		.item-price {
			justify-self: center;
		}
		.item.subtotal {
			grid-template: auto / repeat(2, 1fr);
		}
	}
`;

// CART: SUMMARY
export const StylesForCartSummaryItem = styled.li`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-content: space-between;
	text-transform: uppercase;
	padding: 0.5rem;

	.summary-item-title,
	.summary-item-price {
		font-weight: bold;
	}

	.summary-item-price {
		color: ${props => props.theme.colors.contrastThree};
		justify-self: end;
	}
`;


// CHECKOUT
export const StyledCheckout = styled(StyledCart)`
	background-color: ${props => props.theme.colors.contrastOne};

	header {
		color: ${props => props.theme.colors.light};

		.material-icons {
			color: ${props => props.theme.colors.contrastThree};
		}
	}

	section {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		align-content: space-between;

		& > *:not(.checkout-container-header):not(button) {
			border-bottom: 0.15rem solid ${props => props.theme.colors.light};
		}

		button {
			background-color: ${props => props.theme.colors.contrastTwo};
		}
	}

`;


// CHECKOUT: ITEM
export const StylesForCheckoutItem = styled(StylesForCartItem)`
	border-bottom: none;
	grid-template-columns: 1fr auto 1fr;
	gap: 0.5rem;

	.item-title {
		grid-column: 1 / 2;
	}
	.item-price {
		grid-column: 3;
		color: ${props => props.theme.colors.light};
	}
	.item-amount {
		grid-row: 1;
		grid-column: 2 / 3;
	}
	.item-sum {
		grid-row: 2;
		grid-column: 3;
	}
	.item-price,
	.item-sum {
		justify-self: end;
	}
	.item-amount,
	.item-price {
		color: ${props => props.theme.colors.light};
	}

	@media screen and (min-width: 450px) {
		grid-template-columns: 1fr auto 1fr 1fr;

		.item-sum {
			grid-row: 1;
			grid-column: 4;
		}
	}

`;

// CHECKOUT: SUMMARY
export const StylesForCheckoutSummaryItem = styled(StylesForCartSummaryItem)`
	.summary-item-price {
		color: ${props => props.theme.colors.light};
	}
`;
