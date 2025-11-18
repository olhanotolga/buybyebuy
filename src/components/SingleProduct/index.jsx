import { Link, useNavigate, useParams } from 'react-router';
import Header from '../Header';
import Footer from '../Footer';
import { useUserContext } from '../../context/UserContext';
import { useCartContext } from '../../context/CartContext';
import StyledProductPage from './styles';
import { Button } from '../../styles/globalStyles';
import { displayPrice } from '../../helpers/sanitizeData';
import { calculateQuantity } from '../../helpers/cartHelpers';
import { CART_ACTION_TYPES } from '../../reducers/cartReducer';
import NotFound from '../NotFound';

const ProductDetails = ({ products }) => {
  const params = useParams();
  const navigate = useNavigate();

  const { userData } = useUserContext();
  const { cart, dispatchCart } = useCartContext();

  const quantity = calculateQuantity(cart);

  if (products.length === 0) return null;

  // The product is defined either by URL params or by the item clicked on the Products page:

  const displayedProduct = products.find((product) => {
    return product.title === params.product;
  });

  // handle redirect if the product is not found

  if (!displayedProduct) {
    return <NotFound />;
  }

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
            {quantity}
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
                cart.find((item) => item.id === id)
                  ? dispatchCart({
                      type: CART_ACTION_TYPES.ITEM_INCREMENTED,
                      payload: id,
                    })
                  : dispatchCart({
                      type: CART_ACTION_TYPES.ITEM_ADDED,
                      payload: {
                        id,
                        title,
                        qty: 1,
                        price,
                      },
                    })
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
