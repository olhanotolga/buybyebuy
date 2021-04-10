import styled from 'styled-components';
import mask from '../../assets/mask.svg';

export const StyledProductsPage = styled.main`

	background-color: var(--light);
	color: var(--light);

	header {
		background-color: var(--dark);
	}

	.products-display {
		display: grid;
		grid-template: repeat(auto-fit, 20rem) / repeat(auto-fit, 20rem);
		grid-auto-columns: minmax(20rem, 1fr);
		grid-auto-rows: 20rem;
		justify-content: center;
		gap: 1rem;
		margin: 2rem;
	}

	footer {
		background-color: var(--dark);
	}
`;

export const StyledProductCard = styled.section`
	
	background-color: var(--dark);
	display: grid;
	grid-template: 1fr repeat(2, auto) / 1fr auto;
	padding: 1rem 0.3rem 2rem;
	align-items: center;

	& > *:not(img) {
		padding: 0.1rem 1.5rem;
	}

	.product-card-image {
		grid-area: 1 / 1 / 2 / 3;
		width: 100%;
		max-height: 13rem;
		height: fit-content;
		object-fit: cover;
		mask-image: url(${mask});
		mask-repeat: no-repeat;
	}
	.product-card-title {
		grid-area: 2 / 1 / 3 / 2;
	}
	.product-card-clickable {
		grid-area: 3 / 1 / 4 / 2;
		color: var(--light);
		color: var(--contrast-three);
		text-underline-offset: 0.1rem;
		text-decoration-color: var(--contrast-three);
		text-decoration-thickness: 0.15rem;
		font-weight: 300;
	}
	.product-card-price {
		grid-area: 2 / 2 / 3 / 3;
		justify-self: center;
		color: var(--contrast-one);
		font-weight: 800;
		font-size: 150%;
		justify-self: end;
	}
	.product-card-add-remove {
		grid-area: 3 / 2 / 4 / 3;
		justify-self: end;
		
		& > * {
			cursor: pointer;
			transition: 0.3s;
			
			&:active {
				transform: scale3d(1.05, 1.05, 1.05);
			}
		}
	}
`;