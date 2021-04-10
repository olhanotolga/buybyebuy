import styled from 'styled-components';

const StyledHome = styled.main`

	background-color: var(--contrast-three);
	color: var(--light);
	display: flex;
	justify-content: center;

	header {
		background-color: var(--dark);
		padding: 5rem 4rem 3rem 4rem;
		flex-direction: column;
		align-items: center;
		
		& > * {
			padding: 1rem;
		}
	}

	.login-icon-hp {
		width: 4rem;
		height: auto;
		fill: var(--light);
		cursor: pointer;
	}

	& .material-icons {
		font-size: 200%;
	}
`;

export default StyledHome;