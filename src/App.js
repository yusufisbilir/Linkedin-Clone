import { useEffect } from 'react';

//redux
import { getUserAuth } from './actions';
import { connect } from 'react-redux';

//style
import './App.css';

//Npm packages
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);
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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
