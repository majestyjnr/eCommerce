import {BrowserRouter as Router, Route} from 'react-router-dom'

// Import Necessary Components
import Navbar from './components/Navbar'
import Index from './components/Index'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Route path= '/' exact component={Index}/>
      <Footer />
    </Router>
  );
}

export default App;