import styled from 'styled-components';

const StyledFooter = styled.footer`
	padding: 1rem 2rem;
	display: flex;
	justify-content: space-between;

	.logout-icon {
		cursor: pointer;

		&:hover {
			text-shadow: 0.07rem -0.03rem var(--contrast-one), -0.07rem 0.03rem var(--contrast-two);
			}
		&:active {
			transform: scale3d(1.15, 1.15, 1.15);
		}
	}
`;

export default StyledFooter;