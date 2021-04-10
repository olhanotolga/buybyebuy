import styled from 'styled-components';

export const StyledLoginPage = styled.main`
	background-color: var(--dark);
	color: var(--contrast-two);

	form {
		width: clamp(50%, 500px, 90%);
		margin: 15vh auto 2rem auto;
		display: flex;
		flex-direction: column;

		.failure-message {
			color: var(--contrast-two);
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
			border: 0.3rem solid var(--light);
			padding: 0.5rem 1rem;
			background-color: var(--dark);
			color: var(--contrast-two);
		}
		input::placeholder {
			color: var(--contrast-two);
			text-transform: uppercase;
		}
		button {
			background-color: var(--light);
			color: var(--dark);
		}
	}
	
	& > p {
		text-align: center;
		text-transform: uppercase;
		margin-bottom: auto;
		text-decoration: underline;
			text-underline-offset: 0.5rem;
		text-decoration-thickness: 0.3rem;
		cursor: pointer;
	}
`;

export const StyledRegistrationPage = styled(StyledLoginPage)`
	background-color: var(--darkgrey);
	
	form input {
		background-color: var(--darkgrey);
	}
`;