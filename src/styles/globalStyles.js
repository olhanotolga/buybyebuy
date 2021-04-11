import styled from 'styled-components';

export const Button = styled.button`
	padding: 1rem 2rem;
	font-family: 'Archivo Black', sans-serif;
	font-size: inherit;
	border: none;
	text-transform: uppercase;
	cursor: pointer;
	transition: 0.3s;
		&:hover {
			transform: translate(2px 2px);
			box-shadow: 0.07rem -0.03rem ${props => props.theme.colors.contrastOne}, -0.07rem 0.03rem ${props => props.theme.colors.contrastTwo};
		}
		&:active {
			transform: scale3d(1.05, 1.05, 1.05);
		}
`;

export const PageMain = styled.main`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;