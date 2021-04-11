import styled from 'styled-components';
import { PageMain } from '../../styles/globalStyles';

export const StyledLoginPage = styled(PageMain)`
	background-color: ${props => props.theme.colors.dark};
	color: ${props => props.theme.colors.contrastTwo};
	justify-content: center;

	header {
		margin-bottom: auto;
	}

	form {
		width: clamp(50%, 500px, 90%);
		margin: 0 auto 2rem auto;
		display: flex;
		flex-direction: column;

		.failure-message {
			color: ${props => props.theme.colors.contrastTwo};
			text-transform: uppercase;
			text-align: center;
			margin-bottom: 2rem;
			cursor: default;
		}

		label {
			font-size: 1px;
		}

		input {
			margin-bottom: 2rem;
			border: 0.3rem solid ${props => props.theme.colors.light};
			padding: 0.5rem 1rem;
			background-color: ${props => props.theme.colors.dark};
			color: ${props => props.theme.colors.contrastTwo};
		}
		input::placeholder {
			color: ${props => props.theme.colors.contrastTwo};
			text-transform: uppercase;
		}
		button {
			background-color: ${props => props.theme.colors.light};
			color: ${props => props.theme.colors.dark};
		}
	}
	
	& > p {
		text-align: center;
		text-transform: uppercase;
		text-decoration: underline;
		text-underline-offset: 0.5rem;
		text-decoration-thickness: 0.3rem;
		cursor: pointer;
		margin-bottom: 2.5rem;

		&:last-of-type {
			margin-bottom: auto;
		}
	}
`;

export const StyledRegistrationPage = styled(StyledLoginPage)`
	background-color: ${props => props.theme.colors.darkgrey};

	header {
		margin-bottom: 0;
	}

	form {
		margin: auto;
	}
	
	form input {
		background-color: ${props => props.theme.colors.darkgrey};
	}
`;