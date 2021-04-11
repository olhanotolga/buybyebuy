import styled from 'styled-components';
import { PageMain } from '../../styles/globalStyles';

const Styled404 = styled(PageMain)`
	justify-content: center;

	header {
		align-items: center;
		
		h1 {
			font-size: calc(4rem + 3vmin);
			padding-bottom: 1rem;
			border-bottom: 0.3rem solid ${props => props.theme.colors.contrastOne};
			color: ${props => props.theme.colors.light};
		}
	}

	.btns404 {
		padding: 4rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;

		button {
			width: 16ch;
			background-color: ${props => props.theme.colors.light};
			color: ${props => props.theme.colors.dark};
			margin: 1rem;
		}
	}
`;

export default Styled404;