import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  h1 {
    text-shadow: 0.07rem -0.03rem ${(props) => props.theme.colors.contrastOne},
      -0.07rem 0.03rem ${(props) => props.theme.colors.contrastTwo};
    letter-spacing: 1px;
    font-size: calc(1rem + 3vmin);
  }

  .material-symbols-outlined {
    font-size: calc(1rem + 3vmin);
    margin-left: auto;
  }

  a:not(.homepage-header a) {
    color: inherit;
    text-decoration: none;
    padding: 0.3rem 0.75rem;
    border: 0.15rem solid;
    border-color: inherit;
    border-radius: 50%;

    &:hover {
      box-shadow: 0.07rem -0.03rem ${(props) => props.theme.colors.contrastOne},
        -0.07rem 0.03rem ${(props) => props.theme.colors.contrastTwo};
    }
    &:active {
      transform: scale3d(1.15, 1.15, 1.15);
    }
  }
`;

export default StyledHeader;
