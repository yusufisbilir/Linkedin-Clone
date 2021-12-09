//style
import './App.css';

//Npm packages
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
