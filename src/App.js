
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import FAQs from './Pages/FAQs'
import Contact from './Pages/Contact'
import Sidebar from './Components/Sidebar'
import Media from 'react-media'

function App() {
  return (
    <>
      <Router>
        <Media query="(min-width: 500px)">
          {(matches) => {
            return matches ? <Sidebar /> : <Navbar />
          }}
        </Media>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/faqs" exact component={FAQs} />
          <Route path="/contact" exact component={Contact} />
        </Switch>

      </Router>
    </>
  );
}

export default App;
