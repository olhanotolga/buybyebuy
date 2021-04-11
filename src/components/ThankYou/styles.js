import styled from 'styled-components';
import { PageMain } from '../../styles/globalStyles';

const StyledTY = styled(PageMain)`
	justify-content: center;

header {
	background-color: ${props => props.theme.colors.contrastThree};
	flex-direction: column;
	align-items: center;
	text-align: center;
	
	& > *:not(button) {
		padding: 1rem;
	}
	& p {
		font-size: calc(1rem + 1vmin);
		margin-bottom: 1rem;
		text-transform: uppercase;
	}

	& button {
		background-color: ${props => props.theme.colors.dark};
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 24ch;
		& > * {
			margin: 0.2rem 0.5rem;
		}
	}
	.startagain {
		font-size: calc(1rem + 1vmin);
		white-space: break-spaces;
		color: ${props => props.theme.colors.light};
	}
	& svg {
		width: calc(4rem + 3vmin);
			height: auto;
			fill: ${props => props.theme.colors.light};
	}
}
`;

export default StyledTY;