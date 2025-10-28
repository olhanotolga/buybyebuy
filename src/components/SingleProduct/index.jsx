import { useParams } from 'react-router';
import Header from '../Header';
import Footer from '../Footer';
import { Link, useNavigate } from 'react-router';
import { useUserContext } from '../../context/UserContext';
import { useProductsContext } from '../../context/ProductsContext';
import StyledProductPage from './styles';
import { Button } from '../../styles/globalStyles';
import { displayPrice } from '../../helpers/sanitizeData';
import { addNewItem } from '../../helpers/cartHelpers';
import NotFound from '../NotFound';

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { userData } = useUserContext();
  const { products, qty, cart, setCart } = useProductsContext();

  if (products.length === 0) return null;

  const displayedProduct = products.find((product) => {
    return product.title === params.product;
  });

  // handle redirect if the product is not found

  if (!displayedProduct) {
    return <NotFound />;
  }

  // The product is defined either by URL params or by the item clicked on the Products page:

  const { title, description, image, price, id } = displayedProduct;

  return (
    <StyledProductPage>
      <Header className='product-header' title='Products' icon='shopping_cart'>
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

      <section className='product-page-info'>
        <img className='product-image' src={image} alt={title} />
        <h2 className='product-title'>{title}</h2>
        <p className='product-description'>{description}</p>
        <div className='product-btns'>
          <Button className='back' onClick={() => navigate('/products')}>
            Back
          </Button>
          {userData?.username !== '' && (
            <Button
              className='buy'
              onClick={() =>
                addNewItem(userData, cart, setCart, id, title, price)
              }
            >
              <span>Buy</span>
              <span className='price'>{displayPrice(price)}&curren;</span>
            </Button>
          )}
        </div>
      </section>
      <Footer />
    </StyledProductPage>
  );
};

export default ProductDetails;
