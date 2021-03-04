import {BrowserRouter as Router, Route} from 'react-router-dom'

// Import Necessary Components
import Navbar from './components/Navbar'
import Index from './components/Index'
import AboutUs from './components/AboutUs'
import Contact from './components/ContactUs'
import Cart from './components/Cart'
import Faq from './components/Faq'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Route path= '/' exact component={Index}/>
      <Route path= '/about-us' exact component={AboutUs}/>
      <Route path= '/contact-us' exact component={Contact}/>
      <Route path= '/shopping-cart' exact component={Cart}/>
      <Route path= '/faq' exact component={Faq}/>
      <Footer />
    </Router>
  );
}

export default App;