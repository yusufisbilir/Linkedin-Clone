//style
import './App.css';

//Npm packages
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
