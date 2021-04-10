import styled from 'styled-components';


// StyledCart
export const StyledCart = styled.main`

	background-color: var(--light);

	header {
		background-color: var(--dark);
		color: var(--contrast-three);
		
		.material-icons {
			color: var(--contrast-one);
		}
	}

	.cart-container {
		flex-grow: 1;
		background-color: var(--dark);
		color: var(--light);
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
	}


.link-back {
	color: inherit;
	text-transform: uppercase;
	text-underline-offset: 0.3rem;
	text-decoration-thickness: 0.15rem;
	padding-bottom: 1rem;
}


.cart-container button {
	color: var(--dark);
	margin-top: 2rem;
}


@media screen and (min-width: 400px) {
	.cart-container {
		margin: 2rem;
		padding: 2rem;
	}
}

@media screen and (min-width: 450px) {
	.cart-container .item {
		grid-template: auto / 1fr 1fr auto 4ch auto 1fr;
		gap: 0.5rem;
	}
	.cart-container .item-title,
	.cart-container .item-price,
	.cart-container .item-add,
	.cart-container .item-remove,
	.cart-container .item-sum {
		grid-column: span 1;
	}
	.cart-container .item-price {
		justify-self: center;
	}
	.cart-container .item.subtotal {
		grid-template: auto / repeat(2, 1fr);
	}
}
`;


// StyledCartItem

export const StyledCartItem = styled.li`
/* CART ITEMS */
.item {
	display: grid;
	justify-content: space-between;
	text-transform: uppercase;
	padding: 0.5rem;
}
.cart-container .item {
	border-bottom: 0.15rem solid var(--contrast-one);
	grid-template-rows: auto auto;
	grid-template-columns: auto 3ch auto 1fr;
	gap: 0.5rem;
}

.cart-container .item-title {
	grid-column: 1 / 4;
}
.cart-container .item-price {
	grid-column: 4 / -1;
	justify-self: end;
}
.cart-container .item-add {
	grid-column: 1 / 2;
}
.cart-container .item-remove {
	grid-column: 3 / 4;
}
.cart-container .item-sum {
	grid-column: -2 / -1;
	justify-self: end;
}

.cart-container .material-icons {
	color: var(--contrast-two);
}

.cart-container .item-amount,
.cart-container .item-price,
.cart-container .item-sum {
	color: var(--contrast-three);
}
.item-price,
.item-amount {
	justify-self: center;
}
.item-sum,
.summary-item-price {
	justify-self: end;
}
.cart-container .item-add,
.cart-container .item-remove {
	cursor: pointer;
}

.times {
	color: var(--darkgrey);
}

.cart-container .item.subtotal {
	grid-template: auto auto / 1fr;
	margin-top: auto;
}

.summary-item-title,
.summary-item-price {
	font-weight: bold;
}

.cart-container .summary-item-price {
	color: var(--contrast-three);
}

`;

// StyledCartSummaryItem
export const StyledCartSummaryItem = styled.li``;

// StyledCheckoutItem
export const StyledCheckout = styled.main`
.checkout-page {
	background-color: var(--contrast-one);
}

.checkout-header {
	background-color: var(--dark);
	color: var(--light);
}
.checkout-header .material-icons {
	color: var(--contrast-three);
}

.checkout-container {
	flex-grow: 1;
	background-color: var(--dark);
	color: var(--light);
	margin: 2rem 1rem;
	padding: 2rem 1rem;
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
	align-content: space-between;
}
.checkout-container > *:not(.checkout-container-header):not(button) {
	border-bottom: 0.15rem solid var(--light);
}

/* CART ITEMS */

.checkout-container .item {
	border-bottom: none;
	grid-template-columns: 1fr 1fr auto 1fr;
	gap: 0.5rem
}

.summary-item {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-content: space-between;
	text-transform: uppercase;
	padding: 0.5rem;
}

.checkout-container .item-amount,
.checkout-container .item-price,
.checkout-container .summary-item-price {
	color: var(--light);
}

.checkout-container button {
	background-color: var(--contrast-two);
}

@media screen and (min-width: 400px) {
	.checkout-container {
		margin: 2rem;
		padding: 2rem;
	}
}
`;

// StyledCheckoutSummaryItem
export const StyledCheckoutSummaryItem = styled(StyledCartSummaryItem)`

`;