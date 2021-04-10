import styled from 'styled-components';

const StyledProductPage = styled.main`
	background-color: var(--darkgrey);

 header {
	background-color: var(--light);
	color: var(--dark);
	
		.material-icons {
			color: var(--dark);
		}
	}

	.product-page-info {
		flex-grow: 1;
		background-color: var(--light);
		color: var(--dark);
		margin: 2rem;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.product-image {
		width: 100%;
		height: min(20rem, 70vmin);
		object-fit: cover;
	}
	.product-title,
	.product-description {
		padding-top: 2rem;
	}
	
	.product-btns {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 2rem;
		
		button {
			width: 15ch;
			margin: 1rem 0.5rem;
			color: var(--light);
		}
		.back {
			background-color: var(--dark);
		}
		.buy {
			background-color: var(--contrast-two);
			display: flex;
			
			.price {
				margin-left: auto;
				color: var(--contrast-three);
			}
		}
	}

	footer {
		background-color: var(--light);
	}
`;

export default StyledProductPage;