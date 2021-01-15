import './App.css';
import NavBar from './Components/Nav/MyNavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Contact" component={Contact} />
  
      </Switch>
    </div>
  </Router>
  );
}

export default App;
 