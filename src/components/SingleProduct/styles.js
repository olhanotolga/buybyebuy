import styled from 'styled-components';
import { PageMain } from '../../styles/globalStyles';

const StyledProductPage = styled(PageMain)`
  background-color: ${(props) => props.theme.colors.darkgrey};

  header {
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.dark};

    .material-symbols-outlined {
      color: ${(props) => props.theme.colors.dark};
    }
  }

  .product-page-info {
    width: calc(100vw - 2rem);
    margin: auto;
    padding: 1rem;
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.dark};
    display: flex;
    flex-direction: column;
    align-items: center;

    .product-image {
      width: calc(100vw - 4rem);
      height: auto;
      object-fit: cover;
      aspect-ratio: 16 / 9;
    }

    .product-image-caption {      
      font-size: 0.8rem;
      align-self: flex-start;
      position: relative;
      top: -1.2rem;
      left: 0.2rem;
      padding-inline: 0.5rem;
      background-color: hsl(30deg 62.5% 90.59% / 63%);

      a {
        color: ${(props) => props.theme.colors.dark};
      }
    }

    @media screen and (min-width: 500px) {
      max-width: calc(500px - 2rem);
      .product-image {
        width: calc(500px - 4rem);
      }
    }
    @media screen and (min-width: 1500px) {
      max-width: calc(800px - 2rem);
      .product-image {
        width: calc(800px - 4rem);
      }
    }
  }

  .product-title,
  .product-description {
    padding-top: 1rem;
  }
  .price {
    margin-inline: auto;
    padding-top: 0.5rem;
    color: ${(props) => props.theme.colors.contrastTwo};
  }

  .product-btns {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    button {
      flex: 0 0 15ch;
      margin: 1rem 0.5rem;
      color: ${(props) => props.theme.colors.light};
    }
    .back {
      background-color: ${(props) => props.theme.colors.dark};
    }
    .buy {
      background-color: ${(props) => props.theme.colors.contrastTwo};
    }
  }

  footer {
    background-color: ${(props) => props.theme.colors.light};

    & > .logout-login-icon {
      color: ${(props) => props.theme.colors.dark};
    }
  }
`;

export default StyledProductPage;
