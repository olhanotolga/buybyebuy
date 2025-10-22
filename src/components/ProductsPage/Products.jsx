import { Link } from 'react-router';
import { useUserContext } from '../../context/UserContext';
import { useProductsContext } from '../../context/ProductsContext';
import ProductCard from './ProductCard';
import Header from '../Header';
import Footer from '../Footer';
import { StyledProductsPage } from './styles';

const Products = () => {
  const { userData } = useUserContext();
  const { products, qty } = useProductsContext();

  return (
    <StyledProductsPage className='products-page'>
      <Header className='products-header' title='Products' icon='shopping_cart'>
        {userData.username !== '' && (
          <Link
            to={{
              pathname: '/cart',
            }}
          >
            {qty}
          </Link>
        )}
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
                image={product.image}
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
