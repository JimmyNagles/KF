import './App.css';
import NavBar from './Components/Nav/MyNavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Inventory from './pages/Inventory';
import Homevid from './Components/Grid/Homevid';


function App() {
  return (
    <Router>
    <div>
  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Inventory" component={Inventory} />
  
      </Switch>
    </div>
  </Router>
  );
}

export default App;
 