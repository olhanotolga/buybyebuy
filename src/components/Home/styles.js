import styled from 'styled-components';
import { PageMain } from '../../styles/globalStyles';

const StyledHome = styled(PageMain)`
  background-color: ${(props) => props.theme.colors.contrastThree};
  color: ${(props) => props.theme.colors.light};
  justify-content: center;

  header {
    background-color: ${(props) => props.theme.colors.dark};
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
    fill: ${(props) => props.theme.colors.light};
    cursor: pointer;

    &:hover {
      transform: translate(2px 2px);
      filter: drop-shadow(
          0.07rem -0.03rem ${(props) => props.theme.colors.contrastOne}
        )
        drop-shadow(
          -0.07rem 0.03rem ${(props) => props.theme.colors.contrastTwo}
        );
    }
    &:active {
      transform: scale3d(1.05, 1.05, 1.05);
    }
  }

  & .material-symbols-outlined {
    font-size: 200%;
  }
`;

export default StyledHome;
