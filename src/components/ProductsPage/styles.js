import styled from 'styled-components';
import mask from '../../assets/mask.svg';
import { PageMain } from '../../styles/globalStyles';

export const StyledProductsPage = styled(PageMain)`
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.light};

  header {
    background-color: ${(props) => props.theme.colors.dark};
  }

  aside {
    position: absolute;
    bottom: -1.5rem;

    p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background-color: var(--contrast-three);
      border: 0.3rem solid var(--contrast-two);
      padding: 0.2rem 0.5rem;
      color: var(--dark);

      .material-symbols-outlined {
        font-size: 1.5rem;
      }
    }
  }

  .products-display {
    display: grid;
    grid-template: repeat(auto-fit, 22rem) / repeat(auto-fit, 22rem);
    grid-auto-columns: minmax(22rem, 1fr);
    grid-auto-rows: 22rem;
    justify-content: center;
    gap: 1rem;
    margin: 2rem;
  }

  footer {
    background-color: ${(props) => props.theme.colors.dark};

    & > .logout-login-icon {
      color: ${(props) => props.theme.colors.light};
    }
  }
`;

export const StyledProductCard = styled.section`
  background-color: ${(props) => props.theme.colors.dark};
  display: grid;
  grid-template: 1fr repeat(2, auto) / 1fr auto;
  padding: 1rem 0.3rem 2rem;
  align-items: center;

  & > *:not(img) {
    padding: 0.1rem 1.5rem;
  }

  .product-card-image {
    grid-area: 1 / 1 / 2 / 3;
    width: 100%;
    max-height: 13rem;
    height: fit-content;
    object-fit: cover;
    mask-image: url(${mask});
    mask-repeat: no-repeat;
  }
  .product-card-title {
    grid-area: 2 / 1 / 3 / 2;
  }
  .product-card-clickable {
    grid-area: 3 / 1 / 4 / 2;
    color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.contrastThree};
    text-underline-offset: 0.1rem;
    text-decoration-color: ${(props) => props.theme.colors.contrastThree};
    text-decoration-thickness: 0.15rem;
    font-weight: 300;
  }
  .product-card-price {
    grid-area: 2 / 2 / 3 / 3;
    justify-self: center;
    color: ${(props) => props.theme.colors.contrastOne};
    font-weight: 800;
    font-size: 150%;
    justify-self: end;
  }
  .product-card-add-remove {
    grid-area: 3 / 2 / 4 / 3;
    justify-self: end;

    & > * {
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        text-shadow: 0.07rem -0.03rem ${(props) => props.theme.colors.contrastOne},
          -0.07rem 0.03rem ${(props) => props.theme.colors.contrastTwo};
      }
      &:active {
        transform: scale3d(1.15, 1.15, 1.15);
      }
    }
  }
`;
