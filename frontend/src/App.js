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
import Navbar from './components/Navbar'
import Index from './components/Index'
import AboutUs from './components/AboutUs'
import Contact from './components/ContactUs'
import Shop from './components/Shop'
import Product from './components/ProductDetail'
import Cart from './components/Cart'
import Faq from './components/Faq'
import Login from './components/account/Login'
import Checkout from './components/Checkout'
import Wishlist from './components/Wishlist'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <Navbar />
      <Route path= '/' exact component={Index}/>
      <Route path= '/about-us' exact component={AboutUs}/>
      <Route path= '/contact-us' exact component={Contact}/>
      <Route path= '/shop' exact component={Shop}/>
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