import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/index";
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>  
        </Route>
      </Switch>
    </Router>
  
  )
}

export default App;
