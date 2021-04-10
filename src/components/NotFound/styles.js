import styled from 'styled-components';

const Styled404 = styled.main`
	justify-content: center;

	header {
		align-items: center;
		
		h1 {
			font-size: calc(4rem + 3vmin);
			padding-bottom: 1rem;
			border-bottom: 0.3rem solid var(--contrast-one);
			color: var(--light);
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
			background-color: var(--light);
			color: var(--dark);
			margin: 1rem;
			cursor: pointer;
		}
	}
`;

export default Styled404;