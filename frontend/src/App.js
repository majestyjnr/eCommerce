import {BrowserRouter as Router, Route} from 'react-router-dom'

// Import Necessary Components
import Navbar from './components/Navbar'
import Index from './components/Index'
import Contact from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Route path= '/' exact component={Index}/>
      <Route path= '/about-us' exact component={Contact}/>
      <Route path= '/contact-us' exact component={Contact}/>
      <Footer />
    </Router>
  );
}

export default App;