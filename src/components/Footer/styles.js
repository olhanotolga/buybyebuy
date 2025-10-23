import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;

  ${(props) =>
    `.logout-login-icon {
			cursor: pointer;
      border: none;
      background-color: ${props.theme.colors.dark};
      color: ${props.theme.colors.light};

			&:hover {
				text-shadow: 0.07rem -0.03rem ${props.theme.colors.contrastOne}, -0.07rem 0.03rem ${props.theme.colors.contrastTwo};
			}
			&:active {
				transform: scale3d(1.15, 1.15, 1.15);
			}
		}`}
`;

export default StyledFooter;
