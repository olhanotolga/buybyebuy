import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login_registration/Login';
import Registration from './components/login_registration/Registration';
import Products from './components/products/Products';
import ProductDetails from './components/products/ProductDetails';
import Cart from './components/cart_checkout/Cart';
import Checkout from './components/cart_checkout/Checkout';
import NotFound from './components/NotFound';
import ThankYou from './components/ThankYou';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/login' component={Login}/>
			<Route path='/register' component={Registration}/>
			<Route path='/products' exact component={Products}/>
			<Route path='/products/:product' exact component={ProductDetails}/>
			<Route path='/cart' component={Cart}/>
			<Route path='/checkout' component={Checkout}/>
			<Route path='/thankyou' component={ThankYou}/>
			{/* 404 page */}
			<Route component={NotFound}/>
		</Switch>
	</BrowserRouter>
)

export default Routes;