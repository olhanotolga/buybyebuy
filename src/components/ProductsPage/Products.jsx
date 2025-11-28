import { useMemo } from 'react';
import { Link } from 'react-router';
import { useUserContext } from '../../context/UserContext';
import { useCartContext } from '../../context/CartContext';
import ProductCard from './ProductCard';
import Header from '../Header';
import Footer from '../Footer';
import { StyledProductsPage } from './styles';
import { calculateQuantity } from '../../helpers/cartHelpers';

const Products = ({ products }) => {
  const { userData } = useUserContext();
  const { cart } = useCartContext();

  const quantity = useMemo(() => {
    return calculateQuantity(cart);
  }, [cart]);

  return (
    <StyledProductsPage className='products-page'>
      <Header className='products-header' title='Products' icon='shopping_cart'>
        {userData.username !== '' && (
          <Link
            to={{
              pathname: '/cart',
            }}
          >
            {quantity}
          </Link>
        )}
        <aside aria-live='polite'>
          {userData.username === '' && (
            <p>
              <span className='material-symbols-outlined'>person_alert</span>
              Log in to purchase items
            </p>
          )}
        </aside>
      </Header>

      <section className='products-display'>
        {products &&
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                idx={product.id}
                title={product.title}
                info={product.info}
                price={product.price}
                image={product.image.src}
                description={product.description}
              />
            );
          })}
      </section>
      <Footer />
    </StyledProductsPage>
  );
};

export default Products;
