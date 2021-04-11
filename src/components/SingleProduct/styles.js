import styled from 'styled-components';
import { PageMain } from '../../styles/globalStyles';

const StyledProductPage = styled(PageMain)`
	background-color: ${props => props.theme.colors.darkgrey};

 header {
	background-color: ${props => props.theme.colors.light};
	color: ${props => props.theme.colors.dark};
	
		.material-icons {
			color: ${props => props.theme.colors.dark};
		}
	}

	.product-page-info {
		flex-grow: 1;
		background-color: ${props => props.theme.colors.light};
		color: ${props => props.theme.colors.dark};
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
			color: ${props => props.theme.colors.light};
		}
		.back {
			background-color: ${props => props.theme.colors.dark};
		}
		.buy {
			background-color: ${props => props.theme.colors.contrastTwo};
			display: flex;
			
			.price {
				margin-left: auto;
				color: ${props => props.theme.colors.contrastThree};
			}
		}
	}

	footer {
		background-color: ${props => props.theme.colors.light};
	}
`;

export default StyledProductPage;