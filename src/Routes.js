import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Home from './components/Home';
import Login from './components/LoginRegistration/Login';
import Registration from './components/LoginRegistration/Registration';
import Products from './components/ProductsPage/Products';
import ProductDetails from './components/SingleProduct/';
import Cart from './components/CartCheckout/Cart';
import Checkout from './components/CartCheckout/Checkout';
import NotFound from './components/NotFound';
import ThankYou from './components/ThankYou';

const Routes = () => (
	<ThemeProvider theme={theme}>
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
	</ThemeProvider>
)

export default Routes;