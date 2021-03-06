import {BrowserRouter as Router, Route} from 'react-router-dom'

// Import Necessary CSS
import './style.css'
import './css/bootstrap.min.css'
import './css/font-awesome.min.css'
import './css/fontawesome-stars.css'
import './css/helper.css'
import './css/jquery-ui.min.css'
import './css/magnific-popup.css'
import './css/material-design-iconic-font.min.css'
import './css/meanmenu.css'
import './css/nice-select.css'
import './css/owl.carousel.min.css'
import './css/owl.video.play.png'
import './css/responsive.css'
import './css/slick.css'
import './css/venobox.css'

// Import Necessary Components
import Navbar from './components/bodycomponents/Navbar'
import Index from './components/store/Index'
import AboutUs from './components/store/AboutUs'
import Contact from './components/store/ContactUs'
import Products from './components/store/Products'
import Product from './components/store/ProductDetail'
import Cart from './components/store/Cart'
import Faq from './components/store/Faq'
import Login from './components/account/Login'
import Checkout from './components/payment/Checkout'
import Wishlist from './components/store/Wishlist'
import Footer from './components/bodycomponents/Footer'


function App() {
  return (
    <Router>
      <Navbar />
      <Route path= '/' exact component={Index}/>
      <Route path= '/about-us' exact component={AboutUs}/>
      <Route path= '/contact-us' exact component={Contact}/>
      <Route path= '/products' exact component={Products}/>
      <Route path= '/product-detail' exact component={Product}/>
      <Route path= '/shopping-cart' exact component={Cart}/>
      <Route path= '/faq' exact component={Faq}/>
      <Route path= '/checkout' exact component={Checkout}/>
      <Route path= '/wishlist' exact component={Wishlist}/>
      <Route path= '/account/login' exact component={Login}/>
      <Footer />
    </Router>
  );
}

export default App;